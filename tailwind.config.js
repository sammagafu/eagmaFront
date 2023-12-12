/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}