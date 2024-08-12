/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#71717a"
        },
        primary: '#DD11FF',
        secondary: '#AAA'
      }
    }
  },
  plugins: []
};
