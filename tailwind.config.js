/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'ruwudu': ['ruwudu', 'sans-serif'],
        'agdasima': ['agdasima', 'sans-serif'],
        'gruppo': ['gruppo', 'sans-serif'],
        "'open sans'": ["'open sans'", 'sans-serif'],
      },
      screens: {
        'sm': '640px', // Small screens (phones)
        'md': '768px', // Medium screens (tablets)
        'lg': '1024px', // Large screens (desktops)
        'xl': '1280px', // Extra-large screens (large desktops)
      }
    },
  },
  plugins: [],
};
