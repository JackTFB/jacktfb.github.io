/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'forest': "url('../public/gifs/forest_background_animated.gif')"
      },
      colors: {
        'custom-bg-green':'#152227',
        'custom-bg-white':'#F4F6FB',
        'custom-border-white':'#cad7ed',
        'custom-text-yellow':'#FDE9C3'
      },
      fontFamily: {
        eagleLake: ['var(--font-eagleLake)', ...fontFamily.sans],
      },
      transitionProperty: {
        spacing: 'margin, padding'
      },
    
    },
  },
  plugins: [],
};
  