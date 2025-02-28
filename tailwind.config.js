/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        black: '#000',
        deepTeal: '#0F282D',
        limeGreen: '#D1FF3B',
        lightSkyBlue: '#7AF1FF',
        purple: '#544AE5'
      },
      fontFamily: {
        'grotesqueRegular': 'GROTESQUE-REGULAR',
        'grotesqueBold': 'GROTESQUE-BOLD'
      }
    },
  },
  plugins: [],
};
