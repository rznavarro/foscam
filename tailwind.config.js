/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Onyx & Brass — paleta editorial/lujo
        ink: "#17140F",
        ivory: "#F7F2E9",
        brass: "#A8763E",
        "brass-dark": "#8C5A2B",
        forest: "#2C3B2E",
        taupe: "#8A8073",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        base: "16px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(23,20,15,0.08)",
        "card-hover": "0 12px 24px rgba(23,20,15,0.14)",
      },
    },
  },
  plugins: [],
};
