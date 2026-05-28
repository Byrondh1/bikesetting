# CLAUDE.md — Bike Setting

Landing page para **Bike Setting**, taller de bicicletas en El Ángel, Carchi, Ecuador.

> **Slogan:** Impulsando tus metas sobre 2 ruedas

## Cliente

Taller de bicicletas (único en su ciudad) que ofrece mantenimientos preventivos y
correctivos, repuestos, accesorios, asesoramiento técnico, guianza en rutas y
organización de eventos ciclísticos. Diferenciador: certificación oficial como
**Mecánico Shimano** y experiencia en la **Vuelta a Nariño** con el Team C&S.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 3**
- Export **estático** (`output: 'export'`) para **GitHub Pages**
- Sin librerías de UI externas (lightbox y formulario hechos a mano)

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:3000)
npm run build    # build + export estático a ./out
```

> Nota: al hacer build, las rutas de assets usan el prefijo `/bikesetting`
> (basePath), ya que GitHub Pages sirve el sitio en esa subruta.

## Estructura

```
app/            layout + page (ensambla las secciones)
components/     una sección o widget por archivo
data/           contenido editable por el cliente (ver abajo)
lib/whatsapp.ts helper para construir enlaces wa.me
.github/workflows/deploy.yml  CI: build + deploy a gh-pages
```

## Contenido editable (sin tocar código)

- **`data/eventos.ts`** — fechas de cicleadas, ciclopaseos y carreras. Copia un bloque
  `{ ... }` para agregar un evento. Array vacío → se muestra "Próximamente".
- **`data/galeria.ts`** — imágenes de la galería. Por defecto usa gradientes de marca
  como placeholder; agrega `imagen: '/galeria/foto.jpg'` (con la foto en `/public`)
  para mostrar fotos reales.
- **`data/servicios.ts`** — los 6 servicios.
- **`data/contacto.ts`** — WhatsApp, email, Instagram, dirección, horario y mapa.

## Paleta de marca

| Color    | Uso                        | Hex       |
|----------|----------------------------|-----------|
| Amarillo | Acento principal           | `#FFCB05` |
| Negro    | Base / fondos              | `#0A0A0A` |
| Rojo     | Secundario / detalles      | `#E10600` |
| Blanco   | Texto sobre fondos oscuros | `#FFFFFF` |

Definidos como tokens en `tailwind.config.ts` (`amarillo`, `negro`, `rojo`, `blanco`).

## Deploy (GitHub Pages)

- El workflow `.github/workflows/deploy.yml` construye y publica `./out` a la rama
  **`gh-pages`** en cada push a `main`.
- **Configuración única:** en GitHub → *Settings → Pages → Source* selecciona la rama
  `gh-pages`. El sitio quedará en `https://byrondh1.github.io/bikesetting/`.
- Si el repo cambia de nombre, actualizar `basePath`/`assetPrefix` en `next.config.mjs`.

## Contacto del cliente

- WhatsApp: 0963197715 (internacional: 593963197715)
- Email: andresdh9466@gmail.com
- Instagram: @bike_setting
- Dirección: El Ángel, Carchi — Barrio San Francisco, calle Pichincha y 5ta Transversal
- Horario: Lunes a Sábado, 8h00 a 18h00
