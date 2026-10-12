/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0B3D24',
          deep: '#082C1A',
          800: '#0E4D2A',
          surface: '#0F3823',
        },
        brand: {
          green: '#24B550',
          greenDark: '#1D9642',
          greenLight: '#38D468',
        },
        accent: {
          DEFAULT: '#24B550',
          dark: '#1D9642',
          light: '#38D468',
        },
        cream: {
          DEFAULT: '#FAF8F3',
          surface: '#F4EFE6',
          card: '#FFFFFF',
          border: 'rgba(8, 44, 26, 0.12)',
        },
        ink: {
          DEFAULT: '#14261C',
          light: '#24382E',
        },
        muted: '#5B6B60',
        'muted-light': '#A4B5AA',

        // Standardized semantic tokens
        primary: '#24B550',
        'primary-light': '#38D468',
        'primary-lighter': '#24B550',
        'primary-accent': '#24B550',
        'dark-bg': '#082C1A',
        'dark-card': '#0E3823',
        'dark-box': 'rgba(250, 248, 243, 0.15)',
        'dark-nav': 'rgba(8, 44, 26, 0.95)',
        'text-main': '#FAF8F3',
        'text-body': '#E2DDD3',
        'text-muted': '#A4B5AA',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 30px rgba(11, 61, 36, 0.08)',
        'btn-glow': '0 4px 15px rgba(36, 181, 80, 0.3)',
        card: '0 4px 24px rgba(20, 38, 28, 0.06)',
        'card-dark': '0 8px 30px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
