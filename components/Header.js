import Link from "next/link";
import { categories } from "@/data/categories";
import ChevronKnob from "@/components/ChevronKnob";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 px-4 pt-4">
      <header className="reveal mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/70 bg-white/70 py-2 pl-5 pr-2 shadow-card backdrop-blur-xl">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-ink"
        >
          <span className="text-signal-red">FOS</span>CAM
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/70 lg:flex">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="transition hover:text-ink"
            >
              {cat.name}
            </Link>
          ))}
          <Link href="/nosotros" className="transition hover:text-ink">
            Nosotros
          </Link>
        </nav>

        <Link
          href="/categoria/camaras-de-exterior"
          className="group flex items-center gap-3 rounded-full bg-navy-deep py-1 pl-4 pr-1 font-heading text-sm font-medium text-white transition hover:-translate-y-0.5"
        >
          <span className="hidden sm:inline">Ver catálogo</span>
          <ChevronKnob size="h-8 w-8" bg="bg-signal-red group-hover:bg-signal-red-dark" />
        </Link>
      </header>
    </div>
  );
}
