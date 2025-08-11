/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-regular': ['Montserrat-Regular', 'sans-serif'],
        'montserrat-semi-bold': ['Montserrat-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}