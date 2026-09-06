import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const diagram = z.object({
  file: z.string(),            // path under /figures, e.g. "p060-1.jpg"
  caption: z.string().optional(),
  page: z.number().optional(), // pdf index
});

const exercises = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/exercises' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    category: z.enum(['master-arcane', 'lesser-arcane', 'auxiliary', 'ritual']),
    parent: z.string().optional(),       // slug of the arcane this auxiliary exercise belongs to
    number: z.string().optional(),       // "I", "II", ... or free label
    order: z.number(),                   // sort order within site
    summary: z.string(),                 // one-sentence
    purpose: z.array(z.string()).default([]),   // tags: clairvoyance, will, healing...
    planes: z.array(z.enum(['physical', 'mental', 'spiritual', 'psychic'])).default([]),
    bodyAreas: z.array(z.string()).default([]),
    breath: z.string().optional(),       // short rhythm description, e.g. "7 in · 1 hold · 7 out"
    colours: z.array(z.string()).default([]),
    words: z.array(z.string()).default([]),  // mantric words/sounds used
    posture: z.string().optional(),
    orientation: z.string().optional(),  // facing sun/moon/north...
    timeOfDay: z.string().optional(),
    duration: z.string().optional(),
    cautions: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]), // slugs
    related: z.array(z.string()).default([]),       // slugs (exercises or doctrine)
    concepts: z.array(z.string()).default([]),      // doctrine slugs
    pages: z.array(z.number()).default([]),         // pdf indices where the text lives
    manuscriptPages: z.string().optional(),         // "15–18"
    diagrams: z.array(diagram).default([]),
  }),
});

const originals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/originals' }),
  schema: z.object({
    exercise: z.string(),   // exercise slug
    pages: z.array(z.number()).default([]),
  }),
});

const doctrine = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/doctrine' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    group: z.string().optional(),       // e.g. "Foundations", "The body", "Signs & words"
    related: z.array(z.string()).default([]),   // slugs (doctrine or exercises)
    exercises: z.array(z.string()).default([]), // exercise slugs that use this concept
    pages: z.array(z.number()).default([]),
    diagrams: z.array(diagram).default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    pdf_index: z.number(),
    manuscript_page: z.number().nullable().optional(),
    blank: z.boolean().default(false),
    diagrams: z.array(z.object({ desc: z.string(), bbox: z.array(z.number()).length(4) })).default([]),
    chapter: z.string().optional(),   // filled by build script: which chapter this page belongs to
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    aliases: z.array(z.string()).default([]),
    short: z.string(),                 // one-line gloss (used in tooltips)
    related: z.array(z.string()).default([]),
    pages: z.array(z.number()).default([]),
  }),
});

export const collections = { exercises, originals, doctrine, pages, glossary };
