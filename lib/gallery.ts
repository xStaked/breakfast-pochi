/**
 * Galería editorial del catálogo.
 * Se usan las fotografías reales del negocio: cuatro planos completos y dos
 * primeros planos con encuadre propio, tal como pide la sección de galería.
 * Cuando lleguen más fotos del negocio, se reemplazan aquí.
 */
export type GalleryTile = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  orientation: "portrait" | "landscape";
  objectPosition?: string;
  zoom?: number;
};

export const galleryTiles: GalleryTile[] = [
  {
    id: "teddy-completa",
    src: "/images/teddy-box.jpg",
    alt: "Teddy Box de Pochi Desayunos con peluche oso, globo corazón y caja de dulces",
    caption: "Teddy Box · peluche incluido",
    orientation: "portrait",
    objectPosition: "50% 35%",
  },
  {
    id: "smile-completa",
    src: "/images/smile-box.jpg",
    alt: "Smile Box de Pochi Desayunos con frappé, sándwich tipo cubano, fruta y chocolates",
    caption: "Smile Box · frappé y fruta",
    orientation: "portrait",
    objectPosition: "50% 50%",
  },
  {
    id: "waffles-detalle",
    src: "/images/mini-box.jpg",
    alt: "Primer plano de los waffles y el moño rosa de la Mini Box de Pochi Desayunos",
    caption: "Primer plano de los waffles",
    orientation: "portrait",
    objectPosition: "42% 58%",
    zoom: 1.7,
  },
  {
    id: "empaque-detalle",
    src: "/images/brunch-box.jpg",
    alt: "Detalle de la caja de madera con moños rosados y globo de la Brunch Box",
    caption: "El empaque de la Brunch Box",
    orientation: "landscape",
    objectPosition: "50% 22%",
    zoom: 1.35,
  },
  {
    id: "brunch-completa",
    src: "/images/brunch-box.jpg",
    alt: "Brunch Box de Pochi Desayunos con galletas, jugo, chocolates y barriletes",
    caption: "Brunch Box · lista para compartir",
    orientation: "landscape",
    objectPosition: "50% 55%",
    zoom: 1.15,
  },
  {
    id: "dulces-detalle",
    src: "/images/teddy-box.jpg",
    alt: "Primer plano de las gomitas y los dulces de la Teddy Box de Pochi Desayunos",
    caption: "Gomitas, chocolates y dulces",
    orientation: "landscape",
    objectPosition: "50% 82%",
    zoom: 1.55,
  },
];
