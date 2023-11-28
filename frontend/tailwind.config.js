/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1210px',
      'lg': '1024px',
      'md': '840px',

    },
    extend: {
      colors: {
        'mainblue': '	hsl(212, 92%, 41%)',
        'lightblue': 'hsl(213, 85%, 97%)',
        'lightblack': 'hsl(211, 18%, 23%)',
        'grey': 'rgb(168, 168, 168)',
      }
    },
  },
  plugins: [],
}

