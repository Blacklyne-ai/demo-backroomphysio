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

## 3b. FINALISIERUNG (Kundenwunsch: schlanke Visitenkarte, Stand 30.06.2026)
- **Umfang:** Eine Seite (One-Page) mit Anker-Navigation: Hero · Leistungen · Return to Sport ·
  **Team** · **Praxis (Foto-Galerie)** · Bewertungen · Kontakt · **Google Maps (unten)**.
- **Entfernt:** Russisch (RU), Karriere-Seite, alle Unterseiten (alles auf einer Seite).
  Sprachen jetzt **DE + EN**. Recht (Impressum/Datenschutz) bleibt DE.
- **Schrift:** auf **Nunito Sans (Headlines) + Open Sans (Body)** umgestellt - identisch zur
  Live-Seite backroomphysio.de (geprüft per font-family-Grep). Space Grotesk/Inter raus.
- **Echte Fotos:** Praxis-Galerie + Praxisbilder aus **Instagram @backroomphysio** gezogen
  (Innenraum 2 Winkel, Aussenansicht/Eingang) + bestehendes Raumfoto. Doctolib-Galerie ist
  durch Anti-Bot gesperrt (nur 2 Thumbnails sichtbar, nicht herunterladbar).
- **Team (echt, belegt):** Sergey Bogdanov (Gründer; Inhaber laut Praxisschild „Inh. S.
  Bogdanov") + Toni Ritter (Physiotherapeut, aus Reviews). **Portraitfotos = Operator-TODO**
  (auf IG/Doctolib keine sauberen Headshots ziehbar) - aktuell Monogramm-Avatare + „Foto folgt".
- **⚠ Telefon-Diskrepanz (klären!):** Praxisschild (IG) zeigt **030 28098112**; Website/Google
  nutzen **030 99270965** (laut Google „vorübergehende Ersatznummer" v. 25.02.2026). Aktuell
  ist **030 99270965** gesetzt (zuletzt web-publiziert) - vor Go-Live bestätigen, welche gilt.

## 4. OPERATOR-TODOs (BLOCKIERT KORREKTE LIVE-SCHALTUNG)

> Diese Punkte sind im Code als Kommentar `OPERATOR-TODO` markiert und teils als
> sichtbare Platzhalter umgesetzt. Vor Go-Live klären/füllen.

### 4.0 RECHERCHE-ERGEBNISSE (extern, Stand 19.06.2026 — vom Betreiber bestätigen lassen)
Web-/Registerrecherche zu Inhaber, Größe, Alter. **Belegt** (mehrere Quellen) vs. **unklar**:

- **Inhaber: Sergey Bogdanov** (belegt). Gewerbe/Registereintrag: „Sergey Bogdanov -
  Backroom Physio Berlin -", 10115 Berlin → **Einzelunternehmen** (freiberufl. Physio).
  Quellen: Creditreform-Firmeneintrag, Doctolib, United.Fitness, LinkedIn, Instagram.
- **Größe: Einzelpraxis** (belegt). Registerauskunft: **1 aktive Person** (= der Inhaber
  selbst). Kein größeres Team belegt. Räumlich an der Adresse der **Arztpraxis
  Dr. med. Hans-Georg Schlosser** (Linienstraße 139-140) → das erklärt das Doctolib-Profil
  „Physiotherapie Dr. Schlosser". **Backroom Physio (Bogdanov) ≠ Dr. Schlosser** (Arzt);
  Bogdanov ist der Physio, Schlosser die ärztliche Praxis am selben Standort.
- **Profil/Qualifikation** (belegt): Physiotherapeut **+ Gewichtheber-/Langhantelathletik-
  Trainer** (BVDG-Lizenz). Schwerpunkte: Kraft-/Functional-/Reha-Training, Wettkampf-
  vorbereitung, Sportmassage → deckt sich exakt mit der „Return to Sport"-Positionierung.
  Vorher tätig bei „Körpermanufaktur" (eigenes Doctolib-Profil), Umzug zu Backroom „zum 1.10.".
- **Alter — NICHT öffentlich belegt:**
  - *Gründungsjahr* der Praxis: nicht frei einsehbar (Creditreform/North Data = Paywall);
    Indizien (Umzug „1.10.", Website-Assets aus 02/2026, früher „Körpermanufaktur") → die
    Backroom-Praxis ist **neu/jung** (vermutlich 2024-2025), aber **kein belegtes Jahr**.
  - *Alter des Inhabers*: keine öffentliche Quelle (kein Geburtsjahr auffindbar).
  → Beides beim Betreiber direkt erfragen.
- **Bonus (laut Google-Eintrag, bestätigen):** Bewertung **4,9★ / 28 Rezensionen**;
  Öffnungszeiten **Mo-Fr 8-20, Sa 8-12 Uhr** → falls korrekt, löst das auch 4.4 (Zeiten)
  und ermöglicht eine echte Reviews-/Status-Anzeige (4.9 / Live-Status).

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

### 4.5 TEAM  (vom Kunden ergänzt: 5 + Praxishund)
- **Aktuelles Team (Kundenangabe):** Sergey Bogdanov (Gründer), Pierre, Toni Ritter,
  Alex + **Kuba (Praxishund)**. Auf der Seite als Karten (Sergey featured + 4er-Grid,
  Kuba mit Hunde-Icon).
- **OFFEN:** (a) **Fotos** von Sergey, Pierre, Toni hat der Kunde geschickt - konnten aber
  aus dem Chat nicht als Datei gelesen werden → als Dateien nachreichen, dann ersetze ich
  die Monogramme (Pfade: `public/images/team/{sergey,pierre,toni}.webp`). (b) **Rollen**
  von Pierre & Alex sind als „Physiotherapeut" angenommen → bestätigen/präzisieren.

### 4.5b TEAM (Alt-Recherche)
- **Inhaber/Gründer: Sergey Bogdanov** (Register). Auf `/ueber-uns` belegt benannt.
- **Korrektur:** Es ist KEINE reine Einzelpraxis. Die Google-Reviews nennen mehrfach
  **Toni Ritter** als behandelnden Physiotherapeuten → mindestens 2 Personen (Register
  zählt nur den Inhaber). Die frühere „Sie werden vom Gründer selbst betreut"-Aussage wurde
  deshalb auf `/ueber-uns` entfernt/korrigiert.
- **Offen:** vollständiges Team (Namen/Rollen/Qualifikationen von Sergey Bogdanov, Toni Ritter,
  ggf. weiteren), echte Portraitfotos, Alter/Erfahrung - vom Betreiber bestätigen lassen.

### 4.6 SPRACHE  (umgesetzt — voll dreisprachig)
- **DE / EN / RU live** auf allen Hauptseiten (Start, Leistungen, Return to Sport, Über uns,
  Kontakt, Karriere). DE = Root, EN = `/en/`, RU = `/ru/`; aktiver Schalter, hreflang.
- Recht (Impressum/Datenschutz) bewusst **nur DE**; Review-Texte bleiben in Originalsprache.
- **Offen:** RU-Übersetzung von Muttersprachler:in gegenlesen lassen (von mir erstellt).
  RU-Headlines nutzen System-Sans-Fallback (Space Grotesk hat kein Kyrillisch) - sauber,
  aber falls gewünscht: kyrillische Display-Schrift ergänzen.

### 4.7 FOTOS
- Echte Praxis-/Team-/Sportfotos liefern → ersetzen die Pexels-Platzhalter:
  - `hero.webp` (Pexels #15875672, dunkler Läufer)
  - `return-to-sport.webp` (Pexels #5997871, Para-Athlet/Blade)
  - `berlin.webp` (Pexels #30311713, Läufer Berlin)
  - echt bleibt: `raum.webp` (realer Trainingsraum).

### 4.8 KASSEN / PRIVAT
- Privatpraxis oder gesetzliche Kassen? (für Mitte-Physio relevant, beeinflusst Copy).

### 4.9 REVIEWS  (umgesetzt — echt)
- **Google Place ID:** `ChIJL3qj5XdRqEcRpqQCyyQXeqg` (aus Maps-ftid
  `0x47a85177e5a37a2f:0xa87a1724cb02a4a6` abgeleitet + gegengeprüft → „Backroom Physio Berlin").
  Steht in `site.google.placeId` + als Default in `scripts/fetch-reviews.mjs`.
- **Live:** Aggregat 4,9★ / 28 (verifizierter Snapshot, `site.google`) als Rating-Badge
  (Hero + Kontakt) + Sektion „Bewertet auf Google" mit Link auf die echten Reviews
  (CID 12140041192322802854). **Keine erfundenen Reviews.**
- **Einzel-Reviews: LIVE & ECHT.** 3 verbatim 5★-Reviews (Sena Coşkun, Malte Soenksen,
  Jack Mini) in `src/data/reviews.json`, key-frei aus dem Google-Eintrag gezogen
  (`scripts/gmaps-reviews.mjs`, Playwright + Consent). Aktualisieren: dieses Script erneut
  laufen lassen, oder mit API-Key `scripts/fetch-reviews.mjs`.
- SchemaOrg `aggregateRating` bewusst **weggelassen** (Google-Richtlinie: kein Self-Markup
  von Drittanbieter-/eigenen Ratings → Penalty-Risiko). Badge + Link genügen.
- Rating/Count beim Betreiber bzw. per API gegenchecken (Snapshot kann driften).
