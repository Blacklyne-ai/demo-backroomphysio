// i18n-Helfer. DE = Root (/), EN = /en/. Recht (Impressum/Datenschutz) nur DE.
// Schlanke Visitenkarte = One-Page; Navigation läuft über Anker (#leistungen …).
export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const locales: Lang[] = ['de', 'en'];
export const defaultLang: Lang = 'de';

// Übersetzte Routen (nur die Startseite existiert in beiden Sprachen)
export const translatedRoutes = [''];

// Aktuelle Sprache aus der URL. .html strippen (build format:'file' → /en.html).
export function getLang(url: URL): Lang {
  const seg = url.pathname.replace(/\.html$/, '').replace(/^\//, '').split('/')[0];
  return seg === 'en' ? 'en' : 'de';
}

// Basis-Slug ohne Sprach-Prefix: /en/x -> 'x', / -> ''
export function basePath(url: URL): string {
  const segs = url.pathname.replace(/\.html$/, '').split('/').filter(Boolean);
  if (segs[0] === 'en') segs.shift();
  return segs.join('/');
}

// Lokalisierter Pfad für einen Basis-Slug (Anker bleiben erhalten)
export function localizedPath(base: string, lang: Lang): string {
  const clean = base.replace(/^\/|\/$/g, '');
  const prefix = lang === 'de' ? '' : `/${lang}`;
  return clean ? `${prefix}/${clean}` : prefix || '/';
}

// hreflang-Alternativen
export function hreflangs(base: string): { lang: string; href: string }[] {
  if (!translatedRoutes.includes(base)) return [];
  return [
    { lang: 'de', href: localizedPath(base, 'de') },
    { lang: 'en', href: localizedPath(base, 'en') },
    { lang: 'x-default', href: localizedPath(base, 'de') },
  ];
}
