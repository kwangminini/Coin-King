/** @type {import('tailwindcss').Config} */
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) }
const px0_1280 = { ...Array.from(Array(1281)).map((_, i) => `${i}px`) }
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: px0_500,
      maxWidth: px0_1280,
      minWidth: px0_500,
      minHeight: px0_500,
      colors: {
        'main-font-color': '#333333',
        'sub-font-color': '#666666',
        'main-border-color': '#CCCCCC',
        'increase-color': '#C84A31',
        'decrease-color': '#1261C4',
      },
    },
  },

  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'], //빌드 최적화
}
