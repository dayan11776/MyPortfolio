/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
    },
  },
  plugins: [],
}

