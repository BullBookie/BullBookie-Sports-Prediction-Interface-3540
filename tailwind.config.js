/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // BullBookie Corporate Colors
        'bull-red': '#D40934',
        'bull-yellow': '#FAD109',
        'bull-black': '#000000',
        'bull-dark-black': '#010101',
        'bull-charcoal': '#212121',
        'bull-gray': '#2A3132',
        'bull-light-gray': '#C0C0C0',
        'bull-white': '#FFFFFF',
        // Accent variations
        'bull-red-light': '#E63A5A',
        'bull-red-dark': '#B8072B',
        'bull-yellow-light': '#FBD73D',
        'bull-yellow-dark': '#E6BC08',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Montserrat', 'system-ui', 'sans-serif'],
        'caprasimo': ['Caprasimo', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'bull': '8px',
      },
      boxShadow: {
        'bull': '0 4px 6px -1px rgba(212,9,52,0.1), 0 2px 4px -1px rgba(212,9,52,0.06)',
        'bull-lg': '0 10px 15px -3px rgba(212,9,52,0.1), 0 4px 6px -2px rgba(212,9,52,0.05)',
        'bull-yellow': '0 4px 6px -1px rgba(250,209,9,0.3), 0 2px 4px -1px rgba(250,209,9,0.06)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}