// i18n-Helfer. DE = Root (/), EN = /en/, RU = /ru/. Recht (Impressum/Datenschutz) nur DE.
export const languages = { de: 'Deutsch', en: 'English', ru: 'Русский' } as const;
export type Lang = keyof typeof languages;
export const locales: Lang[] = ['de', 'en', 'ru'];
export const defaultLang: Lang = 'de';

// Basis-Slugs, die es in allen Sprachen gibt ('' = Startseite)
export const translatedRoutes = ['', 'leistungen', 'return-to-sport', 'ueber-uns', 'kontakt', 'karriere'];

// Aktuelle Sprache aus der URL. .html strippen (build format:'file' → /en.html, /ru.html).
export function getLang(url: URL): Lang {
  const seg = url.pathname.replace(/\.html$/, '').replace(/^\//, '').split('/')[0];
  return seg === 'en' || seg === 'ru' ? seg : 'de';
}

// Basis-Slug ohne Sprach-Prefix: /en/leistungen -> 'leistungen', / -> ''
export function basePath(url: URL): string {
  const segs = url.pathname.replace(/\.html$/, '').split('/').filter(Boolean);
  if (segs[0] === 'en' || segs[0] === 'ru') segs.shift();
  return segs.join('/');
}

// Lokalisierter Pfad für einen Basis-Slug
export function localizedPath(base: string, lang: Lang): string {
  const clean = base.replace(/^\/|\/$/g, '');
  const prefix = lang === 'de' ? '' : `/${lang}`;
  return clean ? `${prefix}/${clean}` : prefix || '/';
}

// hreflang-Alternativen für die aktuelle Seite (nur wenn übersetzt)
export function hreflangs(base: string): { lang: string; href: string }[] {
  if (!translatedRoutes.includes(base)) return [];
  return [
    { lang: 'de', href: localizedPath(base, 'de') },
    { lang: 'en', href: localizedPath(base, 'en') },
    { lang: 'ru', href: localizedPath(base, 'ru') },
    { lang: 'x-default', href: localizedPath(base, 'de') },
  ];
}
