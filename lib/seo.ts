/**
 * Datos estructurados (JSON-LD).
 *
 * Solo se publica información verificable y coherente con el contenido
 * visible: se omiten a propósito teléfono, dirección postal, horarios,
 * coordenadas, reseñas, valoraciones, precios de entrega y área de servicio
 * mientras el negocio no los confirme.
 */
import { brand, config, isSiteUrlConfigured } from "@/lib/site";
import { products } from "@/lib/products";
import { faq } from "@/lib/faq";

function absolute(path: string): string | undefined {
  if (!isSiteUrlConfigured) return undefined;
  return `${config.siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

function productNode(product: (typeof products)[number]) {
  const url = absolute(`/#${product.id}`);
  const image = absolute(product.image.src);
  return {
    "@type": "Product",
    name: product.name,
    description: product.description,
    ...(image ? { image: [image] } : {}),
    brand: { "@type": "Brand", name: brand.name },
    offers: {
      "@type": "Offer",
      price: product.priceCOP,
      priceCurrency: "COP",
      ...(url ? { url } : {}),
    },
  };
}

export function buildJsonLd(): Record<string, unknown> {
  const url = absolute("/");
  const logo = absolute("/images/logo-badge.png");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${url ?? brand.name}#negocio`,
        name: brand.name,
        description: brand.description,
        ...(url ? { url } : {}),
        ...(logo ? { image: [logo] } : {}),
        address: {
          "@type": "PostalAddress",
          addressLocality: brand.location.locality,
          addressRegion: brand.location.region,
          addressCountry: brand.location.country,
        },
      },
      ...products.map(productNode),
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

export function jsonLdScript(): string {
  return JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c");
}
