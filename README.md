# Diegowritescode-Frontend

Landing page de **Diegowritescode** — programación sin pelos en la lengua: retos diarios, tips reales para juniors y las verdades que necesitas escuchar.

Construida con un enfoque profesional inspirado en la estética de GitHub (dark) con púrpura como acento, y componentes al estilo Vercel.

## 🧱 Stack

- **[Next.js 15](https://nextjs.org/)** (App Router) + **TypeScript**
- **[Material UI v7](https://mui.com/)** (MUI) — sistema de componentes y theming
- **[Motion](https://motion.dev/)** (framer-motion) — animaciones y efectos
- **[Geist](https://vercel.com/font)** — tipografía (sans + mono), self-hosted (sin red en build)
- **Docker** (output `standalone`) — listo para desplegar en **Dokploy**

## 🎨 Paleta

Inspirada en los tokens de GitHub con el púrpura más presente:

| Token            | Color     |
| ---------------- | --------- |
| Fondo            | `#0d1117` |
| Superficie       | `#161b22` |
| Borde            | `#30363d` |
| Texto principal  | `#e6edf3` |
| Texto secundario | `#8b949e` |
| Acento (púrpura) | `#a371f7` |

## 🚀 Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## 🏗️ Build de producción

```bash
npm run build
npm run start
```

## 🐳 Docker

```bash
# Construir la imagen
docker build -t diegowritescode-frontend .

# Ejecutar
docker run -p 3000:3000 diegowritescode-frontend
```

La imagen usa el output `standalone` de Next.js para un contenedor mínimo. Expone el puerto `3000` y arranca con `node server.js`.

## ☁️ Despliegue en Dokploy

1. En Dokploy crea una nueva aplicación de tipo **Dockerfile** (o **Application** apuntando a este repositorio de GitHub).
2. Build path / contexto: raíz del repo (`/`). Dockerfile: `Dockerfile`.
3. Puerto del contenedor: **3000**.
4. Dominio: `diegowritescode.deviego.xyz` (Dokploy gestiona el SSL con Let's Encrypt).
5. Deploy. En cada `git push` a `main` puedes reconstruir automáticamente si activas el webhook de GitHub.

### Variables de entorno (opcional)

| Variable                | Valor por defecto | Descripción                |
| ----------------------- | ----------------- | -------------------------- |
| `PORT`                  | `3000`            | Puerto de escucha          |
| `NEXT_TELEMETRY_DISABLED` | `1`             | Desactiva telemetría Next  |

## 📁 Estructura

```
src/
  app/
    layout.tsx      # Metadata SEO, fuentes, providers MUI
    page.tsx        # Composición de la landing
    theme.ts        # Theme MUI (GitHub dark + púrpura)
    globals.css     # Reset y estilos globales
  components/
    Header.tsx      # Navbar con blur al hacer scroll
    Hero.tsx        # Hero con resplandores y terminal animada
    About.tsx       # Sección "Sobre mí"
    Features.tsx    # "La serie": reto diario, tips, entrevistas, gaming
    Footer.tsx      # CTA final + redes (Facebook, YouTube, GitHub)
    Reveal.tsx      # Wrapper de animación on-scroll
    Logo.tsx        # Marca SVG
```

---

Hecho con código y sin filtros.
