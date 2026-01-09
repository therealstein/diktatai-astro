import { translations, type Locale } from './translations';
import { routes, type RouteKey } from './routes';

// Get nested value from object using dot notation
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Create a translation function for a specific locale
export function getTranslation(locale: Locale) {
  const t = translations[locale];

  return function(key: string, params?: Record<string, string | number>): string {
    let value = getNestedValue(t, key);

    if (value === undefined) {
      console.warn(`Translation key "${key}" not found for locale "${locale}"`);
      return key;
    }

    // Handle template parameters like {year}
    if (params && typeof value === 'string') {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        value = value!.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramValue));
      });
    }

    return value;
  };
}

// Get the path for a specific route and locale
export function getLocalePath(routeKey: RouteKey, locale: Locale): string | false {
  return routes[routeKey]?.[locale] ?? false;
}

// Get alternate URLs for all locales for a specific route
export function getAlternateUrls(routeKey: RouteKey): Record<Locale, string | false> {
  return routes[routeKey] as Record<Locale, string | false>;
}

// Detect locale from pathname
export function getCurrentLocale(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/nl')) return 'nl';
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/sv')) return 'sv';
  return 'de';
}

// All supported locales
export const locales: Locale[] = ['de', 'en', 'nl', 'es', 'fr', 'sv'];
export const defaultLocale: Locale = 'de';

// Locale metadata
export const localeInfo: Record<Locale, { name: string; flag: string; language: string }> = {
  de: { name: 'Deutsch', flag: '/DE.svg', language: 'de-DE' },
  en: { name: 'English', flag: '/GB.svg', language: 'en-US' },
  nl: { name: 'Nederlands', flag: '/NL.svg', language: 'nl-NL' },
  es: { name: 'Español', flag: '/ES.svg', language: 'es-ES' },
  fr: { name: 'Français', flag: '/FR.svg', language: 'fr-FR' },
  sv: { name: 'Svenska', flag: '/SE.svg', language: 'sv-SE' },
};

// App URLs
export const appUrls = {
  login: 'https://app.diktat.ai/sign-in',
  register: 'https://app.diktat.ai/sign-up',
  app: 'https://app.diktat.ai',
};
