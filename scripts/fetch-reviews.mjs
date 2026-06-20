// Holt ECHTE Google-Bewertungen via Places API → src/data/reviews.json.
// Nutzung:  GOOGLE_PLACES_API_KEY=dein_key  node scripts/fetch-reviews.mjs
// Optional: PLACE_ID=ChIJ...  (sonst wird die Place-ID per Name+Adresse aufgelöst)
//
// Ergebnis fliesst automatisch in <ReviewsSection/> + <ReviewBadge/> (Live-Rating + Karten).
// Ohne Key passiert nichts Schlimmes: die Seite zeigt weiter das verifizierte Aggregat
// aus site.google + den Link auf die echten Google-Reviews. NIE erfundene Reviews.

import { writeFileSync } from 'node:fs';

const KEY = process.env.GOOGLE_PLACES_API_KEY;
const OUT = new URL('../src/data/reviews.json', import.meta.url);

if (!KEY) {
  console.error('✗ GOOGLE_PLACES_API_KEY fehlt. Aufruf: GOOGLE_PLACES_API_KEY=… node scripts/fetch-reviews.mjs');
  process.exit(1);
}

const QUERY = 'Backroom Physio Berlin, Linienstraße 139-140, 10115 Berlin';
const DEFAULT_PLACE_ID = 'ChIJL3qj5XdRqEcRpqQCyyQXeqg'; // verifiziert (site.google.placeId)

async function resolvePlaceId() {
  if (process.env.PLACE_ID) return process.env.PLACE_ID;
  if (DEFAULT_PLACE_ID) return DEFAULT_PLACE_ID; // spart den FindPlace-Call
  // Fallback (falls Place-ID mal geleert wird): per Name+Adresse auflösen
  const u = new URL('https://maps.googleapis.com/maps/api/place/findplacefromtext/json');
  u.searchParams.set('input', QUERY);
  u.searchParams.set('inputtype', 'textquery');
  u.searchParams.set('fields', 'place_id,name');
  u.searchParams.set('key', KEY);
  const r = await (await fetch(u)).json();
  if (r.status !== 'OK' || !r.candidates?.length) throw new Error(`FindPlace: ${r.status} ${r.error_message || ''}`);
  console.log('• Place:', r.candidates[0].name, '→', r.candidates[0].place_id);
  return r.candidates[0].place_id;
}

async function fetchDetails(placeId) {
  const u = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  u.searchParams.set('place_id', placeId);
  u.searchParams.set('fields', 'rating,user_ratings_total,reviews,url');
  u.searchParams.set('language', 'de');
  u.searchParams.set('reviews_sort', 'newest');
  u.searchParams.set('key', KEY);
  const r = await (await fetch(u)).json();
  if (r.status !== 'OK') throw new Error(`Details: ${r.status} ${r.error_message || ''}`);
  return r.result;
}

try {
  const placeId = await resolvePlaceId();
  const d = await fetchDetails(placeId);
  const reviews = (d.reviews || [])
    .filter((x) => x.text && x.rating >= 4) // nur aussagekräftige, positive Reviews zeigen
    .map((x) => ({
      author: x.author_name,
      rating: x.rating,
      text: x.text.trim(),
      time: x.relative_time_description,
    }));
  const out = {
    fetchedAt: new Date().toISOString(),
    rating: d.rating ?? 0,
    total: d.user_ratings_total ?? 0,
    url: d.url || '',
    reviews,
  };
  writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
  console.log(`✓ ${reviews.length} Reviews · ${out.rating}★ · ${out.total} gesamt → src/data/reviews.json`);
} catch (e) {
  console.error('✗', e.message);
  process.exit(1);
}
