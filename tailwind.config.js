const { black, white, gray } = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      orange: "#FD933A",
      pink: "#F2B6BC",
      blue: "#0B5CD5",
      green: "#28A745",
      yellow: "#FFCB2F",
      black,
      white,
      gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
