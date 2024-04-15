import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },
    screens: {
      'xs': '320px',
      // => @media (min-width: 640px) { ... }

      'sm': '600px',
      // => @media (min-width: 768px) { ... }

      'md': '840px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1380px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
