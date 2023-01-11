// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],
  modules: ['nuxt-icons', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      titleTemplate: 'Beauty Kingdom Awards | Celebrate your success with us!',
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: 'description',
          content:
            'After many years of running salons and an academy that gives British qualifications to work in the beauty industry, we want to appreciate other businesses in the industry that stand out on the market.',
        },
        {
          name: 'og:image',
          content: '@/assets/images/og_image.png',
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
