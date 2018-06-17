import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import './assets/styles/global.styl'

import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter()

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
  render: (h) => h(App)
}).$mount(root)