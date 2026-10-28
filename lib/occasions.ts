/**
 * Categorías por ocasión.
 * Cada tarjeta enlaza al catálogo: no existen páginas de categoría vacías.
 * Las fotos son las fotografías reales del negocio con encuadres distintos;
 * cuando existan fotos específicas por ocasión, se reemplazan aquí.
 */
export type Occasion = {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectPosition: string;
    zoom: number;
  };
};

export const occasions: Occasion[] = [
  {
    id: "cumpleanos",
    title: "Cumpleaños",
    description: "Empieza su día con una sorpresa dulce, bonita y lista para compartir.",
    image: {
      src: "/images/smile-box.jpg",
      alt: "Caja de Pochi Desayunos con frappé, fruta y chocolates para un cumpleaños",
      width: 1086,
      height: 1448,
      objectPosition: "50% 38%",
      zoom: 1.25,
    },
  },
  {
    id: "amor-aniversario",
    title: "Amor y aniversario",
    description: "Un detalle para celebrar la fecha y decirlo con un desayuno bonito.",
    image: {
      src: "/images/teddy-box.jpg",
      alt: "Peluche con globo corazón de la Teddy Box de Pochi Desayunos",
      width: 1086,
      height: 1448,
      objectPosition: "50% 22%",
      zoom: 1.35,
    },
  },
  {
    id: "para-mama",
    title: "Para mamá",
    description: "Un desayuno bonito para agradecerla cualquier día, no solo en su fecha.",
    image: {
      src: "/images/mini-box.jpg",
      alt: "Caja blanca con waffles, flores y moño rosa de Pochi Desayunos",
      width: 900,
      height: 1600,
      objectPosition: "50% 30%",
      zoom: 1.3,
    },
  },
  {
    id: "para-papa",
    title: "Para papá",
    description: "Una caja completa para sorprenderlo y empezar el día de otra manera.",
    image: {
      src: "/images/brunch-box.jpg",
      alt: "Caja de madera con globo rosa, snacks y jugo de Pochi Desayunos",
      width: 1086,
      height: 1448,
      objectPosition: "50% 45%",
      zoom: 1.2,
    },
  },
  {
    id: "para-sorprender",
    title: "Para sorprender",
    description: "Solo porque sí: un detalle inesperado también cambia el día.",
    image: {
      src: "/images/teddy-box.jpg",
      alt: "Caja con dulces y gomitas de la Teddy Box de Pochi Desayunos",
      width: 1086,
      height: 1448,
      objectPosition: "50% 82%",
      zoom: 1.45,
    },
  },
  {
    id: "detalles-especiales",
    title: "Detalles especiales",
    description: "Grados, logros y fechas que merecen celebrarse con algo bonito.",
    image: {
      src: "/images/smile-box.jpg",
      alt: "Detalle de la caja de frutas y los chocolates de la Smile Box de Pochi Desayunos",
      width: 1086,
      height: 1448,
      objectPosition: "62% 78%",
      zoom: 1.5,
    },
  },
];
