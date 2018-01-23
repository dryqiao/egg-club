import Vue from 'vue'
import Router from 'vue-router'
import topic from '../components/topic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: topic
    }
  ]
})
