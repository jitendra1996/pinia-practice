import { createRouter , createWebHistory } from "vue-router";
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';

const routes = [
    {
        name:'home-page',
        path:'/',
        component:Home
    },
    {
        name:'about-page',
        path:'/about',
        component:About
    }
];


export const router = createRouter({
    history : createWebHistory(),
    routes
});