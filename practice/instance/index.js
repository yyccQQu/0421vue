import Vue from 'vue'
const app = new Vue({
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
})
app.$mount('#root')
let i = 0
setInterval(() => {
  i++
  console.log(i)
}, 1000)