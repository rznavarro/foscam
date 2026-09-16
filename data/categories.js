// Categorías principales mostradas en el menú/home. Los slugs coinciden con
// categoryName/categorySlug reales observados en el catálogo de foscam.cl
// (ver data/products.json). No son datos inventados.
export const categories = [
  {
    slug: "camaras-de-exterior",
    name: "Cámaras de Exterior",
    description:
      "Cámaras IP con certificación IP66, visión nocturna y sirena disuasiva para patios, entradas y fachadas.",
  },
  {
    slug: "camaras-ip-de-interior",
    name: "Cámaras IP de Interior",
    description:
      "Cámaras WiFi con detección de personas por IA y audio bidireccional para el hogar.",
  },
  {
    slug: "4-a-16ch",
    name: "Grabadores NVR/XVR",
    description:
      "Grabadores de video de 4 a 32 canales, compatibles con cámaras IP y análogas.",
  },
  {
    slug: "almacenamiento",
    name: "Almacenamiento",
    description: "Discos duros y tarjetas microSD pensados para grabación continua 24/7.",
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}
