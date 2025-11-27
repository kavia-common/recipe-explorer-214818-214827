# Recipe Explorer Frontend

Monochrome (Black & White) theme applied across the app using central CSS variables in `src/styles/theme.css`.

- Accessible contrast (WCAG AA+)
- Modern, clean style (rounded corners, subtle shadows, transitions)
- Light theme only; no external services required

## Getting Started
- npm install
- npm run dev

Environment variables (respect if present):
- REACT_APP_API_BASE, REACT_APP_BACKEND_URL, REACT_APP_FRONTEND_URL, REACT_APP_WS_URL,
- REACT_APP_NODE_ENV, REACT_APP_NEXT_TELEMETRY_DISABLED, REACT_APP_ENABLE_SOURCE_MAPS,
- REACT_APP_PORT, REACT_APP_TRUST_PROXY, REACT_APP_LOG_LEVEL,
- REACT_APP_HEALTHCHECK_PATH, REACT_APP_FEATURE_FLAGS, REACT_APP_EXPERIMENTS_ENABLED

## Structure
- public/index.html: App host
- src/styles/theme.css: Central theme tokens (grayscale)
- src/index.css: Imports theme and base layout utilities
- src/index.js: React app entry rendering sample UI bound to theme tokens

## Theming Guidance
- Replace any previous blue/amber accents with:
  - var(--color-accent) for primary interactions
  - var(--color-accent-hover) for hover states
  - var(--color-border) for borders
  - var(--color-muted) for secondary text
- Use :focus-visible with box-shadow: var(--focus-ring) for accessible focus
