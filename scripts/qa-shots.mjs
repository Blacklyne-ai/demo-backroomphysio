import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
mkdirSync('docs/qa', { recursive: true });
const BASE = 'http://localhost:4367';
const pages = ['/', '/leistungen', '/return-to-sport', '/ueber-uns', '/kontakt', '/impressum', '/datenschutz'];
const b = await chromium.launch();
const overflow = {};

async function shoot(viewport, suffix, isMobile) {
  const ctx = await b.newContext({
    viewport, deviceScaleFactor: 1, isMobile, reducedMotion: 'reduce',
  });
  // Cookie-Banner vorab wegklicken für saubere Full-Page-Shots
  await ctx.addInitScript(() => { try { localStorage.setItem('backroom-cookie-notice','ok'); } catch {} });
  const p = await ctx.newPage();
  for (const route of pages) {
    const name = (route === '/' ? 'index' : route.replace(/\//g,'')) + suffix;
    try {
      await p.goto(BASE + route, { waitUntil: 'networkidle', timeout: 45000 });
      // Scroll-Durchlauf → triggert loading="lazy" Bilder vor dem Full-Page-Shot
      await p.evaluate(async () => {
        await new Promise((res) => {
          let y = 0; const h = document.body.scrollHeight;
          const step = () => { y += 500; window.scrollTo(0, y); if (y < h) setTimeout(step, 35); else { window.scrollTo(0, 0); setTimeout(res, 300); } };
          step();
        });
      });
      await p.waitForLoadState('networkidle');
      await p.waitForTimeout(400);
      const ow = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
      if (ow.sw > ow.iw + 1) overflow[name] = `${ow.sw} > ${ow.iw}`;
      await p.screenshot({ path: `docs/qa/${name}.jpg`, fullPage: true, quality: 72, type: 'jpeg' });
      process.stdout.write(`ok ${name}  `);
    } catch (e) { console.log('FAIL', name, e.message); }
  }
  await ctx.close();
}

await shoot({ width: 1440, height: 900 }, '-d', false);
await shoot({ width: 390, height: 844 }, '-m', true);
await b.close();
console.log('\n=== horizontal overflow ===');
console.log(Object.keys(overflow).length ? overflow : 'none ✓');
