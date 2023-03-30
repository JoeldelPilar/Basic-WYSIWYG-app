import { createRouter, createWebHistory } from 'vue-router'
import TexteditView from '../views/TexteditView.vue'
import ResultView from '../views/ResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'textedit',
      component: TexteditView
    },
    {
      path: '/result',
      name: 'result',
      component: ResultView,
      props: true
    }
  ]
})

export default router
