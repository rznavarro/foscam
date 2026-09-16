# Guía de despliegue — para quien tenga acceso a Back Office / FTP

Este paquete se construyó **sin acceso** al código fuente real de PrestaShop
(tema `PRS01001`) ni al Back Office — solo inspeccionando el HTML en vivo de
`foscam.cl`. Todo lo de abajo es la mejor implementación posible con esa
información; **antes de publicar en producción, confirmar cada punto contra
el código/admin real**, especialmente los marcados "VERIFICAR EN FASE B".

## 1. Dónde va cada archivo

| Archivo | Dónde se aplica | Vía |
|---|---|---|
| `design-tokens.css` | Cargar antes que el resto del CSS custom del tema | Preferencias > Temas > Configurador (`tm_themeoptions`) si permite subir CSS custom, o `themes/PRS01001/assets/css/` por FTP |
| `foscam-redesign-overrides.css` | Cargar después de `design-tokens.css` | Igual que arriba |
| `trust-stats-block.html` | Home, entre el hero y el catálogo destacado | Editar el `.tpl` de la home (FTP) — no hay campo de Back Office para insertar HTML libre en esa posición específica salvo que el tema tenga un bloque CMS configurable ahí |
| `schema-aggregate-rating.json.txt` | Fusionar dentro del `Product` JSON-LD ya existente en la ficha de producto | Requiere acceso al código (el bloque Product lo genera el core de PrestaShop) — no es pegable desde Back Office |
| `faq-camaras-exterior.html` / `-interior.html` / `-nvr-xvr.html` | Campo "Descripción" de cada categoría | Back Office > Catálogo > Categorías > [categoría] > Descripción (WYSIWYG, sí es pegable directamente) |
| `schema-faqpage-*.json.txt` | `<head>` o final del `<body>` de esa misma página de categoría | Requiere acceso al `.tpl` de categoría (los editores WYSIWYG del campo Descripción suelen eliminar `<script>`) |
| `nosotros-copy-ampliado.html` | CMS "Nosotros" (id 4) | Back Office > Preferencias > CMS > Nosotros somos Foscam (WYSIWYG, pegable directamente, pero completar antes los campos `{{...}}`) |
| `SEO-CHECKLIST.md` | Referencia, no se despliega | — |

## 2. Cosas que probablemente se resuelven SOLO desde Back Office (sin FTP)

- Fuente y color global (`--primary-color`, `--secondary-color`,
  `--price-color`, `--border-radius`) — si el "Configurador de temas"
  (`tm_themeoptions`) expone selector de fuente/color, ahí se cambia sin
  tocar código. **Ojo**: ese único `--border-radius` global no puede dar a
  la vez 16px en cards y 999px en botones — para eso sigue haciendo falta
  `foscam-redesign-overrides.css`.
- Meta description / título de cada categoría y producto — Back Office >
  esa categoría o producto > pestaña SEO.
- Contenido de la categoría (para pegar las FAQ) y de las páginas CMS.
- El bug del enlace "mapa del sitio" con espacio sin codificar — Back
  Office > Preferencias de tráfico y SEO de esa página del sistema.

## 3. Cosas que SÍ requieren tocar archivos `.tpl` (FTP o repo real)

- Fix de los `<h1>` duplicados en:
  - El widget de sidebar "Los más vendidos" (candidato: módulo tipo
    `tm_bestsellers` o similar de la familia de módulos del theme-maker;
    confirmar nombre exacto una vez haya acceso). Cambiar
    `<h1 class="h3 product-title">` por `<span class="h3 product-title">`
    o `<p>`, igual que ya hace correctamente la grilla principal de
    productos destacados (que usa `<span class="h3 product-title">`).
  - El widget `bonwhatsappchat`: `<h1 class="whatsappchat-subtitle">` →
    `<p class="whatsappchat-subtitle">` o `<span>`.
- Fusión del fragmento `AggregateRating` dentro del `Product` JSON-LD ya
  existente (no es un campo de Back Office).
- Inserción del `trust-stats-block.html` en la plantilla de home.
- Inserción de los `<script type="application/ld+json">` de FAQPage en las
  plantillas de categoría (si el WYSIWYG los elimina del campo Descripción).
- Conversión de imágenes de producto a WebP (o `<picture>` con fallback),
  y revisión de cobertura de `alt`/`width`/`height` en todo el catálogo.

## 4. Clases/IDs que NO se deben tocar bajo ninguna circunstancia

Confirmadas en el HTML real en vivo como ganchos de JS/filtrado/carrito:

- `.js-product-miniature`, `[data-id-product]`, `[data-id-product-attribute]`
- `.js-top-menu`
- `#search_query_top`, `name="s"` (formulario de búsqueda)
- `.ap-btn-wishlist`, `.ap-btn-compare`, `.st-compare-bt-content`,
  `.st-wishlist-bt-content` (módulo `stfeature`, wishlist/comparar real
  instalado — no es el wishlist/compare nativo de PrestaShop)
- `#blockcart-modal .cart-content` (mini-carrito)
- `.js-footer`
- `#search_filters` y su estructura interna (`ps_facetedsearch`) — se puede
  restylizar (`foscam-redesign-overrides.css` ya lo hace) pero no reordenar
  ni renombrar

El CSS de este paquete ya respeta esta lista — solo cambia propiedades
visuales sobre estos selectores, nunca su nombre ni estructura.

## 5. Próximo paso recomendado

En cuanto exista acceso (Back Office admin y/o FTP/SFTP al hosting), pedir
una nueva exploración del árbol real `themes/PRS01001/` + `modules/` para:
reemplazar los "VERIFICAR EN FASE B" de este paquete por rutas y líneas
exactas, confirmar el nombre real del módulo de sidebar bestsellers,
localizar el generador del `Product` JSON-LD para insertarle
`AggregateRating`, y tomar las capturas "antes/después" reales.
