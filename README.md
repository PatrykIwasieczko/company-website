# Company Website

A static company/developer website built with Next.js, Tailwind CSS, and shadcn/ui. Designed to showcase your profile, commercial projects, and contact details — including a privacy policy page useful for Google Play developer account setup.

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
├── app/                  # Next.js routes (home, privacy)
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, About, Projects, Contact
│   └── ui/               # shadcn components
└── content/
    ├── site.ts           # All site copy & project data (edit this first)
    └── types.ts          # Content TypeScript types
```

## Customizing content

Edit `src/content/site.ts` to replace dummy placeholders:

- Company name, tagline, description
- Your name, role, bio, email, location
- Commercial projects (name, description, tags, status, links)
- Navigation items

Update `metadataBase` in `src/app/layout.tsx` when you have a real domain.

## Google Play checklist (v1)

Before submitting your developer account, make sure to:

1. Deploy the site to a public URL (Vercel, Netlify, etc.)
2. Replace all dummy content in `src/content/site.ts`
3. Update the privacy policy at `/privacy` with app-specific details
4. Use your real email and company/developer name everywhere
5. Point your Play Console website field to the deployed URL

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
