import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const out = join(projectRoot, "public", "images");
await mkdir(out, { recursive: true });

const src = join(projectRoot, "..", "image-4.png");
const { data, info } = await sharp(src)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    const bright = (r + g + b) / 3;
    if (sat > 0.28 || bright < 165) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}
const bw = maxX - minX + 1, bh = maxY - minY + 1;
const side = Math.max(bw, bh);
const pad = Math.round(side * 0.02);
const size = side + pad * 2;
const cx = Math.round((minX + maxX) / 2), cy = Math.round((minY + maxY) / 2);
const left = Math.max(0, Math.min(width - size, cx - Math.round(size / 2)));
const top = Math.max(0, Math.min(height - size, cy - Math.round(size / 2)));

console.log(`intrinsic ${width}x${height} · badge bbox ${bw}x${bh} @ ${minX},${minY} · crop ${size}x${size} @ ${left},${top}`);

await sharp(src)
  .extract({ left, top, width: Math.min(size, width), height: Math.min(size, height) })
  .resize(512, 512, { fit: "cover" })
  .png({ compressionLevel: 9 })
  .toFile(`${out}/logo-badge.png`);

console.log("logo-badge.png listo");
