/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#3B82F6",
          dark: "#0B0F1A",
          dark2: "#111827"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.25)"
      }
    }
  },
  plugins: []
};
