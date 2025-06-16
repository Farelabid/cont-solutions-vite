/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': {
          400: '#4ECDC4',
          500: '#4ECDC4',
          600: '#45b7b8'
        },
        'blue': {
          900: '#2c5f7a'
        },
        'yellow': {
          400: '#fbbf24',
          500: '#f59e0b'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}