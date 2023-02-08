/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "umm-red": "#a02926",
        "umm-blue-navy": "#2a166b",
        "umm-white": "#ffff",
      },
    },
  },
  plugins: [require("daisyui")],
};
