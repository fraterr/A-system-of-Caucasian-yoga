# A System of Caucasian Yoga — a study edition

A website that takes apart Count Stefan Colonna Walewski's *A System of Caucasian Yoga* (1955, a facsimile of a hand-lettered manuscript) and reorganises it for consultation:

- every exercise on its own page, with a step-by-step **practice card** and the **original text** beside it;
- the **doctrine** regrouped by theme, quoting and page-referencing the manuscript;
- a **glossary** of the text's vocabulary, auto-linked in the cards;
- the whole facsimile **transcribed page by page**, each transcription beside its scan;
- full-text **search** (Pagefind).

Live site: https://fraterr.github.io/A-system-of-Caucasian-yoga/

## Layout

```
Count-Stefan-Walewski-A-System-of-Caucasian-Yoga.pdf   the scanned facsimile (128 pages)
transcription/pages/pNNN.md    faithful transcription, one file per PDF page (0-based index), with frontmatter
transcription/diagrams.json    diagram bounding boxes (fractions of the page) used to crop the figures
site/                          the Astro site
  src/content/exercises/       practice cards (markdown + frontmatter)
  src/content/originals/       the original text for each exercise, verbatim from the transcription
  src/content/doctrine/        thematic doctrine pages
  src/content/glossary/        glossary entries
  src/content/pages/           copy of transcription/pages, synced at build time
  public/scans/                web-sized page scans
  public/figures/              cropped diagrams (pNNN-K.jpg)
CONTENT-BRIEF.md               editorial rules used to write the cards
```

## Transcription conventions

Spelling and wording are the author's. Only the capitals are normalised. Marks:

- `[?]` illegible or erased word · `[word?]` uncertain reading
- `{word}` interlinear insertion · `[margin: …]` marginal note
- `[DIAGRAM: …]` a drawing at that point of the page
- `∴` the author's paragraph mark, kept where he wrote it

The facsimile skips manuscript pages 19, 36, 86 and 92.

## Building

```bash
cd site
npm install
npm run build      # syncs the transcription, builds to site/dist, indexes with Pagefind
npm run preview
```

Pushing to `main` builds and deploys to GitHub Pages through `.github/workflows/deploy.yml` (Pages must be set to "GitHub Actions" in the repository settings).

## Editing

- Fix a transcription error in `transcription/pages/`; the site copy is regenerated on build.
- Cards, doctrine and glossary live under `site/src/content/`; the frontmatter schema is in `site/src/content.config.ts`.
- To recrop a figure, adjust the `bbox` in the page's frontmatter and re-run the crop script (see git history) or replace the file in `site/public/figures/`.
