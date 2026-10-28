/**
 * Capa de eventos de conversión.
 *
 * Los eventos quedan preparados para Google Analytics 4 / Google Tag Manager:
 * se empujan a `window.dataLayer` y, si `gtag` está cargado, se envían como
 * eventos de GA4. Mientras no se integre la analítica, no se envía nada.
 *
 * Eventos definidos:
 * - whatsapp_click            · CTA general de WhatsApp (header, hero, fab, etc.)
 * - product_whatsapp_click    · CTA de WhatsApp de un producto concreto
 * - catalog_section_view      · El catálogo entra en pantalla
 * - product_selection         · El visitante elige un producto
 */
export type AnalyticsEvent =
  | "whatsapp_click"
  | "product_whatsapp_click"
  | "catalog_section_view"
  | "product_selection";

export type AnalyticsParams = Record<string, string | number | boolean>;

type DataLayer = Record<string, unknown>[];

declare global {
  interface Window {
    dataLayer?: DataLayer;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: AnalyticsEvent, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
