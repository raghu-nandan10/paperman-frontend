/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      custom: [
        "Trebuchet MS",
        "Lucida Sans Unicode",
        "Lucida Grande",
        "Lucida Sans",
      ],
      customFont: [
        "SF UI Text",
        " -apple - system",
        " BlinkMacSystemFont",
        "Segoe UI",
        " Roboto",
        " Helvetica",
        " Arial",
        "sans - serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    extend: {
      colors: {
        purpleCustom: "#52489C",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
