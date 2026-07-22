import test from "node:test";
import assert from "node:assert/strict";
import { parseFeedXml, safeSourceUrl, scoreFeedItem } from "../server/feed.js";

test("RSS ve Atom kayıtlarını ortak içerik biçimine dönüştürür", () => {
  const items = parseFeedXml(`<?xml version="1.0"?><rss><channel><item><title>Enerji &amp; yapay zekâ</title><link>https://example.com/a</link><description><![CDATA[<p>Veri merkezi talebi büyüyor.</p>]]></description><pubDate>Tue, 21 Jul 2026 10:00:00 GMT</pubDate></item></channel></rss>`, { label: "Test RSS", kind: "news", url: "https://example.com/feed" });
  assert.equal(items.length, 1);
  assert.equal(items[0].title, "Enerji & yapay zekâ");
  assert.equal(items[0].source, "Test RSS");
  assert.equal(items[0].engine, "news");
});

test("ilgi alanıyla eşleşen içerik daha yüksek puan alır", () => {
  const interests = [{ label: "enerji", keywords: ["veri merkezi"], intensity: 5 }];
  const base = { id: "1", engine: "news", source: "Kaynak", summary: "Güncel gelişme", published: new Date().toISOString(), url: "https://example.com" };
  const matching = scoreFeedItem({ ...base, title: "Veri merkezi enerji talebi" }, interests);
  const unrelated = scoreFeedItem({ ...base, id: "2", title: "Tenis turnuvası" }, interests);
  assert.ok(matching.score > unrelated.score);
  assert.deepEqual(matching.matchedInterests, ["enerji"]);
});

test("özel RSS kaynaklarında yerel ağ adreslerini reddeder", async () => {
  await assert.rejects(() => safeSourceUrl("https://localhost/feed.xml"), /Yerel ağ/);
  await assert.rejects(() => safeSourceUrl("http://example.com/feed.xml"), /HTTPS/);
});
