import http from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildPersonalFeed } from "./feed.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDirectory = path.join(root, "data");
const runtimeFile = path.join(dataDirectory, "runtime.json");
loadEnv(path.join(root, ".env"));
const port = Number(process.env.PORT || 4173);
const userAgent = process.env.JOURNEY_USER_AGENT || "JourneyOS/0.1 (open-source local research assistant)";

const sourceRegistry = [
  { id: "openalex", label: "OpenAlex", kind: "academic", auth: false, enabled: true },
  { id: "crossref", label: "Crossref", kind: "academic", auth: false, enabled: true },
  { id: "yahoo-finance", label: "Yahoo Finance chart", kind: "market", auth: false, enabled: true },
  { id: "youtube-captions", label: "YouTube captions", kind: "video", auth: false, enabled: true },
  { id: "personal-rss", label: "RSS / Atom", kind: "rss", auth: false, enabled: true },
  { id: "google-news-rss", label: "Google News RSS", kind: "news", auth: false, enabled: true },
  { id: "social-rss-bridge", label: "X / sosyal RSS köprüsü", kind: "social", auth: false, enabled: true },
  { id: "alpha-vantage", label: "Alpha Vantage", kind: "market", auth: true, enabled: Boolean(process.env.ALPHA_VANTAGE_API_KEY) }
];

let runtime = await loadRuntime();

function loadEnv(file) {
  try {
    const text = requireText(file);
    for (const line of text.split(/\r?\n/)) {
      const match = line.match(/^([A-Z0-9_]+)=(.*)$/); if (!match || process.env[match[1]]) continue;
      process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, "");
    }
  } catch {}
}
function requireText(file) {
  const fs = process.getBuiltinModule("node:fs");
  return fs.readFileSync(file, "utf8");
}
async function loadRuntime() {
  await mkdir(dataDirectory, { recursive: true });
  try { return JSON.parse(await readFile(runtimeFile, "utf8")); }
  catch { return { schedules: [], reports: [], saved: [], sourcePreferences: [] }; }
}
async function saveRuntime() {
  const temporary = `${runtimeFile}.tmp`;
  await writeFile(temporary, JSON.stringify(runtime, null, 2), "utf8");
  const fs = process.getBuiltinModule("node:fs");
  fs.renameSync(temporary, runtimeFile);
}
function json(response, statusCode, value) {
  response.writeHead(statusCode, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
  response.end(JSON.stringify(value));
}
async function bodyJson(request) {
  let body = "";
  for await (const chunk of request) { body += chunk; if (body.length > 1_000_000) throw new Error("İstek çok büyük"); }
  return body ? JSON.parse(body) : {};
}
async function fetchText(url, options = {}) {
  const response = await fetch(url, { ...options, headers: { "user-agent": userAgent, accept: "application/json,text/plain,text/xml,*/*", ...(options.headers || {}) }, signal: AbortSignal.timeout(12000) });
  if (!response.ok) throw new Error(`${new URL(url).hostname} ${response.status}`);
  return response.text();
}
async function fetchJson(url) { return JSON.parse(await fetchText(url)); }

function normalizeOpenAlex(work) {
  const source = work.primary_location?.source?.display_name || "OpenAlex";
  return { id: work.id, type: "Akademik çalışma", format: "Makale", source, title: work.display_name, url: work.doi || work.primary_location?.landing_page_url || work.id, published: work.publication_date, citations: work.cited_by_count || 0, openAccess: work.open_access?.is_oa || false, summary: work.abstract_inverted_index ? abstractFromIndex(work.abstract_inverted_index) : "Özet sağlayıcı tarafından paylaşılmadı.", trust: 92, novelty: freshness(work.publication_year) };
}
function abstractFromIndex(index) {
  return Object.entries(index).flatMap(([word, positions]) => positions.map((position) => [position, word])).sort((a, b) => a[0] - b[0]).map((entry) => entry[1]).join(" ").slice(0, 900);
}
function freshness(year) { return Math.max(30, Math.min(100, 100 - (new Date().getFullYear() - Number(year || 0)) * 12)); }
async function searchAcademic(query, limit = 8) {
  const mail = process.env.OPENALEX_EMAIL ? `&mailto=${encodeURIComponent(process.env.OPENALEX_EMAIL)}` : "";
  const url = `https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=from_publication_date:2022-01-01&sort=relevance_score:desc&per-page=${limit}${mail}`;
  const data = await fetchJson(url);
  return (data.results || []).map(normalizeOpenAlex);
}
async function searchCrossref(query, limit = 6) {
  const data = await fetchJson(`https://api.crossref.org/works?query=${encodeURIComponent(query)}&filter=from-pub-date:2022-01-01&rows=${limit}&select=DOI,title,author,published,container-title,is-referenced-by-count,URL,abstract`);
  return (data.message?.items || []).map((work) => ({ id: work.DOI, type: "Akademik kayıt", format: "Makale", source: work["container-title"]?.[0] || "Crossref", title: work.title?.[0] || work.DOI, url: work.URL, published: work.published?.["date-parts"]?.[0]?.join("-") || "", citations: work["is-referenced-by-count"] || 0, openAccess: false, summary: String(work.abstract || "Kaynak künyesi doğrulandı; özet paylaşılmadı.").replace(/<[^>]+>/g, " ").slice(0, 900), trust: 90, novelty: freshness(work.published?.["date-parts"]?.[0]?.[0]) }));
}
async function searchAcademicDetailed(query, limit = 18) {
  const mail = process.env.OPENALEX_EMAIL ? `&mailto=${encodeURIComponent(process.env.OPENALEX_EMAIL)}` : "";
  const data = await fetchJson(`https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=from_publication_date:2022-01-01&sort=relevance_score:desc&per-page=${limit}${mail}`);
  return (data.results || []).map((work) => {
    const location = work.best_oa_location || work.primary_location || {};
    return {
      id: work.id, title: work.display_name,
      authors: (work.authorships || []).slice(0, 8).map((entry) => entry.author?.display_name).filter(Boolean),
      journal: location.source?.display_name || work.primary_location?.source?.display_name || "OpenAlex",
      year: work.publication_year, published: work.publication_date,
      doi: String(work.doi || "").replace(/^https?:\/\/doi\.org\//i, ""), citations: work.cited_by_count || 0,
      abstract: work.abstract_inverted_index ? abstractFromIndex(work.abstract_inverted_index) : "Sağlayıcı bu çalışma için özet paylaşmadı.",
      openAccess: Boolean(work.open_access?.is_oa), access: work.open_access?.is_oa ? "Açık erişim" : "Özet erişimi",
      url: work.doi || location.landing_page_url || work.id,
      fullTextUrl: work.best_oa_location?.pdf_url || (work.open_access?.is_oa ? location.landing_page_url : "")
    };
  });
}
async function buildRecommendations({ query = "artificial intelligence economy energy", settings = {} }) {
  const outcomes = await Promise.allSettled([searchAcademic(query), searchCrossref(query)]);
  const items = outcomes.flatMap((outcome) => outcome.status === "fulfilled" ? outcome.value : []);
  const seen = new Set();
  const unique = items.filter((item) => { const key = item.title.toLocaleLowerCase("tr"); if (seen.has(key)) return false; seen.add(key); return true; });
  const noveltyTarget = Number(settings.novelty ?? 65);
  return unique.map((item) => ({ ...item, match: Math.round(item.trust * .45 + (100 - Math.abs(item.novelty - noveltyTarget)) * .35 + Math.min(100, item.citations) * .2), why: item.openAccess ? "Tam metin erişimi ve konu yakınlığı nedeniyle öne çıktı." : "Kaynak künyesi, güncellik ve konu yakınlığı nedeniyle seçildi." })).sort((a, b) => b.match - a.match).slice(0, 12);
}

async function getPortfolio(symbol, requestedRange = "6A") {
  const normalizedSymbol = symbol.toUpperCase();
  const ranges = { "1H": ["5d", "15m"], "1A": ["1mo", "1d"], "6A": ["6mo", "1d"], "1Y": ["1y", "1d"] };
  const [range, interval] = ranges[requestedRange] || ranges["6A"];
  const [chartResult, newsResult] = await Promise.allSettled([
    fetchJson(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(normalizedSymbol)}?range=${range}&interval=${interval}`),
    fetchJson(`https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(normalizedSymbol)}&newsCount=10&quotesCount=1`)
  ]);
  if (chartResult.status === "rejected") throw chartResult.reason;
  const data = chartResult.value;
  const chart = data.chart?.result?.[0]; if (!chart) throw new Error(data.chart?.error?.description || "Piyasa verisi bulunamadı");
  const quote = chart.indicators?.quote?.[0] || {}; const closes = chart.indicators?.adjclose?.[0]?.adjclose || quote.close || [];
  const points = (chart.timestamp || []).map((timestamp, index) => ({ date: new Date(timestamp * 1000).toISOString(), open: quote.open?.[index], high: quote.high?.[index], low: quote.low?.[index], close: closes[index], volume: quote.volume?.[index] })).filter((point) => Number.isFinite(point.close));
  const latest = points.at(-1); const previous = points.at(-2) || latest; if (!latest) throw new Error("Piyasa verisi boş döndü");
  const change = ((latest.close - previous.close) / previous.close) * 100;
  const news = newsResult.status === "fulfilled" ? (newsResult.value.news || []).slice(0, 8).map((item) => ({ id: item.uuid || item.link, title: item.title, source: item.publisher || "Yahoo Finance", url: item.link, published: item.providerPublishTime ? new Date(item.providerPublishTime * 1000).toISOString() : "", type: "ŞİRKET / PİYASA" })) : [];
  const quoteMeta = newsResult.status === "fulfilled" ? newsResult.value.quotes?.[0] || {} : {};
  return {
    symbol: normalizedSymbol, name: quoteMeta.longname || quoteMeta.shortname || chart.meta?.longName || chart.meta?.shortName || normalizedSymbol,
    price: chart.meta?.regularMarketPrice || latest.close, change, currency: chart.meta?.currency || "USD",
    asOf: chart.meta?.regularMarketTime ? new Date(chart.meta.regularMarketTime * 1000).toISOString() : latest.date,
    fetchedAt: new Date().toISOString(), marketState: quoteMeta.marketState || chart.meta?.marketState || "UNKNOWN", exchange: quoteMeta.exchange || chart.meta?.exchangeName || "",
    dayLow: quoteMeta.regularMarketDayLow || chart.meta?.regularMarketDayLow, dayHigh: quoteMeta.regularMarketDayHigh || chart.meta?.regularMarketDayHigh, volume: quoteMeta.regularMarketVolume || chart.meta?.regularMarketVolume || latest.volume,
    points: points.slice(-260), news, provider: "Yahoo Finance",
    freshnessNote: "Ücretsiz sağlayıcının son piyasa verisi; borsa gerçek zamanı garantisi değildir."
  };
}

function videoIdFromUrl(value) {
  const url = new URL(value); if (url.hostname.includes("youtu.be")) return url.pathname.slice(1);
  if (!url.hostname.includes("youtube.com")) throw new Error("Geçerli bir YouTube bağlantısı gerekli");
  return url.searchParams.get("v") || url.pathname.split("/").filter(Boolean).at(-1);
}
async function getTranscript(value) {
  const id = videoIdFromUrl(value); if (!id) throw new Error("Video kimliği bulunamadı");
  for (const language of ["tr", "en"]) {
    const xml = await fetchText(`https://www.youtube.com/api/timedtext?v=${encodeURIComponent(id)}&lang=${language}`);
    const segments = [...xml.matchAll(/<text start="([^"]+)"[^>]*>([\s\S]*?)<\/text>/g)].map((match) => ({ start: Number(match[1]), time: formatSeconds(Number(match[1])), text: decodeXml(match[2]) }));
    if (segments.length) return { videoId: id, language, segments, provider: "YouTube captions" };
  }
  throw new Error("Bu videoda erişilebilir Türkçe veya İngilizce altyazı bulunamadı");
}
function decodeXml(value) { return value.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">"); }
function formatSeconds(value) { const minutes = Math.floor(value / 60); const seconds = Math.floor(value % 60); return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`; }

async function executeSchedule(schedule) {
  const recommendations = await buildRecommendations({ query: schedule.topic, settings: schedule.settings || {} });
  const report = { id: `report-${Date.now()}`, scheduleId: schedule.id, title: schedule.title, createdAt: new Date().toISOString(), status: "complete", count: recommendations.length, items: recommendations.slice(0, 5) };
  runtime.reports.unshift(report); schedule.lastRun = report.createdAt; schedule.nextRun = nextRun(schedule.frequency); await saveRuntime(); return report;
}
function nextRun(frequency) { const hours = frequency === "hourly" ? 1 : frequency === "daily" ? 24 : 168; return new Date(Date.now() + hours * 3600000).toISOString(); }
setInterval(async () => {
  for (const schedule of runtime.schedules.filter((item) => item.enabled && item.nextRun && Date.parse(item.nextRun) <= Date.now())) {
    try { await executeSchedule(schedule); } catch (error) { schedule.lastError = error.message; schedule.nextRun = nextRun(schedule.frequency); await saveRuntime(); }
  }
}, 60000).unref();

async function handleApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/health") return json(response, 200, { ok: true, service: "journey-os", version: "0.1.0", sources: sourceRegistry });
  if (request.method === "GET" && url.pathname === "/api/sources") return json(response, 200, { sources: sourceRegistry });
  if (request.method === "GET" && url.pathname.startsWith("/api/portfolio/")) {
    try { return json(response, 200, await getPortfolio(url.pathname.split("/").at(-1), url.searchParams.get("range") || "6A")); } catch (error) { return json(response, 502, { error: error.message }); }
  }
  if (request.method === "POST" && url.pathname === "/api/recommendations") {
    try { const input = await bodyJson(request); return json(response, 200, { items: await buildRecommendations(input), generatedAt: new Date().toISOString(), providers: ["OpenAlex", "Crossref"] }); } catch (error) { return json(response, 502, { error: error.message }); }
  }
  if (request.method === "POST" && url.pathname === "/api/academic") {
    try { const input = await bodyJson(request); return json(response, 200, { items: await searchAcademicDetailed(input.query || "artificial intelligence economy"), generatedAt: new Date().toISOString(), provider: "OpenAlex" }); }
    catch (error) { return json(response, 502, { error: error.message }); }
  }
  if (request.method === "POST" && url.pathname === "/api/feed") {
    try { const input = await bodyJson(request); return json(response, 200, await buildPersonalFeed(input)); }
    catch (error) { return json(response, 502, { error: error.message }); }
  }
  if (request.method === "POST" && url.pathname === "/api/videos/transcript") {
    try { const input = await bodyJson(request); return json(response, 200, await getTranscript(input.url)); } catch (error) { return json(response, 422, { error: error.message }); }
  }
  if (request.method === "GET" && url.pathname === "/api/schedules") return json(response, 200, { schedules: runtime.schedules, reports: runtime.reports.slice(0, 20) });
  if (request.method === "POST" && url.pathname === "/api/schedules") {
    const input = await bodyJson(request); const schedule = { id: `schedule-${Date.now()}`, title: input.title, topic: input.topic, frequency: input.frequency || "daily", time: input.time || "", channel: input.channel || "Uygulama", enabled: true, createdAt: new Date().toISOString(), nextRun: nextRun(input.frequency || "daily"), settings: input.settings || {} };
    runtime.schedules.unshift(schedule); await saveRuntime(); return json(response, 201, schedule);
  }
  const runMatch = url.pathname.match(/^\/api\/schedules\/([^/]+)\/run$/);
  if (request.method === "POST" && runMatch) {
    const schedule = runtime.schedules.find((item) => item.id === runMatch[1]); if (!schedule) return json(response, 404, { error: "Program bulunamadı" });
    try { return json(response, 200, await executeSchedule(schedule)); } catch (error) { return json(response, 502, { error: error.message }); }
  }
  if (request.method === "PATCH" && url.pathname.startsWith("/api/schedules/")) { const id = url.pathname.split("/").at(-1); const schedule = runtime.schedules.find((item) => item.id === id); if (!schedule) return json(response, 404, { error: "Program bulunamadı" }); Object.assign(schedule, await bodyJson(request)); if (schedule.enabled && !schedule.nextRun) schedule.nextRun = nextRun(schedule.frequency); await saveRuntime(); return json(response, 200, schedule); }
  if (request.method === "DELETE" && url.pathname.startsWith("/api/schedules/")) { const id = url.pathname.split("/").at(-1); runtime.schedules = runtime.schedules.filter((item) => item.id !== id); await saveRuntime(); return json(response, 200, { ok: true }); }
  return json(response, 404, { error: "API yolu bulunamadı" });
}

const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8", ".png": "image/png", ".ico": "image/x-icon" };
async function serveStatic(response, pathname) {
  const relative = pathname === "/" ? "index.html" : decodeURIComponent(pathname.slice(1));
  const file = path.resolve(root, relative);
  if (!file.startsWith(root) || file.includes(`${path.sep}server${path.sep}`) || file.includes(`${path.sep}data${path.sep}`) || path.basename(file).startsWith(".")) return json(response, 403, { error: "Erişim reddedildi" });
  try { if (!(await stat(file)).isFile()) throw new Error(); const contents = await readFile(file); response.writeHead(200, { "content-type": mime[path.extname(file)] || "application/octet-stream" }); response.end(contents); }
  catch { const html = await readFile(path.join(root, "index.html")); response.writeHead(200, { "content-type": mime[".html"] }); response.end(html); }
}

const server = http.createServer(async (request, response) => {
  try { const url = new URL(request.url, `http://${request.headers.host || "localhost"}`); if (url.pathname.startsWith("/api/")) await handleApi(request, response, url); else await serveStatic(response, url.pathname); }
  catch (error) { json(response, 500, { error: error.message || "Beklenmeyen hata" }); }
});
server.listen(port, "127.0.0.1", () => console.log(`Journey OS running at http://localhost:${port}`));

export { server, buildRecommendations, getPortfolio, videoIdFromUrl, nextRun, buildPersonalFeed };
