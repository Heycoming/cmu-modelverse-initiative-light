/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cmu': {
          'red': '#C41230',
          'dark': '#1a1a1a',
          'gray': '#333333',
        },
        'modelverse': {
          'bg': '#050505',
          'card': '#121212',
          'accent': '#6d28d9',
          'glow': '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
