/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'error': ['Bebas Neue', 'sans-serif'],
        'input': ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}