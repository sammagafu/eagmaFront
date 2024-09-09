/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4A90E2',
          DEFAULT: '#2C7BE5',
          dark: '#1C5FAE',
          custom: '#4372B8', // New color
        },
        secondary: {
          light: '#6FCF97',
          DEFAULT: '#27AE60',
          dark: '#1E8449',
          custom: '#3BBB99', // New color
        },
        alternate: {
          light: '#F2C94C',
          DEFAULT: '#F2994A',
          dark: '#EB5757',
        },
        purple: '#4b276b', // New color
        navy: '#084e91', // New color
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
    },
  },
  plugins: [],
}