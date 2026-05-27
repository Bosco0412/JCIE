# Mentor Links (Icon Buttons) (Design)

## Goal
On the People page mentors section (`/people/`), show a compact set of icon buttons that link to each mentor’s external pages (e.g. Google Scholar, personal homepage).

Links are maintained in `xlsx/site.xlsx` (people sheet).

## Data source (XLSX)
Add optional columns to the `people` sheet:
- `homepage_url` (personal homepage)
- `scholar_url` (Google Scholar)
- `github_url` (optional)

These columns are only required when a person has the corresponding link. Empty is allowed.

## Repo data model
In `data/people.yaml`, store a normalized list:
```yaml
links:
  - type: homepage
    url: "https://..."
  - type: scholar
    url: "https://..."
```
Supported `type`: `homepage | scholar | github`.

## UI
- Only render these icon buttons for mentors (and only when links exist).
- Placement: top-right of the mentor card header area (same row as name/title block; wraps on small widths).
- Interaction:
  - Open in new tab (`target="_blank" rel="noopener noreferrer"`).
  - Hover: slightly stronger background/border.
  - Focus-visible: clear outline.
  - Tooltip via `title` attribute (e.g. “Google Scholar”).

## Acceptance Criteria
- After filling XLSX and running import/build, mentors show icon buttons that navigate correctly.
- Members/alumni are unchanged (no icons).
- Build passes.

