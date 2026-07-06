/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00b894',
        'primary-light': '#00d4aa',
        'primary-lighter': '#33dfbb',
        'primary-accent': '#00f5d4',
        'dark-bg': '#0a0a0a',
        'dark-card': '#121212',
        'dark-box': '#1c1c1c',
        'dark-nav': '#0a0a0a',
        'text-main': '#ffffff',
        'text-body': '#c0c0c0',
        'text-muted': '#666666',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 184, 148, 0.25)',
        'btn-glow': '0 4px 20px rgba(0, 184, 148, 0.3)',
      },
    },
  },
  plugins: [],
}
