import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#f5f3ee",
        paper: "#ffffff",
        ink: "#121009",
        stone: "#6b6558",
        pebble: "#a29b8b",
        hairline: "rgba(18,16,9,0.10)",
        accent: "#8c6d3f",
        "accent-deep": "#5f4826",
        "accent-soft": "#ede6d5",
        "footer-ink": "#0d0c08",
        "footer-paper": "#f3efe6",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        wrap: "1280px",
      },
      borderRadius: {
        lg: "4px",
        md: "3px",
        sm: "2px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
