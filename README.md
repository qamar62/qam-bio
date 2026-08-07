# qam-bio

Personal portfolio for **Qamar Ibrahim** — Senior Python / Django backend engineer working on AI automation and self-hosted infrastructure. Live at [qaam.work](https://qaam.work).

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4, with a clay/neumorphic design system in `app/globals.css`.

## Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), React 19 |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS 4, custom `clay` utilities, Manrope + Space Grotesk |
| Motion | `motion` (Framer Motion successor) |
| Icons | `lucide-react` + hand-rolled brand SVGs |
| Storage | Vercel Blob (`projects.json` and uploaded project images) |
| Analytics | `@vercel/analytics` |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the values below
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm start` (serve the build), `npm run typecheck`.

## Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `ADMIN_PASSWORD` | for `/admin` | Gate for the projects API. Sent as the `x-admin-password` header and as the upload `clientPayload`. |
| `BLOB_READ_WRITE_TOKEN` | for `/admin` | Vercel Blob read/write token. Auto-injected on Vercel once a Blob store is linked. |

Neither is needed to run the public site — the twelve portfolio projects are static data in `data/projects.ts`.

## Routes

| Route | What it is |
| --- | --- |
| `/` | Main portfolio — hero, about, skills, projects, experience, AI systems, live GitHub section, contact |
| `/qam-bio` | Shareable digital business card with QR code and vCard download |
| `/admin` | Password-gated dashboard to add or remove projects at runtime (`noindex`) |
| `/api/projects` | `GET` public list · `POST`/`DELETE` require `x-admin-password` |
| `/api/upload` | Vercel Blob client-upload token endpoint for project images |

## Project structure

```
app/          routes, layout, metadata + JSON-LD, API handlers
components/   section components (server by default, 'use client' where needed)
data/         profile, skills, experience, projects, services — single source of truth
lib/          shared helpers
public/       CV, avatar, project images
legacy/       archived V1 (Vite + React 18) — kept for reference only
```

Content lives in `data/`, not in JSX. To change what the site says, edit the data files.

### Projects

`components/projects.tsx` is a server component that renders the static twelve for SEO. `components/dynamic-projects.tsx` is a client component that fetches anything added later through `/admin` and appends it. Both share `ProjectCard`.

### GitHub section

`components/github-section.tsx` is an async server component that pulls live repo and follower counts from the GitHub API, cached for an hour (`next: { revalidate: 3600 }`). If the API is unreachable it renders nothing rather than showing stale or invented numbers.

### Contact form

`components/contact.tsx` posts to an n8n webhook. The URL is in that file — change `CONTACT_WEBHOOK` to point somewhere else.

## Deploying

**Vercel** — import the repo, add `ADMIN_PASSWORD`, link a Blob store, deploy. No `vercel.json` needed.

**Docker / self-hosted** — the build emits `.next/standalone` (`output: 'standalone'` in `next.config.mjs`):

```bash
docker build -t qam-bio .
docker run -p 3000:3000 --env-file .env.local qam-bio
```

## Legacy

The previous Vite + React portfolio is archived in `legacy/` with its own `package.json`, `Dockerfile` and Express-style API. It is not part of the build and can be deleted once nothing else references it.
