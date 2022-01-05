import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import {setupLayouts} from 'virtual:generated-layouts'
import pages from '~pages'
import App from './App.vue'

const routes = setupLayouts(pages)

const router = createRouter({
    history: createWebHistory(),
    routes
})
const head = createHead()
createApp(App).use(head).use(router).mount('#app')
