# 2026-palestine_report

**Live demo** https://unctad-infovis.github.io/2026-palestine_report/

## About

Night-time luminosity satellite imagery of Gaza showing a 75% collapse in economic and human activity, comparing September–October 2023 against October 2025.

Used in [The cumulative economic cost of occupation of the Palestinian people, 2000–2024, and the long road to recovery](https://unctad.org/publication/cumulative-economic-cost-occupation-palestinian-people-2000-2024-and-long-road-recovery).

## Embedding

```html
<script type="module" crossorigin="" src="https://storage.unctad.org/2026-palestine_report/js/2026-palestine_report.min.js?v=1"></script>
<link rel="stylesheet" crossorigin="" href="https://storage.unctad.org/2026-palestine_report/css/2026-palestine_report.min.css?v=1">
<div class="app-root-2026-palestine_report" id="app-root-2026-palestine_report">
  Loading...
</div>
<noscript>Your browser does not support Javascript!</noscript>
```

Update the `?v=` query parameter to match the current build version to bust the cache.

## Rights of usage

Contact Teemo Tebest.

## How to build and develop

This is a Vite + React project.

* `npm install`
* `npm run start`

Project should start at: http://localhost:8080

For developing please refer to `package.json`

## Files and folders

All public assets go to folder `public`.

All source code goes to folder `src`.

### Mount point

Single mount point, mounted in `src/jsx/Index.jsx`:

| DOM id | Component | Content |
|---|---|---|
| `app-root-2026-palestine_report` | `src/jsx/App.jsx` | Chart header, both luminosity images, chart meta |

### How to update

* The two luminosity images live in `public/assets/img/` and are resolved at runtime via `resolveAsset()` from `@unctad-infovis/general-tools` — replace the PNGs there (and update the filenames referenced in `App.jsx`) to update the imagery.
* Chart title, subtitle, source and note text are hardcoded as props on `<ChartHeader>`/`<ChartMeta>` in `App.jsx`.

## Packages

The following packages are used in this project by default.

### Project specific

* **@unctad-infovis/general-tools** — `resolveAsset`/`basePath` helper for environment-aware image URLs, and base design-token styles (`colors.css`/`basics.css`)

### Build & Dev Server

* **vite** — development server with hot module replacement and production bundler, replaces webpack
* **@vitejs/plugin-react** — adds React and JSX support to Vite

### React

* **react** — UI component library
* **react-dom** — renders React components to the DOM

### Formatter & Linter

* **@biomejs/biome** — formats and lints JS, JSX and CSS files on save, replaces ESLint + Prettier

### Minification

* **terser** — minifies the production JavaScript bundle, removes console.logs in production builds
