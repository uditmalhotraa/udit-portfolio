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
      'cream': '#efebdb',
      'gray': '#15202B',
      'darkgray': '#111822',
      'accent-light': '#212196',
      'accent-dark': '#AFAFED',
      'black': '#000000',
      'white': '#ffffff',
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
        'container': 'rgba(75, 75, 75, 0.24) 0px 3px 8px',
        'containerXL': 'rgba(75, 75, 75, 0.44) 0px 4px 10px',
      },
      backgroundImage: {
        'uditPic': "url('../src/assets/UditPic.jpg')",
      }
    },
  },
  plugins: [],
}

