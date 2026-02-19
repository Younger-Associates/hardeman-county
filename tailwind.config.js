/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.html",
    "./src/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        'hc-blue': '#005A8C',
        'hc-blue-dark': '#00456B',
        'hc-blue-light': '#0077B3',
        'hc-lightblue': '#D9EBF4',
        'hc-teal': '#006B8F',
        'hc-orange': '#CE6A35',
        'hc-red': '#CE0037',
      },
      fontFamily: {
        'heading': ['Oswald', 'sans-serif'],
        'sans': ['Open Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
