import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import VueRouter from 'vue-router'
import './assets/styles/global.styl'


import createRouter from './config/router'
import createStore from './store/store'



Vue.use(VueRouter)
Vue.use(Vuex)


const router = createRouter()
const store = createStore()

const root = document.createElement('div')
document.body.appendChild(root)

//路由守卫
router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })==> routerview上的props是一样的
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})





new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)