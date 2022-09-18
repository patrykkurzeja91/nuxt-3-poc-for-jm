// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],
  modules: ['nuxt-icons'],
  plugins: ['@/plugins/vue-select.ts'],
  router: {
    trailingSlash: false,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
