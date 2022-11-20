/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "rgb(76, 51, 152)",
        "brand-secondary": "#5d3ebc",
        "brand-gray": "#f3f0fe",
        "brand-yellow": "#ffd300",
      },
      fontFamily: {
        brandMedium: "JihoSoftMedium",
        brandBold: "JihoSoftBold",
      },
    },
  },
  plugins: [],
};
