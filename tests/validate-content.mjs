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
    if (!html.includes('<title>') || !html.includes('name="description"')) failures.push(`${file}: SEO metadata missing`);
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
}

const home = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const homeWords = countWords(home);
if (homeWords < 600) failures.push(`Homepage: only ${homeWords} rendered words`);

const counts = Object.fromEntries(calculatorRoots.map((root) => [root, results.filter((item) => item.route.startsWith(`/${root}/`)).length]));
const minimum = results.reduce((smallest, item) => item.words < smallest.words ? item : smallest, results[0]);
console.log(`Content audit: ${results.length} calculators, financial=${counts.financial}, health=${counts.health}, marketing=${counts.marketing}, homepage=${homeWords} words, minimum=${minimum.words} words (${minimum.route})`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
