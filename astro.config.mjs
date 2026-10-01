import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.plantutti.pl',
  trailingSlash: 'never',
  integrations: [sitemap()]
});
