import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
const PLACE='ChIJL3qj5XdRqEcRpqQCyyQXeqg';
const UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const b=await chromium.launch();
const ctx=await b.newContext({locale:'de-DE',userAgent:UA,viewport:{width:1500,height:1250}});
const p=await ctx.newPage();
const log=(...a)=>console.log(...a);

await p.goto('https://www.google.com/?hl=de&gl=de',{waitUntil:'domcontentloaded',timeout:40000});
await p.waitForTimeout(1200);
for(const s of ['button:has-text("Alle akzeptieren")','#L2AGLb','button[aria-label*="akzeptieren"]']){const e=await p.$(s);if(e){await e.click().catch(()=>{});break;}}
await p.waitForTimeout(1500);

await p.goto(`https://www.google.com/maps/place/?q=place_id:${PLACE}&hl=de&gl=de`,{waitUntil:'domcontentloaded',timeout:45000});
await p.waitForTimeout(4000);
await p.mouse.move(380,600);
// genug scrollen für ~28 Reviews
for(let i=0;i<40;i++){ await p.mouse.wheel(0,1400); await p.waitForTimeout(400); }
// alle "Mehr" aufklappen
for(const sel of ['button.w8nwRe','button:has-text("Mehr")','button[aria-label="Mehr"]']){
  for(const mb of await p.$$(sel)){ await mb.click().catch(()=>{}); }
}
await p.waitForTimeout(1000);

const reviews=await p.evaluate(()=>{
  const seen=new Set(), out=[];
  document.querySelectorAll('div[data-review-id]').forEach(el=>{
    const rEl=el.querySelector('[role="img"][aria-label*="Stern"]'); if(!rEl)return;
    const author=el.querySelector('.d4r55,[class*="d4r55"]')?.textContent?.trim()||'';
    const m=(rEl.getAttribute('aria-label')||'').match(/([0-5])([.,]\d)?/);
    const rating=m?parseFloat(m[0].replace(',','.')):null;
    let text=el.querySelector('.wiI7pd,.MyEned,[class*="wiI7pd"]')?.textContent?.trim()||'';
    text=text.replace(/\s*…?\s*(Mehr|Weniger)\s*$/,'').trim();
    const time=el.querySelector('.rsqaWe,[class*="rsqaWe"]')?.textContent?.trim()||'';
    const photo=el.querySelector('img.NBa7we, button[aria-label] img')?.getAttribute('src')||'';
    const key=author+'|'+text.slice(0,40);
    if(author&&rating&&!seen.has(key)){ seen.add(key); out.push({author,rating,text,time,photo}); }
  });
  return out;
});
log('UNIQUE REVIEWS:', reviews.length);
writeFileSync('docs/_reviews_scraped.json', JSON.stringify(reviews,null,2));
reviews.forEach((r,i)=>log(`${i+1}. ${r.author} (${r.rating}★, ${r.time}) [${r.text.length} chars]${r.text.length>0?'':' [LEER]'}`));
await b.close();
