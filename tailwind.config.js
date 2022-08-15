module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
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
        'ligh-golden': '#fef9eb',
        'pale-silver': '#BDB8A9ff',
        'platinum': '#EDEDEAff',
        'silver': '#C1C1BFff',
        'cultured': '#FAFAF9ff',
        'new-gray': '#f6f7f8',
        'yale-blue': '#1B4A8Bff'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
