// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],
  modules: [
    '@nuxtjs/html-validator',
    'nuxt-icons',
    '@nuxtjs/tailwindcss',
    '@funken-studio/sitemap-nuxt-3',
  ],
  sitemap: {
    hostname: 'https://beautykingdomawards.co.uk',
    cacheTime: 1,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date().toISOString(),
    },
  },
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: 'Beauty Kingdom Awards | Join now! - %s',

      // <link rel="preconnect" href="https://fonts.googleapis.com">
      // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      // <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">
      // <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet">

      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@400;500&display=swap',
        },
      ],
      meta: [
        {
          name: 'description',
          content:
            'Celebrate your success with us! Show your company and product to the best in the  beauty industry!',
        },
        {
          name: 'keywords',
          content:
            'company awards, beauty awards, beauty professionals. Beauty clinic, best  beauty, premium awards,  blogger, Semi-pernament Artist, aesthetic medicine, spa, hairdresser, professional business',
        },
        {
          name: 'og:title',
          content: 'Beauty Kingdom Awards | Join now!',
        },
        {
          name: 'og:description',
          content:
            'Celebrate your success with us! Show your company and product to the best in the  beauty industry!',
        },
        {
          name: 'og:image',
          content: '@/assets/images/og_image.png',
        },
      ],
    },

    pageTransition: { name: 'page', mode: 'out-in' },
  },
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/categories': { swr: true },
    // Static page generated on-demand once
    '/': { static: true },
    '/register': { static: true },
  },
})
