/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(365.94% 144.45% at 2.57% 106.64%, rgba(98, 221, 239, 0.42) 15.61%, rgba(255, 140, 237, 0.60) 36.04%, rgba(89, 163, 232, 0.70) 65.78%, rgba(60, 100, 240, 0.70) 90.29%)',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        kaushan: ['"Kaushan Script"', 'cursive']
      },
      colors :{
        'light-blue' : '#62DDEF6B',
        'light-pink' : '#FF4EB8',
        'medium-blue' : '#59A3E8B2',
        'dark-blue' : '#3C64F0B2',
        'primary' : {100 :'#1B2F57', 200 : '#142442', 300:'#004AAD', 400:"#1200DD"},
        'dark-brown' : '#5A4739',
        'light-brown' : '#997E6B',
        'dark-brown/10' : '#42250A1A'
      },
      width :{
        '115' : '460px'
      },
      height:{
        '140' : '560px'
      }
    },
  },
  plugins: [],
}

