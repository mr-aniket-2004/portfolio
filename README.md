# Aniket Chandiwade — Developer Portfolio

A single scrolling portfolio with a working terminal, grouped stack, two projects, education and a contact form. The uploaded design reference informs the dark/amber palette; all owner facts follow the supplied brief.

## Setup

Requires a recent Node.js LTS and Bun (or npm).

```sh
bun install
cp .env.example .env
bun run dev
```

For npm, use `npm install` and `npm run dev`. Production: `bun run build`. Preview: `bun run preview`. Tests: `bun run test`.

## Structure

```text
src/
  components/portfolio/
    Button.tsx      # shared lightweight controls
    Portfolio.tsx   # Header, Hero, About, Stack, Projects, Workflow,
                    # Education, Contact, Footer and Section
    Terminal.tsx    # typed profile and command input
  data/content.js  # editable owner copy and project links
  routes/
    __root.tsx      # document shell, font links and favicon
    index.tsx       # portfolio, metadata and Person JSON-LD
  styles.css        # CSS-first Tailwind v4 tokens and layout
public/
  favicon.svg
  resume.pdf        # clearly marked placeholder, replace before sharing
.env.example
```

The existing hosted template uses React 19, Vite, TanStack Start and Tailwind v4 rather than the brief's React 18 / plain-Vite skeleton. Tailwind v4 configuration is in styles.css; no tailwind.config.js or PostCSS config is needed. The document shell replaces index.html for metadata and JSON-LD.

