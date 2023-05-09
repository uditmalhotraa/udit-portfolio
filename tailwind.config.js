/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
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
      'darkBlack': '#111',
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
        'containerXL': 'rgba(0, 0, 0, 0.44) 0px 4px 10px',
        'darkContainer': 'rgba(155, 155, 155, 0.24) 0px 3px 12px',
        'darkContainerXL': 'rgba(155, 155, 155, 0.44) 0px 4px 10px',
      },
      backgroundImage: {
        'uditPic': "url('../src/assets/UditPic.jpg')",
      }
    },
  },
  plugins: [],
}

