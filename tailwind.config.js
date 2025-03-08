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
        "unactive": "#8E94A4",
        "active": "#FFFFFF",
        "main": "#FFAF29",
      },
      animation: {
        customPulse: 'customPulse 2s infinite ease-in-out',
      },
      keyframes: {
        customPulse: {
          '0%, 100%': { opacity: '0.15' }, 
          '50%': { opacity: '0.20' },
        },
      },
    },
  },
  plugins: [],
}

