# Content brief — exercise cards for the Caucasian Yoga site

You are writing content files for an Astro site that "disarticulates and domesticates" Walewski's
*A System of Caucasian Yoga* (1955). Every exercise gets **two files**:

1. `site/src/content/exercises/<slug>.md` — the **practice card** (modern, clear English, for a practitioner).
2. `site/src/content/originals/<slug>.md` — the **original text**: Walewski's own words for that exercise,
   copied verbatim from the page transcriptions (spelling preserved), trimmed to the exercise.

Read these before writing anything:
- The exemplar card: `site/src/content/exercises/first-master-arcane.md`
- The exemplar original: `site/src/content/originals/first-master-arcane.md`
- The schema (frontmatter fields and allowed values): `site/src/content.config.ts`
- The transcription pages you need: `transcription/pages/pNNN.md` (NNN = zero-padded PDF index).
  `transcription/FULL.md` has all pages concatenated with `<<<<< PDF n | ms m >>>>>` separators if you prefer.

## Voice and rules for the practice card

- Audience: a practitioner who wants to understand and try the exercise. Stay **inside the system**: explain
  what Walewski instructs and what he says it does. Do not compare with other traditions, do not judge,
  do not add techniques he does not give. Report extraordinary claims as "the text says…" / "the author claims…".
- Clear, concrete, step-by-step. Fill in what the author assumes from earlier exercises (e.g. "the Master
  rhythm" = 7 s in, 1 s hold, 7 s out, 1 s hold; "the colours" = red/yellow/blue/white in that order with
  their body regions) so that the card stands alone, but say when you are filling in.
- Where the text is ambiguous or broken (missing page, erased word), say so in "Notes for the reader"
  rather than guessing.
- Card body structure (use these headings, omit a section only if truly empty):
  `## In brief` (2–4 sentences) · `## Technique` (numbered steps; bold the key word of each step) ·
  `## Timing` (optional table) · `## What the text says it develops` (bullets) ·
  `## Phenomena and cautions` (what the author says you will feel/see, and his warnings) ·
  `## Notes for the reader` (ambiguities, gaps, cross-references to other exercises, variants).
- Length: Master/Lesser Arcane cards 350–700 words; auxiliary cards 150–350 words.
- Do not put safety advice of your own into the card body; the site's About page covers it. You MAY put
  the author's own cautions into the `cautions` frontmatter list (one sentence each, in your words).

## Frontmatter for the card (see schema)

- `title`: for arcanes use the manuscript numbering, e.g. `"II — Second Master Arcane"`, `"III G. — Projecting of Power (Ritual of the Pentagram)"`,
  `"XII G.S. — Face and Head Rejuvenation"`. Keep the "L."/"G."/"G.S." letters as the manuscript has them.
  Auxiliary: plain descriptive title, e.g. `"Care of the feet"`.
- `shortTitle`: short form for cards/nav, e.g. `"Second Master Arcane"`, `"Ritual of the Pentagram"`.
- `category`: `master-arcane` | `lesser-arcane` | `auxiliary` | `ritual`.
- `number`: `"II"`, `"III G."`, `"VII L."` etc. Omit for auxiliaries.
- `order`: given in your task list.
- `parent`: for auxiliaries, the slug of the arcane they belong to.
- `summary`: one sentence, ≤ 40 words, what it is + what the text says it does.
- `purpose`: 2–5 lowercase tags from this controlled list (add a new one only if none fits):
  foundation, master rhythm, clairvoyance, clairaudience, sight, hearing, will, protection, healing,
  concentration, meditation, inner sound, dream consciousness, energy, rejuvenation, hibernation,
  command, mental connection, telepathy, weather control, levitation, creation, love, discrimination,
  balance, breath control, blood circulation, glands, feet, hands, tongue, eyes, sex, conception, magic.
- `planes`: which of physical/mental/spiritual/psychic the text explicitly involves (all four for every
  Master Arcane; for others only if the text names them).
- `bodyAreas`: body parts the exercise works on or charges.
- `breath`: short rhythm string, e.g. `"7 s in · 7 s hold · 7 s out · 3 s hold — 8 breaths"`; omit if no breath prescription.
- `colours`: list from red, yellow, blue, white, black; empty if none.
- `words`: mantric words/sounds used, exactly as spelled in the text, e.g. `["I-Hau-Haa"]`, `["Yat-Ha-Ah-Hu-Vo", "Om"]`.
- `posture`, `orientation`, `timeOfDay`, `duration`: short strings; omit if the text gives nothing.
- `cautions`: list of the author's own warnings, paraphrased, one sentence each.
- `prerequisites`: slugs of exercises the text says to do first / to be practised in.
- `related`: slugs of related exercises (see the slug list below).
- `concepts`: doctrine slugs (see list below) that the exercise depends on.
- `pages`: PDF indices (integers) where the exercise's text lives.
- `manuscriptPages`: the author's page numbers as a range string, e.g. `"19–21"` (from `manuscript_page` in the page frontmatter).
- `diagrams`: list of `{ file, caption, page }`. Files exist as `pNNN-K.jpg` where NNN = PDF index and K = 1-based
  position of the diagram in that page's frontmatter `diagrams:` list (see `transcription/diagrams.json`
  for the full list: `[pdf_index, k0, desc, bbox]` with k0 zero-based → file uses k0+1). Only include diagrams
  that belong to the exercise (skip decorative dividers and script lines unless relevant). Caption: describe what it shows.

## The original file

Frontmatter: `exercise: <slug>` and `pages: [..]`. Body: the transcription text of that exercise copied
**verbatim** from the page files, in order, joined across page breaks (join a word split across pages).
Keep the `[DIAGRAM: …]`, `{insert}`, `[margin: …]`, `[?]` marks. Keep the `##`/`###` headings. Where the
facsimile skips a manuscript page, insert a line `[text continues on the missing manuscript page N]`.
For auxiliaries, copy only the paragraphs that concern that practice. Do not edit, correct or omit words.

## Slugs

Doctrine (for `concepts`): the-master-system, breath-is-life, master-rhythm, gaya-lhama, four-planes-and-colours,
eyes-sun-moon-and-spot, master-thought-word-and-deed, observation-interpretation-application, pentagram-of-man,
sacred-words, signs-and-postures, four-initiations, centres-of-the-body, illumination-and-the-ego,
hands-and-fingers, phenomena-and-cautions, symbols-and-emblems.

Exercises (for `related`/`prerequisites`/`parent`):
- Master: first-master-arcane, second-master-arcane, third-master-arcane, fourth-master-arcane, fifth-master-arcane, sixth-master-arcane, seventh-master-arcane
- Lesser: doctrine-of-the-heart, creation-exercise, ritual-of-the-pentagram, exciting-the-life-energy, healing-power, soundless-sound-aum, concentration, dream-consciousness, recharging-nervous-energy, kechara-mudra, mullah-mudra, face-and-head-rejuvenation, rejuvenation-of-energy, demand-command, mental-connection, birth-control-and-predestination
- Ritual: magical-projection
- Auxiliary: sun-and-moon-breath-posture, care-of-the-feet, master-system-postures, sun-gazing, eye-muscle-exercises, splitting-the-ether, inner-and-far-gaze, crystal-gazing, sky-gazing, blood-purification-regimen, thyroid-exercises, blood-circulation-control, foot-massage, hand-exercises-and-thumbs, magnetic-electric-hands, laying-on-of-hands, neck-massage-blood-pressure, tongue-stick-exercise, yawning-exercise, jaw-exercise, nape-exercise, order-of-the-serpent

## Checks before you finish

- YAML frontmatter is valid (quote strings containing colons or dashes at the start; lists in `[a, b]` or `- a` form).
- Every slug you reference is in the list above.
- Every `diagrams.file` exists in `site/public/figures/`.
- The original file contains only Walewski's words (plus the editorial marks and the missing-page line).
