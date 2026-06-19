import sharp from 'sharp';
const files = ['logo','favicon','img2','img3','og'];
for (const f of files) {
  const p = `docs/assets-raw/${f}.png`;
  const meta = await sharp(p).metadata();
  await sharp(p).resize(360,360,{fit:'inside'}).flatten({background:'#777777'}).jpeg({quality:82}).toFile(`docs/assets-raw/_prev_${f}.jpg`);
  console.log(`${f}: ${meta.width}x${meta.height} ch${meta.channels} alpha:${meta.hasAlpha}`);
}
async function hist(p, label){
  const {data,info} = await sharp(p).resize(120,120,{fit:'inside'}).raw().toBuffer({resolveWithObject:true});
  const m=new Map();
  for(let i=0;i<data.length;i+=info.channels){
    const a=info.channels===4?data[i+3]:255; if(a<60)continue;
    const r=data[i]&0xF8,g=data[i+1]&0xF8,b=data[i+2]&0xF8;
    const h='#'+[r,g,b].map(c=>c.toString(16).padStart(2,'0')).join('');
    m.set(h,(m.get(h)||0)+1);
  }
  const total=[...m.values()].reduce((a,b)=>a+b,0);
  console.log(`\n--- ${label} top colors (of ${total} opaque px) ---`);
  [...m.entries()].sort((a,b)=>b[1]-a[1]).slice(0,14).forEach(([h,n])=>console.log(`${h}  ${(100*n/total).toFixed(1)}%`));
}
await hist('docs/assets-raw/logo.png','LOGO');
