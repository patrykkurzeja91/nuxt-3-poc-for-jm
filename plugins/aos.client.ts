import AOS from 'aos'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(AOS.init({ once: false }))
})
