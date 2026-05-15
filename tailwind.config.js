/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest:  '#1a472a',   // deep forest green — main bg, hero
        cream:   '#f5f0e8',   // warm cream — accents, buttons, text on dark
        sage:    '#a8c5a0',   // muted sage — subtext, secondary elements
        canopy:  '#2d6a3f',   // medium green — section bg variant
        bark:    '#0d2b1a',   // darkest green — footer, deep contrast
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}