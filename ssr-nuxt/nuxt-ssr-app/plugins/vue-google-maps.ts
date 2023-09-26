import VueGoogleMaps from '@fawmi/vue-google-maps'

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyBtplhKeERRmh0du-vLIUXAVG7ey-gWB2U',
            // language: 'de',
        },
    })
})
