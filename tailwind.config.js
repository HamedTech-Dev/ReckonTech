/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      laptop: { min: "1024px", max: "16321px" },
      pc: { min: "1920px", max: "3073px" },
      mobile: { max: "426px", min: "320px" },
    },
  },
  plugins: [],
};
