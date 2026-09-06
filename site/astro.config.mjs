import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fraterr.github.io',
  base: '/A-system-of-Caucasian-yoga',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: { shikiConfig: { theme: 'github-light' } },
});
