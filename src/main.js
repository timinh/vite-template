import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import {setupLayouts} from 'virtual:generated-layouts'
import pages from '~pages'
import App from './App.vue'
import './assets/app.scss'

const routes = setupLayouts(pages)

const router = createRouter({
    history: createWebHistory(),
    routes
})
const head = createHead()
createApp(App).use(head).use(router).use(createPinia()).mount('#app')
