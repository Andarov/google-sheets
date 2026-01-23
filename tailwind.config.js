 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#34D399", // Emerald 400 - Vibrant Green
        primaryDark: "#059669", // Emerald 600
        dark: "#050505", // Deep Black/Gray
        surface: "#121212", // Slightly lighter dark
        glass: "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
         'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #34D39933 0deg, #05966933 180deg, #34D39933 360deg)',
      }
    },

    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}