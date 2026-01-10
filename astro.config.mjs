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
      filter: (page) => {
        // Block legal pages
        if (page.includes('/impressum') || page.includes('/imprint') ||
            page.includes('/datenschutz') || page.includes('/privacy') ||
            page.includes('/agb') || page.includes('/terms') ||
            page.includes('/voorwaarden') || page.includes('/colofon') ||
            page.includes('/terminos') || page.includes('/aviso-legal') ||
            page.includes('/privacidad') || page.includes('/conditions') ||
            page.includes('/mentions-legales') || page.includes('/confidentialite') ||
            page.includes('/villkor') || page.includes('/integritetspolicy') ||
            page.includes('/gegevensbescherming')) {
          return false;
        }
        // Block blog for non-German locales
        if (page.match(/\/(en|nl|es|fr|sv)\/blog/)) {
          return false;
        }
        return true;
      },
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
