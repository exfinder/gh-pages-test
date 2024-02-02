/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1210px',
      'md': '840px',
      'sm': {'max': '840px'},

    },
    extend: {
      colors: {
        'mainblue': '	hsl(212, 92%, 41%)',
        'lightblue': 'hsl(213, 85%, 97%)',
        'lightblack': 'hsl(211, 18%, 23%)',
        'grey': '#EFF1F4',
        'darkgrey': '#E5E7EA',
        'green' : '#28D3A1'
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontSize: {
      'sm-p': '13px',
      'base-p': '17px',
      'sm-h': '22px',
      'base-h': '40px',
    }
  },
  plugins: [],
}

