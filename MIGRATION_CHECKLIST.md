# Astro Migration Checklist

This checklist tracks the migration of all content from Nuxt to Astro.

**Last Updated:** 2025-01-07
**Build Status:** ✅ Build successful with 157 pages

## Homepage Sections

### Current Nuxt Homepage (pages/index.vue) includes:
- [x] HeroSection2 → HeroSection.astro ✅
- [x] UserGroupsSection → UserGroupsSection.astro ✅ CREATED
- [x] HowItWorksSection → HowItWorksSection.astro ✅
- [x] BenefitsSection → BenefitsSection.astro ✅
- [x] IntegrationsSection → IntegrationsSection.astro ✅ CREATED
- [x] BusinessSolutionsSection → BusinessSolutionsSection.astro ✅ CREATED
- [x] FAQSection → FAQSection.astro ✅ CREATED (with schema.org markup)
- [x] CTASection → CTASection.astro ✅

## User Group Pages (pages/general/*.vue)

| Nuxt Page | Astro Page | Status |
|-----------|------------|--------|
| lawyers.vue | kanzleien-transkription-fuer-anwaelte-refas-und-juristen.astro | ✅ Complete |
| students.vue | studenten-transkription-fuer-studierende-und-akademiker.astro | ✅ Complete |
| coaches.vue | berater-und-coaches-kundengespraeche-sitzungen-effizient-dokumentieren.astro | ✅ Complete |
| media.vue | journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln.astro | ✅ Complete |
| contentcreators.vue | content-ersteller-show-notes-untertitel-blogartikel-inhalte-transkribieren.astro | ✅ Complete |
| sales.vue | geschaeftsleute-und-fuehrungskraefte-meetings-ideen-und-notizen-effizient-festhalten.astro | ✅ Complete |
| about.vue | ueber-uns.astro | ✅ Complete |
| datasafety.vue | datensicherheit-ki-spracherkennung.astro | ✅ Complete |
| business-suite.vue | business-suite.astro | ✅ Complete |
| unternehmen.vue | unternehmen-ki-sicherheit.astro | ✅ Complete |
| behoerden.vue | behoerden-ki-sicherheit.astro | ✅ Complete |
| eu-ki-gesetz.vue | eu-ki-gesetz.astro | ✅ Complete |
| regulierte-branchen.vue | regulierte-branchen-ki-sicherheit.astro | ✅ Complete |
| ki-im-mittelstand.vue | ki-im-mittelstand.astro | ✅ Complete |
| kontakt.vue | kontakt.astro | ✅ Complete |
| help.vue | hilfe.astro | ✅ Complete |

## Core Pages

| Nuxt Page | Astro Page | Status |
|-----------|------------|--------|
| index.vue | index.astro | ✅ Complete (all sections included) |
| pricing.vue | preise.astro | ✅ Complete |
| how-it-works.vue | ki-transkription-wie-es-funktioniert.astro | ✅ Complete |
| privacy.vue | datenschutz.astro | ✅ Complete |
| imprint.vue | impressum.astro | ✅ Complete |
| terms.vue | nutzungsbedingungen.astro | ✅ Complete |

## Blog & Questions

| Content Type | Astro Status |
|--------------|--------------|
| Blog index | ✅ /blog/index.astro |
| Blog posts | ✅ /blog/[...slug].astro |
| Questions index (DE) | ✅ /fragen/index.astro |
| Questions detail (DE) | ✅ /fragen/[...slug].astro |
| Questions index (EN) | ✅ /en/questions/index.astro |
| Questions detail (EN) | ✅ /en/questions/[...slug].astro |

## Components Created

1. **UserGroupsSection.astro** ✅ - Grid of 6 user group cards linking to subpages
2. **IntegrationsSection.astro** ✅ - Email & Software integration showcase
3. **BusinessSolutionsSection.astro** ✅ - 6 business-focused solution cards
4. **FAQSection.astro** ✅ - FAQ accordion with schema.org markup

## i18n Translations

Created translations in `/src/i18n/`:
- [x] translations.ts - Already contains userGroups, integrations, businessSolutions translations
- [x] faq.ts ✅ CREATED - Full FAQ translations for all 6 locales

## Locale Coverage

All homepage sections now exist for these locales:
- [x] German (de) - root `/index.astro`
- [x] English (en) - `/en/index.astro`
- [x] Dutch (nl) - `/nl/index.astro`
- [x] Spanish (es) - `/es/index.astro`
- [x] French (fr) - `/fr/index.astro`
- [x] Swedish (sv) - `/sv/index.astro`

## Routes Updated

Updated `/src/i18n/routes.ts` to match actual page file names:
- [x] lawyers route - Fixed to match actual file paths
- [x] students route - Fixed to match actual file paths

## Completed Tasks

1. ✅ Created this checklist
2. ✅ Created UserGroupsSection.astro with i18n
3. ✅ Created IntegrationsSection.astro with i18n
4. ✅ Created BusinessSolutionsSection.astro with i18n
5. ✅ Created FAQSection.astro with i18n (with schema.org JSON-LD)
6. ✅ Updated all index.astro pages to include all sections
7. ✅ Updated routes.ts to match actual page paths
8. ✅ Build test passed - 157 pages built successfully

## Migration Summary

The Astro homepage now includes all the same sections as the Nuxt homepage:
- HeroSection
- UserGroupsSection (6 profession cards)
- HowItWorksSection (4 steps)
- BenefitsSection (5 benefits)
- IntegrationsSection (Email & Software)
- BusinessSolutionsSection (6 solution cards)
- FAQSection (7 FAQ items with SEO schema)
- CTASection

All 6 locales have been updated with the complete homepage sections.

---

## Functional Parity (Plugins, Tracking, Forms)

**Added:** 2025-01-08

### Analytics & Tracking
- [x] **Google Tag Manager (GTM)** - AW-16950089138 with lazy loading (3s OR user interaction)
- [x] **PostHog Analytics** - Deferred loading via requestIdleCallback + 3s timeout
- [x] **PostHog Config** - Matching Nuxt config (disable_surveys, disable_session_recording, etc.)
- [x] **Custom Event Tracking** - `trackPostHogEvent()` global helper function

### Cookie Consent
- [x] **ConsentBanner** - Created `components/ConsentBanner.astro`
- [x] **i18n Support** - All 6 locales (de, en, nl, es, fr, sv)
- [x] **localStorage** - `consent_shown` and `consent_accepted` tracking
- [x] **Google Consent Mode** - Updates consent on accept

### Contact Form
- [x] **Honeypot Field** - Bot detection
- [x] **PostHog Tracking** - `contact_form_submission` event
- [x] **PostHog Tracking** - `contact_form_submission_full` event with details
- [x] **All Form Fields** - name, email, subject, message, company, phone
- [x] **Privacy Checkbox** - With locale-specific privacy link

### Files Modified/Created
- `src/components/ConsentBanner.astro` - NEW: Cookie consent banner
- `src/layouts/Layout.astro` - UPDATED: GTM, PostHog deferred loading, ConsentBanner
- `src/components/ContactPage.astro` - UPDATED: PostHog tracking events

### Verification
- [x] Build successful - 157 pages
- [x] All critical functional features ported from Nuxt

**See also:** `FUNCTIONAL_PARITY_CHECKLIST.md` for detailed comparison table.
