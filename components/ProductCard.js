import Link from "next/link";
import Image from "next/image";
import { formatPrice, getBadge } from "@/data/products";

export default function ProductCard({ product }) {
  const badge = getBadge(product.id);

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="glass-card group block overflow-hidden rounded-base shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative aspect-square overflow-hidden bg-panel-2">
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-brass px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-ink">
            {badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-contain p-4 transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1 p-4">
        <p className="text-xs uppercase tracking-wide text-taupe">{product.categoryName}</p>
        <h3 className="line-clamp-2 font-heading text-sm font-medium text-ivory">
          {product.name}
        </h3>
        <p className="font-mono text-base font-semibold text-brass-light">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
