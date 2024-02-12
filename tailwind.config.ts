import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color1": "var(--color1)",
        "color2": "var(--color2)",
        "color3": "var(--color3)",
        "white": "var(--white)",
        "black1": "var(--black1)",
        "black2": "var(--black2)",
        "white-bg": "var(--white-bg)",
        "aside": "var(--aside)",
        "problack": "var(--problack)",
        "confirmed": "var(--confirmed)",
        "confi-bg": "var(--confi-bg)",
        "cancelled": "var(--cancelled)",
        "cancelled-bg": "var(--cancelled-bg)",
        "pending": "var(--pending)",
        "pending-bg": "var(--pending-bg)",

      },
      fontFamily: {
        'mon': ['Montserrat', 'sans-serif'],
        'fold': ['Sophia', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
export default config;
