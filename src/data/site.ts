// ─────────────────────────────────────────────────────────────
// Backroom Physio Berlin — zentrale Site-Konfiguration.
// Jede Angabe stammt VERBATIM aus dem Scrape der Altseite
// (backroomphysio.de, MyWebsite-NOW). Nichts erfunden.
// Lücken (Inhaber, Zeiten, Team, Recht) → JUDGEMENT_CALLS.md.
// Sprache: Deutsch + englische Markenbegriffe (siehe STYLE-GUIDE.md).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Backroom Physio Berlin',
  shortName: 'Backroom Physio',
  // Markenhaltung (verbatim, englisch — bleibt stehen)
  stance: 'Return to Sport',
  // verbatim Meta der Altseite
  metaTitle: 'Backroom Physio Berlin - Physiotherapie & Return to Sport in Berlin-Mitte',
  metaDescription:
    'Willkommen bei Backroom Physio, Ihrer Expertenpraxis für Physiotherapie und Rehabilitation. Return to Sport & Return to Activity in Berlin-Mitte. Termine über Doctolib.',
  url: 'https://demo-backroomphysio.pages.dev',

  email: 'info@backroomphysio.de',
  phoneDisplay: '030 99270965',
  phoneIntl: '+493099270965',

  address: {
    street: 'Linienstraße 139-140',
    postcode: '10115',
    city: 'Berlin',
    district: 'Mitte',
  },

  // Termine laufen extern über Doctolib — bleibt das Buchungssystem (verbatim URL)
  doctolib:
    'https://www.doctolib.de/praxis/berlin/physiotherapie-dr-schlosser-berlin-mitte',

  // Social (verbatim)
  instagram: 'https://www.instagram.com/backroomphysio/',
  instagramHandle: '@backroomphysio',

  // Sprachen (verbatim). DE aktiv; EN/RU = Phase 2 / Operator-TODO.
  languages: ['DE', 'EN', 'RU'] as const,
  primaryLang: 'DE',

  // Google Maps (Place verifiziert aus Scrape: "Backroom Physio Berlin")
  geo: { lat: 52.5265223, lng: 13.3898775 },
  maps: {
    embed:
      'https://www.google.com/maps?q=Backroom+Physio+Berlin,+Linienstra%C3%9Fe+139-140,+10115+Berlin&z=16&output=embed',
    url: 'https://www.google.com/maps/search/?api=1&query=Backroom+Physio+Berlin+Linienstra%C3%9Fe+139-140+10115+Berlin',
  },

  // Google-Bewertungen — ECHT, nie erfunden.
  // rating/reviewsCount = verifizierter Snapshot (Stand 06/2026, mehrfach belegt: Google-Eintrag
  // + BranchenPilot). reviewsUrl = echte Place-Reviews (CID aus dem Maps-Scrape).
  // Live-Einzelreviews + tagesaktuelles Rating: scripts/fetch-reviews.mjs (Google Places API,
  // ENV GOOGLE_PLACES_API_KEY) -> src/data/reviews.json. ReviewBadge zeigt Sterne nur bei rating>0.
  google: {
    placeId: 'ChIJL3qj5XdRqEcRpqQCyyQXeqg',  // verifiziert (aus Maps-ftid abgeleitet + gegengeprüft)
    cid: '12140041192322802854',
    rating: 4.9,
    reviewsCount: 28,
    reviewsUrl: 'https://www.google.com/maps?cid=12140041192322802854',
  },
};

export const addressOneLine = `${site.address.street}, ${site.address.postcode} ${site.address.city}`;

// ── Navigation (neu, klar) ──
export const nav: { label: string; href: string; external?: boolean }[] = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Return to Sport', href: '/return-to-sport' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
];

// Primär-CTA (überall): Doctolib, extern, neuer Tab.
export const cta = {
  book: { label: 'Termin über Doctolib', href: site.doctolib },
  phone: { label: site.phoneDisplay, href: `tel:${site.phoneIntl}` },
};
