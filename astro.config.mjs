// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://CalcFino-Tools.pages.dev',
  integrations: [sitemap({
    namespaces: { news: false, video: false, xhtml: false },
  })],
  vite: { plugins: [tailwindcss()] },
});
