import Image from "next/image";
import Link from "next/link";
import TrustStats from "@/components/TrustStats";
import ProductCard from "@/components/ProductCard";
import FaqSection from "@/components/FaqSection";
import Testimonials from "@/components/Testimonials";
import ChevronKnob from "@/components/ChevronKnob";
import { products, getProductBySlug } from "@/data/products";

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

export default function HomePage() {
  const featured = products.slice(0, 8);
  const heroProduct = getProductBySlug(
    "2-foscam-v5p-camara-ip-de-exterior-5mp-con-audio-iluminacion-y-sirena-incluida"
  );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-offwhite to-white">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div className="reveal">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-red">
              Con nuestra app gratuita
            </p>
            <h1 className="mt-4 font-heading text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Tu hogar
              <br />
              siempre está
              <br />
              seguro
            </h1>
            <p className="mt-6 max-w-md text-ink/60">
              Cámaras de seguridad IP, grabadores NVR/XVR y accesorios de videovigilancia,
              con garantía oficial y soporte técnico en español en todo Chile.
            </p>
            <div className="mt-8">
              <Link
                href="/categoria/camaras-de-exterior"
                className="group inline-flex items-center gap-4 rounded-full bg-signal-red py-2 pl-6 pr-2 font-heading text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                Ver cámaras de exterior
                <ChevronKnob bg="bg-signal-red-dark" />
              </Link>
            </div>
          </div>

          {heroProduct && (
            <div
              className="reveal relative mx-auto w-full max-w-sm"
              style={{ animationDelay: "150ms" }}
            >
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 shadow-card-hover backdrop-blur-xl">
                <Image
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  fill
                  sizes="(min-width: 768px) 24rem, 80vw"
                  className="object-contain p-10"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-3xl border border-white/70 bg-white/85 px-6 py-4 shadow-card backdrop-blur-xl">
                <span className="font-mono text-3xl font-semibold text-ink">+10</span>
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

      <TrustStats />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 font-heading text-2xl font-semibold text-ink">Ofertas del día</h2>
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
