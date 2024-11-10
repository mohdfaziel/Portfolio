/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
      },
      colors: {
        "dark1": "#252734",
        "dark2": "#333646",
        "unactive": "#5C5E6B",
        "active": "#CED5E7",
        "main": "#FFAF29",
      },
    },
  },
  plugins: [],
}

