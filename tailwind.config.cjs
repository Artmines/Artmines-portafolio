/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Main backgrounds
        primary: "#0f0f0f",
        secondary: "#a1a1aa",
        tertiary: "#1a1a1a",

        // Dark variants
        "black-100": "#141414",
        "black-200": "#1c1c1c",

        // Light variants
        "white-100": "#f4f4f5",
        "white-200": "#e4e4e7",

        // Accent colors (gradient endpoints)
        "accent-orange": "#f97316",
        "accent-rose": "#e11d48",
        "accent-amber": "#f59e0b",

        // Muted accents for text
        "muted": "#71717a",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(249, 115, 22, 0.25)",
        "card-hover": "0px 35px 120px -15px rgba(249, 115, 22, 0.4)",
        glow: "0 0 40px rgba(249, 115, 22, 0.15)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(90deg, #f97316 0%, #e11d48 100%)",
      },
    },
  },
  plugins: [],
};
