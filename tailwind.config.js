const plugin = require('tailwindcss/plugin')
const _ = require('lodash')

const gradientPlugin = plugin(function ({ addUtilities, e, theme, variants }) {
  const gradients = theme('gradients', {})
  const gradientVariants = variants('gradients', [])

  const utilities = _.map(gradients, ([start, end, deg], name) => ({
    [`.bg-gradient-${e(name)}`]: {
      backgroundImage: `linear-gradient(${deg}, ${start}, ${end})`,
    },
  }))

  addUtilities(utilities, gradientVariants)
})

module.exports = {
  theme: {
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    gradients: (theme) => ({
      blue: ['#0CC2FF', theme('colors.blue.500'), '135deg'],
      light: ['white', theme('colors.blue.100'), '135deg'],
      'light-reverse': ['white', theme('colors.blue.100'), '-135deg'],
      dark: [theme('colors.blue.900'), theme('colors.blue.1000'), '135deg'],
    }),
    extend: {
      colors: {
        blue: {
          50: '#f2f9ff',
          100: '#e6f4ff',
          200: '#b3ddff',
          300: '#80c6fe',
          400: '#4daffe',
          500: '#1a99fe',
          600: '#017fe5',
          700: '#0163b2',
          800: '#01477f',
          900: '#002a4c',
          1000: '#000e19',
        },
      },
      borderRadius: {
        lg: '1rem',
      },
    },
  },
  variants: {
    scale: ['hover', 'focus'],
    opacity: ['disabled'],
  },
  plugins: [gradientPlugin],
}
