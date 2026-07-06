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
        'dark-bg': '#EAF4FF',
        'dark-card': '#ffffff',
        'dark-box': '#D6E8F8',
        'dark-nav': 'rgba(234,244,255,0.92)',
        'text-main': '#1a2a1a',
        'text-body': '#3a4a5a',
        'text-muted': '#8a9aaa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 179, 66, 0.12)',
        'btn-glow': '0 4px 20px rgba(124, 179, 66, 0.18)',
      },
    },
  },
  plugins: [],
}
