import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  routeRules: {
    '/categories': { swr: true },
    '/register': { swr: true },
    '/': { static: true },
  },
})
