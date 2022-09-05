module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    extend: {
      colors: {
        'royal-blue': '#002366',
        'dark-orange': '#664300',
        'dark-golden': '#b8860b',
        'light-golden': '#fef9eb',
        'pale-silver': '#BDB8A9ff',
        platinum: '#EDEDEAff',
        silver: '#C1C1BFff',
        cultured: '#FAFAF9ff',
        'new-gray': '#f6f7f8',
        'light-grayish-blue': {
          100: '#f6f7f8',
          200: '#ebedef',
          300: '#e0e3e7',
          400: '#d5dade',
          500: '#cad0d6',
          600: '#bfc6cd',
          700: '#b4bcc5',
          800: '#a9b2bc',
          900: '#9ea9b3',
        },
        'yale-blue': '#1B4A8Bff',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
