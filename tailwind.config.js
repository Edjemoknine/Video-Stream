/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "1rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1024px",
      "2xl": "1200px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
