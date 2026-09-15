export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pana: {
          gold: '#D4AF37',
          dark: '#1a1a1a',
          cream: '#F5F5DC',
        }
      },
      fontFamily: {
        serif: ['Baskervville', 'Georgia', 'serif'],
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
