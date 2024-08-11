/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins:  [
    require('daisyui'),
  ],
}

