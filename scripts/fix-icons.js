const sharp = require('sharp');
const fs = require('fs');

function createIcoFromPng(pngBuffer, width, height) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(1, 4); // 1 image

  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(width >= 256 ? 0 : width, 0);
  dirEntry.writeUInt8(height >= 256 ? 0 : height, 1);
  dirEntry.writeUInt8(0, 2); // Colors
  dirEntry.writeUInt8(0, 3); // Reserved
  dirEntry.writeUInt16LE(1, 4); // Planes
  dirEntry.writeUInt16LE(32, 6); // BPP
  dirEntry.writeUInt32LE(pngBuffer.length, 8); // Image size
  dirEntry.writeUInt32LE(22, 12); // Offset (6 + 16)

  return Buffer.concat([header, dirEntry, pngBuffer]);
}

async function makeIcons() {
  const svg32 = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#0F766E"/>
    <text x="16" y="22" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle">S</text>
  </svg>`;

  const svg180 = `<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="180" height="180" rx="40" fill="#0F766E"/>
    <text x="90" y="125" font-family="system-ui, sans-serif" font-size="110" font-weight="bold" fill="#FFFFFF" text-anchor="middle">S</text>
  </svg>`;

  const png32 = await sharp(Buffer.from(svg32)).png().toBuffer();
  const png180 = await sharp(Buffer.from(svg180)).png().toBuffer();
  const icoBuffer = createIcoFromPng(png32, 32, 32);

  fs.writeFileSync('app/icon.png', png32);
  fs.writeFileSync('app/favicon.ico', icoBuffer);
  fs.writeFileSync('app/apple-icon.png', png180);

  console.log('Valid icons and favicon.ico generated!');
}

makeIcons().catch((err) => {
  console.error(err);
  process.exit(1);
});
