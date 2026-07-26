/** @type {import('tailwindcss').Config} */

const surface = { DEFAULT: "#E8E2D4", dark: "#171A16" }; // page
const panel = { DEFAULT: "#F6F3EC", dark: "#1F2420" }; // cards
const ink = { DEFAULT: "#16181A", dark: "#E8E2D4" }; // body text
const field = { DEFAULT: "#405145", dark: "#7E9B7F" }; // headings, structure
const brass = { DEFAULT: "#B4813A", dark: "#C79A50" }; // links, CTAs, chips
const rule = { DEFAULT: "#B9B0A0", dark: "#3A423A" }; // hairlines

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor", // needed for fill-current / stroke-current
      inherit: "inherit",
      black: "#000000",
      white: "#ffffff",

      surface,
      panel,
      ink,
      field,
      brass,
      rule,
    },

    fontFamily: {
      display: ['"Archivo Narrow"', "system-ui", "sans-serif"], // titles, card headings
      body: ['"Newsreader"', "Georgia", "serif"], // prose
      mono: ['"Courier Prime"', "ui-monospace", "monospace"], // labels, dates, prices
      poppins: ['"Newsreader"', "Georgia", "serif"],
    },

    fontWeight: {
      ultrathin: 300,
      thin: 400,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },

    extend: {
      letterSpacing: {
        label: "0.12em", // tracking-label — for the uppercase mono utility text
        display: "-0.01em", // tracking-display — condensed titles want to close up
      },
      backdropBlur: {
        "8px": "8px",
      },
      boxShadow: {
        container: "rgba(35, 40, 34, 0.20) 0px 3px 8px -1px",
        containerXL: "rgba(35, 40, 34, 0.38) 0px 4px 10px",
        rim: "rgba(35, 40, 34, 0.14) 0px -3px 7px",
        "neo-light": "16px 16px 30px #D6D0C1, -16px -16px 30px #FBF7EE",
        "neo-dark": "16px 16px 32px #0F120E, -16px -16px 32px #232A24",
      },
      backgroundImage: {
        uditPic: "url('../src/assets/UditPic.webp')",
      },
      keyframes: {
        "spin-once": {
          "0%": { transform: "rotate(0deg)", opacity: "0.4" },
          "100%": { transform: "rotate(360deg)", opacity: "1" },
        },
      },
      animation: {
        "spin-once": "spin-once 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
