import {createApp} from 'vue';
import App from './App.vue';
import {createPinia} from 'pinia'
import 'vuetify/styles'
import {createVuetify} from "vuetify/dist/vuetify.js";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from "@/router/index.js";

const Vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)
app.use(createPinia()).use(router)
app.mount('#app')



