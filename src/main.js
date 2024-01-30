import {createApp} from 'vue';
import App from './App.vue';
import {createPinia} from 'pinia'
import 'vuetify/styles'
import createVuetify from '@/plugins/vuetify.js'
import '@mdi/font/css/materialdesignicons.css'
import router from "@/router/index.js";


const app = createApp(App)
app.use(createPinia()).use(router).use(createVuetify)
app.mount('#app')



