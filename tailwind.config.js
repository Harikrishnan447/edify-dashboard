module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ee1f47",
        secondary: "#43dfa8",
        black:{
          100: "#0000",
          200: "#111026",
          300: "#35375E"
        },
        gray:{
          100: "A2A2C2"
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-seriff"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
