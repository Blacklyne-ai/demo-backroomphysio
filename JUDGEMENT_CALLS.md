# Judgement Calls & Operator-TODOs — Backroom Physio Berlin

Die alte Seite (backroomphysio.de, MyWebsite-NOW-Baukasten) ist extrem dünn:
im Kern nur eine Startseite mit drei Schlagworten, Adresse, Doctolib-Link,
Telefon/Mail/Instagram. **Es wurde nichts erfunden** — alle echten Texte/Daten
sind verbatim übernommen, alle Lücken stehen hier als Operator-TODO.

---

## 1. Verbatim übernommen (Quelle: Scrape der Altseite)

- Name: **Backroom Physio Berlin**
- Meta-Title: "Backroom Physio Berlin"
- Meta-Description: *"Willkommen bei Backroom Physio, Ihrer Expertenpraxis für
  Physiotherapie und Rehabilitation."*
- Drei Säulen (verbatim, englisch): **Physiotherapy · Return to sports · Return to activity**
- Labels: "Book your Appointments here:", "CONTACT US:", "Location:"
- Adresse: **Linienstraße 139-140, 10115 Berlin** (Mitte)
- Telefon: **030 99270965** (`tel:+493099270965`)
- E-Mail: **info@backroomphysio.de**
- Instagram: **instagram.com/backroomphysio**
- Doctolib (extern, bleibt Buchungssystem):
  `https://www.doctolib.de/praxis/berlin/physiotherapie-dr-schlosser-berlin-mitte`
- Google-Maps-Place: "Backroom Physio Berlin", `@52.5265223,13.3898775`
  (Feature-ID `/g/11ypmcgd04`) → Maps-Embed verifiziert.
- Sprachen: **DE / EN / RU**

## 2. Assets aus der Altseite

- **Logo** (`public/logo.png`): echtes weisses Emblem, 1:1, nur transparent
  zugeschnitten. Favicon/Touch-Icon daraus generiert (weiss auf dunkler Kachel).
- **`raum.webp`**: einziges echtes Praxisfoto (der reale Trainingsraum, Hochformat).
- OG/`img2`/Favicon-Quelle der Altseite = Logo-Varianten / schwarze Fläche.

---

## 3. JUDGEMENT CALLS (begründete Design-Entscheidungen)

| Entscheidung | Begründung |
|---|---|
| **Grün als einziger Akzent** | Logo monochrom → Akzent ist Judgement Call. Grün belegt im echten Raum (Wand/Scheiben) + Hero-Schuhe, differenziert vom Physio-Blau, semantisch "Go/Return". Siehe STYLE-GUIDE. |
| **Space Grotesk + Inter** statt Nunito/Open Sans | Brief verlangt athletische, präzise Sans; Nunito war Baukasten-Default. |
| **Primärsprache DE + englische Markenbegriffe** | Reale Markensprache ist gemischt; Voll-EN/RU = Phase 2. |
| **Kein Kontaktformular** | Kontakt als Tiles (Telefon, E-Mail, Instagram) + Doctolib-CTA; kein Backend, DSGVO-schlank, Standard-Vorgabe. |
| **Keine Reviews-Sektion** | Echte Google-Reviews nur via Place Details API (kein Key vorhanden) → keine Bewertungen gezeigt (nie erfunden). Trust trägt Doctolib/Instagram/Standort. |
| **Stockfotos für Hero & Return-to-Sport** | Nur 1 echtes Foto vorhanden. Athletische Pexels-Fotos als klar markierte Platzhalter (siehe TODO 7). |
| **3 Säulen icon-led, ohne Foto** | Vermeidet Massage-/Wellness-Klischee; Fotografie trägt Hero + Feature-Blöcke. |
| **Kein Live-Öffnungsstatus** | Öffnungszeiten unbekannt → es wird **kein** Geöffnet/Geschlossen gefakt. |

---

## 4. OPERATOR-TODOs (BLOCKIERT KORREKTE LIVE-SCHALTUNG)

> Diese Punkte sind im Code als Kommentar `OPERATOR-TODO` markiert und teils als
> sichtbare Platzhalter umgesetzt. Vor Go-Live klären/füllen.

### 4.1 RECHT (kritisch — Pflicht für eine deutsche Geschäftsseite)
- **Impressum**: Die Altseite hat **kein Impressum** (`impressumLink` leer im Quelltext!).
  Benötigt: vollständiger Inhaber-/Praxisname & Rechtsform, ladungsfähige Anschrift,
  Berufsbezeichnung + Kammer/Verleihungsstaat, zuständige Aufsichtsbehörde, ggf. USt-IdNr.
  → `src/pages/impressum.astro` enthält Platzhalter `[OPERATOR: …]`.
- **Datenschutzerklärung**: ebenfalls nicht vorhanden → Platzhalter-Template
  (`src/pages/datenschutz.astro`) für Google Maps, Doctolib, Hosting (Cloudflare),
  Instagram. Vor Go-Live durch Juristen/Generator finalisieren.

### 4.2 INHABER / PRAXIS-VERHÄLTNIS
- **Backroom Physio vs. "Praxis Dr. Schlosser"** klären (Doctolib-Profil heisst
  "Physiotherapie Dr. Schlosser Berlin-Mitte"). Inhaber, Rechtsform, Praxisname?

### 4.3 LEISTUNGEN
- Vollständige, **belegte** Behandlungs-/Leistungsliste (welche Therapien konkret?).
  Aktuell nur die 3 verbatim Säulen. Ggf. aus dem Doctolib-Profil ergänzen (als
  Quelle markiert). **Nichts erfinden.**

### 4.4 ZEITEN
- Öffnungs-/Sprechzeiten (nicht auf Altseite) → für Kontakt, SchemaOrg, ggf.
  Live-Status nachliefern.

### 4.5 TEAM
- Therapeut:innen: Namen, Qualifikationen, Sprachen, Fotos. Aktuell generisch
  ("internationales Team, DE/EN/RU") ohne Namen.

### 4.6 SPRACHE
- Primärsprache bestätigen. EN/RU sofort oder Phase 2? Schalter ist vorbereitet.

### 4.7 FOTOS
- Echte Praxis-/Team-/Sportfotos liefern → ersetzen die Pexels-Platzhalter:
  - `hero.webp` (Pexels #15875672, dunkler Läufer)
  - `return-to-sport.webp` (Pexels #5997871, Para-Athlet/Blade)
  - `berlin.webp` (Pexels #30311713, Läufer Berlin)
  - echt bleibt: `raum.webp` (realer Trainingsraum).

### 4.8 KASSEN / PRIVAT
- Privatpraxis oder gesetzliche Kassen? (für Mitte-Physio relevant, beeinflusst Copy).

### 4.9 REVIEWS
- Falls echte Google-Reviews gewünscht: Google Place Details API-Key bereitstellen
  → Reviews-Sektion kann aktiviert werden. Bis dahin keine Bewertungen.
