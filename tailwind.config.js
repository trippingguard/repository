/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow:
          "3px 3px 10px rgba(0, 0, 0, 0.3), -3px -3px 10px rgba(255, 255, 255, 0.8)",
      },
      backgroundImage: {
        hero: "url('/src/assets/hero_bg.png')",
        vector: "url('/src/assets/vector.jpg')",
      },
    },
  },
  plugins: [],
};
