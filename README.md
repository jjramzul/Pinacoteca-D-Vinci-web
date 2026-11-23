# Pinacoteca D’Vinci — Landing

Landing de la **Pinacoteca & Corporación D’Vinci** (Medellín), construida a partir del export de Claude Design.
Stack: Vite + React 18 + TypeScript + Tailwind CSS. Salida 100 % estática, prerenderizada.

## Comandos

```bash
npm install          # dependencias (Node ≥ 20.19)
npm run dev          # desarrollo en http://localhost:5173
npm run build        # tipos + build + prerender → dist/ listo para hosting estático
npm run preview      # sirve dist/ en local
npm run lint         # ESLint (TS estricto + jsx-a11y + hooks)
npm run format       # Prettier (+ orden de clases Tailwind)
```

### Probar en el móvil

```bash
npm run build && npm run preview   # terminal 1
npm run tunnel                     # terminal 2 → imprime https://xxxx.trycloudflare.com
```

`npm run tunnel` requiere `cloudflared` (`brew install cloudflared`, sin cuenta). Si el móvil está en la misma Wi-Fi, basta con `npm run preview:lan` y abrir la IP que muestra.

Antes de publicar, pon la URL definitiva en `.env` → `VITE_SITE_URL`. Se usa en canonical, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt` y `llms.txt`.

## Estructura

```
src/
├── components/
│   ├── atoms/        Button, Logo, Eyebrow, SectionTitle, Reveal, Picture, RichText,
│   │                 TextLink, ExternalLink, Section, SkipLink, LoopVideo
│   ├── molecules/    NavbarItem, StatItem, ServiceItem, PillarItem, FramedPhoto,
│   │                 ModelFrame (marco + visor 3D), ModelCredit
│   ├── organisms/    Navbar, Hero, ManifestoSection, AboutSection, ServicesSection,
│   │                 ProposalSection, GallerySection, Footer, StructuredData
│   └── templates/    LandingTemplate (compone los organisms en orden)
├── pages/            HomePage (inyecta data/ en el template)
├── hooks/            useInViewReveal, useNavTheme, useSketchfabViewer,
│                     usePingPongVideo, usePrefersReducedMotion
├── data/             home.ts (todo el copy), site.ts (negocio/SEO),
│                     navigation.ts, media.ts (imágenes optimizadas)
├── seo/              JSON-LD, robots.txt, sitemap.xml y llms.txt generados desde data/
├── styles/           tokens.ts (design tokens → Tailwind), index.css, fonts.css
├── types/            tipos de contenido y media
├── assets/images/    originales (vite-imagetools genera AVIF/WebP/JPG + srcset)
├── main.tsx          cliente (hidrata el HTML prerenderizado)
└── entry-server.tsx  render estático usado por scripts/prerender.mjs
public/               favicon, iconos, og-image.jpg, site.webmanifest
```

Cada componente vive en su carpeta con `index.tsx` y props tipadas.

## Editar contenido

- **Textos**: `src/data/home.ts`. Las cursivas y negritas se marcan con `{ em: '…' }` y `{ strong: '…' }`.
- **Datos del negocio** (dirección, teléfono, email, horario, redes): `src/data/site.ts`. Los campos opcionales solo se publican en JSON-LD y `llms.txt` si tienen valor.
- **Fotos**: reemplaza el archivo en `src/assets/images/` con el mismo nombre.
- **Colores, tipografías y escalas**: `src/styles/tokens.ts`.

## Vídeo ping-pong (opcional)

El hero del diseño es un modelo 3D (Sketchfab) que solo se carga al pulsar «Ver en 3D».
Si quieres un vídeo en bucle ping-pong dentro del marco mientras no se abre el 3D:

1. Codifícalo con keyframes densos para que el retroceso sea fluido:
   `ffmpeg -i origen.mov -an -vf scale=720:-2 -c:v libx264 -g 1 -crf 26 -movflags +faststart public/media/hero.mp4`
2. Exporta un poster ligero (`public/media/image-1.jpg`).
3. En `src/data/home.ts`, dentro de `hero.model`, añade:
   `previewVideo: { src: '/media/hero.mp4', type: 'video/mp4', poster: '/media/image-1.jpg' }`

`usePingPongVideo` reproduce hacia delante y retrocede ajustando `currentTime` con `requestAnimationFrame` (nunca con `playbackRate` negativo). Solo carga el vídeo cuando entra en pantalla, lo pausa fuera de ella y con la pestaña oculta, y con `prefers-reduced-motion` muestra solo el poster.

## Calidad, SEO y accesibilidad

- **Prerender**: el HTML final incluye todo el contenido, así que buscadores y LLMs que no ejecutan JS lo leen completo.
- **SEO**: `robots.txt` da acceso explícito a los bots de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…).
- **Accesibilidad**: un solo `h1` y un `h2` por sección, skip link, foco visible adaptado a fondos claros y oscuros, menú móvil operable con teclado (Esc cierra) y `prefers-reduced-motion`.
- **Rendimiento**: fuentes autoalojadas con precarga y fallbacks de métricas ajustadas (CLS 0), imágenes AVIF/WebP responsive con `loading="lazy"`, y visor 3D y vídeo bajo demanda.
- **Lighthouse (local)**:

  | Categoría      | Móvil | Escritorio |
  | -------------- | :---: | :--------: |
  | Performance    |  97   |    100     |
  | Accessibility  |  95   |     95     |
  | Best Practices |  100  |    100     |
  | SEO            |  100  |    100     |
# Pinacoteca-D-Vinci-web
