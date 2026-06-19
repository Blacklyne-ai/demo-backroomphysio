// Phase 0 — screenshots of old site (content source) + 3 reference benchmarks.
// Output to docs/ (gitignored). Robust per-site try/catch + networkidle fallback.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

mkdirSync('docs', { recursive: true });

const go = async (page, url) => {
  try { await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }); }
  catch { await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }); }
  await page.waitForTimeout(2500); // let webfonts/lazy imgs settle
};

const b = await chromium.launch();

// ── Old site: desktop full-page + mobile ──
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const p = await ctx.newPage();
try {
  await go(p, 'https://backroomphysio.de/');
  await p.screenshot({ path: 'docs/old-site.png', fullPage: true });
  console.log('OK old-site.png');
} catch (e) { console.log('FAIL old-site', e.message); }

const m = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true })).newPage();
try {
  await go(m, 'https://backroomphysio.de/');
  await m.screenshot({ path: 'docs/old-site-mobile.png', fullPage: true });
  console.log('OK old-site-mobile.png');
} catch (e) { console.log('FAIL old-site-mobile', e.message); }

// ── Reference benchmarks (above-the-fold, the brief's quality bar) ──
for (const [u, n] of [
  ['https://www.route66-hh.de/', 'ref-route66'],
  ['https://www.auto-motorrad-freigang.de/', 'ref-amf'],
  ['https://www.astonservicehamburg.de/', 'ref-aston'],
]) {
  try { await go(p, u); await p.screenshot({ path: `docs/${n}.png` }); console.log('OK', n); }
  catch (e) { console.log('FAIL', n, e.message); }
}

await b.close();
console.log('DONE');
