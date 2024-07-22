/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", "sans-serif"',
      },
    },
  },
  plugins: [],
};
