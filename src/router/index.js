import {createRouter , createWebHistory} from "vue-router";
import home from "@/components/home.vue";
import film from '@/components/film.vue'
import series from '@/components/series.vue'
import liveTv from '@/components/liveTv.vue'
import navbar from "../components/navbar.vue";
const routes = [
    {
        path :'/',
        name : 'navbar',
        component : navbar,
        children :[
            {
                path : '/film',
                name : 'film',
                component : film
            },
            {
                path :'/series',
                name : 'series',
                component : series
            },
            {
                path : '/liveTv',
                name : 'liveTv',
                component : liveTv
            }
        ]
    },

]
const router = createRouter({
    history :createWebHistory(),
    routes
})
export default router
