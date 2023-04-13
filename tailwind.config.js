/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#2e6f99",
      dark: "#2a587b",
      secondary: "#27a2db",
      light: "#5bc9eb",
      blue: "#0046b8",
      white: "#fff",
      indigo: {
        100: "#d5e2eb",
        200: "#abc5d6",
        300: "#82a9c2",
        400: "#588cad",
        500: "#2e6f99",
        600: "#25597a",
        700: "#1c435c",
        800: "#122c3d",
        900: "#09161f",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
