Monochrome Theme

Overview
- This app now uses a central grayscale palette defined in src/styles/theme.css via CSS variables.
- Components inherit these variables to ensure consistent styling and accessible contrast.

Core Tokens
- --color-bg (#ffffff): page background
- --color-surface (#f9fafb): cards, panels
- --color-text (#111111), --color-text-strong (#000000)
- --color-muted (#666666): secondary text
- --color-border (#dddddd), --color-border-strong (#111111)
- --color-accent (#444444), --color-accent-hover (#222222), --color-accent-muted (#888888)
- --focus-ring: 3px ring for accessible focus (WCAG AA+)
- Shadows: --shadow-soft, --shadow-md, --shadow-lg
- Radii: --radius-sm, --radius-md, --radius-lg
- Transitions: --transition, --transition-fast

Usage
- Replace any previous Ocean Professional colors (blue/amber) with tokens:
  - Primary action: var(--color-accent)
  - Hover: var(--color-accent-hover)
  - Borders: var(--color-border)
  - Secondary text: var(--color-muted)
- Keep modern aesthetics: rounded corners, subtle shadows, smooth transitions.
- For focus states, prefer :focus-visible and apply box-shadow: var(--focus-ring).

Accessibility
- Text/background contrast meets or exceeds WCAG AA against light surfaces.
- Focus ring uses high-contrast neutral for keyboard navigation.

No dark mode is required in this phase.
