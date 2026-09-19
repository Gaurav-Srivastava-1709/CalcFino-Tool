import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const calculatorRoots = ['financial', 'health', 'marketing'];
const failures = [];
const results = [];

const countWords = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z0-9#]+;/gi, ' ')
  .trim()
  .split(/\s+/)
  .filter(Boolean).length;

const validateSeo = (file, html) => {
  if (!html.includes('<title>') || !html.includes('name="description"')) failures.push(`${file}: SEO metadata missing`);
  if (!html.includes('rel="canonical"')) failures.push(`${file}: canonical URL missing`);
  if (!html.includes('name="robots"')) failures.push(`${file}: robots metadata missing`);
  if (!html.includes('"@type":"SoftwareApplication"')) failures.push(`${file}: SoftwareApplication JSON-LD missing`);
  if (!html.includes('"@type":"BreadcrumbList"')) failures.push(`${file}: BreadcrumbList JSON-LD missing`);
};

for (const root of calculatorRoots) {
  const rootPath = path.join(dist, root);
  for (const entry of fs.readdirSync(rootPath, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const file = path.join(rootPath, entry.name, 'index.html');
    const html = fs.readFileSync(file, 'utf8');
    const words = countWords(html);
    results.push({ route: `/${root}/${entry.name}`, words });
    if (words < 600) failures.push(`${file}: only ${words} rendered words`);
    if (!html.includes('Frequently asked questions')) failures.push(`${file}: FAQ section missing`);
    if (!html.includes('"@type":"FAQPage"')) failures.push(`${file}: FAQ JSON-LD missing`);
    validateSeo(file, html);
  }
}

for (const entry of fs.readdirSync(dist, { withFileTypes: true })) {
  if (!entry.isDirectory() || !entry.name.endsWith('-calculator')) continue;
  const file = path.join(dist, entry.name, 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  const words = countWords(html);
  results.push({ route: `/${entry.name}`, words });
  if (words < 600) failures.push(`${file}: only ${words} rendered words`);
  if (!html.includes('Frequently asked questions')) failures.push(`${file}: FAQ section missing`);
  if (!html.includes('"@type":"FAQPage"')) failures.push(`${file}: FAQ JSON-LD missing`);
  validateSeo(file, html);
}

const paceChartRoutes = [
  '5k-pace-calculator',
  '10k-pace-calculator',
  'half-marathon-pace-calculator',
  'marathon-pace-calculator',
];
for (const route of paceChartRoutes) {
  const file = path.join(dist, route, 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('Popular goal-time pace chart')) failures.push(`${file}: goal-time pace chart missing`);
  if (!html.includes('Pace / km') || !html.includes('Pace / mile')) failures.push(`${file}: pace chart columns missing`);
}

const home = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const homeWords = countWords(home);
if (homeWords < 600) failures.push(`Homepage: only ${homeWords} rendered words`);
if (!home.includes('rel="canonical"')) failures.push('Homepage: canonical URL missing');

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
for (const route of paceChartRoutes) {
  if (!sitemap.includes(`/${route}/`)) failures.push(`Sitemap: /${route}/ missing`);
}

const counts = Object.fromEntries(calculatorRoots.map((root) => [root, results.filter((item) => item.route.startsWith(`/${root}/`)).length]));
const minimum = results.reduce((smallest, item) => item.words < smallest.words ? item : smallest, results[0]);
console.log(`Content audit: ${results.length} calculators, financial=${counts.financial}, health=${counts.health}, marketing=${counts.marketing}, homepage=${homeWords} words, minimum=${minimum.words} words (${minimum.route})`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
