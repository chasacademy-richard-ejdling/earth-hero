/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        EHGreen: '#9feea2',
      }
    }
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}