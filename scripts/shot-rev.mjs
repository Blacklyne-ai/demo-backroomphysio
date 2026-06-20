import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, deviceScaleFactor:1, reducedMotion:'reduce' });
await ctx.addInitScript(() => { try { localStorage.setItem('backroom-cookie-notice','ok'); } catch {} });
const p = await ctx.newPage();
await p.goto('http://localhost:4367/', { waitUntil:'networkidle', timeout:45000 });
await p.evaluate(async()=>{await new Promise(r=>{let y=0,h=document.body.scrollHeight;const s=()=>{y+=500;scrollTo(0,y);y<h?setTimeout(s,35):(scrollTo(0,0),setTimeout(r,300))};s();});});
await p.waitForTimeout(400);
// Hero (mit Badge)
await p.screenshot({ path:'docs/qa/rev-hero.jpg', clip:{x:0,y:0,width:1440,height:900}, quality:80, type:'jpeg' });
// Reviews-Sektion: scrolle hin und shoote den Bereich
const box = await p.evaluate(() => { const h=[...document.querySelectorAll('h2')].find(e=>/Bewertet auf/.test(e.textContent)); const s=h?.closest('section'); if(!s)return null; const r=s.getBoundingClientRect(); return {top: r.top + window.scrollY, height: r.height}; });
if (box) { await p.evaluate(y=>scrollTo(0,y-40), box.top); await p.waitForTimeout(300); await p.screenshot({ path:'docs/qa/rev-section.jpg', clip:{x:0,y:0,width:1440,height:Math.min(720,box.height+60)}, quality:80, type:'jpeg' }); }
await b.close(); console.log('done', JSON.stringify(box));
