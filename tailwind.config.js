/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        'primary-light': '#8b5cf6',
        'primary-lighter': '#a78bfa',
        'primary-accent': '#c4b5fd',
        'dark-bg': '#fafafa',
        'dark-card': '#ffffff',
        'dark-box': '#f0f0f0',
        'dark-nav': '#fafafa',
        'text-main': '#1a1a1a',
        'text-body': '#444444',
        'text-muted': '#999999',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 58, 237, 0.2)',
        'btn-glow': '0 4px 20px rgba(124, 58, 237, 0.25)',
      },
    },
  },
  plugins: [],
}
