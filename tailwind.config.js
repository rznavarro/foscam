/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Onyx & Brass — versión oscura editorial/lujo
        ink: "#0B0A07", // fondo de página, casi negro cálido
        panel: "#15130D", // superficie de cards/secciones
        "panel-2": "#1C1810", // superficie alterna (hover, destacado)
        ivory: "#F5F1E8", // texto principal sobre fondo oscuro
        brass: "#C9A84C",
        "brass-light": "#E2C97E",
        "brass-dark": "#8C6A2E",
        forest: "#3F7A5C",
        taupe: "#9C978C",
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
        card: "0 1px 0 rgba(255,255,255,0.05) inset, 0 20px 40px rgba(0,0,0,0.45)",
        "card-hover":
          "0 1px 0 rgba(255,255,255,0.07) inset, 0 24px 60px rgba(0,0,0,0.55), 0 0 40px rgba(201,168,76,0.10)",
      },
    },
  },
  plugins: [],
};
