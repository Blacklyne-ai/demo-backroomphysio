# Backroom Physio Berlin — Website (2026 Redesign)

Moderne, athletische Website für **Backroom Physio Berlin** — Physiotherapie &
Sport-Rehabilitation in Berlin-Mitte. Markenhaltung: **Return to Sport / Return to
Activity**. Ersetzt die alte MyWebsite-NOW-Baukastenseite.

Sportlich, urban, monochrom (Stahl/Schwarz/Weiss) mit einem athletischen Grün-Akzent.
Primärsprache Deutsch mit englischen Markenbegriffen; Sprachschalter DE/EN/RU vorbereitet.

## Stack
- **Astro 5** (static, `output: dist/`, `format: 'file'`, CSS inline)
- **Tailwind v3.4** (`@astrojs/tailwind`)
- **@lucide/astro** (Icons; Brand-Icons als inline SVG)
- **Space Grotesk** (Display) + **Inter** (Body), self-hosted woff2, `font-display: optional`
- DSGVO-CookieBanner, Google Maps mit Klick-Consent, SchemaOrg (Physiotherapy)
- Kein SSR, kein Adapter

## Entwicklung
```bash
npm install
npm run dev        # http://localhost:4367
npm run build      # → dist/ (Cloudflare Pages: Build "npm run build", Output "dist")
```

## Dokumentation
- `docs/STYLE-GUIDE.md` — Farben, Schrift, Voice, Sprach-Entscheidung
- `JUDGEMENT_CALLS.md` — Design-Entscheidungen + **Operator-TODOs** (Impressum/Datenschutz,
  Inhaber, Leistungsliste, Zeiten, Team, Fotos, EN/RU)

## Google-Bewertungen (echt, nie erfunden)
Rating + Link sind echt (`site.google`, verifizierter Snapshot 4,9★/28). Für **live
aktualisiertes Rating + einzelne Review-Karten**:

```bash
GOOGLE_PLACES_API_KEY=dein_key node scripts/fetch-reviews.mjs   # → src/data/reviews.json
npm run build
```

Das Script (Google Places API) löst die Place-ID per Name+Adresse auf (oder `PLACE_ID=ChIJ…`),
holt Rating + Reviews und schreibt `src/data/reviews.json`. `ReviewBadge`/`ReviewsSection`
zeigen dann automatisch die echten Einzelbewertungen. Ohne Key bleibt es beim verifizierten
Aggregat-Badge + Link auf Google - **keine Fake-Reviews**. (Kein Client-JS/Widget → DSGVO-schlank.)

## Inhalt
Alle echten Texte/Kontaktdaten stammen verbatim aus der Altseite. Nichts erfunden —
offene Punkte sind in `JUDGEMENT_CALLS.md` als Operator-TODO dokumentiert.
Termine laufen extern über **Doctolib** (Primär-CTA).
