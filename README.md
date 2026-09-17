# Olivia Carli — Multi-Page Site

Eight standalone pages, each with its own shareable URL. Converted from the earlier
single-page (JS-tab) version so every section can be linked and shared individually.

## Pages / URLs
| Page | File | URL |
|---|---|---|
| Home | index.html | oliviacarli.com/ |
| Philosophy | philosophy.html | oliviacarli.com/philosophy.html |
| The Lineage | the-lineage.html | oliviacarli.com/the-lineage.html |
| The Path | the-path.html | oliviacarli.com/the-path.html |
| About | about.html | oliviacarli.com/about.html |
| Love Notes | love-notes.html | oliviacarli.com/love-notes.html |
| Living Ceremony | living-ceremony.html | oliviacarli.com/living-ceremony.html |
| Empower Thyself | empower-thyself.html | oliviacarli.com/empower-thyself.html |

## What changed from the single-page version
- Each of the 8 tab-sections is now its own HTML file with a clean slug.
- The shared shell (head + CSS + nav + footer) is carried onto every page, so all
  pages look identical to the live site.
- JS tab-switching (data-go / .visible) replaced with real <a href> navigation.
  The nav highlights the current page.
- The obsolete tab script was removed; the testimonial slider and mobile menu were
  null-guarded so they run only on pages that contain them (no JS errors anywhere).
- Per-page <title>, canonical, and og:url set to each page's own URL. sitemap.xml
  lists all 8.
- All asset paths, the Acuity booking link (oliviacarli.as.me/clarityconsult), and
  mailto:hello@oliviacarli.com resolve on every page.

## Verified
All 8 pages: render fully styled standalone, 0 JS errors, 0 broken asset requests,
every nav link resolves to a real file.

## Deploy
Upload all 8 .html files + the assets/ folder + sitemap.xml + robots.txt to the repo
ROOT (same repo: IAGit2026/clients-oliviacarli-website). This replaces the single
index.html with the 8-page version. Hard-refresh each URL in Incognito after upload.
