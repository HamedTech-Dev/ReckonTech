/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      laptop: { min: "1024px", max: "1536px" },
      pc: { min: "1537px", max: "3073px" },
      mobile: { max: "426px", min: "320px" },
    },
  },
  plugins: [],
};
