export type Product = {
  id: string;
  name: string;
  description: string;
  priceCOP: number;
  includes: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

/**
 * Catálogo real de Pochi Desayunos.
 * Los precios y el contenido provienen del negocio: no se agregan productos
 * ni precios de ejemplo. Para actualizarlos, edita este archivo.
 */
export const products: Product[] = [
  {
    id: "mini-box",
    name: "Mini Box",
    description:
      "La opción pequeña y bonita para empezar el día con una sorpresa: waffles, fruta, jugo y dulces.",
    priceCOP: 60000,
    includes: [
      "Waffles",
      "Cajita con chocolates Jet",
      "Pincho de gomitas",
      "Jugo",
      "Caja de frutas",
      "Mini Chocorramo",
      "Bolsita de dulces",
    ],
    image: {
      src: "/images/mini-box.jpg",
      alt: "Caja blanca de Pochi Desayunos con waffles, caja de frutas, chocolates y moño rosa",
      width: 900,
      height: 1600,
    },
  },
  {
    id: "brunch-box",
    name: "Brunch Box",
    description:
      "Un brunch dulce para compartir: waffles con sirope de chocolate, jugo, dulces y barriletes.",
    priceCOP: 65000,
    includes: [
      "Waffles con sirope de chocolate",
      "Galleta Club Social",
      "Chocorramo mini",
      "Bolsita de dulces",
      "Jugo",
      "Cajita de chocolates",
      "Barriletes",
    ],
    image: {
      src: "/images/brunch-box.jpg",
      alt: "Caja de madera de Pochi Desayunos con globo rosa, galletas, jugo y dulces",
      width: 1086,
      height: 1448,
    },
  },
  {
    id: "smile-box",
    name: "Smile Box",
    description:
      "Sándwich tipo cubano con frappé de Milo o café a elección, fruta y detalles dulces.",
    priceCOP: 85000,
    includes: [
      "Sándwich tipo cubano",
      "Frappé de Milo o café a elección",
      "Caja de frutas",
      "Caja Ferrero Rocher",
      "Mini Chocorramo",
      "Pincho de gomitas",
    ],
    image: {
      src: "/images/smile-box.jpg",
      alt: "Caja de Pochi Desayunos con frappé, sándwich tipo cubano, caja de frutas y chocolates",
      width: 1086,
      height: 1448,
    },
  },
  {
    id: "teddy-box",
    name: "Teddy Box",
    description:
      "Nuestra caja más completa: sándwich cubano, frappé, fruta, dulces y un peluche para abrazar.",
    priceCOP: 95000,
    includes: [
      "Sándwich cubano",
      "Frappé de Milo o café a elección",
      "Caja de frutas",
      "Caja Ferrero Rocher",
      "Bolsita de dulces",
      "Mini Chocorramo",
      "Pincho de gomitas",
      "Peluche",
    ],
    image: {
      src: "/images/teddy-box.jpg",
      alt: "Caja de Pochi Desayunos con peluche oso, globo corazón, gomitas y dulces",
      width: 1086,
      height: 1448,
    },
  },
];

export const catalogCta = "¿No sabes cuál elegir? Te ayudamos por WhatsApp.";