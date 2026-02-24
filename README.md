# Portafolio Web

Portafolio personal desarrollado con React y Vite. Incluye secciones de presentación, sobre mí, proyectos y habilidades, con soporte para modo oscuro.

## Tecnologías

- **React 19** + **Vite 7**
- **Tailwind CSS 4**
- ESLint

## Estructura del proyecto

- `src/components/` — Componentes de la página:
  - **Header** — Navegación
  - **Hero** — Sección principal de presentación
  - **About** — Sobre mí
  - **Projects** — Proyectos (con modal de detalle)
  - **Skills** — Habilidades / tecnologías
  - **Footer** — Pie de página

## Scripts

| Comando   | Descripción              |
|----------|---------------------------|
| `npm run dev`    | Servidor de desarrollo (Vite) |
| `npm run build`  | Build de producción      |
| `npm run preview`| Vista previa del build   |
| `npm run lint`   | Ejecutar ESLint          |

## Cómo empezar

```bash
npm install
npm run dev
```

La app se abrirá en `http://localhost:5173` (o el puerto que indique Vite).

## Build para producción

```bash
npm run build
```

Los archivos generados quedan en la carpeta `dist/`.
