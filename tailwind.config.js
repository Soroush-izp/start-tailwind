/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        "transparent": 'transparent',
        "current": 'currentColor',
        "custom_color": '#234367'
      },
      container: {
        "center": true,
        "padding": "2rem"
      },
      fontFamily: {
        "vazir-matn": "vazir",
        "dana": 'dana'
      }
    },
  },
  plugins: [],
}
