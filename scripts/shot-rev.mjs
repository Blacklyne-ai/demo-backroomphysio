import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, deviceScaleFactor:1, reducedMotion:'reduce' });
await ctx.addInitScript(() => { try { localStorage.setItem('backroom-cookie-notice','ok'); } catch {} });
const p = await ctx.newPage();
await p.goto('http://localhost:4367/', { waitUntil:'networkidle', timeout:45000 });
await p.evaluate(async()=>{await new Promise(r=>{let y=0,h=document.body.scrollHeight;const s=()=>{y+=500;scrollTo(0,y);y<h?setTimeout(s,35):(scrollTo(0,0),setTimeout(r,300))};s();});});
await p.waitForTimeout(400);
for (const [h2re,name] of [['Bewertet auf','rev'],['Mitten in Berlin','praxis']]) {
  const box = await p.evaluate((re) => { const h=[...document.querySelectorAll('h2')].find(e=>new RegExp(re).test(e.textContent)); const s=h?.closest('section'); if(!s)return null; const r=s.getBoundingClientRect(); return {top:r.top+scrollY, height:r.height}; }, h2re);
  if (box) { await p.evaluate(y=>scrollTo(0,y-30), box.top); await p.waitForTimeout(300); await p.screenshot({ path:`docs/qa/sec-${name}.jpg`, clip:{x:0,y:0,width:1440,height:Math.min(760,box.height+50)}, quality:80, type:'jpeg' }); }
}
await b.close(); console.log('shots done');
