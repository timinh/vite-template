import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import {setupLayouts} from 'virtual:generated-layouts'
import pages from '~pages'
import App from './App.vue'
import { Quasar, Notify } from 'quasar'
import quasarLang from 'quasar/lang/fr'

// styles
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import './assets/app.scss'

import quasarIconSet from 'quasar/icon-set/svg-material-icons'

const routes = setupLayouts(pages)

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(
	router
).use(Quasar, {
	plugins: {
		Notify
	},
	config: {notify:{}},
	lang: quasarLang,
	iconSet: quasarIconSet
  }
).use(createHead()).use(createPinia()).mount('#app')
