import raw from "./products.json";

export const products = raw;

// Curaduría editorial propia de la tienda (no son datos de ventas/reseñas
// reales, así que nunca van acompañados de un número de reviews inventado).
const BADGES = {
  1: "Más vendido", // Foscam X5
  2: "Más vendido", // Foscam V5P
  66: "Recomendado", // NVR 16CH 4K + POE
};

export function getBadge(id) {
  return BADGES[id] ?? null;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function formatPrice(price) {
  if (!price) return "Consultar precio";
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);
}
