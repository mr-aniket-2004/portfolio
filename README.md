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

## Edit content and assets

Edit `src/data/content.js` for owner content, projects, stack, education and links. Replace `public/resume.pdf` with the actual resume. For a photo, add `public/photo.jpg` and set `photo: '/photo.jpg'` in content.js; the current photo is intentionally a placeholder. Colors and typography live in src/styles.css.

## Contact endpoint

Set `VITE_CONTACT_ENDPOINT` to your separately built FastAPI endpoint and restart development or redeploy. It must accept `POST` JSON `{name, email, message}`, allow CORS for your site, and return a 2xx response only after accepting the message. Validation, a honeypot, loading and success/error states are included. When no endpoint is set, the form clearly asks visitors to email directly; it never reports a false delivery. No third-party form service or hosted message storage is used. VITE variables are public, so do not put secrets in them.

## Deploy

The current project keeps the hosting template's Cloudflare-compatible server output. Publish through Lovable for that output. For Vercel or Netlify, import the repository, set VITE_CONTACT_ENDPOINT, and configure a supported TanStack Start/Nitro deployment preset for your selected provider (the current preset is not a plain static Vite app). Use `bun run build` as the build command and the provider-specific server output, not a static-only `dist` deployment. Follow that provider's current TanStack Start integration instructions when changing targets.

## Accessibility

Includes a skip link, semantic sections, one h1, labelled forms, focus rings, reduced-motion support and a keyboard-accessible terminal. External links open in a new tab. Resume and photo need the owner's final assets; message delivery needs the owner's endpoint.
