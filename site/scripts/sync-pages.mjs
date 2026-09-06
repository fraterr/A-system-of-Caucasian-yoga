// Copies ../transcription/pages/*.md into src/content/pages/ so the Astro
// content collection can load them. The transcription folder stays the
// single source of truth; edit there, then run `npm run sync`.
import { cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = resolve(here, '../../transcription/pages');
const dst = resolve(here, '../src/content/pages');
rmSync(dst, { recursive: true, force: true });
mkdirSync(dst, { recursive: true });
let n = 0;
for (const f of readdirSync(src)) {
  if (!f.endsWith('.md')) continue;
  cpSync(resolve(src, f), resolve(dst, f));
  n++;
}
console.log(`synced ${n} transcription pages`);
