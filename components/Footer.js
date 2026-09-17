import Link from "next/link";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="border-t border-brass/10 bg-panel text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-bold">
            <span className="text-brass">FOS</span>CAM
          </p>
          <p className="mt-3 text-sm text-ivory/60">
            Cámaras de seguridad, grabadores NVR/XVR y hogar inteligente en Chile.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brass/80">
            Categorías
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/categoria/${cat.slug}`} className="text-ivory/70 hover:text-brass-light">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brass/80">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            <li>WhatsApp: +56 9 4949 2042</li>
            <li>
              <Link href="/nosotros" className="hover:text-brass-light">
                Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brass/10 px-4 py-5 text-center text-xs text-ivory/40">
        © {new Date().getFullYear()} Foscam Chile — Mockup visual, no es el sitio de producción.
      </div>
    </footer>
  );
}
