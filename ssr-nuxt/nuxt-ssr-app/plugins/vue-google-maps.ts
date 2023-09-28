import VueGoogleMaps from '@fawmi/vue-google-maps'

export default defineNuxtPlugin(({ vueApp }) => {
    const config = useRuntimeConfig().public;
    vueApp.use(VueGoogleMaps, {
        load: {
            key: config.apiGoogleMapsKey,
            autobindAllEvents: true,
        },
    })
})
