# Projects: Image-first Cards + Detail Pages from XLSX (Design)

## Goal
- Projects list page shows “image-first” cards (cover image on top, text below).
- Clicking a project card navigates to a site-internal detail page.
- Detail page content (bilingual) is maintained in `xlsx/site.xlsx`.

## Routing
- List: `/[lang]/projects/` (existing)
- Detail: `/[lang]/projects/[id]/` (new)

## XLSX (`projects` sheet) columns
Add optional columns:
- `cover` (string): web path like `/projects/<id>.webp`
- `body_zh` (string): Markdown
- `body_en` (string): Markdown

No `cover_repo_path` column; the repo location is implied by `public/`.

## Data model (`data/projects.yaml`)
Extend each project entry with:
- `cover?: string`
- `body?: { zh?: string; en?: string }`

## UI
### List cards
- Top: cover image with fixed aspect ratio (16:9), `object-fit: cover`.
- Below: title + summary (clamped to 2 lines) + meta chips (area/year/status).
- Entire card is a link to the detail page.

### Detail page
- Header: cover (if present), title, summary, meta chips.
- Body: render Markdown from `project.body[lang]`.
- External links area: show GitHub link if present.

## Acceptance criteria
- With `cover/body_zh/body_en` filled in XLSX, `npm run build` produces list + detail pages with correct localized content.
- Missing cover/body does not break layout (graceful fallback).

