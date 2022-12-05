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
      backgroundImage: (theme) => ({
        "mobile-app":
          "url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)",
      }),
      fontFamily: {
        brandMedium: "JihoSoftMedium",
        brandBold: "JihoSoftBold",
      },
    },
  },
  plugins: [],
};
