# CLAUDE.md — Portfolio

Personal portfolio site. React 18 + TypeScript + Vite 6 + Tailwind CSS v4. Deployed to GitHub Pages (`base: /portafolio/`, `outDir: build`).

## Commands
```bash
npm run dev      # localhost:3000
npm run build    # → build/
npm run deploy   # build + gh-pages push
```

## Structure
```
src/
  pages/           # LandingPage, AboutPage (route-level)
  components/
    sections/      # Full-page sections
    ui/            # Radix/shadcn primitives
    visuals/       # Canvas + animation components
    figma/         # Figma-generated components
  styles/          # tokens.css, animations.css, globals.css, components.css
  data/            # JSON content (projects, skills, about)
  hooks/           # Custom hooks
```

## Token system — two layers, don't mix them up

**Brand tokens** (`src/styles/tokens.css`) — use for all custom UI:
| Token | Value |
|---|---|
| `--color-primary` | `#a456f3` purple |
| `--color-accent` | `#e1f40b` yellow-green |
| `--color-ink` | `#161616` |
| `--color-muted` | `#B4B4B4` |

Tailwind aliases: `bg-primary`, `text-accent`, `text-ink`, `text-muted`.

**shadcn primitives** (`src/styles/globals.css`) — `--primary`, `--accent`, `--muted`, etc. These are *different values* and only for Radix/shadcn UI components. Never use them for custom layout or brand color.

## Animation — pick the right tool

| Use case | Tool |
|---|---|
| UI transitions, overlay fade in/out, `AnimatePresence` | `motion/react` |
| Page-level route transitions (Landing ↔ About) | `useViewTransitionNavigate` + `animations.css` view-transition rules |
| Micro-interactions (toggle, float, fade-in-up) | `animations.css` keyframes + utility classes |
| Smooth scroll | `lenis` only |

Always add `@media (prefers-reduced-motion: reduce)` fallbacks for any new CSS animation, matching the pattern already in `animations.css`.

## Figma asset imports

Assets from Figma use `figma:asset/...` specifiers resolved via aliases in `vite.config.ts`. **Always use static imports** — string paths break in production builds on gh-pages. Example:
```ts
import img from "figma:asset/717c32ec....png"; // correct
// NOT: const img = "figma:asset/..."; // breaks prod
```

## Overlay / z-index stack

The page uses a layered overlay system — respect this order when adding new layers:
1. Landing (base)
2. ProjectsOverlay — `z-50`
3. CaseStudy overlays — `z-[70]`

## Adding a case study

Follow the pattern in `LandingPage.tsx`:
1. Create `src/components/sections/YourCaseStudy.tsx` with an `onClose` prop
2. `React.lazy()` import it in `LandingPage.tsx`
3. Add its ID string to the `activeCaseStudy` state checks
4. Wrap render in `<AnimatePresence>` with the standard opacity transition

## Key conventions

- Path alias `@` → `src/`
- No test suite — verify with `npm run dev` in the browser
- Media: static imports only, optimized WebP/MP4 in `src/assets/`
- Two routes: `/` and `/about`. Catch-all → `/`
