/**
 * Preguntas frecuentes.
 * Las respuestas usan solo información confirmada. Donde falta una política
 * comercial, la respuesta invita a confirmar por WhatsApp: no se inventan
 * tiempos, coberturas, personalización ni medios de pago.
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "¿Dónde puedo comprar desayunos sorpresa en Soacha?",
    answer:
      "En Pochi Desayunos preparamos desayunos sorpresa y cajas de regalo en Soacha, Cundinamarca. Puedes explorar el catálogo y escribirnos por WhatsApp para consultar disponibilidad y opciones de entrega.",
  },
  {
    question: "¿Cuánto cuesta un desayuno sorpresa?",
    answer:
      "Nuestras cajas van desde $60.000 COP hasta $95.000 COP según el producto y lo que incluye. El valor de la entrega se consulta aparte antes de confirmar el pedido.",
  },
  {
    question: "¿Qué incluyen los desayunos sorpresa de Pochi?",
    answer:
      "Cada caja tiene su propia combinación de waffles o sándwich, fruta, jugo o frappé, chocolates y dulces. En cada producto del catálogo encontrarás la lista completa de lo que incluye.",
  },
  {
    question: "¿Puedo elegir entre diferentes desayunos?",
    answer:
      "Sí. Tenemos cuatro opciones: Mini Box, Brunch Box, Smile Box y Teddy Box. Si no sabes cuál elegir, escríbenos y te ayudamos a escoger según la ocasión y el presupuesto.",
  },
  {
    question: "¿Puedo enviar un desayuno sorpresa para un cumpleaños?",
    answer:
      "Sí. Elige la caja que más te guste, cuéntanos que es para un cumpleaños y coordinamos la entrega según la disponibilidad del momento.",
  },
  {
    question: "¿Cómo puedo hacer un pedido por WhatsApp?",
    answer:
      "Elige tu desayuno en el catálogo y toca el botón de WhatsApp del producto que te interesa. Se abrirá la conversación con el mensaje listo: solo falta que nos cuentes la ocasión y la fecha que tienes en mente.",
  },
  {
    question: "¿Con cuánta anticipación debo pedir?",
    answer:
      "La anticipación depende de la fecha y de la disponibilidad del momento. Escríbenos con el día de tu sorpresa y te confirmamos si podemos atenderte.",
  },
  {
    question: "¿Realizan entregas a domicilio en Soacha?",
    answer:
      "La cobertura y el valor de la entrega se confirman según el sector. Escríbenos por WhatsApp con la dirección de entrega en Soacha y te compartimos las opciones disponibles.",
  },
  {
    question: "¿Puedo personalizar mi desayuno sorpresa?",
    answer:
      "Las opciones de personalización se revisan caso por caso. Cuéntanos tu idea por WhatsApp y te decimos qué es posible hacer con la disponibilidad del momento.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Los medios de pago vigentes se confirman al hacer el pedido. Escríbenos por WhatsApp y te compartimos las opciones disponibles.",
  },
];
