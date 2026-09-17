import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group block overflow-hidden rounded-base bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative aspect-square bg-ivory">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-contain p-4"
        />
      </div>
      <div className="space-y-1 p-4">
        <p className="text-xs uppercase tracking-wide text-taupe">{product.categoryName}</p>
        <h3 className="line-clamp-2 font-heading text-sm font-medium text-ink">
          {product.name}
        </h3>
        <p className="font-mono text-base font-semibold text-brass">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
