/** Chapter map of the manuscript, by PDF page index (0-based, inclusive ranges). */
export interface Chapter { title: string; from: number; to: number; group: string; link?: string; }

export const CHAPTERS: Chapter[] = [
  { title: 'Covers and title pages', from: 0, to: 4, group: 'Front matter' },
  { title: 'Key to Mastery', from: 5, to: 5, group: 'Front matter' },
  { title: 'Index to Contents', from: 6, to: 11, group: 'Front matter' },
  { title: 'Introduction — breath, Gaya-Lhama, the four planes', from: 12, to: 16, group: 'Introduction' },
  { title: 'Master Arcanes — general points', from: 17, to: 18, group: 'The Seven Master Arcanes' },
  { title: 'I — First Master Arcane', from: 19, to: 22, group: 'The Seven Master Arcanes', link: 'exercises/first-master-arcane' },
  { title: 'II — Second Master Arcane (and care of the feet)', from: 23, to: 25, group: 'The Seven Master Arcanes', link: 'exercises/second-master-arcane' },
  { title: 'III — Third Master Arcane', from: 25, to: 28, group: 'The Seven Master Arcanes', link: 'exercises/third-master-arcane' },
  { title: 'IV — Fourth Master Arcane', from: 28, to: 32, group: 'The Seven Master Arcanes', link: 'exercises/fourth-master-arcane' },
  { title: 'V — Fifth Master Arcane', from: 32, to: 34, group: 'The Seven Master Arcanes', link: 'exercises/fifth-master-arcane' },
  { title: 'VI — Sixth Master Arcane', from: 35, to: 38, group: 'The Seven Master Arcanes', link: 'exercises/sixth-master-arcane' },
  { title: 'VII — Seventh Master Arcane (weather control)', from: 39, to: 41, group: 'The Seven Master Arcanes', link: 'exercises/seventh-master-arcane' },
  { title: 'General Compendium', from: 42, to: 54, group: 'General Compendium' },
  { title: 'I L. — Doctrine of the Heart', from: 55, to: 57, group: 'Lesser Arcanes', link: 'exercises/doctrine-of-the-heart' },
  { title: 'II G. — Creation Exercise', from: 58, to: 61, group: 'Lesser Arcanes', link: 'exercises/creation-exercise' },
  { title: 'III G. — Projecting of Power, Ritual of the Pentagram', from: 62, to: 64, group: 'Lesser Arcanes', link: 'exercises/ritual-of-the-pentagram' },
  { title: 'IV L. — Exciting the Life Energy', from: 65, to: 65, group: 'Lesser Arcanes', link: 'exercises/exciting-the-life-energy' },
  { title: 'V L. — Healing Power', from: 66, to: 66, group: 'Lesser Arcanes', link: 'exercises/healing-power' },
  { title: 'VI L. — Soundless Sound, "Aum"', from: 67, to: 68, group: 'Lesser Arcanes', link: 'exercises/soundless-sound-aum' },
  { title: 'VII L. — Concentration (and the eye exercises)', from: 68, to: 75, group: 'Lesser Arcanes', link: 'exercises/concentration' },
  { title: 'VIII G. — Dream Consciousness', from: 75, to: 79, group: 'Lesser Arcanes', link: 'exercises/dream-consciousness' },
  { title: 'IX L. — Recharging Nervous Energy (rods of power)', from: 80, to: 83, group: 'Lesser Arcanes', link: 'exercises/recharging-nervous-energy' },
  { title: 'X L. — Kechara Mudra', from: 83, to: 84, group: 'Lesser Arcanes', link: 'exercises/kechara-mudra' },
  { title: 'XI L. — Mullah Mudra', from: 85, to: 87, group: 'Lesser Arcanes', link: 'exercises/mullah-mudra' },
  { title: 'XII G.S. — Face and Head Rejuvenation (blood, feet, hands, tongue)', from: 87, to: 101, group: 'Lesser Arcanes', link: 'exercises/face-and-head-rejuvenation' },
  { title: 'XIII L. — Rejuvenation of Energy (yawning, the Order of the Serpent)', from: 101, to: 109, group: 'Lesser Arcanes', link: 'exercises/rejuvenation-of-energy' },
  { title: 'XIV L. — Demand, Command', from: 110, to: 113, group: 'Lesser Arcanes', link: 'exercises/demand-command' },
  { title: 'XV L. — Mental Connection', from: 113, to: 115, group: 'Lesser Arcanes', link: 'exercises/mental-connection' },
  { title: 'XVI L. — Birth Control and Predestination', from: 116, to: 117, group: 'Lesser Arcanes', link: 'exercises/birth-control-and-predestination' },
  { title: 'Illumination (Conclusion)', from: 117, to: 122, group: 'Conclusion', link: 'doctrine/illumination-and-the-ego' },
  { title: 'Magical Projection (unfinished)', from: 123, to: 127, group: 'Conclusion', link: 'exercises/magical-projection' },
];

export function chapterOf(i: number): Chapter | undefined {
  // pages shared by two chapters belong to the later one for the start of a section
  const hits = CHAPTERS.filter((c) => i >= c.from && i <= c.to);
  return hits[hits.length - 1];
}

/** Known gaps: manuscript page numbers absent from the facsimile. */
export const MISSING_MS_PAGES = [19, 36, 86, 92];
