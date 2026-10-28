import type { NextConfig } from "next";

/**
 * Con `NEXT_STATIC_EXPORT=1` se genera además un volcado estático del sitio
 * (carpeta `out/`) que sirve para abrir la página sin servidor. El build
 * normal de Vercel no se ve afectado: usa `.next` y optimiza imágenes.
 */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        output: "export",
        distDir: ".next-preview",
        images: { unoptimized: true },
      }
    : {
        images: {
          formats: ["image/avif", "image/webp"],
          deviceSizes: [375, 640, 828, 1080, 1200, 1600],
        },
      }),
};

export default nextConfig;
