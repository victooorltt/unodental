import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#111111",
        accent: {
          DEFAULT: "#A4C4C8",
          hover: "#8eb6bb",
          light: "#EBF3F4",
          dark: "#6F979C",
        },
        muted: {
          DEFAULT: "#666666",
          light: "#888888",
        },
        surface: {
          DEFAULT: "#FAFAFA",
          subtle: "#F5F7F7",
        },
        line: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
