# CalcFino Tools

Static Astro 7 and Tailwind 4 website with 19 running, race, swimming, and training calculators.

## Local development

```sh
npm install
npm run dev
```

Quality checks:

```sh
npm run check
npm run build
```

The production output is written to `dist/`.

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
