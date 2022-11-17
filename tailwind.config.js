/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
  "./public/*.{html,js,css}",
  "./views/*.ejs",
  "./views/layouts/*.ejs",
  "./views/partials/*.ejs"
],
  theme: {
    extend: {
      fontFamily: {
        'permanent-marker': ['Permanent Marker', 'cursive']
      },
    },
  },
  plugins: [],
}
