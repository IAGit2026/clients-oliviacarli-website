# Olivia Carli — Static Site

Single-page site. Eight sections (Home, Philosophy, The Lineage, The Path, About,
Love Notes, Living Ceremony, Empower Thyself) that switch via JavaScript tabs — no
page reloads, no routing. No build step, no dependencies. Deploys as-is to Cloudflare
Pages, Vercel, or any static host with the repo root as the publish directory.

Target domain: **oliviacarli.com** (confirmed). Canonical, og:url, absolute og:image,
sitemap.xml, and robots.txt are all set to that domain.

`assets/img/` holds all 38 images (content-hashed filenames, safe to cache forever).

## What was done to the source file

- **Embedded images extracted.** All 42 base64 data-URIs pulled to real files,
  deduplicated to 38 uniques. HTML went from 4.4 MB to 165 KB.
- **SEO/social metadata added.** Open Graph, Twitter Card, and canonical tags
  (the source already had a description; it was kept).
- **Lazy loading added** to below-the-fold images.
- **sitemap.xml + robots.txt added.**

Visual design was not altered. The tab navigation was verified working across all
eight sections after every change.

## What was already correct in the source (left as-is)

- Booking CTAs point to a real Acuity link: `oliviacarli.as.me/clarityconsult`
- Contact is a working `mailto:hello@oliviacarli.com`
- Lineage links to Modern Mystery School are legitimate external references

## Notes

- **No forms** on the site, so no form receiver / capture wiring is needed.
- The booking flow relies entirely on the external Acuity link — nothing to build there.
