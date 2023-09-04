// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiHost: process.env.API_HOST,
    }
  },
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/utils.scss',
  ],
})
