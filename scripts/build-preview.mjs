/**
 * Genera `vista-previa.html`: un volcado autónomo de la landing (CSS, JS,
 * fuentes e imágenes incrustados) para poder abrir la página con doble clic
 * o desde el panel de Open Design, sin servidor. La fuente real del sitio
 * sigue siendo el proyecto Next.js.
 */
import { readFile, writeFile, readdir, access } from "node:fs/promises";
import { dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const candidates = ["out", ".next-preview"];
let outDir = join(projectRoot, "out");
for (const candidate of candidates) {
  const dir = join(projectRoot, candidate);
  try {
    await access(join(dir, "index.html"));
    outDir = dir;
    break;
  } catch {
    // probar siguiente candidato
  }
}
const outFile = join(projectRoot, "vista-previa.html");

const mime = {
  ".js": "text/javascript",
  ".css": "text/css",
  ".woff2": "font/woff2",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
};

async function embed(urlPath) {
  const clean = urlPath.split("?")[0];
  const file = join(outDir, clean.replace(/^\//, ""));
  const data = await readFile(file);
  const type = mime[extname(file)] ?? "application/octet-stream";
  return `data:${type};base64,${data.toString("base64")}`;
}

let html = await readFile(join(outDir, "index.html"), "utf8");

// 1. CSS externo -> <style> con fuentes incrustadas
for (const match of [...html.matchAll(/<link rel="stylesheet" href="([^"]+)">/g)]) {
  let css = await readFile(join(outDir, match[1].replace(/^\//, "")), "utf8");
  for (const url of [...css.matchAll(/url\((\/_next\/[^)]+)\)/g)]) {
    css = css.replace(url[1], await embed(url[1]));
  }
  html = html.replace(match[0], `<style>${css}</style>`);
}

// 2. JS externo -> <script> en línea
for (const match of [...html.matchAll(/<script([^>]*) src="([^"]+)"([^>]*)><\/script>/g)]) {
  const js = await readFile(join(outDir, match[2].replace(/^\//, "")), "utf8");
  html = html.replace(match[0], `<script>${js}</script>`);
}

// 3. Precargas de fuentes/scripts: ya no hacen falta
html = html.replace(/<link rel="preload"[^>]+>/g, "");

// 4. Imágenes de /images -> data URI
for (const match of [...html.matchAll(/<img([^>]*) src="(\/images\/[^"]+)"([^>]*)>/g)]) {
  html = html.replace(match[0], `<img${match[1]} src="${await embed(match[2])}"${match[3]}>`);
}

// 5. Cualquier referencia absoluta restante a /_next/ (p. ej. srcset)
for (const match of [...html.matchAll(/(\/_next\/[^\s"')]+)/g)]) {
  try {
    html = html.replace(match[1], await embed(match[1]));
  } catch {
    // se deja tal cual si el recurso no existe
  }
}

await writeFile(outFile, html);

const external = (html.match(/(src|href)="\/[^"]*"/g) ?? []).length;
const files = await readdir(outDir);
console.log(`vista-previa.html generado · ${(html.length / 1e6).toFixed(2)} MB · referencias externas restantes: ${external} · contenido de out/: ${files.join(", ")}`);
