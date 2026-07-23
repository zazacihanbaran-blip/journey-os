import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { createHash } from "node:crypto";

const FEED_LIMIT = 48;
const MAX_SOURCE_COUNT = 12;
const DEFAULT_FEED_SOURCES = {
  youtube: [
    { label: "Two Minute Papers", kind: "youtube", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCbfYPyITQ-7l4upoX8nvctg" },
    { label: "Computerphile", kind: "youtube", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC9-y-6csu5WGm29I7JiwpnA" },
  ],
  rss: [
    { label: "Nature", kind: "rss", url: "https://www.nature.com/nature.rss" },
    { label: "Ars Technica", kind: "rss", url: "https://feeds.arstechnica.com/arstechnica/index" },
  ],
};

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
  const engineTrust = { academic: 24, finance: 21, youtube: 17, news: 16, hackernews: 15, social: 10, rss: 14 }[item.engine] || 12;
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
  const sources = (queries.length ? queries : ["teknoloji ekonomi"]).map((query) => ({ label: "Google News", kind: "news", url: `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=tr&gl=TR&ceid=TR:tr` }));
  sources.push({ label: "Ars Technica", kind: "news", url: "https://feeds.arstechnica.com/arstechnica/index" });
  const results = await Promise.allSettled(sources.map(async (source) => parseFeedXml(await fetchText(source.url), source)));
  const items = results.flatMap((result) => result.status === "fulfilled" ? result.value : []);
  const failed = results.find((result) => result.status === "rejected");
  if (!items.length && failed) throw failed.reason;
  return items;
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
      id: stableId(news.uuid || news.link), engine: "finance", source: news.publisher || "Yahoo Finance", title: news.title,
      summary: "Piyasa veya şirket gelişmesi. Başlığın yatırım fikrinle ilişkisini ve asıl kaynağı açarak ayrıntıyı doğrulayabilirsin.",
      url: news.link, published: news.providerPublishTime ? new Date(news.providerPublishTime * 1000).toISOString() : "",
      image: news.thumbnail?.resolutions?.at(-1)?.url || "", symbol: String(symbol).toUpperCase(),
    }));
  }));
  const items = results.flatMap((result) => result.status === "fulfilled" ? result.value : []);
  const failed = results.find((result) => result.status === "rejected");
  if (!items.length && failed) throw failed.reason;
  return items;
}
async function customSourcesEngine(sources) {
  const checked = await Promise.allSettled((sources || []).slice(0, MAX_SOURCE_COUNT).filter((source) => source.enabled !== false).map(async (source) => {
    const url = await safeSourceUrl(source.url);
    return parseFeedXml(await fetchText(url), { ...source, url: url.href });
  }));
  const items = checked.flatMap((result) => result.status === "fulfilled" ? result.value : []);
  const failed = checked.find((result) => result.status === "rejected");
  if (!items.length && failed) throw failed.reason;
  return items;
}

async function hackerNewsEngine() {
  const ids = await fetchJson("https://hacker-news.firebaseio.com/v0/topstories.json");
  return Promise.all((ids || []).slice(0, 20).map(async (id) => {
    const story = await fetchJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return normalizeItem({ id: `hn-${id}`, engine: "hackernews", source: "Hacker News", title: story.title, summary: "Teknoloji topluluğunda öne çıkan güncel bağlantı.", url: story.url || `https://news.ycombinator.com/item?id=${id}`, published: new Date(story.time * 1000).toISOString() });
  }));
}
export async function buildPersonalFeed(input = {}) {
  const interests = (input.interests || []).filter((interest) => interest?.label && interest.active !== false).slice(0, 20);
  const engines = { news: true, finance: true, academic: true, youtube: true, rss: true, social: false, hackernews: true, ...(input.engines || {}) };
  const custom = (input.sources || []).filter((source) => source?.url && source.enabled !== false).slice(0, MAX_SOURCE_COUNT);
  const jobs = [];
  if (engines.news) jobs.push(["news", newsEngine(interests)]);
  if (engines.academic) jobs.push(["academic", academicEngine(interests)]);
  if (engines.finance && input.symbols?.length) jobs.push(["finance", financeEngine(input.symbols)]);
  if (engines.youtube) jobs.push(["youtube", customSourcesEngine([...DEFAULT_FEED_SOURCES.youtube, ...custom.filter((source) => source.kind === "youtube")])]);
  if (engines.rss) jobs.push(["rss", customSourcesEngine([...DEFAULT_FEED_SOURCES.rss, ...custom.filter((source) => !source.kind || source.kind === "rss")])]);
  if (engines.hackernews) jobs.push(["hackernews", hackerNewsEngine()]);
  const socialSources = custom.filter((source) => source.kind === "social");
  if (engines.social && socialSources.length) jobs.push(["social", customSourcesEngine(socialSources)]);

  const settled = await Promise.allSettled(jobs.map(([, promise]) => promise));
  const errors = settled.flatMap((result, index) => result.status === "rejected" ? [{ engine: jobs[index][0], message: result.reason?.message || "Kaynak alınamadı" }] : []);
  const seen = new Set();
  const scoringInterests = [...interests, ...(input.symbols || []).map((symbol) => ({ label: String(symbol).toUpperCase(), keywords: [String(symbol).toUpperCase()], intensity: 5 }))];
  const rankedItems = settled.flatMap((result) => result.status === "fulfilled" ? result.value : []).filter((item) => {
    const key = item.url || item.title.toLocaleLowerCase("tr");
    if (seen.has(key)) return false;
    seen.add(key); return true;
  }).map((item) => scoreFeedItem(item, scoringInterests)).sort((a, b) => b.score - a.score || Date.parse(b.published || 0) - Date.parse(a.published || 0));
  const priority = Object.keys(engines).flatMap((engine) => rankedItems.filter((item) => item.engine === engine).slice(0, 3)).sort((a, b) => b.score - a.score);
  const priorityIds = new Set(priority.map((item) => item.id));
  const items = [...priority, ...rankedItems.filter((item) => !priorityIds.has(item.id))].slice(0, FEED_LIMIT);
  const engineStatuses = Object.entries(engines).map(([engine, enabled]) => {
    if (!enabled) return { engine, status: "off", itemCount: 0, message: "Kapalı" };
    const indexes = jobs.map(([name], index) => name === engine ? index : -1).filter((index) => index >= 0);
    if (!indexes.length) return { engine, status: "setup", itemCount: 0, message: engine === "social" ? "Bir sosyal RSS kaynağı ekle" : "Kaynak veya sembol gerekli" };
    const itemCount = indexes.reduce((total, index) => total + (settled[index].status === "fulfilled" ? settled[index].value.length : 0), 0);
    const failed = indexes.some((index) => settled[index].status === "rejected");
    return { engine, status: itemCount ? "ready" : failed ? "error" : "empty", itemCount, message: itemCount ? `${itemCount} içerik geldi` : failed ? "Kaynağa ulaşılamadı" : "Yeni içerik bulunamadı" };
  });
  return { items, errors, generatedAt: new Date().toISOString(), activeEngines: engineStatuses.filter((entry) => entry.status === "ready").map((entry) => entry.engine), engineStatuses };
}