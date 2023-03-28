/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#8B5FBF',
          200: '#ff607e',
          300: '#ffcddf',
        },
        accent: {
          100: '#FFC107',
          200: '#916400',
        },
        text: {
          100: '#333333',
          200: '#5c5c5c',
        },
        bg: {
          100: '#F7F7F7',
          200: '#ededed',
          300: '#c4c4c4',
        },
      },
    },
  },
  plugins: [],
};
