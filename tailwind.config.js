/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm2': '870px',
        'md2': '1000px', 
        'xsm': '470px',
      },
    },
  },
  plugins: [],
}

