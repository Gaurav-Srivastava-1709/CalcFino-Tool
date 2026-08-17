import type { APIRoute } from 'astro';
import { categorySlug, generalTools } from '../data/calculatorCatalog';
import { tools } from '../data/tools';

const staticPaths = [
  '/',
  '/about/',
  '/contact/',
  '/disclaimer/',
  '/financial-calculators/',
  '/health-calculators/',
  '/marketing-calculators/',
  '/privacy-policy/',
  '/terms/',
];

export const GET: APIRoute = ({ site }) => {
  const paths = [
    ...staticPaths,
    ...tools.map((tool) => `/${tool.slug}/`),
    ...generalTools.map((tool) => `/${categorySlug(tool)}/${tool.slug}/`),
  ];
  const urls = [...new Set(paths)]
    .map((path) => new URL(path, site).href)
    .sort()
    .map((url) => `<url><loc>${url}</loc></url>`)
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
