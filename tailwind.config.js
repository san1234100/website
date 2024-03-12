/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellow:"#d39a26"
      }
    },
  },
  plugins: [],
}

