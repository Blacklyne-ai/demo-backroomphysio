import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await (await b.newContext({ viewport:{width:1366,height:850}, deviceScaleFactor:1 })).newPage();
await p.addInitScript(() => {
  window.__cls = 0; window.__lcp = 0;
  new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type:'layout-shift', buffered:true });
  new PerformanceObserver((l) => { const es=l.getEntries(); window.__lcp = es[es.length-1].startTime; }).observe({ type:'largest-contentful-paint', buffered:true });
});
await p.goto('http://localhost:4368/', { waitUntil:'load' });
await p.waitForTimeout(1200);
// kleine Scrollbewegung, um späte Shifts zu provozieren
await p.evaluate(() => window.scrollTo(0, 800)); await p.waitForTimeout(400);
await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(400);
const r = await p.evaluate(() => ({ cls: +window.__cls.toFixed(4), lcp: Math.round(window.__lcp) }));
const nav = await p.evaluate(() => { const n=performance.getEntriesByType('navigation')[0]; return { domContentLoaded: Math.round(n.domContentLoadedEventEnd), load: Math.round(n.loadEventEnd) }; });
console.log('CLS:', r.cls, ' (target <0.1)');
console.log('LCP:', r.lcp, 'ms  (target <2500)');
console.log('DCL:', nav.domContentLoaded, 'ms  Load:', nav.load, 'ms');
await b.close();
