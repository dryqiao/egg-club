import Vue from 'vue'
import Router from 'vue-router'
import topic from '../components/topic'
import about from '../components/about'
import user from '../components/user'
import write from '../components/write'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: topic
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/write',
      name: 'write',
      component: write
    }
  ]
})
