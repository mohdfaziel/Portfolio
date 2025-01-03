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
      animation: {
        moveDot: 'moveDot 5s linear infinite 2s',
      },
      keyframes: {
        moveDot: {
          '0%, 100%': { top: '-0%', left: '-0%' },
          '25%': { top: '-0%', left: 'calc(100% - 5px)' },
          '50%': { top: 'calc(100% - 5px)', left: 'calc(100% - 5px)' },
          '75%': { top: 'calc(100% - 5px)', left: '-0%' },
        },
      },
    },
  },
  plugins: [],
}

