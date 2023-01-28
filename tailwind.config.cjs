/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#68655B",
        secondary: "#FFF9DE",
        input: "#F9F9F8",
      },
    },
  },
  plugins: [],
};
