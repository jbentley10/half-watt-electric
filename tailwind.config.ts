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
      // => @media (min-width: 320px) { ... }

      'sm': '600px',
      // => @media (min-width: 600px) { ... }

      'md': '840px',
      // => @media (min-width: 840px) { ... }

      'lg': '1380px',
      // => @media (min-width: 1380px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gradient-orange': '#ffc683',
        'gradient-yellow': '#fee783',
        'gradient-red': '#f6818b'
      },
      boxShadow: {
        'image': '12px 15px 0 0 rgba(220, 220, 220, 0.42)'
      }
    },
  },
  plugins: [],
};
export default config;
