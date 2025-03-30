/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      fontSize: { //These are custom sizes. Try not to change them.
        sm: ['20px', '20px'], 
        lg: ['24px', '28px'],
        base: ['30px', '38px'],
        smxl: ['42px', '42px'],
        xl: ['48.832px', '63px'],
      },
    extend: {
      fontFamily: {
        figtree: ['figtree', 'sans-serif'],
      },
      colors: {
      'cornflower-blue-400': '#7287fd',
      'cornflower-blue-500': '#5d69f7',
      'subtext-gray': '#5c5f77',
      'main': '#4c4f69',
      'background': '#eff1f5',
      'divider': '#9ca0b0',
      }
    },
  },
  plugins: [],
}