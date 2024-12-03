/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        background: "rgb(2,0,36)",
        backgroundBg: "linear-gradient('90deg, rgba(2,0,36,1) 0%, rgba(9,111,121,1) 50%, rgba(0,212,255,1) 100%')",
      }
    },
  },
  plugins: [],
}