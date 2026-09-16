/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12181C",
        "navy-deep": "#0E2A38",
        "signal-red": "#D8402C",
        "signal-red-dark": "#B6321F",
        offwhite: "#F6F5F2",
        taupe: "#8A8377",
        "signal-green": "#2E9E6C",
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
        card: "0 4px 12px rgba(18,24,28,0.08)",
        "card-hover": "0 12px 24px rgba(18,24,28,0.12)",
      },
    },
  },
  plugins: [],
};
