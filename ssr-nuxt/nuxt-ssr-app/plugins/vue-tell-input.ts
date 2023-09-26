import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(VueTelInput)
})
