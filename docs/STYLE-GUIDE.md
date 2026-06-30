# Style Guide: Backroom Physio Berlin

2026-Redesign der alten Baukasten-Seite (MyWebsite NOW / IONOS "go-x").
Die alte Seite ist **Content-Quelle, nicht Stil-Vorlage**. Charakter:
sportlich, klar, urban (Berlin-Mitte), international. Performance-Reha,
kein Wellness. Roter Faden: **Return to Sport / Return to Activity**.

---

## Logo (Pixel-Analyse)

Das Logo ist ein **monochromes weisses Emblem**: gekreuzte Langhanteln,
zwei Hantelscheiben, eine Kettlebell im Zentrum. Strength-&-Conditioning-
Marke, kein weiches Physio-Symbol.

Pixel-Histogramm (`scripts/analyze.mjs`) → **ausschliesslich Grau-/Weisswerte**
(#d8d8d8, #e0e0e0, #808080 …). Das Emblem traegt **keine Markenfarbe** —
es ist Weiss auf Transparenz, gestaltet fuer dunkle Flaechen.

Konsequenz:
- Logo 1:1 weiss auf Dunkel (Header ueber Hero, dunkle Sektionen, Footer).
- Auf hellen Flaechen sitzt das weisse Emblem in einer **dunklen "Coin"**
  (dunkler Kreis als Traeger) — Logo wird **nie** umgefaerbt.
- Favicon/Apple-Touch: weisses Emblem auf dunkler Kachel (`#101316`),
  sonst auf hellen Browser-Tabs unsichtbar.

Da das Logo monochrom ist, kommt die **Akzentfarbe nicht aus dem Logo**
(Brief-Fallback) → siehe Farbpalette.

---

## Farbpalette

Monochrom (Stahl/Schwarz/Weiss = Metall des Emblems) + **ein athletischer
Grün-Akzent**. Single Source of Truth: `src/styles/global.css` `:root`
(RGB-Triplets), gemappt in `tailwind.config.mjs`.

| Element | Hex | Quelle / Begründung |
|---|---|---|
| Ink (Headlines/Text) | `#15171A` | Neutral-kühles Near-Black (Metall/Urban) |
| Muted (Fliesstext) | `#555B63` | AA ~7:1 auf Paper |
| Muted-Light (Labels) | `#767D85` | AA ~4.6:1 |
| Paper (Haupt-BG) | `#F6F7F8` | Kühles, urbanes Off-White (~80% der Seite) |
| Surface (alt. Sektion) | `#EDEFF2` | Sanfte kühle Abstufung |
| Mist (tiefer) | `#E4E7EB` | Tieferer kühler Ton |
| Line (Haarlinie) | `#E0E3E8` | Borders |
| Steel (Metall-Akzent) | `#98A0A8` | Echo des silbernen Emblems, dekorativ |
| Dark (Hero/CtaBand) | `#111417` | "Backroom" — der dunkle Trainingsraum |
| Dark-Deep (Footer) | `#0B0E10` | Footer-Basis |
| Dark-Soft (Karten auf Dark) | `#1A1E22` | Elevated auf Dark |
| **Grün (Akzent)** | `#1FC777` | **Akzent auf Dark, Dots, Icons** |
| **Grün-Deep (Buttons)** | `#0B7D46` | **Primär-CTA-BG, weisser Text AA** |
| Grün-Ink (Grün-Text hell) | `#06532E` | Grüner Text auf Paper (AAA) |
| Grün-Bright (Glow/Hover) | `#3FE08D` | Hover/Glow auf Dark |

**Warum Grün** (Judgement Call, da Logo farblos): (1) **belegt im echten Raum** —
das einzige echte Praxisfoto (`raum.webp`) zeigt eine grün beleuchtete Wand
+ grüne/bunte Hantelscheiben; (2) das Hero-Foto hat zufällig grüne Schuhe →
visuelle Kohärenz; (3) **differenziert** vom Physio-Blau-Klischee; (4) semantisch
perfekt: Grün = "Go / zurück in Bewegung / Return". Sehr sparsam einsetzen.

~80% Light · Dark nur Hero + CtaBand + Footer (+ Return-to-Sport-Block bewusst dunkel).

---

## Schrift  (FINAL: identisch zur Live-Seite)

Auf **ausdrücklichen Kundenwunsch** an die bestehende Seite backroomphysio.de angeglichen
(font-family-Grep der Live-Seite: NunitoSans + OpenSans):

- **Display / Headlines: Nunito Sans** (700/800) — der Marken-Look der Live-Seite, freundlich-bold.
- **Body / UI: Open Sans** (400/600/700) — wie Live-Seite.

Self-hosted woff2 (latin + latin-ext für Umlaute), `font-display: optional`
(CLS ~0, Memory feedback_font_display_cls + feedback_original_fonts).

*(Zwischenstand war Space Grotesk + Inter - bewusst verworfen zugunsten Marken-Konsistenz.)*

---

## Sprache (verbindlich)

**Primärsprache: Deutsch mit starkem englischen Marken-Einschlag.** Begründung:
Markenbegriffe sind originär englisch ("Return to Sport", "Return to Activity",
"Physiotherapy") und bleiben **verbatim englisch** stehen; Fliesstext/Navigation/
Recht sind Deutsch (Sie-Form). Das trifft den realen Ton der Praxis (international,
Mitte) ohne die ganze Seite zu übersetzen.

Sprachschalter **DE / EN / RU** ist als **Pill-Switch-Platzhalter** vorbereitet
(DE aktiv; EN/RU `aria-disabled`, Tooltip "in Vorbereitung"). Voll-Übersetzung
EN/RU = **Operator-TODO / Phase 2** (siehe JUDGEMENT_CALLS.md).

---

## Voice (verbindlich)

Professionell, sportlich, fokussiert, international. Klare, kurze Sätze. Augenhöhe
mit aktiven Menschen/Athleten. **"Return to Sport / Activity"** als Haltung.
Kein Wellness-Kitsch, kein Marktschrei, keine Heilversprechen (HWG). Englische
Markenbegriffe dürfen stehen bleiben.

Test vor jeder Headline: *"Würde ein leistungsorientierter Physio das einem
Athleten so sagen?"* Klingt es nach Agentur → neu.

Verboten: "Drei Bereiche - ein X", "Vier Gründe", "So einfach geht's",
"Ihr kompetenter Partner", "Where X meets Y", "Premium/Excellence" als Hülse.

---

## Brand-Charakter

Return to Sport · Berlin-Mitte · international (DE/EN/RU) · Performance-Reha ·
Doctolib-Buchung · Strength & Conditioning · urban, dunkel, athletisch, ruhig.

---

## Bewegung & Layout

- Dezente Reveals (fade + translateY, gestaffelt), `prefers-reduced-motion`-safe.
  Keine Counter, kein Bling. Hero-Headline ohne Fade (LCP).
- Editorial-asymmetrische Feature-Blöcke erlaubt; Karten-Sets **symmetrisch**
  (Vielfache der Spaltenzahl).
- Eyebrows: kurze getrackte Uppercase + kurze grüne Linie — **nicht** auf jeder
  Section, **nie** die "·"-Dot-Kicker-Masche.

## Tech

Astro 5 STATIC · Tailwind v3.4 (`@astrojs/tailwind`) · `@lucide/astro` · self-hosted
Fonts · `build.format:'file'` + `inlineStylesheets:'always'` · DSGVO-CookieBanner
(Maps-Consent) · keine SSR/Adapter. Deploy: Cloudflare Pages (`npm run build` → `dist`).
