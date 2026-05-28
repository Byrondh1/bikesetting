# Bike Setting

Landing page del taller de bicicletas **Bike Setting** (El Ángel, Carchi, Ecuador).
_Impulsando tus metas sobre 2 ruedas._

Construida con **Next.js 16 + TypeScript + Tailwind CSS**, exportada de forma estática
y desplegada en **GitHub Pages**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build / Export

```bash
npm run build    # genera ./out (sitio estático)
```

## Deploy

Cada push a `main` dispara el workflow de GitHub Actions
(`.github/workflows/deploy.yml`), que construye el sitio y publica `./out` en la rama
**`gh-pages`**.

**Configuración inicial (una sola vez):** en GitHub → *Settings → Pages → Source*,
selecciona la rama `gh-pages`. El sitio quedará disponible en:

```
https://byrondh1.github.io/bikesetting/
```

## Editar contenido

El contenido vive en la carpeta `data/` y se edita sin tocar el resto del código:

- `data/eventos.ts` — agregar/quitar fechas de eventos (cicleadas, ciclopaseos, carreras).
- `data/galeria.ts` — fotos de la galería (instrucciones dentro del archivo).
- `data/servicios.ts` — los servicios ofrecidos.
- `data/contacto.ts` — WhatsApp, email, dirección, horario, Instagram y mapa.
