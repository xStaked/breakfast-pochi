# Pochi Desayunos · Landing page

Landing page comercial de **Pochi Desayunos**, emprendimiento de desayunos sorpresa y
cajas de regalo en **Soacha, Cundinamarca, Colombia**. El objetivo de la página es
posicionar búsquedas locales como *"desayunos sorpresa en Soacha"*, presentar el
catálogo real con precios y convertir visitas en pedidos por WhatsApp.

Stack: **Next.js (App Router) · React · TypeScript estricto · Tailwind CSS · Lucide React**.
Desplegable en Vercel sin cambios.

---

## 1. Cómo ejecutar el proyecto

Requisitos: Node.js 20 o superior.

```bash
npm install        # instala dependencias
npm run dev        # desarrollo en http://localhost:3000
npm run build      # compilación de producción
npm start          # sirve la compilación de producción
npm run typecheck  # revisión de tipos sin emitir archivos
```

## 2. Variables de entorno

Copia `.env.example` como `.env.local` y completa los valores. **Ninguna variable tiene
valores de ejemplo dentro del código**: si falta un dato, el sitio no lo inventa.

| Variable | Qué hace | Estado |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp con código de país, solo dígitos (ejemplo de formato: `573001234567`). Se usa en todos los botones de pedido. | **Pendiente** |
| `NEXT_PUBLIC_SITE_URL` | Dominio definitivo sin barra final (ejemplo de formato: `https://www.tusitio.com`). Alimenta URL canónica, Open Graph, sitemap, robots.txt y datos estructurados. | **Pendiente** |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Etiqueta de verificación de Google Search Console. | Opcional |

**Importante antes de publicar**

1. Configura `NEXT_PUBLIC_WHATSAPP_NUMBER`. Sin él, los botones abren WhatsApp con el
   mensaje preparado pero sin destinatario (`wa.me/?text=...`): funciona, pero el cliente
   debe elegir el contacto a mano.
2. Configura `NEXT_PUBLIC_SITE_URL` con el dominio real. Sin él, `sitemap.xml` se genera
   vacío y no se publica URL canónica (a propósito: no se publican dominios inventados).
   Como ayuda temporal, si despliegas en Vercel la URL del despliegue se usa
   automáticamente (`NEXT_PUBLIC_VERCEL_URL`), de modo que sitemap y canónicas funcionan
   desde el primer deploy.

## 3. Cómo cambiar precios, productos y datos comerciales

Todo el contenido comercial está centralizado en `lib/`:

| Archivo | Qué contiene |
| --- | --- |
| `lib/site.ts` | Marca, ubicación, configuración de dominio/WhatsApp/redes y condiciones comerciales pendientes |
| `lib/products.ts` | Catálogo: nombre, descripción, precio en COP, lista de incluidos, imagen y texto alternativo |
| `lib/occasions.ts` | Categorías por ocasión y sus fotografías |
| `lib/faq.ts` | Preguntas frecuentes (texto visible y marcado FAQPage usan la misma fuente) |
| `lib/gallery.ts` | Fotografías y pies de la galería |
| `lib/whatsapp.ts` | Plantillas de los mensajes contextuales de WhatsApp |
| `lib/seo.ts` | Datos estructurados JSON-LD |

Para cambiar un precio, edita `priceCOP` en `lib/products.ts`. El formato visible
(`$60.000 COP`) se genera solo con `lib/format.ts`. Los mensajes de WhatsApp toman el
nombre y el precio de la misma fuente, así que nunca quedan desactualizados.

Para reemplazar fotografías, coloca los archivos en `public/images/` y actualiza
`src`, `width` y `height` en el archivo de datos correspondiente. El script
`scripts/prepare-images.mjs` recorta el logotipo circular y sirve de referencia para
preparar nuevas imágenes sin alterar la apariencia del producto.

## 4. Pendientes de confirmación con el negocio

Estos datos **no se inventaron** en la página y deben confirmarse antes de publicar:

- Número de WhatsApp de contacto.
- Dominio definitivo del sitio.
- Cobertura de entrega y valor del domicilio.
- Tiempo de anticipación recomendado para pedidos.
- Medios de pago aceptados.
- Horarios de atención.
- Redes sociales oficiales (se muestran en el footer solo si se configuran en
  `lib/site.ts`).
- Texto definitivo del aviso de privacidad (`app/privacidad/page.tsx` está marcado como
  borrador).
- Fotografías propias por ocasión: hoy la sección de ocasiones y la galería reutilizan las
  cuatro fotos reales del catálogo con encuadres distintos.

## 5. Arquitectura SEO

- **Metadatos**: título y descripción únicos, URL canónica, Open Graph, Twitter Cards,
  favicons y verificación de Search Console, todo desde `app/layout.tsx`.
- **HTML semántico**: un solo `H1`, `H2` por sección, `H3` para productos y preguntas, y
  etiquetas `header`, `nav`, `main`, `section`, `article`, `footer`.
- **Datos estructurados** (`lib/seo.ts`): `LocalBusiness` con la ubicación confirmada,
  `Product` con precio en COP para cada caja y `FAQPage` con las mismas preguntas visibles.
  A propósito se omiten teléfono, dirección postal, horarios, coordenadas, reseñas,
  valoraciones, precio de entrega y área de servicio: no están confirmados.
  Nota: Google limita la visualización de resultados enriquecidos de `FAQPage`; el marcado
  se mantiene porque es válido y ayuda a otros buscadores, pero no depende de él el SEO.
- **Rastreo**: `app/sitemap.ts` y `app/robots.ts` dinámicos, página 404 propia en
  `app/not-found.tsx` y sin bloqueo de CSS/JS.
- **Palabras clave**: se usan de forma natural en título, encabezados y textos
  ("desayunos sorpresa en Soacha", "cajas de regalo", "para cumpleaños", "aniversarios").
  Los volúmenes de búsqueda y la dificultad **no se estimaron**: no había acceso a datos
  de herramientas SEO, así que las palabras clave son hipótesis pendientes de validar con
  Google Keyword Planner, Search Console o Semrush/Ahrefs.

### Próximos pasos de posicionamiento

1. Crear y verificar el perfil de **Google Business Profile** si el modelo de atención lo
   permite (negocio a domicilio: revisar elegibilidad según las directrices de Google; no
   publicar una dirección residencial sin autorización).
2. Registrar la propiedad en **Google Search Console** y enviar `sitemap.xml`.
3. Medir con **Lighthouse** y Search Console una vez publicado. La página está construida
   para ser ligera (imágenes optimizadas y diferidas, hero prioritario, fuentes optimizadas,
   componentes de servidor, JS mínimo), pero las métricas reales (LCP, INP, CLS) solo se
   pueden afirmar después de medir.
4. Contenido editorial futuro (no implementado en esta versión, la landing es lo primero):
   "Qué regalar en un cumpleaños en Soacha", "Ideas de desayunos sorpresa para
   cumpleaños", "Cómo sorprender a tu pareja con un desayuno especial", "Ideas de regalos
   para aniversarios", "Qué incluir en un desayuno sorpresa", "Ideas de detalles para el
   Día de la Madre", "Cómo elegir un desayuno sorpresa según tu presupuesto". Cada pieza
   debe responder una pregunta real y enlzar al catálogo.

## 6. Analítica y eventos de conversión

Los eventos ya están instrumentados en `lib/analytics.ts` y se disparan desde los
componentes. Se empujan a `window.dataLayer` y, si `gtag` está cargado, se envían como
eventos de GA4. Mientras no se integre la analítica, no se envía nada a ningún servicio.

| Evento | Cuándo se dispara |
| --- | --- |
| `whatsapp_click` | Cualquier CTA general de WhatsApp (header, menú móvil, hero, catálogo, cómo pedir, SEO local, CTA final, botón flotante, página 404) |
| `product_whatsapp_click` | Botón de WhatsApp de un producto concreto (lleva `product` y `price`) |
| `product_selection` | El visitante elige un producto desde su tarjeta |
| `catalog_section_view` | El catálogo entra en pantalla |

**Cómo integrar Google Analytics 4**: añade el fragmento de gtag de tu propiedad en
`app/layout.tsx` (antes de `</head>`) o mediante Google Tag Manager. Si se activa analítica
no esencial, implementa el banner de consentimiento correspondiente (por ejemplo, Google
Consent Mode) y no envíes información personal innecesaria.

## 7. Accesibilidad y experiencia móvil

- Navegación completa por teclado con foco visible, enlace para saltar al contenido y
  menú móvil con `aria-expanded`.
- Acordeón de preguntas frecuentes con `aria-expanded`, `aria-controls` y región asociada.
- Contraste de texto verificado ≥ 4.5:1 (los botones rellenos usan un rosa más profundo que
  el rosa de marca para cumplirlo con texto blanco).
- Imágenes con texto alternativo descriptivo y dimensiones explícitas.
- Diseño pensado primero para móvil (375px) y adaptado a 768 / 1024 / 1440 sin scroll
  horizontal; el botón flotante de WhatsApp respeta el área segura inferior y no tapa
  precios ni botones.
- Respeta `prefers-reduced-motion`.

## 8. Despliegue en Vercel

1. Sube el proyecto a un repositorio de GitHub/GitLab.
2. Importa el repositorio en Vercel (detecta Next.js automáticamente).
3. Configura las variables de entorno en *Project Settings → Environment Variables*
   (`NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_SITE_URL`,
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`).
4. Despliega. Después del deploy, revisa `https://tu-dominio.com/sitemap.xml` y
   `https://tu-dominio.com/robots.txt`.
5. Verifica la propiedad en Google Search Console y envía el sitemap.

## 9. Estructura del proyecto

```
app/                    rutas, layout, metadatos, sitemap, robots, 404, privacidad
  layout.tsx            cabecera, footer, botón flotante, JSON-LD
  page.tsx              composición de la landing (11 secciones)
components/             secciones y componentes visuales reutilizables
lib/                    datos, configuración, WhatsApp, analítica, SEO
public/images/          fotografías reales del negocio y logotipo
scripts/                utilidad para preparar imágenes
```
