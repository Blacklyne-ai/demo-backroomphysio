import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, deviceScaleFactor:1, reducedMotion:'reduce' });
await ctx.addInitScript(() => { try { localStorage.setItem('backroom-cookie-notice','ok'); } catch {} });
const p = await ctx.newPage();
// 1) Reviews-Sektion (volle Höhe inkl. Highlights-Reihe)
await p.goto('http://localhost:4367/', { waitUntil:'networkidle', timeout:45000 });
await p.evaluate(async()=>{await new Promise(r=>{let y=0,h=document.body.scrollHeight;const s=()=>{y+=500;scrollTo(0,y);y<h?setTimeout(s,35):(scrollTo(0,0),setTimeout(r,300))};s();});});
await p.waitForTimeout(400);
const box = await p.evaluate(() => { const h=[...document.querySelectorAll('h2')].find(e=>/Bewertet auf/.test(e.textContent)); const s=h?.closest('section'); const r=s.getBoundingClientRect(); return {top:r.top+scrollY, height:r.height}; });
await p.evaluate(y=>scrollTo(0,y-20), box.top); await p.waitForTimeout(300);
await p.screenshot({ path:'docs/qa/sec-rev2.jpg', clip:{x:0,y:0,width:1440,height:Math.min(950,box.height+40)}, quality:80, type:'jpeg' });
// 2) Karriere full-page
await p.goto('http://localhost:4367/karriere', { waitUntil:'networkidle', timeout:45000 });
await p.evaluate(async()=>{await new Promise(r=>{let y=0,h=document.body.scrollHeight;const s=()=>{y+=500;scrollTo(0,y);y<h?setTimeout(s,35):(scrollTo(0,0),setTimeout(r,300))};s();});});
await p.waitForTimeout(400);
await p.screenshot({ path:'docs/qa/karriere-d.jpg', fullPage:true, quality:74, type:'jpeg' });
await b.close(); console.log('done');
