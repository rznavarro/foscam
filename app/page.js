import Link from "next/link";
import TrustStats from "@/components/TrustStats";
import ProductCard from "@/components/ProductCard";
import FaqSection from "@/components/FaqSection";
import Testimonials from "@/components/Testimonials";
import { products } from "@/data/products";

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

  return (
    <>
      <section className="bg-offwhite">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-signal-red">
            Con nuestra app gratuita
          </p>
          <h1 className="max-w-2xl font-heading text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Tu hogar siempre está seguro
          </h1>
          <p className="max-w-xl text-ink/70">
            Cámaras de seguridad IP, grabadores NVR/XVR y accesorios de videovigilancia,
            con garantía oficial y soporte técnico en español en todo Chile.
          </p>
          <Link
            href="/categoria/camaras-de-exterior"
            className="rounded-full bg-signal-red px-6 py-3 font-heading text-sm font-semibold text-white transition hover:bg-signal-red-dark"
          >
            Ver cámaras de exterior
          </Link>
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
