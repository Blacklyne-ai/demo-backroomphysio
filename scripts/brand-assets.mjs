import sharp from 'sharp';
const DARK = { r:16, g:19, b:22, alpha:1 }; // #101316 brand dark

// 1) Logo 1:1 — white emblem, trimmed of transparent padding, kept as-is.
const trimmed = await sharp('docs/assets-raw/logo.png').trim().toBuffer();
const tmeta = await sharp(trimmed).metadata();
await sharp(trimmed).png().toFile('public/logo.png');
console.log('logo.png (white emblem, trimmed):', tmeta.width+'x'+tmeta.height);

// 2) Favicon / touch icon — white emblem on dark rounded tile (visible on light tabs).
async function tile(size, pad){
  const inner = Math.round(size*(1-pad*2));
  const emblem = await sharp(trimmed).resize(inner, inner, {fit:'contain', background:{r:0,g:0,b:0,alpha:0}}).toBuffer();
  return sharp({create:{width:size,height:size,channels:4,background:DARK}})
    .composite([{input:emblem, gravity:'center'}]).png().toBuffer();
}
await sharp(await tile(512,0.16)).toFile('public/favicon.png');
await sharp(await tile(180,0.16)).toFile('public/apple-touch-icon.png');
console.log('favicon.png + apple-touch-icon.png (white emblem on dark tile)');

// 3) Real practice photo (img3) — the actual training space. Web-optimized webp.
await sharp('docs/assets-raw/img3.png').resize({width:1200}).webp({quality:82}).toFile('public/images/raum.webp');
await sharp('docs/assets-raw/img3.png').resize({width:760}).webp({quality:80}).toFile('public/images/raum-sm.webp');
console.log('images/raum.webp (real gym, portrait 1125x2000)');

// 4) Emblem on black square — reuse for OG fallback if needed
await sharp('docs/assets-raw/og.png').resize(1200,1200,{fit:'contain',background:DARK}).flatten({background:DARK}).jpeg({quality:88}).toFile('public/images/og-emblem.jpg');
console.log('done');
