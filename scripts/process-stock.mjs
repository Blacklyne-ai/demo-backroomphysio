import sharp from 'sharp';
const A='docs/assets-raw/';
const mk=async(src,base,w,wsm,q=80)=>{
  await sharp(A+src).resize({width:w}).webp({quality:q}).toFile(`public/images/${base}.webp`);
  await sharp(A+src).resize({width:wsm}).webp({quality:q-4}).toFile(`public/images/${base}-sm.webp`);
  console.log(base,'done');
};
await mk('hero_hi.jpg','hero',2000,1000,78);
await mk('rts_hi.jpg','return-to-sport',1400,720,80);
await mk('berlin_hi.jpg','berlin',1800,900,78);

// OG image 1200x630 — hero, darkened, white emblem + wordmark
const og = await sharp(A+'hero_hi.jpg').resize(1200,630,{fit:'cover',position:'centre'})
  .composite([{input:Buffer.from(`<svg width="1200" height="630"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0c0e" stop-opacity="0.55"/><stop offset="1" stop-color="#0a0c0e" stop-opacity="0.85"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`),top:0,left:0}])
  .toBuffer();
const emblem = await sharp('public/logo.png').resize(120).toBuffer();
const txt = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="80" y="430" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="#ffffff" letter-spacing="1">Backroom Physio Berlin</text>
  <text x="82" y="490" font-family="Arial, sans-serif" font-size="30" font-weight="500" fill="#27e07d" letter-spacing="3">RETURN TO SPORT · BERLIN-MITTE</text>
</svg>`);
await sharp(og).composite([{input:emblem,top:70,left:80},{input:txt,top:0,left:0}]).jpeg({quality:86}).toFile('public/images/og.jpg');
console.log('og.jpg done');
