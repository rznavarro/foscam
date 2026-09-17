import Image from "next/image";
import Link from "next/link";
import TrustStats from "@/components/TrustStats";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import FaqSection from "@/components/FaqSection";
import Testimonials from "@/components/Testimonials";
import ChevronKnob from "@/components/ChevronKnob";
import Eyebrow from "@/components/Eyebrow";
import { products, getProductBySlug } from "@/data/products";
import { categories } from "@/data/categories";

const FEATURED_IDS = ["1", "2", "66", "105"];

const homeFaqs = [
  {
    q: "¿Qué cámara de exterior aguanta la lluvia y el clima en Chile?",
    a: "Para exteriores en Chile se recomienda una cámara con certificación IP66 o superior. La línea Foscam V5P cumple IP66 y está probada entre -10°C y 50°C.",
  },
  {
    q: "¿Necesito internet para instalar una cámara IP?",
    a: "Sí. Las cámaras IP necesitan conexión a internet (WiFi o cable de red) para verlas remotamente desde el celular. Si la señal WiFi es débil, conviene un modelo PoE.",
  },
  {
    q: "¿Cuál es la diferencia entre un NVR y un XVR?",
    a: "Un NVR recibe video ya digitalizado desde cámaras IP por red. Un XVR es un grabador híbrido que acepta cámaras analógicas HD por coaxial y, en varios modelos, también cámaras IP.",
  },
  {
    q: "¿Qué garantía tienen las cámaras Foscam en Chile?",
    a: "Los productos Foscam vendidos por Foscam Chile cuentan con garantía oficial del fabricante y soporte técnico en español.",
  },
];

// Una foto real de producto de esa categoría representa la card — no hay
// fotos de ambiente propias, así que usamos catálogo real, no stock falso.
const CATEGORY_COVERS = {
  "camaras-de-exterior": products.find((p) => p.id === "2")?.image,
  "camaras-ip-de-interior": products.find((p) => p.id === "1")?.image,
  "4-a-16ch": products.find((p) => p.id === "66")?.image,
  almacenamiento: products.find((p) => p.id === "105")?.image,
};

export default function HomePage() {
  const featured = FEATURED_IDS.map((id) => products.find((p) => p.id === id)).filter(
    Boolean
  );
  const heroProduct = getProductBySlug(
    "2-foscam-v5p-camara-ip-de-exterior-5mp-con-audio-iluminacion-y-sirena-incluida"
  );

  return (
    <>
      <section className="noise-overlay relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative z-[2] mx-auto grid max-w-6xl gap-16 px-4 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div className="reveal">
            <Eyebrow>Foscam Chile</Eyebrow>
            <h1 className="mt-2 font-heading text-5xl font-medium leading-[1.05] tracking-tight text-ivory sm:text-6xl">
              Tu hogar
              <br />
              siempre está
              <br />
              <span className="italic text-brass-light">seguro</span>
            </h1>
            <p className="mt-6 max-w-md text-ivory/60">
              Cámaras de seguridad IP, grabadores NVR/XVR y accesorios de videovigilancia
              para cada rincón de tu hogar o negocio.
            </p>
            <div className="mt-8">
              <Link
                href="/categoria/camaras-de-exterior"
                className="group inline-flex items-center gap-4 rounded-full bg-brass py-2 pl-6 pr-2 font-heading text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                Ver cámaras de exterior
                <ChevronKnob bg="bg-ink" />
              </Link>
            </div>
          </div>

          {heroProduct && (
            <div
              className="reveal glass-card relative mx-auto w-full max-w-sm rounded-[2rem] shadow-card-hover"
              style={{ animationDelay: "150ms" }}
            >
              <div className="relative aspect-square overflow-hidden rounded-[2rem]">
                <Image
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  fill
                  sizes="(min-width: 768px) 24rem, 80vw"
                  className="object-contain p-10"
                />
              </div>

              <div className="glass-card absolute -bottom-6 -left-6 flex items-center gap-4 rounded-3xl px-6 py-4 shadow-card">
                <span className="font-mono text-3xl font-semibold text-brass-light">+10</span>
                <span className="text-xs uppercase leading-tight tracking-wide text-taupe">
                  Años
                  <br />
                  en Chile
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      <TrustBar />

      <TrustStats />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Eyebrow>Categorías</Eyebrow>
        <h2 className="mb-8 font-heading text-2xl font-semibold text-ivory">
          Explora por categoría
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="group relative flex min-h-[260px] overflow-hidden rounded-base border border-brass/10"
            >
              {CATEGORY_COVERS[cat.slug] && (
                <Image
                  src={CATEGORY_COVERS[cat.slug]}
                  alt={cat.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
              <span className="absolute right-6 top-6 font-mono text-xs text-ivory/30">
                0{i + 1}
              </span>
              <div className="relative z-[2] mt-auto p-6">
                <h3 className="font-heading text-xl font-semibold text-ivory">{cat.name}</h3>
                <p className="mt-1 max-w-xs text-sm text-ivory/60">{cat.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brass-light opacity-0 transition group-hover:opacity-100">
                  Ver productos <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Eyebrow>Destacados</Eyebrow>
        <h2 className="mb-8 font-heading text-2xl font-semibold text-ivory">
          Los favoritos de nuestros clientes
        </h2>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Testimonials />

      <FaqSection items={homeFaqs} />
    </>
  );
}
