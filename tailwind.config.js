/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        infrix: {
          orange: '#db6820',
          navy: '#15293a',
          dark: '#0e1b27',
          gray: '#f8f9fa',
        },
        navy: {
          deep: '#15293a',
          DEFAULT: '#15293a',
          light: '#1e3a54',
          mid: '#2a4e6e',
        },
        accent: {
          DEFAULT: '#db6820',
          dark: '#c45a1b',
          light: '#f17b34',
        },
        steel: {
          dark: '#3a4455',
          DEFAULT: '#6b7a8d',
          light: '#9aaab8',
          silver: '#c8d4de',
        },
        gold: '#c9a84c',
        offwhite: '#f5f7fa',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
