/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
}
