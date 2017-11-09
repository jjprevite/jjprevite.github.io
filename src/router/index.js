import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BlogPost from '@/components/BlogPost'
import Meditation from '@/components/Meditation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: BlogPost
    },
    {
      path: '/meditation',
      name: 'Meditation',
      component: Meditation
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
