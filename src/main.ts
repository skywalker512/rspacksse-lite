import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import NotFound from './pages/[...all].vue'

import './styles/main.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('~/pages/index.vue'),
    },
    {
      path: '/hi/:name',
      component: () => import('~/pages/hi/[name].vue'),
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})
app.use(router)
app.mount('#app')
