import sharp from 'sharp';
const dir='docs/assets-raw/';
const ids=['936094','5961849','4065511','5997871','8381735','15875672','30311713','8454909'];
const CW=330,CH=210,cols=4,rows=2,W=CW*cols,H=CH*rows;
const comps=[];
for(let i=0;i<ids.length;i++){
  const cell=await sharp(dir+`px_${ids[i]}.jpg`).resize(CW,CH,{fit:'cover'}).toBuffer();
  const label=Buffer.from(`<svg width="${CW}" height="22"><rect width="100%" height="100%" fill="black" fill-opacity="0.6"/><text x="6" y="16" font-family="sans-serif" font-size="14" fill="#27e07d">${ids[i]}</text></svg>`);
  const x=(i%cols)*CW, y=Math.floor(i/cols)*CH;
  comps.push({input:cell,left:x,top:y},{input:label,left:x,top:y+CH-22});
}
await sharp({create:{width:W,height:H,channels:3,background:'#222222'}}).composite(comps).jpeg({quality:80}).toFile('docs/_sheet.jpg');
console.log('sheet done');
