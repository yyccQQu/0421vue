import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () { //最早也要把执行事件放在created
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () { //执行类似dom操作时，需要在mounted周期中执行事件
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () { // 在组件章节讲解
    console.log(this, 'activated')
  },
  deactivated () { // 在组件章节讲解
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  render (h) {
    // throw new TypeError('render error')
    console.log('render function invoked')
    return h('div', {}, this.text)
  },
  // renderError (h, err) { //当当前组件报错时执行的方法
  //   return h('div', {}, err.stack)
  // },
  errorCaptured () {//捕捉错误
    // 会向上冒泡，并且正式环境可以使用
  }
})

app.$mount('#root')
// setInterval(() => {
//   app.text = app.text += 1
// }, 1000)

// setTimeout(() => {
//   app.$destroy()
// }, 1000)
