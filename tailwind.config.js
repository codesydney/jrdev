/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f3f5f7',
        secondary: '#202329',
        accent: {
          100: '#FFC107',
          200: '#916400',
        },
        text: {
          100: '#5c5c5c',
        },
        bg: {
          100: '#F7F7F7',
          200: '#ededed',
          300: '#d5eaef',
          400: '#F3F5F7',
        },
        bt: {
          100: '#00bebd',
          200: '#01a7a7',
        },
      },
    },
  },
  plugins: [],
};
