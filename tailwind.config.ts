import type { Config } from "tailwindcss";

// Tailwind config: purge unused utilities and map theme tokens to CSS variables
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,css,md}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
      },
      transitionTimingFunction: {
        smooth: "var(--ease-smooth)",
      },
      transitionDuration: {
        fast: "200ms",
      },
      borderRadius: {
        "3xl": "var(--radius-3xl, 1.5rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
