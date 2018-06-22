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

store.registerModule('c', {
  state: {
    text: 3
  }
})
//store.registerModule('c') 解除异步加载c模块

//store watch 用方法接收一个state值，当该值发生改变时，触发第二个方法
store.watch((state) => state.count + 1, (newCount) => {
  console.log('new count watched:', newCount)
})

//当mutation被调用时，都会触发这个方法
// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

//当action被调用时，都会触发这个方法
store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})



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