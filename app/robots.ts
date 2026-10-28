import type { MetadataRoute } from "next";
import { config, isSiteUrlConfigured } from "@/lib/site";

export const dynamic = "force-static";

/**
 * robots.txt
 * No se bloquea CSS ni JavaScript: el sitio debe renderizar y rastrearse
 * completo. Las rutas internas de Next se controlan por convención.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    ...(isSiteUrlConfigured ? { sitemap: `${config.siteUrl}/sitemap.xml` } : {}),
  };
}
