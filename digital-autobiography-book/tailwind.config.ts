import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // English → Cormorant, Tamil → Kavivanar (auto fallback)
        serif: [
          "var(--font-serif)",
          "var(--font-tamil)",
          "Georgia",
          "serif",
        ],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        tamil: ["var(--font-tamil)", "var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        burgundy: {
          DEFAULT: "#651f32",
          dark: "#3d111e",
          light: "#7b2940",
        },
        paper: "#ffffff",
        ink: "#111111",
      },
      transitionDuration: {
        650: "650ms",
        700: "700ms",
      },
    },
  },
  plugins: [],
};

export default config;