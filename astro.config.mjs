// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://diktat.ai',
  output: 'static',
  trailingSlash: 'never',
  build: {
    assets: '_nuxt-landing' // Keep same asset path for cache continuity
  },
  integrations: [
    tailwind(),
    vue(), // For gradual migration of complex interactive components
    sitemap({
      filter: (page) =>
        !page.includes('/impressum') &&
        !page.includes('/imprint') &&
        !page.includes('/datenschutz') &&
        !page.includes('/privacy') &&
        !page.includes('/agb') &&
        !page.includes('/terms'),
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
          nl: 'nl-NL',
          es: 'es-ES',
          fr: 'fr-FR',
          sv: 'sv-SE'
        }
      }
    })
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue']
          }
        }
      }
    }
  }
});
