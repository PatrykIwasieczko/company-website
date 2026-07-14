# Company Website

A static company/developer website built with Next.js, Tailwind CSS, and shadcn/ui. Showcases the company profile, commercial projects, and contact details.

## Stack

- **Next.js 16** (App Router, static content)
- **Tailwind CSS v4**
- **shadcn/ui** (base-nova style)
- **Vitest** + **React Testing Library** (lightweight snapshot & content tests)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## Project structure

```
src/
├── app/
│   ├── projects/[slug]/     # Project detail, privacy, terms
│   └── ...                  # Home, site-wide privacy
├── components/
│   ├── layout/              # Header, Footer
│   ├── projects/            # ProjectCard
│   ├── sections/            # Hero, About, Projects, Contact
│   └── ui/                  # shadcn components
└── content/
    ├── site.ts              # Company-wide copy
    ├── projects.ts          # Project data (edit this for apps)
    └── types.ts
public/projects/             # Project cover images
```

## Customizing content

Edit `src/content/site.ts` for company-wide content and `src/content/projects.ts` for individual apps:

- Company name, tagline, description
- Your name, role, bio, email, location
- Each project: slug, name, short/full descriptions, image, tags, status
- Navigation items

Each project gets its own route at `/projects/[slug]` with linked privacy policy and terms pages.

Update `metadataBase` in `src/app/layout.tsx` when you have a real domain.

## Pre-launch checklist

Before going live, make sure to:

1. Deploy the site to a public URL (Vercel, Netlify, etc.)
2. Replace dummy content in `src/content/site.ts` and `src/content/projects.ts`
3. Update per-app legal pages at `/projects/[slug]/privacy` and `/projects/[slug]/terms`
4. Use your real email and company/developer name everywhere
5. Point any external profiles (e.g. app store listings) to the deployed URL

## Testing

Tests are intentionally minimal — snapshot tests for key sections plus a content sanity check. Vitest is the recommended choice for new Next.js projects (faster than Jest, native ESM support).

```bash
npm run test
```

## Deployment

The site is fully static-friendly. Deploy to any platform that supports Next.js:

```bash
npm run build
```

Recommended: [Vercel](https://vercel.com) for zero-config Next.js hosting.
