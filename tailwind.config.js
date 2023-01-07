module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    extend: {
      colors: {
        'royal-blue': '#002366',
        'dark-orange': '#664300',
        'dark-golden': '#b37a00',
        'hero-blue': '#045ca7',
        'yale-blue': '#1B4A8B',
        silver: '#C1C1BFff',
        'light-grayish-blue': {
          100: '#fafafa',
          200: '#ebedef',
          300: '#e0e3e7',
          400: '#d5dade',
          500: '#cad0d6',
          600: '#bfc6cd',
          700: '#b4bcc5',
          800: '#a9b2bc',
          900: '#9ea9b3',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
