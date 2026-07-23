import { createClient } from "npm:@supabase/supabase-js@2";

const cors = {
  "access-control-allow-origin": "*",
  "access-control-allow-headers": "authorization, apikey, content-type, x-client-info",
  "access-control-allow-methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
};
const json = (value: unknown, status = 200) => new Response(JSON.stringify(value), { status, headers: { ...cors, "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
const clean = (value = "") => decode(String(value)).replace(/<!\[CDATA\[|\]\]>/g, "").replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const decode = (value = "") => value.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(Number.parseInt(n, 16))).replace(/&(amp|quot|apos|lt|gt|nbsp);/gi, (_, n) => ({ amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " } as Record<string, string>)[n.toLowerCase()] || _);
const tag = (block: string, names: string[]) => names.map((name) => block.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, "i"))?.[1]).find(Boolean) || "";
const attr = (block: string, tagName: string, name: string) => block.match(new RegExp(`<${tagName}\\b[^>]*\\b${name}=["']([^"']+)["'][^>]*>`, "i"))?.[1] || "";
async function stableId(value: string) { const hash = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(value)); return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 14); }
function normalize(item: Record<string, any>): Record<string, any> {
  const summary = clean(String(item.summary || "")).slice(0, 620);
  const parsed = Date.parse(String(item.published || ""));
  return { ...item, title: clean(String(item.title || "")).slice(0, 260), summary: summary || "Kaynak bu içerik için kısa açıklama paylaşmadı.", published: Number.isFinite(parsed) ? new Date(parsed).toISOString() : "", readingMinutes: Math.max(1, Math.min(18, Math.round((summary.split(/\s+/).length || 90) / 180))) };
}
async function parseFeed(xml: string, source: Record<string, string>) {
  const blocks = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi), ...xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/gi)].map((match) => match[1]).slice(0, 30);
  return Promise.all(blocks.map(async (block) => {
    const title = clean(tag(block, ["title"]));
    const url = clean(tag(block, ["link"])) || attr(block, "link", "href") || clean(tag(block, ["guid", "id"]));
    return normalize({ id: await stableId(url || `${source.url}:${title}`), engine: source.kind || "rss", source: source.label || "RSS", title, url, summary: tag(block, ["description", "summary", "content:encoded", "content"]), published: tag(block, ["pubDate", "published", "updated", "dc:date"]), image: attr(block, "media:content", "url") || attr(block, "media:thumbnail", "url") || attr(block, "enclosure", "url") });
  })).then((items) => items.filter((item) => item.title && item.url));
}
function checkedUrl(value: string) {
  const url = new URL(value);
  const host = url.hostname.toLowerCase();
  if (url.protocol !== "https:" || url.username || url.password || (url.port && url.port !== "443")) throw new Error("Kaynak yalnızca standart HTTPS adresi olabilir");
  if (host === "localhost" || host.endsWith(".local") || host.endsWith(".internal") || /^(0|10|127|169\.254|192\.168|172\.(1[6-9]|2\d|3[01]))\./.test(host) || host === "::1") throw new Error("Yerel ağ adresleri kaynak olarak kullanılamaz");
  return url;
}
async function getText(url: string, accept = "application/rss+xml,application/atom+xml,text/xml,text/plain,*/*") {
  const response = await fetch(url, { headers: { accept, "user-agent": "JourneyOS/0.3" }, signal: AbortSignal.timeout(12_000), redirect: "follow" });
  if (!response.ok) throw new Error(`${new URL(url).hostname} ${response.status}`);
  return response.text();
}
async function getJson(url: string) { return JSON.parse(await getText(url, "application/json")); }
function score(item: Record<string, unknown>, interests: Array<Record<string, unknown>>) {
  const haystack = `${item.title} ${item.summary}`.toLocaleLowerCase("tr");
  const matching = interests.filter((interest) => [interest.label, ...((interest.keywords as string[]) || [])].filter(Boolean).some((term) => String(term).length > 2 && haystack.includes(String(term).toLocaleLowerCase("tr"))));
  const interestScore = matching.reduce((sum, interest) => sum + Number(interest.intensity || 3) * 8, 0);
  const ageHours = item.published ? Math.max(0, (Date.now() - Date.parse(String(item.published))) / 3_600_000) : 168;
  const freshness = Math.max(0, 34 - Math.log2(ageHours + 1) * 5);
  const trust = ({ academic: 24, finance: 21, youtube: 17, news: 16, social: 10, rss: 14 } as Record<string, number>)[String(item.engine)] || 12;
  return { ...item, score: Math.round(Math.min(100, 16 + interestScore + freshness + trust)), matchedInterests: matching.map((i) => i.label), reason: matching.length ? `${matching.slice(0, 2).map((i) => i.label).join(" ve ")} ilgi alanınla eşleşiyor.` : "Seçtiğin kaynaklardan güncel bir içerik." };
}
async function feed(input: Record<string, any>) {
  const interests = (input.interests || []).filter((i: any) => i?.label && i.active !== false).slice(0, 20);
  const engines = { news: true, finance: true, academic: true, youtube: true, rss: true, social: false, hackernews: true, ...(input.engines || {}) };
  const jobs: Array<[string, Promise<any[]>]> = [];
  if (engines.news) jobs.push(["news", Promise.allSettled(interests.slice(0, 3).map(async (i: any) => { const url = `https://news.google.com/rss/search?q=${encodeURIComponent(i.label)}&hl=tr&gl=TR&ceid=TR:tr`; return parseFeed(await getText(url), { label: "Google News", kind: "news", url }); })).then((r) => r.flatMap((x) => x.status === "fulfilled" ? x.value : []))]);
  if (engines.academic) jobs.push(["academic", getJson(`https://api.openalex.org/works?search=${encodeURIComponent(interests.slice(0, 4).map((i: any) => i.label).join(" ") || "technology society")}&filter=from_publication_date:2023-01-01&sort=relevance_score:desc&per-page=12`).then(async (data) => Promise.all((data.results || []).map(async (work: any) => normalize({ id: await stableId(work.id), engine: "academic", source: work.primary_location?.source?.display_name || "OpenAlex", title: work.display_name, summary: work.abstract_inverted_index ? Object.entries(work.abstract_inverted_index).flatMap(([word, positions]: any) => positions.map((position: number) => [position, word])).sort((a: any, b: any) => a[0] - b[0]).map((e: any) => e[1]).join(" ") : "Akademik künye doğrulandı; özet sağlayıcı tarafından paylaşılmadı.", url: work.doi || work.primary_location?.landing_page_url || work.id, published: work.publication_date, openAccess: Boolean(work.open_access?.is_oa) })) ))]);
  if (engines.finance && input.symbols?.length) jobs.push(["finance", Promise.allSettled(input.symbols.slice(0, 5).map(async (symbol: string) => { const data = await getJson(`https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(symbol)}&newsCount=6&quotesCount=1`); return Promise.all((data.news || []).map(async (news: any) => normalize({ id: await stableId(news.uuid || news.link), engine: "finance", source: news.publisher || "Yahoo Finance", title: news.title, summary: "Piyasa veya şirket gelişmesi. Ayrıntıyı asıl kaynaktan doğrulayabilirsin.", url: news.link, published: news.providerPublishTime ? new Date(news.providerPublishTime * 1000).toISOString() : "", symbol: symbol.toUpperCase() }))); })).then((r) => r.flatMap((x) => x.status === "fulfilled" ? x.value : []))]);
  if (engines.hackernews) jobs.push(["hackernews", getJson("https://hacker-news.firebaseio.com/v0/topstories.json").then(async (ids) => Promise.all((ids || []).slice(0, 20).map(async (id: number) => { const story = await getJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`); return normalize({ id: `hn-${id}`, engine: "news", source: "Hacker News", title: story.title, summary: "Teknoloji topluluğunda öne çıkan güncel bağlantı.", url: story.url || `https://news.ycombinator.com/item?id=${id}`, published: new Date(story.time * 1000).toISOString() }); })))]);
  const custom = (input.sources || []).filter((s: any) => s.enabled !== false && engines[s.kind || "rss"] !== false).slice(0, 12);
  if (custom.length) jobs.push(["custom", Promise.allSettled(custom.map(async (source: any) => { const url = checkedUrl(source.url); return parseFeed(await getText(url.href), { ...source, url: url.href }); })).then((r) => r.flatMap((x) => x.status === "fulfilled" ? x.value : []))]);
  const settled = await Promise.allSettled(jobs.map(([, promise]) => promise));
  const errors = settled.flatMap((result, index) => result.status === "rejected" ? [{ engine: jobs[index][0], message: result.reason?.message || "Kaynak alınamadı" }] : []);
  const seen = new Set<string>();
  const scoring = [...interests, ...(input.symbols || []).map((symbol: string) => ({ label: symbol.toUpperCase(), keywords: [symbol.toUpperCase()], intensity: 5 }))];
  const items = settled.flatMap((r) => r.status === "fulfilled" ? r.value : []).filter((item) => { const key = item.url || item.title; if (seen.has(key)) return false; seen.add(key); return true; }).map((item) => score(item, scoring)).sort((a, b) => b.score - a.score).slice(0, 48);
  return { items, errors, generatedAt: new Date().toISOString(), activeEngines: Object.entries(engines).filter(([, enabled]) => enabled).map(([name]) => name) };
}
async function recommendations(input: Record<string, any>) {
  const query = input.query || "artificial intelligence economy energy";
  const [oa, cr] = await Promise.allSettled([getJson(`https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=from_publication_date:2022-01-01&sort=relevance_score:desc&per-page=8`), getJson(`https://api.crossref.org/works?query=${encodeURIComponent(query)}&filter=from-pub-date:2022-01-01&rows=6`)]);
  const items: any[] = [];
  if (oa.status === "fulfilled") items.push(...(oa.value.results || []).map((w: any) => ({ id: w.id, type: "Akademik çalışma", format: "Makale", source: w.primary_location?.source?.display_name || "OpenAlex", title: w.display_name, url: w.doi || w.id, published: w.publication_date, citations: w.cited_by_count || 0, openAccess: Boolean(w.open_access?.is_oa), summary: "Künye ve erişim durumu OpenAlex üzerinden doğrulandı.", trust: 92, novelty: 80 })));
  if (cr.status === "fulfilled") items.push(...(cr.value.message?.items || []).map((w: any) => ({ id: w.DOI, type: "Akademik kayıt", format: "Makale", source: w["container-title"]?.[0] || "Crossref", title: w.title?.[0] || w.DOI, url: w.URL, citations: w["is-referenced-by-count"] || 0, openAccess: false, summary: clean(w.abstract || "Kaynak künyesi Crossref üzerinden doğrulandı."), trust: 90, novelty: 75 })));
  return { items: items.slice(0, 12).map((item) => ({ ...item, match: Math.min(99, Math.round(item.trust * .65 + item.novelty * .35)), why: item.openAccess ? "Konu yakınlığı ve tam metin erişimi nedeniyle öne çıktı." : "Kaynak güveni ve konu yakınlığı nedeniyle seçildi." })), generatedAt: new Date().toISOString(), providers: ["OpenAlex", "Crossref"] };
}
function abstractFromIndex(index: Record<string, number[]> | null | undefined) {
  if (!index) return "";
  return Object.entries(index).flatMap(([word, positions]) => positions.map((position) => [position, word] as const)).sort((a, b) => a[0] - b[0]).map((entry) => entry[1]).join(" ");
}
async function academic(input: Record<string, any>) {
  const query = String(input.query || "artificial intelligence economy").slice(0, 240);
  const data = await getJson(`https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=from_publication_date:2022-01-01&sort=relevance_score:desc&per-page=18`);
  const items = (data.results || []).map((work: any) => {
    const doi = String(work.doi || "").replace(/^https?:\/\/doi\.org\//i, "");
    const location = work.best_oa_location || work.primary_location || {};
    return {
      id: work.id, title: work.display_name,
      authors: (work.authorships || []).slice(0, 8).map((entry: any) => entry.author?.display_name).filter(Boolean),
      journal: location.source?.display_name || work.primary_location?.source?.display_name || "OpenAlex",
      year: work.publication_year, published: work.publication_date, doi,
      citations: work.cited_by_count || 0,
      abstract: abstractFromIndex(work.abstract_inverted_index) || "Sağlayıcı bu çalışma için özet paylaşmadı.",
      openAccess: Boolean(work.open_access?.is_oa), access: work.open_access?.is_oa ? "Açık erişim" : "Özet erişimi",
      url: work.doi || location.landing_page_url || work.id,
      fullTextUrl: work.best_oa_location?.pdf_url || (work.open_access?.is_oa ? location.landing_page_url : ""),
    };
  });
  return { items, generatedAt: new Date().toISOString(), provider: "OpenAlex" };
}
async function portfolio(symbol: string) {
  const normalizedSymbol = symbol.toUpperCase();
  const [chartResult, newsResult] = await Promise.allSettled([
    getJson(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(normalizedSymbol)}?range=6mo&interval=1d`),
    getJson(`https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(normalizedSymbol)}&newsCount=10&quotesCount=1`),
  ]);
  if (chartResult.status === "rejected") throw chartResult.reason;
  const data = chartResult.value;
  const chart = data.chart?.result?.[0]; if (!chart) throw new Error(data.chart?.error?.description || "Piyasa verisi bulunamadı");
  const quote = chart.indicators?.quote?.[0] || {}; const closes = chart.indicators?.adjclose?.[0]?.adjclose || quote.close || [];
  const points = (chart.timestamp || []).map((time: number, i: number) => ({ date: new Date(time * 1000).toISOString().slice(0, 10), open: quote.open?.[i], high: quote.high?.[i], low: quote.low?.[i], close: closes[i], volume: quote.volume?.[i] })).filter((p: any) => Number.isFinite(p.close));
  const latest = points.at(-1); const previous = points.at(-2) || latest; if (!latest) throw new Error("Piyasa verisi boş döndü");
  const news = newsResult.status === "fulfilled" ? await Promise.all((newsResult.value.news || []).slice(0, 8).map(async (item: any) => ({ id: await stableId(item.uuid || item.link || item.title), title: clean(item.title), source: item.publisher || "Yahoo Finance", url: item.link, published: item.providerPublishTime ? new Date(item.providerPublishTime * 1000).toISOString() : "", type: "ŞİRKET / PİYASA" }))) : [];
  const quoteMeta = newsResult.status === "fulfilled" ? newsResult.value.quotes?.[0] || {} : {};
  const marketTimestamp = chart.meta?.regularMarketTime ? new Date(chart.meta.regularMarketTime * 1000).toISOString() : `${latest.date}T00:00:00.000Z`;
  return {
    symbol: normalizedSymbol, name: quoteMeta.longname || quoteMeta.shortname || chart.meta?.longName || chart.meta?.shortName || normalizedSymbol,
    price: chart.meta?.regularMarketPrice || latest.close,
    change: ((latest.close - previous.close) / previous.close) * 100,
    currency: chart.meta?.currency || "USD", asOf: marketTimestamp, fetchedAt: new Date().toISOString(),
    marketState: quoteMeta.marketState || chart.meta?.marketState || "UNKNOWN", exchange: quoteMeta.exchange || chart.meta?.exchangeName || "",
    dayLow: quoteMeta.regularMarketDayLow || chart.meta?.regularMarketDayLow, dayHigh: quoteMeta.regularMarketDayHigh || chart.meta?.regularMarketDayHigh,
    volume: quoteMeta.regularMarketVolume || chart.meta?.regularMarketVolume || latest.volume, points: points.slice(-120), news,
    provider: "Yahoo Finance",
    freshnessNote: "Ücretsiz sağlayıcının son piyasa verisi; borsa gerçek zamanı garantisi değildir.",
  };
}
async function transcript(value: string) {
  const url = new URL(value); const id = url.hostname.includes("youtu.be") ? url.pathname.slice(1) : url.hostname.includes("youtube.com") ? (url.searchParams.get("v") || url.pathname.split("/").filter(Boolean).at(-1)) : "";
  if (!id) throw new Error("Geçerli bir YouTube bağlantısı gerekli");
  for (const language of ["tr", "en"]) { const xml = await getText(`https://www.youtube.com/api/timedtext?v=${encodeURIComponent(id)}&lang=${language}`); const segments = [...xml.matchAll(/<text start="([^"]+)"[^>]*>([\s\S]*?)<\/text>/g)].map((m) => { const start = Number(m[1]); return { start, time: `${String(Math.floor(start / 60)).padStart(2, "0")}:${String(Math.floor(start % 60)).padStart(2, "0")}`, text: clean(m[2]) }; }); if (segments.length) return { videoId: id, language, segments, provider: "YouTube captions" }; }
  throw new Error("Bu videoda erişilebilir Türkçe veya İngilizce altyazı bulunamadı");
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const baseUrl = Deno.env.get("SUPABASE_URL")!; const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const client = createClient(baseUrl, anonKey, { global: { headers: { Authorization: request.headers.get("Authorization") || "" } } });
    const { data: { user }, error: authError } = await client.auth.getUser();
    if (authError || !user) return json({ error: "Oturum doğrulanamadı" }, 401);
    const url = new URL(request.url); const path = url.pathname.split("/journey-api").at(-1) || "/";
    const body = ["POST", "PUT", "PATCH"].includes(request.method) ? await request.json().catch(() => ({})) : {};
    if (request.method === "GET" && path === "/health") return json({ ok: true, service: "journey-api", sources: ["Google News RSS", "OpenAlex", "Crossref", "Yahoo Finance", "YouTube captions/RSS", "Hacker News", "RSS/Atom"] });
    if (path === "/state" && request.method === "GET") { const { data, error } = await client.from("user_state").select("state,updated_at").eq("user_id", user.id).maybeSingle(); if (error) throw error; return json({ state: data?.state || null, updatedAt: data?.updated_at || null }); }
    if (path === "/state" && request.method === "PUT") { const { error } = await client.from("user_state").upsert({ user_id: user.id, state: body.state || {}, updated_at: new Date().toISOString() }); if (error) throw error; return json({ ok: true }); }
    if (path === "/feed" && request.method === "POST") return json(await feed(body));
    if (path === "/recommendations" && request.method === "POST") return json(await recommendations(body));
    if (path === "/academic" && request.method === "POST") return json(await academic(body));
    if (path.startsWith("/portfolio/") && request.method === "GET") return json(await portfolio(path.split("/").at(-1)!));
    if (path === "/videos/transcript" && request.method === "POST") return json(await transcript(body.url));
    if (path === "/schedules" && request.method === "GET") { const [schedules, reports] = await Promise.all([client.from("research_schedules").select("*").order("created_at", { ascending: false }), client.from("research_reports").select("*").order("created_at", { ascending: false }).limit(20)]); if (schedules.error) throw schedules.error; if (reports.error) throw reports.error; return json({ schedules: schedules.data, reports: (reports.data || []).map((r: any) => ({ ...r, createdAt: r.created_at, count: r.items?.length || 0 })) }); }
    if (path === "/schedules" && request.method === "POST") { const hours = body.frequency === "hourly" ? 1 : body.frequency === "weekly" ? 168 : 24; const { data, error } = await client.from("research_schedules").insert({ user_id: user.id, title: body.title, topic: body.topic || "", frequency: body.frequency || "daily", delivery_time: body.time || null, channel: body.channel || "Uygulama", settings: body.settings || {}, next_run: new Date(Date.now() + hours * 3600000).toISOString() }).select().single(); if (error) throw error; return json(data, 201); }
    const run = path.match(/^\/schedules\/([^/]+)\/run$/);
    if (run && request.method === "POST") { const { data: schedule, error } = await client.from("research_schedules").select("*").eq("id", run[1]).single(); if (error) throw error; const result = await recommendations({ query: schedule.topic, settings: schedule.settings }); const { data: report, error: reportError } = await client.from("research_reports").insert({ user_id: user.id, schedule_id: schedule.id, title: schedule.title, items: result.items.slice(0, 5) }).select().single(); if (reportError) throw reportError; await client.from("research_schedules").update({ last_run: new Date().toISOString() }).eq("id", schedule.id); return json({ ...report, createdAt: report.created_at, count: report.items.length }); }
    const schedule = path.match(/^\/schedules\/([^/]+)$/);
    if (schedule && request.method === "PATCH") { const patch: Record<string, unknown> = {}; for (const key of ["title", "topic", "frequency", "channel", "enabled", "settings"]) if (key in body) patch[key] = body[key]; const { data, error } = await client.from("research_schedules").update(patch).eq("id", schedule[1]).select().single(); if (error) throw error; return json(data); }
    if (schedule && request.method === "DELETE") { const { error } = await client.from("research_schedules").delete().eq("id", schedule[1]); if (error) throw error; return json({ ok: true }); }
    return json({ error: "API yolu bulunamadı" }, 404);
  } catch (error) { return json({ error: error instanceof Error ? error.message : "Beklenmeyen hata" }, 502); }
});
