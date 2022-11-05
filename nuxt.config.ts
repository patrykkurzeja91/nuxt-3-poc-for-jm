// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],
  modules: ['nuxt-icons', '@nuxtjs/tailwindcss'],
  plugins: ['@/plugins/vue-select.ts'],
  router: {
    // trailingSlash: false,
  },
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/categories': { swr: true },
    // Static page generated on-demand once
    '/': { static: true },
    '/register': { static: true },
    // Add redirect headers
    '/old-page': { redirect: '/categories' },
    '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } },
  },
})
