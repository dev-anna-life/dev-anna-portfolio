/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e4d28',
        'primary-light': '#2d6b3a',
        'primary-lighter': '#3d8a4e',
        'primary-accent': '#4da86a',
        'dark-bg': '#fcf9f2',
        'dark-card': '#f8f3ea',
        'dark-box': '#efe7d8',
        'dark-nav': '#fcf9f2',
        'text-main': '#1a1a1a',
        'text-body': '#1e4d28',
        'text-muted': '#6b8f6b',
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
