/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Corsa-Grotesk': 'Corsa Grotesk'
      },
      colors: {
        brand: {
          primary: '#3A56CD',
          gray: {
            dark: '#434A5B',
            base: '#565C6B',
            light: '#A1A5AD'
          }
        }
      },

      screens: {
        // sm: '376px',
        // sm2: '400px',
        //
        md: '640px'
        // lg: '1024px',
        // '8xl': '1440px'
      }
    }
  },
  plugins: []
};
