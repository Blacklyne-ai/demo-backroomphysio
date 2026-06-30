import sharp from 'sharp';
const W=1200,H=630;
const bg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="g" cx="20%" cy="40%" r="75%">
    <stop offset="0" stop-color="#13302a"/><stop offset="55%" stop-color="#0d1114"/><stop offset="100%" stop-color="#08090b"/>
  </radialGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="0" y="0" width="${W}" height="6" fill="#0B7D46"/>
</svg>`);
const emblem = await sharp('public/logo.png').resize({height:300,fit:'inside'}).toBuffer();
const em = await sharp(emblem).metadata();
const tx = 530;
const txt = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <text x="${tx}" y="288" font-family="Helvetica,Arial,sans-serif" font-size="62" font-weight="800" fill="#ffffff" letter-spacing="-1">Backroom Physio</text>
  <text x="${tx}" y="346" font-family="Helvetica,Arial,sans-serif" font-size="30" font-weight="700" fill="#27e07d" letter-spacing="4">RETURN TO SPORT</text>
  <text x="${tx}" y="396" font-family="Helvetica,Arial,sans-serif" font-size="27" font-weight="400" fill="#aeb6bd">Physiotherapie &amp; Sport-Reha · Berlin-Mitte</text>
</svg>`);
await sharp(bg).composite([
  { input: emblem, left: 95, top: Math.round((H-em.height)/2) },
  { input: txt, left: 0, top: 0 },
]).jpeg({ quality: 90 }).toFile('public/images/og.jpg');
console.log('og.jpg fixed - emblem right edge:', 95+em.width, 'text at:', tx);
