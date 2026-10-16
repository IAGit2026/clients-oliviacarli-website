# Olivia Carli — Website (Next.js static export)

The Olivia Carli site, built with Next.js (App Router, TypeScript) and exported as
plain static HTML. The design, copy, images, CSS and scripts are the same as the
original hand-written pages; the original `.html` files are still in the repo root
for reference (see "Legacy files" below).

## Requirements
Node.js 20.9 or newer and npm.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build
```bash
npm run build      # static site is written to ./out
```
`npm run build` first runs `scripts/copy-static-assets.mjs`, which copies `assets/` and
`CNAME` into `public/` (git-ignored) so Next.js includes them in the export. The
original files in `assets/` and `CNAME` stay where they are and remain the source of
truth; never edit the copies in `public/`.

Other scripts: `npm run lint` (ESLint) and `npm run type-check` (`tsc --noEmit`).

## Pages / URLs
Public URLs drop the `.html` ending (canonical tags, the sitemap and links use `/philosophy`, not `/philosophy.html`). The export still writes `out/philosophy.html`, so `/philosophy` resolves on GitHub Pages and on Cloudflare Pages, and old `.html` links keep working: GitHub Pages serves both forms, and Cloudflare Pages redirects `/philosophy.html` to `/philosophy` with a 308.

| Nav label | Route in `src/app` | Public URL |
|---|---|---|
| About (Home) | `(site)/page.tsx` | `/` |
| Philosophy | `(site)/philosophy` | `/philosophy` |
| The Lineage | `(site)/the-lineage` | `/the-lineage` |
| The Path | `(site)/the-path` | `/the-path` |
| Love Notes | `(site)/love-notes` | `/love-notes` |
| The Calling | `(site)/the-calling` | `/the-calling` |
| Empower Thyself | `(site)/empower-thyself` | `/empower-thyself` |
| The Missing Piece (not in nav or sitemap) | `(missing-piece)/missing-piece` | `/missing-piece` |

`trailingSlash` is off, so Next.js writes `out/philosophy.html` for the `/philosophy`
route, and the public URL is `/philosophy`. Per-page title, description, canonical, Open
Graph and Twitter tags are set with the Next.js `metadata` export
(`src/lib/page-metadata.ts`), so canonicals and `og:url` carry the public URL.
`robots.txt` and `sitemap.xml` are generated at build time from `src/app/robots.ts` and
`src/app/sitemap.ts`.

## Project layout
- `src/app/(site)` — the seven site pages, sharing `src/styles/site-styles.css`, the header and the footer (`src/components/site-chrome.tsx`).
- `src/app/(missing-piece)` — the standalone assessment page with its own CSS (`src/styles/missing-piece-styles.css`).
- `src/components` — shared header, navigation, footer and the client components that hold the page scripts (mobile menu, accordions, counters, slider, scroll reveal, assessment).
- `src/lib/site-navigation.ts` — single list of pages used by the nav, sitemap and canonicals.
- `assets/` — images and other binary assets (original location, unchanged).

## Deploy
Host settings for GitHub Pages (via Actions), Cloudflare Pages, Netlify or similar:

- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `out`
- Node version: 20.9 or newer

`out/` contains the HTML pages, `_next/` (JS and CSS), `assets/`, `robots.txt`,
`sitemap.xml` and `CNAME`. Publish the contents of `out/` at the site root. On Cloudflare
Pages, `/philosophy.html` redirects to `/philosophy`, which serves the same page.

## Legacy files
The root `*.html` pages, `robots.txt` and `sitemap.xml` are no longer used by the build
(Next.js regenerates them). They can be deleted once the Next.js site is live. Keep
`assets/` and `CNAME`: the build copies them into the export.

## Notes
- The Missing Piece assessment posts lead and result data from the browser to the GoHighLevel webhooks hard-coded in `src/components/missing-piece-assessment-interactions.tsx`, as in the original page.
- No analytics, tracking or server routes are included.
