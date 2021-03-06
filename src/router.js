import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Ad from './components/Ads/Ad'
import AuthGuard from './router/auth-guard'
import NewAd from './components/Ads/NewAd'
import AdList from './components/Ads/AdList'
import Login from './components/Auth/Login'
import Registration from './components/Auth/Registration'
import Orders from './components/User/Orders'

 
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'ad',
      component: Ad,
      beforeEnter: AuthGuard
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd,
      beforeEnter: AuthGuard
    },
    {
      path: '/list',
      name: 'list',
      component: AdList,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      beforeEnter: AuthGuard
    },
  ]
})
