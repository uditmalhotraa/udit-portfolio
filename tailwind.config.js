/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'slate': '#F5F5F7',
      'lightGray': '#CCC',
      'darkGray': '#666',
      'black': '#000000',
      'accent': '#672AE9',
      'milka': '#7E69AD'
    },
    fontFamily: {
      poppins: 'Poppins, sans-serif',
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
      boxShadow: {
        'container': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
      backgroundImage: {
        'uditPic': "url('../src/assets/UditPic.jpg')",
      }
    },
  },
  plugins: [],
}

