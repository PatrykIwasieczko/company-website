# Agent Guide — Company Website

This file gives AI agents full context when starting a new session on this repo.

## Project overview

**Ars Cras Patryk Iwasieczko** company website — a static developer/portfolio site showcasing commercial Android apps. Built by **Patryk Iwasieczko** (Google Play: **Jordi_Jor**, email: **patryk.iwasieczko@gmail.com**).

### Primary goal (v1)

A professional public website for the company — presenting who we are, what we build, and how to get in touch:

- Company identity and contact information
- Project showcase with dedicated pages per app
- Privacy policy and terms of service for each product
- Site-wide privacy policy

### Current apps

| Slug | Name | Status |
|------|------|--------|
| `flowbit` | Flowbit | in-development |
| `no-wez-zgadnij` | No weź zgadnij | in-development |

## Tech stack

- **Next.js 16** — App Router, static generation, no API routes
- **Tailwind CSS v4** — styling via `src/app/globals.css` theme tokens
- **shadcn/ui** — base-nova style; components in `src/components/ui/`
- **TypeScript** — strict mode
- **Vitest + React Testing Library** — lightweight snapshot tests only

No database, CMS, GraphQL, or auth. Content lives in TypeScript files under `src/content/`.

## Repository structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, metadata, dark theme
│   ├── page.tsx                # Home page (sections)
│   ├── privacy/page.tsx        # Site-wide privacy
│   └── projects/[slug]/
│       ├── page.tsx            # Project detail
│       ├── privacy/page.tsx    # App privacy policy
│       └── terms/page.tsx      # App terms of service
├── components/
│   ├── layout/                 # Header, Footer
│   ├── projects/               # ProjectCard
│   ├── sections/               # Hero, About, Projects, Contact
│   └── ui/                     # shadcn components
└── content/
    ├── site.ts                 # Company, owner, about, contact copy
    ├── projects.ts             # Project data + slug helpers
    └── types.ts                # Content TypeScript types
public/projects/                # Project cover images (SVG placeholders for now)
.cursor/rules/                  # Cursor-specific always-on rules
```

## Content editing

**Always edit content files, not components**, when changing copy or adding projects.

- `src/content/site.ts` — company name, owner info, about text, navigation, footer
- `src/content/projects.ts` — project entries; adding one auto-creates routes via `generateStaticParams`

Project type fields: `slug`, `name`, `shortDescription`, `fullDescription`, `image`, `imageAlt`, `tags`, `status`, optional `links.playStore`.

## Design direction

**Subtle cyberpunk** — dark background, cyan primary (`oklch(0.78 0.16 200)`), magenta accent, Geist sans font. Section headings use `.section-heading` with gradient underline.

### Performance constraints (learned from experience)

Do **not** re-introduce these — they caused visible lag:

- `background-attachment: fixed`
- Full-viewport `::before`/`::after` overlays (grid, scanlines)
- `mix-blend-mode` overlays
- `backdrop-blur` on sticky header
- Hover animations combining transform + box-shadow + image scale

Safe effects: static radial gradients on `html`, border-color hover transitions, simple gradient text.

## Commands

```bash
npm run dev       # Development server (localhost:3000)
npm run build     # Production build
npm run test      # Vitest (snapshots + content checks)
npm run lint      # ESLint
```

## Workflow expectations

1. Read relevant content files before editing copy
2. Keep changes scoped — no drive-by refactors
3. Match existing naming, imports, and component patterns
4. Verify with `npm run build` and `npm run test` after changes
5. Only create git commits when explicitly asked

## Next.js version note

<!-- BEGIN:nextjs-agent-rules -->
This is NOT the Next.js you know. Next.js 16 has breaking changes — APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Deployment (not yet configured)

Target: static hosting (Vercel recommended). Update `metadataBase` in `src/app/layout.tsx` when a real domain is available.
