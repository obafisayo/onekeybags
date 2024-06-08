/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(14 165 233 / var(--tw-text-opacity))",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem"
        }
      },
      fontFamily: {
        sm: "IBMPlexSans-Regular",
        md: "IBMPlexSans-Medium",
        bd: "IBMPlexSans-Bold",

      },
      screens: {
        'tail': { 'raw': '(max-width: 1024px)'}
      }
    },
  },
  plugins: [],
}

