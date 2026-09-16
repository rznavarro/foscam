import Link from "next/link";
import { categories } from "@/data/categories";

export default function Header() {
  return (
    <header className="bg-navy-deep text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 text-xs sm:text-sm">
        <p className="truncate">
          Bienvenido al sitio oficial de Foscam en Chile · +56 9 4949 2042
        </p>
        <Link href="#" className="shrink-0 text-white/80 hover:text-white">
          Iniciar sesión
        </Link>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
          <span className="text-signal-red">FOS</span>
          <span className="text-white">CAM</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-5 text-sm">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="text-white/80 transition hover:text-white"
            >
              {cat.name}
            </Link>
          ))}
          <Link href="/nosotros" className="text-white/80 transition hover:text-white">
            Nosotros
          </Link>
        </nav>

        <div className="flex items-center gap-4 text-white/80">
          <span aria-hidden="true">♡</span>
          <span aria-hidden="true">🛒</span>
        </div>
      </div>
    </header>
  );
}
