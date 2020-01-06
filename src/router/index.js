import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/About.vue')
            },
            {
                path: '/technology',
                name: 'technology',
                component: () => import('../views/technology/index.vue'),
                children: [
                    {
                        path: 'web',
                        name: 'web',
                        component: () => import('../views/technology/index.vue'),
                    },
                    {
                        path: 'node',
                        name: 'node',
                        component: () => import('../views/technology/index.vue'),
                    },
                    {
                        path: 'mysql',
                        name: 'mysql',
                        component: () => import('../views/technology/index.vue'),
                    },
                ]
            },
            {
                path: '/note',
                name: 'note',
                component: () => import('../views/note/index.vue')
            },
            {
                path: '/program',
                name: 'program',
                component: () => import('../views/program/index.vue')
            },
            {
                path: '/others',
                name: 'others',
                component: () => import('../views/others/index.vue')
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
