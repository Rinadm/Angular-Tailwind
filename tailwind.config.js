/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'hero':"url('../src/assets/Scdule.png')",
  },
  colors: {
    themc: '#54BAB9'
  },
     
    },
  },
  plugins: [],
}