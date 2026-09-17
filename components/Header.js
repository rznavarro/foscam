import Link from "next/link";
import { categories } from "@/data/categories";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 px-4 pt-4">
      <header className="reveal glass-card mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 shadow-card">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-ivory"
        >
          <span className="text-brass">FOS</span>CAM
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ivory/60 lg:flex">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="transition hover:text-brass-light"
            >
              {cat.name}
            </Link>
          ))}
          <Link href="/nosotros" className="transition hover:text-brass-light">
            Nosotros
          </Link>
        </nav>

        <Link
          href="/categoria/camaras-de-exterior"
          className="rounded-full bg-brass px-5 py-2.5 font-heading text-sm font-medium text-ink transition hover:bg-brass-light"
        >
          Ver catálogo
        </Link>
      </header>
    </div>
  );
}
