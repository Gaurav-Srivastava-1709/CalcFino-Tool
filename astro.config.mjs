// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://calcfino-tools.pages.dev',
  integrations: [sitemap({
    filter: (page) => !/\/(404|500)\/$/.test(page),
    chunks: {
      financial: (item) => item.url.includes('/financial/') ? item : undefined,
      health: (item) => item.url.includes('/health/') ? item : undefined,
      marketing: (item) => item.url.includes('/marketing/') ? item : undefined,
      running: (item) => {
        const path = new URL(item.url).pathname;
        return path.endsWith('-pace-calculator/') || path === '/finish-time-calculator/' ? item : undefined;
      },
    },
    namespaces: { news: false, video: false, xhtml: false, image: false },
  })],
  vite: { plugins: [tailwindcss()] },
});
