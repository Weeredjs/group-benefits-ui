/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#3F6F8E",      // Deep maritime blue
        accent: "#479D9C",       // Teal accent
        soft: "#9BD39A",         // Light teal
        background: "#F7FCF9",   // Ultra-light background
        card: "#FFFFFF",         // Card base
        text: "#1E2A38",         // Deep slate
      },
      fontFamily: {
        heading: ["Calibri", "Segoe UI", "Arial", "Helvetica", "sans-serif"],
        body: ["Calibri", "Segoe UI", "Arial", "Helvetica", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "2rem",
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(63, 111, 142, 0.07), 0 1.5px 8px 0 rgba(71, 157, 156, 0.05)'
      },
      transitionProperty: {
        'height': 'height'
      },
    },
  },
  plugins: [],
};