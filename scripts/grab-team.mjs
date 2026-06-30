import { readdirSync, statSync, copyFileSync } from 'node:fs';
import sharp from 'sharp';
import { join } from 'node:path';
const DESK = process.env.HOME + '/Desktop';
const now = Date.now();
const files = readdirSync(DESK).filter(f => /\.(png|jpe?g)$/i.test(f))
  .map(f => ({ f, p: join(DESK, f), m: statSync(join(DESK, f)).mtimeMs }))
  .filter(o => now - o.m < 30*60*1000)
  .sort((a,b)=>b.m-a.m);
let i=0;
for (const o of files) {
  try {
    const meta = await sharp(o.p).metadata();
    const portrait = meta.height > meta.width;
    const tag = portrait ? 'PORTRAIT' : 'wide';
    console.log(`${tag}\t${meta.width}x${meta.height}\t${o.f}`);
    if (portrait && meta.width > 700) { // wahrscheinlich Personenfoto
      copyFileSync(o.p, `docs/assets-raw/cand_${i}.jpg`);
      await sharp(o.p).resize(240).jpeg({quality:80}).toFile(`docs/assets-raw/_candthumb_${i}.jpg`);
      console.log(`   -> cand_${i}.jpg`);
      i++;
    }
  } catch(e) { console.log('skip', o.f, e.message); }
}
console.log('portrait candidates:', i);
