/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a472a',
        'primary-light': '#2d6a3f',
        'primary-lighter': '#3d8a4e',
        'primary-accent': '#a8c5a0',
        'dark-bg': '#f5f0e8',
        'dark-card': '#f0eadf',
        'dark-box': '#e5dccc',
        'dark-nav': '#f5f0e8',
        'text-main': '#1a1a1a',
        'text-body': '#333333',
        'text-muted': '#8a8a8a',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(30, 77, 40, 0.15)',
        'btn-glow': '0 4px 20px rgba(30, 77, 40, 0.2)',
      },
    },
  },
  plugins: [],
}
