// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],
  modules: ['nuxt-icons', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      titleTemplate: 'BeautyKingdom Awards | %s',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Celebrate your success with us!' },
        {
          name: 'og_image',
          content: '@/assets/images/bk_logo-gold.png',
        },
      ],
    },

    pageTransition: { name: 'page', mode: 'out-in' },
  },
  build: {
    transpile: ['aos'],
  },
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/categories': { swr: true },
    // Static page generated on-demand once
    '/': { static: true },
    '/register': { static: true },
  },
})
