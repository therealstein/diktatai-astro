# Functional Parity Checklist: Nuxt vs Astro

**Created:** 2025-01-08
**Last Updated:** 2025-01-08
**Purpose:** Ensure 1:1 functional parity between Nuxt and Astro implementations
**Build Status:** 157 pages built successfully

## Analytics & Tracking

### PostHog Analytics
| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| PostHog initialization | `plugins/posthog.client.ts` | `Layout.astro` inline | DONE |
| Lazy/deferred loading | requestIdleCallback + 3s timeout | requestIdleCallback + 3s timeout | DONE |
| Page view tracking | Manual `$pageview` event | `capture_pageview: true` | DONE |
| Page leave tracking | Manual `$pageleave` event | `capture_pageleave: true` | DONE |
| Custom event tracking (`trackPostHogEvent`) | via plugin | Global helper function | DONE |
| Contact form tracking | `contact_form_submission` events | `contact_form_submission` events | DONE |
| PostHog config options | Full config (disable_surveys, etc.) | Full config (matching Nuxt) | DONE |
| Dev mode disable | IS_DEV env check | Not implemented (static site) | N/A |
| Auth tracking (login/register) | via `trackAuth` | N/A (static site) | N/A |

### Google Tag Manager (GTM)
| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| GTM Script | `layouts/default.vue` | `Layout.astro` | DONE |
| Account ID | AW-16950089138 | AW-16950089138 | DONE |
| Lazy loading (3s OR user interaction) | Yes | Yes | DONE |
| Conversion tracking | `gtag('config', 'AW-16950089138')` | `gtag('config', 'AW-16950089138')` | DONE |
| User interaction events | mousedown, keydown, touchstart, scroll | mousedown, keydown, touchstart, scroll | DONE |

## Cookie Consent

| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| ConsentBanner component | `components/ConsentBanner.vue` | `components/ConsentBanner.astro` | DONE |
| localStorage tracking | `consent_shown` | `consent_shown` + `consent_accepted` | DONE |
| Accept/Decline buttons | Yes | Yes | DONE |
| i18n support (6 locales) | de, en, nl, es, fr, sv | de, en, nl, es, fr, sv | DONE |
| Privacy policy link | Links to /privacy | Links to locale-specific privacy | DONE |
| Google Consent Mode | Not implemented | Implemented (consent update) | DONE+ |

## Contact Form

| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| Form component | `pages/general/kontakt.vue` | `ContactPage.astro` | DONE |
| Honeypot field | Yes | Yes | DONE |
| All form fields (name, email, subject, message, company, phone) | Yes | Yes | DONE |
| Privacy checkbox | Yes | Yes | DONE |
| API submission to `/api/contact` | via `$fetch` | via `fetch` | DONE |
| PostHog `contact_form_submission` event | Yes | Yes | DONE |
| PostHog `contact_form_submission_full` event | Yes | Yes | DONE |
| Success/error messages | Yes | Yes | DONE |
| Loading state | Yes | Yes | DONE |
| i18n support (6 locales) | Yes | Yes | DONE |

## UI Components

### Toast Notifications
| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| Toast component | `components/ui/Toast.vue` | Not present | OPTIONAL |
| useToast composable | `composables/useToast.ts` | N/A | OPTIONAL |
| Position variants | top/bottom, start/center/end | N/A | OPTIONAL |
| Type variants | info, success, warning, error | N/A | OPTIONAL |
| Auto-hide duration | Configurable | N/A | OPTIONAL |

**Note:** Toast notifications are primarily used in the Nuxt app for user feedback. In Astro, the contact form uses inline success/error messages which serve the same purpose.

### Modal System
| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| useModal composable | `composables/useModal.ts` | Not present | OPTIONAL |
| Modal open/close | Yes | N/A | OPTIONAL |

**Note:** Modal system is not required for the static landing page.

## Utilities

### Email Normalization
| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| useEmailNormalization composable | `composables/useEmailNormalization.ts` | Not present | OPTIONAL |
| Gmail normalization | Removes dots, handles + aliases | N/A | OPTIONAL |

**Note:** Email normalization is a server-side concern and can be handled by the API endpoint.

### URL Generation
| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| useAppUrl composable | `composables/useAppUrl.ts` | Not present | N/A |
| Login/Register URLs | Yes | N/A | N/A |

**Note:** URL generation for auth flows is not needed in the static landing page.

## SEO Features

| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| Canonical URLs | `useSeoCanonical` | In Layout.astro | DONE |
| Hreflang tags | Yes | Yes | DONE |
| Open Graph tags | Yes | Yes | DONE |
| Twitter Card tags | Yes | Yes | DONE |
| WebApplication schema | `app.vue` | Layout.astro | DONE |
| Organization schema | Mentioned in privacy | Layout.astro | DONE |
| FAQ schema (JSON-LD) | FAQSection.vue | FAQSection.astro | DONE |
| Font preloading | nuxt.config.ts | Layout.astro | DONE |
| DNS prefetch | nuxt.config.ts | Layout.astro | DONE |
| Preconnect | nuxt.config.ts | Layout.astro | DONE |
| Sitemap | @nuxtjs/sitemap | @astrojs/sitemap | DONE |

## i18n (Internationalization)

| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| Supported locales | de, en, nl, es, fr, sv | de, en, nl, es, fr, sv | DONE |
| Route translations | nuxt.config.ts | Manual page files | DONE |
| Translation files | i18n/locales/*.json | i18n/*.ts files | DONE |
| Hreflang filtering | Filters invalid locales | Manual control | DONE |

## Security Features

| Feature | Nuxt | Astro | Status |
|---------|------|-------|--------|
| Honeypot form field | Yes | Yes | DONE |
| Security headers | nuxt.config.ts | Needs hosting config | HOSTING |
| Route validation middleware | `validate-locale-routes.global.ts` | N/A (file-based routing) | N/A |

---

## Summary

### Critical Items - All Complete:
- [x] **Google Tag Manager** - Conversion tracking for ads with lazy loading
- [x] **ConsentBanner** - Cookie consent required by GDPR with all 6 locales
- [x] **PostHog contact form tracking** - Analytics for form submissions
- [x] **PostHog deferred loading** - Performance optimization matching Nuxt

### Optional Items (Lower Priority - Not Blocking):
- [ ] Toast notification system (inline messages used instead)
- [ ] Modal system (not needed for landing page)
- [ ] Email normalization utility (server-side concern)
- [ ] PostHog dev mode disable (static site, no server-side check)

### Already Complete:
- All page content migrated
- i18n for all 6 locales
- SEO meta tags & schemas
- Contact form functionality with tracking
- Sitemap generation
- Font preloading
- DNS prefetch/preconnect
- Google Tag Manager with lazy loading
- Cookie consent banner

---

## Files Modified/Created

### New Files:
- `src/components/ConsentBanner.astro` - Cookie consent banner with i18n

### Modified Files:
- `src/layouts/Layout.astro` - Added GTM lazy loading, PostHog deferred loading, ConsentBanner
- `src/components/ContactPage.astro` - Added PostHog tracking events

---

## Verification

**Build Status:** 157 pages built successfully (verified 2025-01-08)

All critical functional features from the Nuxt implementation have been ported to Astro with 1:1 parity.
