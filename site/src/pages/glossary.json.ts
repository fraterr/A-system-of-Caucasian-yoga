import { getCollection } from 'astro:content';

export async function GET() {
  const terms = await getCollection('glossary');
  const out = terms.map((t) => ({ term: t.data.term, aliases: t.data.aliases, slug: t.id, short: t.data.short }));
  return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json' } });
}
