import {createRouter , createWebHistory} from "vue-router";
import home from "@/components/home.vue";
import film from '@/components/film.vue'
import series from '@/components/series.vue'
import liveTv from '@/components/liveTv.vue'
import navbar from "../components/searchResult.vue";
import favMovie from "@/components/favMovie.vue";
const routes = [
             {
              path: '/',
                 name :'home',
              component: home
             },
            {
                path: '/favMovie',
                name: 'favMovie',
                component: favMovie
            },
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
    },

]
const router = createRouter({
    history :createWebHistory(),
    routes
})
export default router
