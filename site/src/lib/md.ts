import { marked } from 'marked';
import { url } from './url';

marked.setOptions({ gfm: true, breaks: false });

/** Escape for HTML attribute/text contexts. */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Render a faithful-transcription markdown body to HTML, turning the
 * editorial marks used in the transcription into styled spans:
 *   [DIAGRAM: ...]  → diagram note
 *   [margin: ...]   → marginal note
 *   {word}          → interlinear insertion
 *   [?] / [word?]   → uncertain reading
 */
export function renderOriginal(md: string): string {
  let html = marked.parse(md) as string;
  html = html
    .replace(/<p>\s*\[DIAGRAM:\s*([\s\S]*?)\]\s*<\/p>/g, (_m, d) => `<p class="diagram-note">✎ Diagram: ${d}</p>`)
    .replace(/\[DIAGRAM:\s*([\s\S]*?)\]/g, (_m, d) => `<span class="diagram-note">✎ Diagram: ${d}</span>`)
    .replace(/\[margin:\s*([\s\S]*?)\]/g, (_m, d) => `<span class="margin-note" title="Marginal note in the manuscript">⟨margin: ${d}⟩</span>`)
    .replace(/\{([^{}]{1,80})\}/g, (_m, d) => `<span class="insert" title="Interlinear insertion in the manuscript">${d}</span>`)
    .replace(/\[\?\]/g, `<span class="unc" title="Illegible or erased in the manuscript">[?]</span>`)
    .replace(/\[([^\[\]]{1,40})\?\]/g, (_m, d) => `<span class="unc" title="Uncertain reading">${d}<sup>?</sup></span>`);
  return fixLinks(html);
}

/** Rewrite site-absolute links ("/doctrine/x/") to include the configured base path. */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export function fixLinks(html: string): string {
  return html.replace(/(href|src)="\/(?!\/)/g, `$1="${base}/`);
}

/** Render ordinary markdown (practice cards, doctrine) to HTML. */
export function renderMd(md: string): string {
  return fixLinks(marked.parse(md) as string);
}

/** Plain-text excerpt of a markdown body. */
export function excerpt(md: string, n = 220): string {
  const t = md.replace(/^---[\s\S]*?---/, '').replace(/[#*_>`\[\]]/g, '').replace(/\s+/g, ' ').trim();
  return t.length > n ? t.slice(0, n).replace(/\s\S*$/, '') + '…' : t;
}

export { esc, url };
