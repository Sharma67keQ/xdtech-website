/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lab: {
          bg: "#050816",
          purple: "#9A4DFF",
          blue: "#3F8CFF",
          glass: "rgba(15, 23, 42, 0.6)"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(63, 140, 255, 0.35)",
        neon: "0 0 30px rgba(154, 77, 255, 0.35)"
      },
      backdropBlur: {
        glass: "16px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 }
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        gradientShift: "gradientShift 12s ease infinite"
      }
    }
  },
  plugins: []
};
