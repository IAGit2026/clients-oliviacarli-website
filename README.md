# Olivia Carli — Multi-Page Site (David's build)

Seven standalone pages from David's recoded files (Olivia_Website_1, Sep 10), each
with its own shareable URL. Fulfils the Trello card: "clean and unique URLs for each
of Olivia's website pages so she can share one page at a time."

## Pages / URLs
| Nav label | File | URL |
|---|---|---|
| About (Home) | index.html | oliviacarli.com/ |
| Philosophy | philosophy.html | oliviacarli.com/philosophy.html |
| The Lineage | the-lineage.html | oliviacarli.com/the-lineage.html |
| The Path | the-path.html | oliviacarli.com/the-path.html |
| Love Notes | love-notes.html | oliviacarli.com/love-notes.html |
| The Calling | the-calling.html | oliviacarli.com/the-calling.html |
| Empower Thyself | empower-thyself.html | oliviacarli.com/empower-thyself.html |

Home = the "Meet Olivia" / About page (David's index.html is titled About).

## Built from David's files — what was done
- Source: David's 7 recoded HTML files (his structure and content, unchanged).
- FIXED: the brand logo (monogram) linked to a non-existent about.html on every page;
  repointed to index.html (the About/home page). This was the only broken link.
- Extracted all base64 images to real files (46 uniques). Total HTML dropped from
  ~8.4 MB to ~1 MB; the-calling.html alone went 3.5 MB -> 235 KB.
- Added per-page description/canonical/OG/Twitter meta and lazy-loading; sitemap.xml
  and robots.txt for the 7 pages.
- David's page content, layout, and nav labels were NOT changed.

## Verified
All 7 render fully styled standalone, 0 JS errors, 0 broken asset requests, every nav
link resolves, no leftover about.html 404s.

## IMPORTANT — this REPLACES the earlier live version
The site currently live is an earlier 8-page split built from the OLD single-page
source (with About/Living-Ceremony, no The Calling). David's build is different:
7 pages, About = home, adds The Calling, no separate Living Ceremony. Deploying this
overwrites the earlier version.

## Deploy
Upload all 7 .html + assets/ + sitemap.xml + robots.txt to repo ROOT
(IAGit2026/clients-oliviacarli-website), overwriting existing files. Keep the CNAME.
Then DELETE the now-orphaned old pages from the repo if present: about.html and
living-ceremony.html (they are not part of David's structure). Hard-refresh each URL
in Incognito.
