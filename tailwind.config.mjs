/** @type {import('tailwindcss').Config} */
// Backroom Physio Berlin — Palette: monochromes Stahl/Schwarz/Weiss (Metall des
// Logo-Emblems) + EIN athletischer Grün-Akzent (#1FC777 / Button #0B7D46).
// Logo ist farblos → Akzent ist begründeter Judgement Call (echter Raum + Differenzierung).
// Single Source of Truth der Farbwerte: src/styles/global.css :root (RGB-Triplets).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--rgb-ink) / <alpha-value>)',
          soft: 'rgb(var(--rgb-ink-soft) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--rgb-muted) / <alpha-value>)',
          light: 'rgb(var(--rgb-muted-light) / <alpha-value>)',
        },
        paper: 'rgb(var(--rgb-paper) / <alpha-value>)',
        surface: 'rgb(var(--rgb-surface) / <alpha-value>)',
        mist: 'rgb(var(--rgb-mist) / <alpha-value>)',
        line: 'rgb(var(--rgb-line) / <alpha-value>)',
        steel: 'rgb(var(--rgb-steel) / <alpha-value>)',
        dark: {
          DEFAULT: 'rgb(var(--rgb-dark) / <alpha-value>)',
          deep: 'rgb(var(--rgb-dark-deep) / <alpha-value>)',
          soft: 'rgb(var(--rgb-dark-soft) / <alpha-value>)',
        },
        green: {
          DEFAULT: 'rgb(var(--rgb-green) / <alpha-value>)',
          deep: 'rgb(var(--rgb-green-deep) / <alpha-value>)',
          ink: 'rgb(var(--rgb-green-ink) / <alpha-value>)',
          bright: 'rgb(var(--rgb-green-bright) / <alpha-value>)',
        },
        white: 'rgb(var(--rgb-white) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Nunito Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: { pill: '999px' },
      maxWidth: { '7xl': '80rem', '8xl': '88rem' },
      letterSpacing: { tightest: '-0.03em' },
    },
  },
  plugins: [],
};
