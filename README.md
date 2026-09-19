# CalcFino Tools

Static calculator website built with Astro 7, TypeScript, and Tailwind CSS 4. It contains approximately 127 browser-based tools across financial, health, marketing, running, race, swimming, and training topics.

## Local development

```sh
npm install
npm run dev
```

Run all quality checks:

```sh
npm run validate
```

This command runs Astro type checking, creates a production build, and validates rendered calculator content and SEO requirements. The production output is written to `dist/`.

## Environment

Copy the values from `.env.example` into `.env` for local use, and configure the same variables in Cloudflare Pages:

- `PUBLIC_CONTACT_EMAIL`: verified public contact address. Set this before launch.
- `PUBLIC_GA_ID`: optional Google Analytics measurement ID. Leave unset to disable analytics.

## Cloudflare Pages

Dashboard deployment settings:

- Build command: `npm run build`
- Build directory: `dist`
- Node version: `22.12.0` or newer

For direct CLI deployment, authenticate once and deploy:

```sh
npx wrangler login
npm run deploy
```

The canonical site URL is configured in `astro.config.mjs`. Change it there when moving from the `pages.dev` address to a custom domain.

## Search indexing

The production build generates a direct `sitemap.xml` containing every indexable page, plus category sitemap files for diagnostics. Submit this URL in Google Search Console and Bing Webmaster Tools:

```text
https://calcfinotools.pages.dev/sitemap.xml
```

Do not add an `X-Robots-Tag: noindex` header to the `pages.dev` hostname while it is the site's only public address. If a custom domain is added later, update `site` in `astro.config.mjs` first, redirect the `pages.dev` hostname to the custom domain if possible, and then resubmit the sitemap under the new Search Console property.

After deploying changed or new calculators, notify search engines that support IndexNow:

```sh
npm run seo:submit
```

This requests faster discovery. It does not create visits or guarantee indexing or rankings.
