# Diktat AI Astro Project

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   └── *Page.astro      # Page-level components (e.g., PricingPage.astro)
├── i18n/                # Internationalization
│   ├── routes.ts        # Route definitions for all locales
│   ├── utils.ts         # Locale utilities (getLocalePath, localeInfo)
│   └── *.ts             # Translation files per feature
├── layouts/
│   └── Layout.astro     # Main layout with SEO (canonical, hreflang)
├── pages/               # File-based routing
│   ├── *.astro          # German pages (default locale)
│   ├── en/              # English pages
│   ├── nl/              # Dutch pages
│   ├── es/              # Spanish pages
│   ├── fr/              # French pages
│   └── sv/              # Swedish pages
└── styles/
    └── global.css       # Tailwind + DaisyUI
```

## Locales

- **de** (German) - Default, pages in root `/src/pages/`
- **en** (English) - `/src/pages/en/`
- **nl** (Dutch) - `/src/pages/nl/`
- **es** (Spanish) - `/src/pages/es/`
- **fr** (French) - `/src/pages/fr/`
- **sv** (Swedish) - `/src/pages/sv/`

## Creating a New Page (All Locales)

### 1. Add route to `src/i18n/routes.ts`

```typescript
export const routes = {
  // ... existing routes
  myNewPage: {
    de: '/meine-neue-seite',
    en: '/en/my-new-page',
    nl: '/nl/mijn-nieuwe-pagina',
    es: '/es/mi-nueva-pagina',
    fr: '/fr/ma-nouvelle-page',
    sv: '/sv/min-nya-sida',
  },
};
```

### 2. Create translation file `src/i18n/myNewPage.ts`

```typescript
export const myNewPageTranslations = {
  de: {
    seo: {
      title: "Seitentitel - Diktat AI",
      description: "Meta-Beschreibung für SEO"
    },
    hero: { title: "...", description: "..." },
    // ... other sections
  },
  en: { /* ... */ },
  nl: { /* ... */ },
  es: { /* ... */ },
  fr: { /* ... */ },
  sv: { /* ... */ },
} as const;
```

### 3. Create component `src/components/MyNewPagePage.astro`

```astro
---
import { getLocalePath, getRegisterUrl, type Locale } from '../i18n/utils';

interface Props {
  locale: Locale;
  t: { /* type matching translations */ };
}

const { locale, t } = Astro.props;
const registerUrl = getRegisterUrl(locale);
const pricingPath = getLocalePath('pricing', locale);
---

<div class="bg-base-100 text-base-content">
  <!-- Hero Section -->
  <div class="hero min-h-[40vh]" style="background: linear-gradient(135deg, #ef56a4 0%, #4a90e2 100%);">
    <div class="hero-content text-center">
      <h1 class="font-display text-4xl font-bold text-white">{t.hero.title}</h1>
    </div>
  </div>
  <!-- Content sections -->
</div>
```

### 4. Create page files for each locale

**German (default):** `src/pages/meine-neue-seite.astro`
```astro
---
import Layout from '../layouts/Layout.astro';
import MyNewPagePage from '../components/MyNewPagePage.astro';
import { myNewPageTranslations } from '../i18n/myNewPage';

const locale = 'de';
const t = myNewPageTranslations[locale];
---

<Layout
  title={t.seo.title}
  description={t.seo.description}
  locale={locale}
  routeKey="myNewPage"
>
  <MyNewPagePage locale={locale} t={t} />
</Layout>
```

**Other locales:** `src/pages/en/my-new-page.astro` (etc.)
```astro
---
import Layout from '../../layouts/Layout.astro';
import MyNewPagePage from '../../components/MyNewPagePage.astro';
import { myNewPageTranslations } from '../../i18n/myNewPage';

const locale = 'en';
const t = myNewPageTranslations[locale];
---

<Layout
  title={t.seo.title}
  description={t.seo.description}
  locale={locale}
  routeKey="myNewPage"
>
  <MyNewPagePage locale={locale} t={t} />
</Layout>
```

## SEO Configuration

### Layout Props

| Prop | Required | Description |
|------|----------|-------------|
| `title` | Yes | Page title (auto-appends "| Diktat AI" if not present) |
| `description` | Yes | Meta description |
| `locale` | Yes | Current locale ('de', 'en', etc.) |
| `routeKey` | Yes | Key from routes.ts for hreflang generation |
| `image` | No | OG image path (default: `/diktatai-transkribieren.webp`) |
| `noindex` | No | Set `true` for legal pages |

### Canonical & Hreflang

- **Canonical:** Auto-generated from `Astro.url.pathname`
- **Hreflang:** Generated from `routeKey` lookup in routes.ts
- **x-default:** Points to German version

## Styling Patterns

- **Tailwind CSS** with **DaisyUI** components
- **Accent color:** `#ef56a4` (pink-500)
- **Gradient hero:** `linear-gradient(135deg, #ef56a4 0%, #4a90e2 100%)`
- **Cards:** `bg-base-200 shadow-xl border border-base-300`
- **Font:** `font-display` for headings (Plus Jakarta Sans)

## Common Utilities

```typescript
import { getLocalePath, getRegisterUrl, appUrls, type Locale } from '../i18n/utils';

// Get localized path
const pricingPath = getLocalePath('pricing', locale); // Returns '/preise' for 'de'

// Get locale-specific register URL
const registerUrl = getRegisterUrl(locale);
// de: 'https://diktat.ai/auth/register'
// en: 'https://diktat.ai/en/auth/register'
// nl, es, fr, sv: 'https://diktat.ai/{locale}/auth/register'

// App URLs (non-localized)
appUrls.login  // https://app.diktat.ai/sign-in
appUrls.app    // https://app.diktat.ai
```

## Build & Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build
```

## Checklist for New Pages

- [ ] Route added to `src/i18n/routes.ts`
- [ ] Translation file created with all 6 locales
- [ ] Component created in `src/components/`
- [ ] Page files created for all 6 locales
- [ ] All pages use `routeKey` prop for hreflang
- [ ] Build passes (`npm run build`)
