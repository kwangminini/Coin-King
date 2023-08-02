/** @type {import('tailwindcss').Config} */
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) }
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) }
const px0_1280 = { ...Array.from(Array(1281)).map((_, i) => `${i}px`) }
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: px0_1280,
      maxWidth: px0_1280,
      minWidth: px0_500,
      minHeight: px0_500,
      fontSize: px0_100,
      colors: {
        'main-font-color': '#333333',
        'sub-font-color': '#666666',
        'main-border-color': '#CCCCCC',
        'increase-color': '#C84A31',
        'decrease-color': '#1261C4',
        'input-border-grey': '#DFE0E5',
        'main-color': '#1e8ffa',
      },
    },
  },

  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'], //빌드 최적화
}
