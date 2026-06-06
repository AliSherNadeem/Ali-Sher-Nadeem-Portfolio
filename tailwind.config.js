/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        signature: ["Great Vibes", "cursive"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        "spin-reverse": "spin 10s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        "orb-1": "orb-drift-1 22s ease-in-out infinite",
        "orb-2": "orb-drift-2 18s ease-in-out infinite",
        "orb-3": "orb-drift-3 25s ease-in-out infinite",
        "grid-pulse": "grid-pulse 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "orb-drift-1": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "33%": { transform: "translate(80px, -60px)" },
          "66%": { transform: "translate(-40px, 40px)" },
        },
        "orb-drift-2": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "33%": { transform: "translate(-70px, 50px)" },
          "66%": { transform: "translate(50px, -40px)" },
        },
        "orb-drift-3": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(40px, 60px)" },
        },
        "grid-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};
