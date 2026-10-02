import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
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