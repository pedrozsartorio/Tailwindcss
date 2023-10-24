/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      height:{
        "home":"calc(100vh - 196px)"
      }
    },
  },
  plugins: [],
}
