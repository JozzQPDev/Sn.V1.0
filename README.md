
# SANYA SERVICIOS GENERALES S.A.C - Sitio Web

Bienvenido al repositorio del sitio web oficial de **SANYA SERVICIOS GENERALES S.A.C**, una empresa dedicada a ofrecer productos naturales, frescos y saludables. Este sitio web está construido con [Astro](https://astro.build/), un framework moderno para sitios web estáticos y dinámicos, enfocado en rendimiento, SEO y facilidad de mantenimiento.

## 📋 Descripción del Proyecto

SANYA SERVICIOS GENERALES S.A.C es una empresa comprometida con la promoción de hábitos alimenticios saludables y sostenibles. Nuestro sitio web presenta:

- **Productos naturales**: Frutas orgánicas, verduras frescas, chocolates artesanales, mermeladas, cereales integrales, tés e infusiones, y productos ecológicos.
- **Información sobre la empresa**: Historia, misión, visión, valores y ubicación.
- **Catálogo de productos**: Páginas detalladas con descripciones, precios y enlaces directos a WhatsApp para pedidos.
- **Blog**: Artículos sobre beneficios de alimentos naturales, recetas saludables y el arte de la artesanía local (sección en desarrollo).
- **Integraciones**: WhatsApp para contacto, Google Maps para ubicación, y redes sociales (Facebook, Instagram).

El sitio está diseñado para ser responsivo, accesible y optimizado para motores de búsqueda, con un enfoque en la experiencia del usuario móvil.

## ✨ Características Principales

- **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y escritorio.
- **SEO Optimizado**: Meta tags, Open Graph, canonical URLs, sitemap y RSS feed.
- **Contenido Dinámico**: Uso de colecciones de contenido (MDX) para blog y detalles de productos.
- **Integraciones Sociales**: Enlaces a WhatsApp, Facebook e Instagram.
- **Animaciones y Efectos**: Transiciones suaves, carruseles de imágenes y efectos hover.
- **Accesibilidad**: Navegación por teclado, etiquetas ARIA y contraste de colores.
- **Rendimiento**: Carga rápida gracias a Astro (estático por defecto, con hidratación opcional).

## 🏗️ Estructura del Proyecto

mi-proyecto-astro/
├── .astro/                 # Archivos generados por Astro (ignorar en Git)
├── .vscode/                # Configuración de VSCode (ignorar en Git)
├── dist/                   # Salida de build (ignorar en Git)
├── node_modules/           # Dependencias (ignorar en Git)
├── public/                 # Assets estáticos (imágenes, fuentes, favicon)
│   ├── artesania.jpg
│   ├── chocolate.jpg
│   ├── favicon.svg
│   ├── fonts/
│   │   ├── atkinson-bold.woff
│   │   └── atkinson-regular.woff
│   ├── Logo.png
│   ├── mermelada.jpg
│   ├── referencia1.jpg - referencia4.jpg  # Imágenes de ubicación
│   └── retablo.jpg
├── src/
│   ├── assets/             # Imágenes optimizadas por Astro
│   │   ├── baner.jpg
│   │   ├── blog-placeholder-*.jpg
│   │   ├── facebook.png
│   │   ├── instagram.png
│   │   ├── Logo.png & Logo1.png
│   │   ├── w.png & whatsapp.png
│   │   └── ...
│   ├── components/         # Componentes reutilizables
│   │   ├── BaseHead.astro  # Meta tags y SEO
│   │   ├── Footer.astro    # Pie de página con contacto y redes
│   │   ├── FormattedDate.astro  # Formateo de fechas
│   │   ├── Header.astro    # Navegación con menú móvil
│   │   └── HeaderLink.astro  # Enlaces de navegación
│   ├── content/            # Colecciones de contenido (MDX)
│   │   ├── blog/           # Artículos del blog
│   │   │   ├── first-post.md - sixth-post.md
│   │   │   ├── markdown-style-guide.md
│   │   │   └── using-mdx.mdx
│   │   └── detalle-prod/   # Detalles de productos
│   │       ├── first-post.md - sixth-post.md
│   │       ├── markdown-style-guide.md
│   │       └── using-mdx.mdx
│   ├── layouts/            # Layouts para páginas
│   │   └── BlogPost.astro  # Layout para posts de blog
│   ├── pages/              # Páginas del sitio
│   │   ├── about.astro     # Página "Sobre Nosotros"
│   │   ├── index.astro     # Página de inicio
│   │   ├── productos.astro # Catálogo de productos
│   │   ├── rss.xml.js      # Feed RSS
│   │   ├── blog/           # Páginas dinámicas de blog
│   │   │   ├── [...slug].astro  # Página individual de post
│   │   │   └── index.astro      # Lista de posts
│   │   └── detalle-prod/   # Páginas dinámicas de productos
│   │       └── [...slug].astro  # Detalles de producto
│   ├── styles/             # Estilos globales
│   │   └── global.css      # CSS global (variables, resets)
│   ├── consts.ts           # Constantes globales (título, descripción)
│   └── content.config.ts   # Configuración de colecciones de contenido
├── astro.config.mjs        # Configuración de Astro
├── package.json            # Dependencias y scripts
├── README.md               # Este archivo
├── tsconfig.json           # Configuración de TypeScript
└── .gitignore              # Archivos ignorados por Git


### Explicación de Carpetas Clave
- **public/**: Archivos servidos directamente (imágenes de productos, fuentes, favicon). Accesibles vía `/` en el navegador.
- **src/pages/**: Cada archivo `.astro` o `.md` genera una ruta (e.g., `index.astro` → `/`).
- **src/content/**: Contenido estructurado en colecciones. Usa `getCollection()` para recuperar posts/productos.
- **src/components/**: Componentes reutilizables. `BaseHead.astro` maneja SEO; `Header.astro` incluye menú móvil con JavaScript.
- **src/assets/**: Imágenes procesadas por Astro (optimización automática).

## 🚀 Instalación y Configuración

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 18 o superior).
- [Git](https://git-scm.com/) para clonar el repositorio.

### Pasos de Instalación
1. **Clona el repositorio**:
   ```bash
   git clone <URL-del-repositorio>
   cd mi-proyecto-astro
   ```

2. **Instala dependencias**:
   ```bash
   npm install
   ```

3. **Configura el sitio (opcional)**:
   - Edita `astro.config.mjs` para cambiar la URL del sitio (actualmente `https://example.com`).
   - Actualiza `src/consts.ts` con el título y descripción del sitio si es necesario.

4. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   - Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

5. **Construye para producción**:
   ```bash
   npm run build
   ```
   - Los archivos generados estarán en `dist/`.

6. **Vista previa de producción**:
   ```bash
   npm run preview
   ```

## 📝 Gestión de Contenido

### Agregar un Nuevo Post al Blog
1. Crea un archivo `.md` o `.mdx` en `src/content/blog/` (e.g., `nuevo-post.md`).
2. Usa frontmatter para metadatos:
   ```yaml
   ---
   title: "Título del Post"
   description: "Descripción breve"
   pubDate: "2023-10-15"
   heroImage: "/assets/blog-placeholder-1.jpg"
   ---
   ```
3. Escribe el contenido en Markdown/MDX.
4. El post aparecerá automáticamente en `/blog/` y tendrá su propia página en `/blog/nuevo-post`.

### Agregar un Nuevo Producto
1. Crea un archivo `.md` en `src/content/detalle-prod/` (e.g., `nuevo-producto.md`).
2. Frontmatter similar al blog, con campos como precio o categoría.
3. Actualiza `src/pages/productos.astro` para incluir la nueva tarjeta de producto.
4. Enlaza desde la página de productos a `/detalle-prod/nuevo-producto`.

### Editar Contenido Estático
- **Páginas principales**: Edita archivos en `src/pages/` (e.g., `index.astro` para el banner).
- **Componentes**: Modifica `src/components/` para cambios globales (e.g., agregar un nuevo enlace en `Header.astro`).
- **Estilos**: Usa CSS en línea en componentes o edita `src/styles/global.css` para variables globales (colores verde/dorado).
- **Assets**: Reemplaza imágenes en `public/` o `src/assets/` (Astro optimiza automáticamente).

## 🎨 Personalización

- **Colores y Tema**: Variables CSS en `src/styles/global.css` o en componentes (e.g., `--primary-green: #2e8b57`).
- **Fuentes**: Fuentes Atkinson cargadas en `BaseHead.astro`.
- **Animaciones**: CSS keyframes en componentes (e.g., fadeInUp, slideInLeft).
- **Integraciones**: WhatsApp enlaces en botones; mapa de Google en `about.astro` (actualiza embed URL si cambia ubicación).

## 🌐 Despliegue

### Opciones Recomendadas
- **Vercel/Netlify**: Sube el código a GitHub, conecta el repo y despliega automáticamente. Soporte nativo para Astro.
- **GitHub Pages**: Usa `npm run build` y sube `dist/` a una rama `gh-pages`.
- **Otro hosting**: Cualquier servidor que sirva archivos estáticos (e.g., Apache, Nginx).

### Pasos Generales
1. Construye el sitio: `npm run build`.
2. Sube `dist/` a tu hosting.
3. Actualiza `astro.config.mjs` con la URL real para sitemaps y RSS.

## 🐛 Solución de Problemas

- **Errores de build**: Verifica dependencias con `npm install`. Asegúrate de que Node.js sea compatible.
- **Imágenes no cargan**: Verifica rutas en `public/` o usa `src/assets/` para optimización.
- **SEO no funciona**: Revisa `BaseHead.astro` y meta tags.
- **Menú móvil no funciona**: JavaScript en `Header.astro` requiere hidratación (Astro maneja esto automáticamente).
- **Contenido no aparece**: Ejecuta `npm run dev` para regenerar colecciones.

Para más ayuda, consulta la [documentación de Astro](https://docs.astro.build).

## 📄 Licencia y Créditos

- **Licencia**: Este proyecto es privado y propiedad de SANYA SERVICIOS GENERALES S.A.C.
- **Basado en**: [Astro Blog Starter](https://github.com/withastro/astro/tree/main/examples/blog).
- **Desarrollado por**: Jhon03-bit.
- **Tecnologías**: Astro, MDX, TypeScript, CSS, Font Awesome.

¡Gracias por contribuir al crecimiento de SANYA SERVICIOS GENERALES S.A.C!


