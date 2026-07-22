import test from "node:test";
import assert from "node:assert/strict";

process.env.PORT = "0";
const { server, videoIdFromUrl, nextRun } = await import("../server/index.js");

test.after(() => server.close());

test("YouTube video kimliğini farklı bağlantılardan çıkarır", () => {
  assert.equal(videoIdFromUrl("https://www.youtube.com/watch?v=abc123"), "abc123");
  assert.equal(videoIdFromUrl("https://youtu.be/xyz789"), "xyz789");
});

test("saatlik programın sonraki çalışma zamanı gelecektedir", () => {
  const before = Date.now();
  const next = Date.parse(nextRun("hourly"));
  assert.ok(next > before + 59 * 60 * 1000);
  assert.ok(next < before + 61 * 60 * 1000);
});
