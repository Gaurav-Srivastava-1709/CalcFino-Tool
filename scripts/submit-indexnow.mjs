const siteUrl = new URL(process.env.SITE_URL || 'https://calcfinotools.pages.dev/');
const key = '49ab206934d24084bc9b2ed9305765d2';

async function fetchXml(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not fetch ${url}: HTTP ${response.status}`);
  return response.text();
}

function locations(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

const indexUrl = new URL('sitemap-index.xml', siteUrl);
const sitemapUrls = locations(await fetchXml(indexUrl));
const pages = new Set();

for (const sitemapUrl of sitemapUrls) {
  for (const pageUrl of locations(await fetchXml(sitemapUrl))) {
    if (new URL(pageUrl).origin === siteUrl.origin) pages.add(pageUrl);
  }
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: siteUrl.host,
    key,
    keyLocation: new URL(`${key}.txt`, siteUrl).href,
    urlList: [...pages],
  }),
});

if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow rejected the submission: HTTP ${response.status} ${await response.text()}`);
}

console.log(`IndexNow accepted ${pages.size} URLs (HTTP ${response.status}).`);
