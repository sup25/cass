import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        archivo: "var(--font-archivo)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".section": {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "0 10px",
        },
        "@media screen and (min-width: 768px)": {
          ".section": {
            padding: "0 30px",
          },
        },
        ".container": {
          maxWidth: theme("maxWidth.container"),
        },
        ".bgfix": { backgroundAttachment: "fixed" },
      });
    }),
  ],
} satisfies Config;
