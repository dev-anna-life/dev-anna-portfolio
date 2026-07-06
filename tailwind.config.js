/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7CB342',
        'primary-light': '#8DC44F',
        'primary-lighter': '#9ED55C',
        'primary-accent': '#F4C95D',
        'dark-bg': '#0D1117',
        'dark-card': '#1A1F1C',
        'dark-box': '#252A27',
        'dark-nav': '#0D1117',
        'text-main': '#F8F9FA',
        'text-body': '#E8EAED',
        'text-muted': '#9AA0A6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 179, 66, 0.2)',
        'btn-glow': '0 4px 20px rgba(124, 179, 66, 0.25)',
      },
    },
  },
  plugins: [],
}
