/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Bowlby One SC'],
        paragraph: ['Lilita One'],
        numbers: ['Kanit'],
      },
      screens: {
        '3xl': '1900px',
      },
      backgroundImage: {
        planksbg: "url('/assets/planksbg.jpg')",
      },
    },
  },
  plugins: [],
};
