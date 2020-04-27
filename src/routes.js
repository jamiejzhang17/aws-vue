import Vue from 'vue'
import Router from 'vue-router'
import Research from './components/Research'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/research',
      name: 'research',
      component: Research
    },
  ]
})