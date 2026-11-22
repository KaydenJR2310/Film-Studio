/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 900: '#0b0d11', 800: '#0f1115', 700: '#171a21', 600: '#20242d', 500: '#2b303b' },
        accent: '#38bdf8',
        playhead: '#f43f5e',
      },
    },
  },
  plugins: [],
};
