# Hugo Site (JCIE Website)

This folder contains the Hugo implementation intended for GitHub Pages deployment under:

`https://icelab-jcie.github.io/JCIE_Website/`

## What To Edit (Maintenance)

- Site-wide info: `data/site.yaml`
- Projects (single file): `data/projects.yaml`
- Publications (single file): `data/publications.yaml`
- News posts (one file per post, per language): `content/news/*.zh.md` and `content/news/*.en.md`
- People (one file per person, per language): `content/people/<id>.zh.md` and `content/people/<id>.en.md`
- Join page: `content/join/_index.zh.md` and `content/join/_index.en.md`

Images:

- People photos: `static/people/*` (referenced as `/people/<file>.png`)

## Local Preview

Install Hugo (extended) and run:

```bash
hugo server
```

## Deployment

GitHub Actions builds Hugo from repo root and deploys `./public` to GitHub Pages.
