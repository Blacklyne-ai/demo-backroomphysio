// ─────────────────────────────────────────────────────────────
// Backroom Physio Berlin — Inhalts-Daten.
// Die Altseite trägt fast keinen Fliesstext: nur die drei Säulen
// (verbatim englisch), Adresse, Doctolib, Kontakt. Die Texte hier
// beschreiben diese Säulen ALLGEMEIN/konzeptionell (keine erfundenen
// Methoden, Erfolge, Zahlen oder Heilversprechen — HWG). Konkrete
// Leistungen/Team/Zeiten = Operator-TODO (JUDGEMENT_CALLS.md).
// ─────────────────────────────────────────────────────────────

export interface Pillar {
  slug: string;
  term: string;        // verbatim englischer Markenbegriff
  titleDe: string;     // deutsche Entsprechung
  icon: string;        // @lucide/astro Name
  blurb: string;       // 1 ruhiger Satz (Homepage-Karte)
  long: string[];      // /leistungen — allgemeine Beschreibung des Konzepts
}

export const pillars: Pillar[] = [
  {
    slug: 'physiotherapy',
    term: 'Physiotherapy',
    titleDe: 'Physiotherapie',
    icon: 'Activity',
    blurb:
      'Befundbasierte Behandlung von Beschwerden am Bewegungsapparat - der Ausgangspunkt für alles Weitere.',
    long: [
      'Am Anfang steht der Befund: Wir schauen uns an, was Sie einschränkt, wie es dazu kam und welches Ziel dahintersteht. Daraus entsteht ein Behandlungsplan, der zu Ihnen und Ihrer Belastung passt.',
      'Physiotherapie ist bei Backroom Physio kein Selbstzweck, sondern der erste Schritt zurück in Bewegung - aktiv, nicht passiv.',
    ],
  },
  {
    slug: 'return-to-sport',
    term: 'Return to Sport',
    titleDe: 'Zurück in den Sport',
    icon: 'Dumbbell',
    blurb:
      'Belastbar zurück in Training und Wettkampf - strukturierter Aufbau nach Verletzung oder Operation.',
    long: [
      'Return to Sport heisst: Die Reha endet nicht, wenn der Schmerz weg ist - sondern wenn Sie wieder das tun können, wofür Sie hier sind. Wir bauen Belastbarkeit, Kraft und Vertrauen Schritt für Schritt wieder auf.',
      'Für Athletinnen und Athleten, aktive Menschen und alle, die nach einer Verletzung oder OP wieder an ihr Niveau anknüpfen wollen.',
    ],
  },
  {
    slug: 'return-to-activity',
    term: 'Return to Activity',
    titleDe: 'Zurück in Bewegung',
    icon: 'Footprints',
    blurb:
      'Schritt für Schritt zurück in den Alltag und in die Bewegung, die Ihnen wichtig ist.',
    long: [
      'Nicht jedes Ziel heisst Wettkampf. Return to Activity steht für die Rückkehr in einen aktiven Alltag - Treppe, Job, Rad, Spaziergang, das Training am Wochenende.',
      'Wir orientieren uns an dem, was für Sie zählt, und arbeiten gezielt darauf hin.',
    ],
  },
];

// ── Return-to-Sport: die Haltung der Praxis als allgemeines Prinzip ──
// (konzeptionell, keine proprietären/erfundenen Protokolle)
export const rtsPhases: { step: string; title: string; text: string }[] = [
  {
    step: '01',
    title: 'Befund & Ziel',
    text: 'Wo stehen Sie, und wohin soll es gehen? Wir klären die Ausgangslage und das konkrete Ziel - welcher Sport, welche Belastung, welcher Alltag.',
  },
  {
    step: '02',
    title: 'Belastbarkeit aufbauen',
    text: 'Kontrollierter, schrittweiser Aufbau von Kraft, Stabilität und Belastbarkeit - aktiv und messbar, statt nur passiv behandelt.',
  },
  {
    step: '03',
    title: 'Zurück in Sport & Bewegung',
    text: 'Die Rückkehr in Training, Wettkampf oder den aktiven Alltag - mit dem Vertrauen, dass die Belastung wieder trägt.',
  },
];

// ── Was die Praxis ausmacht (ehrlich, allgemein) ──
export const usp: { icon: string; title: string; text: string }[] = [
  {
    icon: 'Target',
    title: 'Leistungsorientiert',
    text: 'Reha mit klarem Ziel: nicht nur schmerzfrei, sondern wieder belastbar - zurück in den Sport und in Bewegung.',
  },
  {
    icon: 'Languages',
    title: 'International',
    text: 'Behandlung auf Deutsch, Englisch und Russisch. Mitten in Berlin-Mitte, offen für eine internationale Stadt.',
  },
  {
    icon: 'CalendarCheck',
    title: 'Unkompliziert buchen',
    text: 'Termine direkt und jederzeit online über Doctolib - ohne Umweg, ohne Wartemusik.',
  },
];

// ── International / Sprachen (verbatim belegt) ──
export const international = {
  headlineEn: 'Treatment in German, English and Russian.',
  textDe:
    'Berlin-Mitte ist international - und so arbeiten wir auch. Behandlung und Beratung auf Deutsch, Englisch und Russisch, damit es bei dem ankommt, worauf es ankommt: Ihrer Rückkehr in Bewegung.',
  langs: [
    { code: 'DE', label: 'Deutsch' },
    { code: 'EN', label: 'English' },
    { code: 'RU', label: 'Русский' },
  ],
};
