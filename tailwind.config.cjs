/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a1d3e",   // Bleu azur profond (remplace ton bleu très foncé)
        secondary: "#A2B9E0",  // Bleu-gris doux (remplace ton violet-gris)
        tertiary: "#2A4375",   // Bleu nuit légèrement désaturé (remplace ton bleu sombre)
        "black-100": "#2B3A5A", // Bleu-gris foncé (remplace ton noir légèrement violacé)
        "black-200": "#1B284B", // Bleu marine profond (remplace ton noir très foncé)
        "white-100": "#F5F5F5", // Blanc cassé (quasi identique à ton actuel)
    },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
