/**
 * Mensajes contextuales de WhatsApp.
 * Se construyen con encodeURIComponent para que espacios, tildes y caracteres
 * especiales viajen correctos en el enlace oficial wa.me.
 */
import { config } from "@/lib/site";
import { formatCOP } from "@/lib/format";
import type { Product } from "@/lib/products";

export function whatsappUrl(message: string): string {
  const base = config.whatsappNumber
    ? `https://wa.me/${config.whatsappNumber}`
    : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function productMessage(product: Product): string {
  return `Hola, Pochi Desayunos. Vi su página web y me interesa la ${product.name} de ${formatCOP(
    product.priceCOP,
  )}. ¿Me pueden compartir la disponibilidad y las opciones de entrega en Soacha?`;
}

export function occasionMessage(occasion: string): string {
  return `Hola, Pochi Desayunos. Vi su página web y busco un desayuno sorpresa para ${occasion}. ¿Me pueden compartir las opciones disponibles y las opciones de entrega en Soacha?`;
}

export const messages = {
  general:
    "Hola, Pochi Desayunos. Vi su página web y me interesa hacer un pedido. ¿Me pueden compartir la disponibilidad y las opciones de entrega en Soacha?",
  order:
    "Hola, Pochi Desayunos. Vi su página web y quiero hacer un pedido. ¿Me ayudan a elegir mi desayuno sorpresa y a consultar la disponibilidad?",
  help:
    "Hola, Pochi Desayunos. Vi su página web y no sé cuál desayuno elegir. ¿Me pueden ayudar a escoger uno según la ocasión y el presupuesto?",
  doubt: (question: string) =>
    `Hola, Pochi Desayunos. Vi su página web y tengo una duda: ${question}`,
} as const;
