import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '../view/Main.vue'
import newsView from '../view/NewsView.vue'
import test from '../view/Test.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/main',
            components : {
                default : main,
                test : test
            },
            props : true
        },
        {
            path : '/news',
            component : newsView,
            redirect : '/main'
        },
        {
            path : '/news/:id',
            component : newsView,
            props : true
        }
    ]
});