/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // adding xs to the rest
      xs: "425px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}