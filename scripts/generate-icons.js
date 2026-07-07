#!/usr/bin/env node
// Genera icone PNG minime per la PWA senza dipendenze esterne.
// Usa solo Node.js built-in: zlib per comprimere i pixel PNG.

import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// ── CRC32 (necessario per il formato PNG) ─────────────────
const CRC_TABLE = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  CRC_TABLE[n] = c;
}
function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const t = Buffer.from(type, 'ascii');
  const len = Buffer.allocUnsafe(4); len.writeUInt32BE(data.length, 0);
  const crcIn = Buffer.concat([t, data]);
  const crc = Buffer.allocUnsafe(4); crc.writeUInt32BE(crc32(crcIn), 0);
  return Buffer.concat([len, t, data, crc]);
}

// ── Genera un PNG RGB con sfondo sfumato (blu biblioteca) ─
function createIcon(size) {
  const sig = Buffer.from([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]);

  const ihdr = Buffer.allocUnsafe(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

  // Pixel: un byte di filtro (0=None) + size*3 byte RGB per ogni riga
  const stride = 1 + size * 3;
  const raw    = Buffer.alloc(stride * size);

  const cx = size / 2, cy = size / 2, r = size * 0.42;

  for (let y = 0; y < size; y++) {
    raw[y * stride] = 0; // filter None
    for (let x = 0; x < size; x++) {
      const i = y * stride + 1 + x * 3;
      const t = y / size; // 0=top, 1=bottom

      // Sfumatura: #1d4ed8 (29,78,216) → #1e40af (30,64,175)
      const R = Math.round(29  + (30-29)  * t);
      const G = Math.round(78  + (64-78)  * t);
      const B = Math.round(216 + (175-216)* t);
      raw[i] = R; raw[i+1] = G; raw[i+2] = B;

      // Simbolo "Σ" semplificato: barra orizzontale centrale e diagonali
      const nx = (x - cx) / r, ny = (y - cy) / r; // coordinate normalizzate [-1,1]
      const thick = 0.08;

      const isSymbol = (
        // barra centrale orizzontale |ny| < thick, |nx| < 0.55
        (Math.abs(ny) < thick && Math.abs(nx) < 0.55) ||
        // barra alta
        (Math.abs(ny + 0.55) < thick && Math.abs(nx) < 0.55) ||
        // barra bassa
        (Math.abs(ny - 0.55) < thick && Math.abs(nx) < 0.55) ||
        // diagonale alta-sinistra → centro: ny = nx + 0, per ny in [-0.55,0]
        (ny <= 0 && ny >= -0.55 && Math.abs(ny - nx) < thick * 1.5 && nx < 0.3) ||
        // diagonale centro → bassa-sinistra: ny = -nx, per ny in [0, 0.55]
        (ny >= 0 && ny <= 0.55 && Math.abs(ny + nx) < thick * 1.5 && nx < 0.3)
      );

      if (isSymbol) { raw[i] = 255; raw[i+1] = 255; raw[i+2] = 255; }
    }
  }

  const idat = deflateSync(raw, { level: 6 });

  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

const dir = join(__dirname, '../public/icons');
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'icon-192.png'), createIcon(192));
writeFileSync(join(dir, 'icon-512.png'), createIcon(512));
console.log('✓ Icone generate in public/icons/');
