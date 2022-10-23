/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111010",
        secondary: "#222222",
        fastblue: "#00ADEF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
      letterSpacing: {
        more: "0.2rem",
        lesser: "0.1rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
