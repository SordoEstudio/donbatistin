# Don Batistin – Landing QR evento

Landing mobile-first para tráfico desde códigos QR en vía pública. Next.js, TypeScript, Tailwind. Contenido estático desde JSON.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). Ancho máximo de diseño: 420px (mobile-first).

## Contenido

- **`data/promos.json`**: textos, promos, links (Maps, WhatsApp). Editar este archivo para cambiar copys sin tocar código.
- Reemplazar `maps_url` por coordenadas o dirección real (ej. `https://maps.google.com/?q=-34.6037,-58.3816`).
- Reemplazar `whatsapp_url` con número real (ej. `https://wa.me/54911XXXXXXXX`).

## Deploy en Vercel

1. Subir el repo a GitHub.
2. En [vercel.com](https://vercel.com): **Add New Project** → importar el repo.
3. Build Command: `npm run build` (por defecto). Output: Next.js.
4. Deploy. La landing queda en la URL que asigne Vercel.

Sin variables de entorno necesarias para este proyecto.

## Estructura

```
app/
  layout.tsx   # SEO base, viewport, theme-color
  page.tsx     # Landing (hero, promos, CTAs)
  globals.css
components/
  Header.tsx
  PromoCard.tsx
  CTAButtons.tsx
data/
  promos.json  # Copys y links
types/
  promos.ts    # Tipos del JSON
```

## Performance

- Sin CMS ni backend; todo estático.
- LCP optimizado: fuentes del sistema, sin JS bloqueante en above-the-fold.
- CTA fijo inferior para decisión rápida.
# donbatistin
