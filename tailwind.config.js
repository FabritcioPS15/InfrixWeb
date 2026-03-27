/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        'infrix-black': '#010101',
        'infrix-dark': '#2C3740',
        'infrix-light': '#D6D7D7',
        'infrix-gray': '#858586',
        'infrix-blue': '#025395',
        'infrix-blue-bright': '#0F8ACB',
      },
    },
  },
  plugins: [],
};
