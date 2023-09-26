// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  build: {
    transpile: ['vuetify', 'vue-tel-input', '@fawmi/vue-google-maps'],
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
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  }
})
