/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes", "cursive"],
        sans: ["Space Grotesk", "Raleway", "sans-serif"],
      },
      colors: {
        brand: {
          cyan: "#22d3ee",
          blue: "#3b82f6",
          purple: "#a855f7",
          dark: "#050510",
        },
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-reverse": "spin 8s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(34,211,238,0.2)" },
          "50%": { borderColor: "rgba(34,211,238,0.6)" },
        },
      },
      backgroundImage: {
        "grid-cyan":
          "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
        "grid-purple":
          "linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)",
        "grid-blue":
          "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
