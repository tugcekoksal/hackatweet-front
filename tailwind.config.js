/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',],
  theme: {
    extend: {
      fontFamily: {
        'mont-heavy': ['Mont-Heavy', 'sans-serif'],
        'verdana': ['Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

