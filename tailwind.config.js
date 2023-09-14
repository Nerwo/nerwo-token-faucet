// @ts-check
const colors = require('tailwindcss/colors');

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    colors: {
      primary: '#014c31',
      secondary: '#00c920',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      gin: '#ebf2ec',
      'malachite': {
        '50': '#eeffef',
        '100': '#d7ffdd',
        '200': '#b2ffbd',
        '300': '#76ff8a',
        '400': '#33f551',
        '500': '#09de2a',
        '600': '#00c920',
        '700': '#04911b',
        '800': '#0a711b',
        '900': '#0a5d1a',
        '950': '#00340a',
      },
      'sherwood-green': {
        '50': '#ebfef3',
        '100': '#cefde0',
        '200': '#a2f8c8',
        '300': '#66efac',
        '400': '#29de8b',
        '500': '#04c572',
        '600': '#00a05e',
        '700': '#00804e',
        '800': '#00653f',
        '900': '#014c31',
        '950': '#002f1f',
      },
    }
  }
}
