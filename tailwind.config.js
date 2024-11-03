/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': "url('./src/assets/auth-bg.jpg')",
        'main-bg': "url('./src/assets/main-bg.jpg')",
      },
      colors: {
        'primary': '#ED6663',
      },
    },
  },
  plugins: [],
}

