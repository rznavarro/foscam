import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug, formatPrice } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.name} — ${formatPrice(product.price)}. Envío a todo Chile, garantía oficial Foscam.`,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.image,
    category: product.categoryName,
    offers: {
      "@type": "Offer",
      priceCurrency: "CLP",
      price: String(product.price),
      availability: "https://schema.org/InStock",
      url: `https://foscam-redesign.vercel.app/producto/${product.slug}`,
      seller: { "@type": "Organization", name: "Foscam Chile" },
    },
    brand: { "@type": "Thing", name: "Foscam" },
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <nav className="mb-6 text-xs text-taupe">
        <Link href="/" className="hover:text-brass-light">
          Inicio
        </Link>{" "}
        /{" "}
        <Link href={`/categoria/${product.categorySlug}`} className="hover:text-brass-light">
          {product.categoryName}
        </Link>
      </nav>

      <div className="grid gap-10 sm:grid-cols-2">
        <div className="reveal glass-card relative aspect-square overflow-hidden rounded-base bg-panel-2 shadow-card">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-contain p-8"
          />
        </div>

        <div className="reveal" style={{ animationDelay: "120ms" }}>
          <p className="text-xs uppercase tracking-wide text-taupe">{product.categoryName}</p>
          <h1 className="mt-2 font-heading text-2xl font-semibold text-ivory sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-4 font-mono text-3xl font-semibold text-brass-light">
            {formatPrice(product.price)}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" aria-hidden="true" />
            Stock disponible — despacho a todo Chile
          </p>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-brass py-3.5 font-heading text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:bg-brass-light hover:shadow-card-hover sm:w-auto sm:px-10"
          >
            Añadir al carrito
          </button>

          <div className="mt-6 space-y-2 border-t border-brass/10 pt-6 text-sm text-ivory/60">
            <p>✓ Garantía oficial Foscam</p>
            <p>✓ Soporte técnico en español</p>
            <p className="text-taupe">Medios de pago: Webpay · PayPal · Transferencia</p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
