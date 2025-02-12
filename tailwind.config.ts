import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: "#00F6FF", // Neon Blue Accent
        darkBg: "#0F172A", // Background color
        gradientStart: "#1E1E28",
        gradientEnd: "#0A0A0F",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, #1E1E28 0%, #0A0A0F 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
