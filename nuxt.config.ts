// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],
  modules: ['nuxt-icons', '@nuxtjs/tailwindcss'],
  plugins: ['@/plugins/vue-select.ts'],
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
          body: true,
        },
        {
          children: 'AOS.init()',
          body: true,
        },
      ],
      link: [
        {
          href: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
          rel: 'stylesheet',
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
