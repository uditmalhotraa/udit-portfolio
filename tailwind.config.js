/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      cream: "#efebdb",
      gray: "#212121",
      darkgray: "#111822",
      // "accent-light": "#212196",
      // "accent-dark": "#AFAFED",
      "accent-light": "#2f8d72",
      "accent-dark": "#00ffa2",
      black: "#000000",
      white: "#ffffff",
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    fontWeight: {
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    extend: {
      backdropBlur: {
        "8px": "8px",
      },
      boxShadow: {
        container: "rgba(75, 75, 75, 0.24) 0px 3px 8px -1px",
        containerXL: "rgba(75, 75, 75, 0.44) 0px 4px 10px",
        rim: "rgba(75, 75, 75, 0.15) 0px -3px 7px",
        "neo-light": "16px 16px 30px #e1ddce, -16px -16px 30px #fdf9e8",
        "neo-dark": "16px 16px 32px #101821, -16px -16px 32px #1a2835",
      },
      backgroundImage: {
        uditPic: "url('../src/assets/UditPic.webp')",
        bookThumbnail: "url('../src/assets/HomeThumbnail.webp')",
      },
    },
  },
  plugins: [],
};

