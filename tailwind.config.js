const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],
  theme: {},
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['carbon']),
    }),
  ],
}
