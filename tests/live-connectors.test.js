import test from "node:test";
import assert from "node:assert/strict";

const live = process.env.LIVE_TESTS === "1";
process.env.PORT = "0";
const { server } = await import("../server/index.js");
await new Promise((resolve) => server.listening ? resolve() : server.once("listening", resolve));
const base = `http://127.0.0.1:${server.address().port}`;

test.after(() => server.close());

test("canlı akademik kaynaklardan öneri üretir", { skip: !live }, async () => {
  const response = await fetch(`${base}/api/recommendations`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ query: "artificial intelligence energy economics", settings: { novelty: 65 } }) });
  assert.equal(response.status, 200);
  const data = await response.json();
  assert.ok(data.items.length > 0);
  assert.ok(data.items[0].title);
});

test("canlı piyasa geçmişini getirir", { skip: !live }, async () => {
  const response = await fetch(`${base}/api/portfolio/NVDA?range=1H`);
  assert.equal(response.status, 200);
  const data = await response.json();
  assert.equal(data.symbol, "NVDA");
  assert.ok(data.price > 0);
  assert.ok(data.points.length > 20);
  assert.match(data.points.at(-1).date, /T\d{2}:\d{2}/);
});
test("canlı akış motorlarının her biri gerçek içerik üretir", { skip: !live }, async () => {
  const response = await fetch(`${base}/api/feed`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      interests: [{ label: "artificial intelligence economy", keywords: ["AI", "energy"], intensity: 5, active: true }],
      symbols: ["NVDA"],
      sources: [],
      engines: { news: true, finance: true, academic: true, youtube: true, rss: true, hackernews: true, social: false },
    }),
  });
  assert.equal(response.status, 200);
  const data = await response.json();
  for (const engine of ["news", "finance", "academic", "youtube", "rss", "hackernews"]) {
    assert.equal(data.engineStatuses.find((entry) => entry.engine === engine)?.status, "ready", `${engine} hazır olmalı`);
    assert.ok(data.items.some((item) => item.engine === engine), `${engine} baskıda görünmeli`);
  }
});