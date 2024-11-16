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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'musgo': '#0E4749',
        'limao': '#95C623'
      },
      backgroundImage: {
        'hero': "url('/img/bg-hero.jpg')",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
  plugins: [],
} satisfies Config;
