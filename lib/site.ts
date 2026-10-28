/**
 * Configuración comercial y de marca de Pochi Desayunos.
 *
 * Todo dato comercial vive aquí, en un solo lugar. Los valores que el negocio
 * aún no ha confirmado quedan vacíos y marcados como pendientes: la interfaz
 * nunca muestra ejemplos como si fueran datos reales.
 */

const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
/**
 * Dominio del sitio. Prioridad:
 * 1. NEXT_PUBLIC_SITE_URL (dominio definitivo: obligatorio antes de publicar)
 * 2. NEXT_PUBLIC_VERCEL_URL (URL del despliegue en Vercel, para que sitemap,
 *    URL canónica e imágenes para compartir funcionen desde el primer deploy)
 * Mientras ninguno exista, no se publican URLs inventadas.
 */
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "");

export const config = {
  /** Número de WhatsApp solo con dígitos y código de país. Vacío = pendiente. */
  whatsappNumber: rawWhatsapp.replace(/\D/g, ""),
  /** Dominio del sitio sin barra final. Vacío = pendiente de compra/configuración. */
  siteUrl: rawSiteUrl.replace(/\/+$/, ""),
  /** Etiqueta de verificación de Google Search Console. Vacío = pendiente. */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  /** Redes sociales oficiales. Vacío = pendiente: no se enlazan perfiles inventados. */
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export const brand = {
  name: "Pochi Desayunos",
  shortName: "Pochi",
  tagline: "Regala momentos especiales con Pochi",
  category: "Desayunos sorpresa y cajas de regalo",
  location: {
    locality: "Soacha",
    region: "Cundinamarca",
    country: "CO",
    countryName: "Colombia",
    display: "Soacha, Cundinamarca, Colombia",
  },
  description:
    "Desayunos sorpresa, brunch y cajas de regalo para cumpleaños, aniversarios y ocasiones especiales en Soacha, Cundinamarca. Conoce nuestras opciones y pide por WhatsApp.",
} as const;

/**
 * Condiciones comerciales pendientes de confirmación con el negocio.
 * Se muestran como "se confirma al hacer el pedido" y se documentan en el README.
 */
export const commerce = {
  deliveryCoverage: null as string | null,
  orderNotice: null as string | null,
  paymentMethods: [] as string[],
  openingHours: null as string | null,
};

export const isWhatsappConfigured = config.whatsappNumber.length > 0;
export const isSiteUrlConfigured = config.siteUrl.length > 0;
