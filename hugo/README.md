# Hugo Site (JCIE Website)

This folder contains the Hugo implementation intended for GitHub Pages deployment under:

`https://icelab-jcie.github.io/JCIE_Website/`

## What To Edit (Maintenance)

- Site-wide info: `hugo/data/site.yaml`
- Projects (single file): `hugo/data/projects.yaml`
- Publications (single file): `hugo/data/publications.yaml`
- News posts (one file per post, per language): `hugo/content/news/*.zh.md` and `hugo/content/news/*.en.md`
- People (one file per person, per language): `hugo/content/people/<id>.zh.md` and `hugo/content/people/<id>.en.md`
- Join page: `hugo/content/join/_index.zh.md` and `hugo/content/join/_index.en.md`

Images:

- People photos: `hugo/static/people/*` (referenced as `/people/<file>.png`)

## Local Preview

Install Hugo (extended) and run:

```bash
hugo server -s hugo
```

## Deployment

GitHub Actions builds Hugo from `./hugo` and deploys `./hugo/public` to GitHub Pages.
