import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { createHash } from "node:crypto";

const FEED_LIMIT = 48;
const MAX_SOURCE_COUNT = 12;

function cleanText(value = "") {
  return decodeEntities(String(value))
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(value = "") {
  const entities = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => entities[name.toLowerCase()] ?? match);
}

function tag(block, names) {
  for (const name of names) {
    const match = block.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, "i"));
    if (match) return match[1];
  }
  return "";
}

function attr(block, tagName, name) {
  const match = block.match(new RegExp(`<${tagName}\\b[^>]*\\b${name}=["']([^"']+)["'][^>]*>`, "i"));
  return match?.[1] || "";
}

function stableId(value) {
  return createHash("sha1").update(String(value)).digest("hex").slice(0, 14);
}

export function parseFeedXml(xml, source = {}) {
  const itemBlocks = [...String(xml).matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].map((match) => match[1]);
  const entryBlocks = [...String(xml).matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/gi)].map((match) => match[1]);
  return [...itemBlocks, ...entryBlocks].slice(0, 30).map((block) => {
    const title = cleanText(tag(block, ["title"]));
    const link = cleanText(tag(block, ["link"])) || attr(block, "link", "href") || cleanText(tag(block, ["guid", "id"]));
    const summary = cleanText(tag(block, ["description", "summary", "content:encoded", "content"]));
    const published = cleanText(tag(block, ["pubDate", "published", "updated", "dc:date"]));
    const image = attr(block, "media:content", "url") || attr(block, "media:thumbnail", "url") || attr(block, "enclosure", "url");
    return normalizeItem({
      id: stableId(link || `${source.url}:${title}`),
      engine: source.kind || "rss",
      source: source.label || cleanText(tag(block, ["source", "author"])) || "RSS",
      title,
      summary,
      url: link,
      published,
      image,
    });
  }).filter((item) => item.title && item.url);
}

function normalizeItem(item) {
  const date = Date.parse(item.published || "");
  const summary = cleanText(item.summary || "").slice(0, 620);
  return {
    ...item,
    title: cleanText(item.title).slice(0, 260),
    summary: summary || "Kaynak bu içerik için kısa açıklama paylaşmadı.",
    published: Number.isFinite(date) ? new Date(date).toISOString() : "",
    readingMinutes: Math.max(1, Math.min(18, Math.round((summary.split(/\s+/).length || 90) / 180))),
  };
}

export function scoreFeedItem(item, interests = []) {
  const haystack = `${item.title} ${item.summary}`.toLocaleLowerCase("tr");
  const matching = interests.filter((interest) => {
    const terms = [interest.label, ...(interest.keywords || [])].filter(Boolean).map((value) => String(value).toLocaleLowerCase("tr"));
    return terms.some((term) => term.length > 2 && haystack.includes(term));
  });
  const interestScore = matching.reduce((sum, interest) => sum + Number(interest.intensity || 3) * 8, 0);
  const ageHours = item.published ? Math.max(0, (Date.now() - Date.parse(item.published)) / 3_600_000) : 168;
  const freshness = Math.max(0, 34 - Math.log2(ageHours + 1) * 5);
  const engineTrust = { academic: 24, finance: 21, youtube: 17, news: 16, social: 10, rss: 14 }[item.engine] || 12;
  const score = Math.round(Math.min(100, 16 + interestScore + freshness + engineTrust));
  return {
    ...item,
    score,
    matchedInterests: matching.map((interest) => interest.label),
    reason: matching.length
      ? `${matching.slice(0, 2).map((interest) => interest.label).join(" ve ")} ilgi alanınla eşleşiyor.`
      : "Seçtiğin kaynaklardan güncel bir içerik.",
  };
}

function privateAddress(address) {
  if (!address) return true;
  if (address === "::1" || address.startsWith("fe80:") || address.startsWith("fc") || address.startsWith("fd")) return true;
  const parts = address.split(".").map(Number);
  if (parts.length !== 4) return false;
  return parts[0] === 10 || parts[0] === 127 || parts[0] === 0 || (parts[0] === 169 && parts[1] === 254) || (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) || (parts[0] === 192 && parts[1] === 168);
}

export async function safeSourceUrl(value) {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || (url.port && url.port !== "443")) throw new Error("Kaynak yalnızca standart HTTPS adresi olabilir");
  const hostname = url.hostname.toLowerCase();
  if (hostname === "localhost" || hostname.endsWith(".local") || hostname.endsWith(".internal")) throw new Error("Yerel ağ adresleri kaynak olarak kullanılamaz");
  if (isIP(hostname) && privateAddress(hostname)) throw new Error("Özel IP adresleri kaynak olarak kullanılamaz");
  const addresses = await lookup(hostname, { all: true });
  if (!addresses.length || addresses.some(({ address }) => privateAddress(address))) throw new Error("Kaynak güvenli bir genel ağa çözülmedi");
  return url;
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { accept: "application/rss+xml,application/atom+xml,text/xml,application/xml,text/plain,*/*", "user-agent": "JourneyOS/0.2 (+https://github.com/zazacihanbaran-blip/journey-os)" },
    redirect: "follow",
    signal: AbortSignal.timeout(12_000),
  });
  if (!response.ok) throw new Error(`${new URL(url).hostname} ${response.status}`);
  return response.text();
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { accept: "application/json", "user-agent": "JourneyOS/0.2" }, signal: AbortSignal.timeout(12_000) });
  if (!response.ok) throw new Error(`${new URL(url).hostname} ${response.status}`);
  return response.json();
}

async function newsEngine(interests) {
  const queries = interests.slice(0, 3).map((interest) => interest.label).filter(Boolean);
  const results = await Promise.allSettled(queries.map(async (query) => {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=tr&gl=TR&ceid=TR:tr`;
    return parseFeedXml(await fetchText(url), { label: "Google News", kind: "news", url });
  }));
  return results.flatMap((result) => result.status === "fulfilled" ? result.value : []);
}

async function academicEngine(interests) {
  const query = interests.slice(0, 4).map((interest) => interest.label).join(" ") || "technology society";
  const data = await fetchJson(`https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=from_publication_date:2023-01-01&sort=relevance_score:desc&per-page=10`);
  return (data.results || []).map((work) => normalizeItem({
    id: stableId(work.id),
    engine: "academic",
    source: work.primary_location?.source?.display_name || "OpenAlex",
    title: work.display_name,
    summary: work.abstract_inverted_index
      ? Object.entries(work.abstract_inverted_index).flatMap(([word, positions]) => positions.map((position) => [position, word])).sort((a, b) => a[0] - b[0]).map((entry) => entry[1]).join(" ")
      : "Akademik künye doğrulandı; özet sağlayıcı tarafından paylaşılmadı.",
    url: work.doi || work.primary_location?.landing_page_url || work.id,
    published: work.publication_date,
    image: "",
    openAccess: Boolean(work.open_access?.is_oa),
  }));
}

async function financeEngine(symbols) {
  const results = await Promise.allSettled((symbols || []).slice(0, 5).map(async (symbol) => {
    const data = await fetchJson(`https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(symbol)}&newsCount=6&quotesCount=1`);
    return (data.news || []).filter((news) => !news.relatedTickers?.length || news.relatedTickers.includes(String(symbol).toUpperCase())).map((news) => normalizeItem({
      id: stableId(news.uuid || news.link),
      engine: "finance",
      source: news.publisher || "Yahoo Finance",
      title: news.title,
      summary: "Piyasa veya şirket gelişmesi. Başlığın yatırım fikrinle ilişkisini ve asıl kaynağı açarak ayrıntıyı doğrulayabilirsin.",
      url: news.link,
      published: news.providerPublishTime ? new Date(news.providerPublishTime * 1000).toISOString() : "",
      image: news.thumbnail?.resolutions?.at(-1)?.url || "",
      symbol: String(symbol).toUpperCase(),
    }));
  }));
  return results.flatMap((result) => result.status === "fulfilled" ? result.value : []);
}

async function customSourcesEngine(sources) {
  const checked = await Promise.allSettled((sources || []).slice(0, MAX_SOURCE_COUNT).filter((source) => source.enabled !== false).map(async (source) => {
    const url = await safeSourceUrl(source.url);
    return parseFeedXml(await fetchText(url), { ...source, url: url.href });
  }));
  return checked.flatMap((result) => result.status === "fulfilled" ? result.value : []);
}

export async function buildPersonalFeed(input = {}) {
  const interests = (input.interests || []).filter((interest) => interest?.label && interest.active !== false).slice(0, 20);
  const engines = { news: true, finance: true, academic: true, youtube: true, rss: true, social: false, ...(input.engines || {}) };
  const jobs = [];
  if (engines.news) jobs.push(["news", newsEngine(interests)]);
  if (engines.academic) jobs.push(["academic", academicEngine(interests)]);
  if (engines.finance && input.symbols?.length) jobs.push(["finance", financeEngine(input.symbols)]);
  const customSources = (input.sources || []).filter((source) => engines[source.kind || "rss"] !== false);
  if (customSources.length) jobs.push(["custom", customSourcesEngine(customSources)]);

  const settled = await Promise.allSettled(jobs.map(([, promise]) => promise));
  const errors = settled.flatMap((result, index) => result.status === "rejected" ? [{ engine: jobs[index][0], message: result.reason?.message || "Kaynak alınamadı" }] : []);
  const seen = new Set();
  const scoringInterests = [...interests, ...(input.symbols || []).map((symbol) => ({ label: String(symbol).toUpperCase(), keywords: [String(symbol).toUpperCase()], intensity: 5 }))];
  const items = settled.flatMap((result) => result.status === "fulfilled" ? result.value : []).filter((item) => {
    const key = item.url || item.title.toLocaleLowerCase("tr");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map((item) => scoreFeedItem(item, scoringInterests)).sort((a, b) => b.score - a.score || Date.parse(b.published || 0) - Date.parse(a.published || 0)).slice(0, FEED_LIMIT);

  return {
    items,
    errors,
    generatedAt: new Date().toISOString(),
    activeEngines: Object.entries(engines).filter(([, enabled]) => enabled).map(([name]) => name),
  };
}
