/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0a1628',
          DEFAULT: '#0e1f3d',
          light: '#162d55',
          mid: '#1e3d70',
        },
        accent: {
          DEFAULT: '#4a8fd4',
          dark: '#3a7abf',
          light: '#85b7eb',
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
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
