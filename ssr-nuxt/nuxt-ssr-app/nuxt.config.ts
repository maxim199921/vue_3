// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  build: {
    transpile: ['vuetify', 'vue-tel-input', '@fawmi/vue-google-maps'],
  },
  modules: ['nuxt-lodash', 'nuxt-snackbar'],
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/scss/main.scss',
    '~/assets/scss/utils.scss',
  ],
  devtools: {enabled: true},
  runtimeConfig: {
    public: {
      apiHost: process.env.API_HOST,
      apiGoogleMapsKey: process.env.API_GOOGLE_MAPS_KEY,
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  }
})
