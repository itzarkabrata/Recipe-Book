/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        moderustic: ['Moderustic', 'sans-serif'],
      },
      colors:{
        darkShade: '#265227',
        lightShade: '#a5cc6f',
        background: '#806537'
      },
      backgroundImage: {
        'gradient-overlay-1': 'linear-gradient(to bottom, rgba(255, 219, 158, 0.4), rgba(255, 219, 158, 0.1))',
        'gradient-overlay-2': 'linear-gradient(to bottom, rgba(255, 219, 158, 0.02), rgba(255, 219, 158, 0.5))',
      }
    },
  },
  plugins: [],
}

