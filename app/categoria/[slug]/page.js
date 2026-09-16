import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import FaqSection from "@/components/FaqSection";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory, products } from "@/data/products";

const categoryFaqs = {
  "camaras-de-exterior": [
    {
      q: "¿Qué cámara de exterior aguanta la lluvia y el clima en Chile?",
      a: "Se recomienda certificación IP66 o superior. La línea Foscam V5P cumple IP66 y está probada entre -10°C y 50°C.",
    },
    {
      q: "¿Las cámaras de exterior necesitan visión nocturna?",
      a: "Sí, para vigilancia 24 horas se recomienda visión nocturna infrarroja o luz blanca integrada, como en la V5P, que además incluye sirena disuasiva.",
    },
    {
      q: "¿Dónde se guardan las grabaciones?",
      a: "Según el modelo: tarjeta microSD local, un grabador NVR, o almacenamiento en la nube por suscripción.",
    },
  ],
  "camaras-ip-de-interior": [
    {
      q: "¿Qué diferencia hay con una cámara de exterior?",
      a: "Las de interior no necesitan certificación IP66 y suelen ser más compactas y económicas, pero no deben instalarse a la intemperie.",
    },
    {
      q: "¿Detectan personas y no solo movimiento?",
      a: "Los modelos más nuevos, como la Foscam X5, usan IA para distinguir personas de mascotas u otros movimientos.",
    },
    {
      q: "¿Tienen audio bidireccional?",
      a: "La mayoría incluye micrófono y parlante, útil para hablar con quien esté en la habitación desde la app.",
    },
  ],
  "4-a-16ch": [
    {
      q: "¿NVR o XVR?",
      a: "NVR para instalaciones 100% IP. XVR si tienes o vas a instalar cámaras análogas/CCTV por coaxial.",
    },
    {
      q: "¿Cuántas cámaras puedo conectar?",
      a: "De 4 a 16 canales en los modelos de entrada, y 32 canales o más en los de mayor capacidad.",
    },
    {
      q: "¿Cuánto disco duro necesito?",
      a: "Un sistema de 4 a 8 cámaras HD con grabación continua suele requerir entre 1 TB y 4 TB para 15-30 días.",
    },
  ],
};

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug).length
    ? getProductsByCategory(slug)
    : products.filter((p) => p.categorySlug === slug);

  const faqs = categoryFaqs[slug];

  return (
    <>
      <section className="bg-offwhite py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-heading text-3xl font-semibold text-ink">{category.name}</h1>
          <p className="mt-2 max-w-2xl text-ink/70">{category.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        {items.length === 0 ? (
          <p className="text-ink/60">Sin productos disponibles en esta categoría por ahora.</p>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {faqs && <FaqSection title={`Preguntas frecuentes sobre ${category.name.toLowerCase()}`} items={faqs} />}
    </>
  );
}
