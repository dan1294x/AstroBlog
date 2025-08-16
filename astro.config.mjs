// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://dan1294x.github.io/AstroBlog/',
  base: '/AstroBlog/',
  outDir: 'docs',
  integrations: [preact()],
});