# Checklist SEO on-page — Foscam Chile

Basado en hallazgos verificados en vivo el 2026-09-16 contra `foscam.cl`
(no en supuestos del metaprompt original). Leyenda: ✅ ya existe y está bien
· ❌ falta / confirmado roto · ⚠️ verificar con acceso admin (no se pudo
confirmar cobertura completa desde fuera).

## Home (`/`)

| Ítem | Estado | Detalle |
|---|---|---|
| `<title>` | ✅ | "Foscam Chile" — podría mejorarse con propuesta de valor, pero no está vacío |
| Meta description | ⚠️ | No verificada en esta pasada (el snapshot local mostraba el placeholder por defecto de PrestaShop "Tienda creada con PrestaShop" — confirmar en vivo si ya se corrigió) |
| `<h1>` único | ❌ | La home hereda el mismo widget de "Los más vendidos" (3× `<h1>`) y el widget de WhatsApp (2× `<h1>`) que aparecen en todas las páginas — ver sección global abajo |
| Schema Organization/WebSite | ✅ | Presente y correcto |
| Bloque de estadísticas de confianza | ❌ | No existe — ver `trust-stats-block.html` |

## Categoría (ej. `/19-camaras-de-exterior`)

| Ítem | Estado | Detalle |
|---|---|---|
| `<title>` | ✅ | "Cámaras de exterior" — funcional pero sin marca ni atributo diferenciador; se puede mejorar a "Cámaras IP de Exterior IP66 | Foscam Chile" |
| Meta description | ❌ **confirmado vacío** | `<meta name="description" content="">` en `/19-camaras-de-exterior` |
| Canonical | ✅ | `<link rel="canonical">` presente y correcto |
| `<h1>` único | ❌ **confirmado roto** | Hasta 7 `<h1>` en la página: 3× sidebar "Los más vendidos" (`h1.h3.product-title`), 2× widget WhatsApp (`h1.whatsappchat-subtitle`), 1× real (`h1.h1`) |
| Schema BreadcrumbList | ✅ | Presente y correcto |
| Schema ItemList | ✅ | Presente y correcto |
| Schema FAQPage | ❌ | No existe — ver `faq-camaras-exterior.html` + `schema-faqpage-camaras-exterior.json.txt` (y sus pares para interior/grabadores) |
| Labels de filtro (`ps_facetedsearch`) | ⚠️ | Estructura confirmada (`#search_filters .facet .facet-title`), estilo pendiente de aplicar vía `foscam-redesign-overrides.css` |

## Producto (ej. ficha V5P)

| Ítem | Estado | Detalle |
|---|---|---|
| `<title>` | ✅ | "Foscam V5P Cámara IP de exterior 5MP con Audio, Iluminación y Sirena" — buen formato marca + atributo |
| Meta description | ✅ | Poblada y de buena calidad en la muestra revisada — **auditar el resto del catálogo**, no asumir que todos los productos la tienen |
| Canonical | ✅ | Presente y correcto |
| Schema `Product` (name, sku, brand, offers, availability) | ✅ | **Ya existe**, generado por el core de PrestaShop — no recrear |
| Schema `AggregateRating` | ❌ **confirmado ausente** | Ver `schema-aggregate-rating.json.txt` — solo emitir si el producto tiene reseñas reales en `myprestacomments` |
| `<h1>` único | ❌ **confirmado roto** | Mismo patrón que categoría (7 `<h1>` totales), más un `<h1>` adicional tecleado a mano dentro del texto de descripción del producto (contenido WYSIWYG, se corrige editando el texto, no la plantilla) |
| Alt text en imágenes | ⚠️ | La imagen secundaria "hover" del listado de productos tiene `alt=""` confirmado (línea 1234 del snapshot); las imágenes principales sí tienen alt descriptivo |
| `width`/`height` en `<img>` (CLS) | ✅ | Presentes de forma consistente en las miniaturas revisadas |
| WebP | ❌ **confirmado ausente** | Todas las imágenes revisadas son `.jpg`, cero referencias a `.webp` en el sitio |

## CMS ("Nosotros" y páginas de contenido)

| Ítem | Estado | Detalle |
|---|---|---|
| `<title>` / meta description | ✅ | Ambos poblados y de buena calidad en "Nosotros" |
| `<h1>` único | ❌ **confirmado roto** | La página CMS tiene 2 `<h1>` propios (`h1.h1` genérico "Nosotros" + `h1.page-heading` "Nosotros somos Foscam en Chile") más los 5 globales (sidebar + whatsapp) = hasta 7 |
| Contenido "sobre nosotros" | ⚠️ mejorable | Ya existe contenido real (desde 2012, certificaciones FCC/CE/RoHS, testimonios) — falta NAP explícito, estado de distribuidor oficial y tabla comparativa. Ver `nosotros-copy-ampliado.html` |
| Schema `LocalBusiness` | ❌ | No implementado — **condicionado**: no se encontró dirección física en el sitio; confirmar con el cliente si existe local o es 100% online antes de emitir este schema (un `LocalBusiness` sin dirección real es contraproducente) |

## Hallazgos transversales (afectan todo el sitio)

| Ítem | Estado | Detalle |
|---|---|---|
| Enlace "Mapa del sitio" | ❌ **confirmado roto** | Apunta a `https://foscam.cl/mapa del sitio` — espacio sin codificar en la URL amigable de esa página CMS/sistema. Corregible desde Back Office (Preferencias de tráfico y SEO de esa página) |
| Sitemap XML (`sitemap.xml`) | ⚠️ | No se detectó ninguna referencia a un sitemap XML real ni a un módulo generador — solo el enlace roto de arriba. Confirmar en Back Office si algún módulo de sitemap está instalado/activo; si no, instalar uno y enviarlo a Search Console |
| Enlaces internos cruzados entre categorías relacionadas | ❌ | No se detectaron enlaces tipo "Accesorios compatibles" / "Almacenamiento compatible" desde fichas de producto — pendiente de diseño en Fase B |
| gtag / PayPal SDK | ✅ (no tocar) | Confirmados en `<head>`, no requieren cambios — cualquier edición de `<head>` en Fase B debe dejarlos intactos |
