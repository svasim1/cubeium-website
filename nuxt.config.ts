// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/color-mode',
    'nuxt-gtag',
    'nuxt-icon-tw',
    '@nuxt/ui',
    'nuxt3-leaflet'
  ],

  css: ['~/assets/css/main.css']
})
