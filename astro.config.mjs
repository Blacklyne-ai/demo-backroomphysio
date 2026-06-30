// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// Backroom Physio Berlin — STATIC build. No adapter, no SSR.
// Output: /dist with plain HTML files. Deploy: Cloudflare PAGES
//   Framework preset: Astro · Build: npm run build · Output: dist
// Tailwind v3.4 via @astrojs/tailwind (v4 breaks Cloudflare Pages).
// Dreisprachig: DE (Root), EN (/en/), RU (/ru/). Recht (Impressum/Datenschutz) nur DE.
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://demo-backroomphysio.pages.dev',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de-DE', en: 'en-US' } },
      filter: (page) => !/\/(impressum|datenschutz)\/?$/.test(page),
    }),
  ],
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
});
