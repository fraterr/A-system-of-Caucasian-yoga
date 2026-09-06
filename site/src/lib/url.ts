const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Prefix an absolute site path with the configured base. */
export const url = (path: string) => `${base}/${path.replace(/^\//, '')}`;
export const pad3 = (n: number) => String(n).padStart(3, '0');
export const CATEGORY_LABEL: Record<string, string> = {
  'master-arcane': 'Master Arcane',
  'lesser-arcane': 'Lesser Arcane',
  'auxiliary': 'Auxiliary practice',
  'ritual': 'Magical work',
};
export const CATEGORY_ORDER = ['master-arcane', 'lesser-arcane', 'auxiliary', 'ritual'];
export const PLANE_COLOUR: Record<string, string> = { physical: '#c8322b', mental: '#e0b32a', spiritual: '#2f5a9e', psychic: '#f4f1ea' };
export const COLOUR_HEX: Record<string, string> = { red: '#c8322b', yellow: '#e0b32a', blue: '#2f5a9e', white: '#f4f1ea', black: '#111111' };
