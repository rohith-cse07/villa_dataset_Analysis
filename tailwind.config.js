/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F5E27D",
          dark: "#B8962A",
        },
        luxury: {
          purple: "#6B21A8",
          "deep-purple": "#4B0082",
          black: "#050408",
          card: "rgba(255,255,255,0.03)",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Outfit'", "sans-serif"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-gold": "pulse-gold 2s infinite",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.23,1,0.32,1) both",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-18px)" } },
        shimmer: { "0%": { backgroundPosition: "200% 0" }, "100%": { backgroundPosition: "-200% 0" } },
        "pulse-gold": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.4)" },
          "50%": { boxShadow: "0 0 0 20px rgba(212,175,55,0)" },
        },
        fadeInUp: { from: { opacity: 0, transform: "translateY(40px)" }, to: { opacity: 1, transform: "none" } },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37, #B8962A)",
        "purple-gold": "linear-gradient(135deg, #6B21A8, #D4AF37)",
        "hero-mesh": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107,33,168,0.25) 0%, transparent 70%)",
      },
      backdropBlur: { xl: "20px" },
    },
  },
  plugins: [],
};
