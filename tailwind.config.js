/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e4d28',
        'primary-light': '#2d7a3a',
        'primary-lighter': '#3a9e4a',
        'primary-accent': '#4db860',
        'dark-bg': '#0a0a0a',
        'dark-card': '#111111',
        'dark-box': '#1a1a1a',
        'dark-nav': '#0d0d0d',
        'text-main': '#ffffff',
        'text-body': '#cccccc',
        'text-muted': '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(30, 77, 40, 0.6)',
        'btn-glow': '0 4px 20px rgba(30, 77, 40, 0.4)',
      },
    },
  },
  plugins: [],
}
