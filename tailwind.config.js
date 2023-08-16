/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '887px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

