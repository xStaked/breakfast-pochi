import type { MetadataRoute } from "next";
import { config, isSiteUrlConfigured } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Sitemap dinámico.
 * Requiere NEXT_PUBLIC_SITE_URL para publicar URLs absolutas: sin dominio
 * configurado no se publican URLs inventadas.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isSiteUrlConfigured) return [];

  return [
    {
      url: `${config.siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${config.siteUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
