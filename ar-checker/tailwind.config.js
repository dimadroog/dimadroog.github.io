/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      maxWidth: {
        content: '72rem',
      },
      colors: {
        brand: {
          50: '#eff6ff',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          950: '#172554',
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
}
