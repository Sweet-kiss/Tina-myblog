import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login/login'
import BlogList from '@/components/pages/blog-list/blog-list'
import AddList from '@/components/pages/add-list/add-list'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/bloglist',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/addList',
      name: 'AddList',
      component: AddList
    }
  ]
})
