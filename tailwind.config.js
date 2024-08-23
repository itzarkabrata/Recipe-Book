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
        lightShade: '#a5cc6f'
      }
    },
  },
  plugins: [],
}

