import Vue from 'vue'
const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  },
  //监听对应的变量
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})
app.$mount('#root')

// app.text = "1234215"
let i = 0

// setInterval(() => {
//   // app.text +=1
//   i++;
//   // app.obj.a = i;
//   // app.$forceUpdate(); 保证能渲染出变化的值,强制渲染
//   app.$set(app.obj, 'a', i) //渲染值
//   app.$delete(app.obj) //删除值

// },1000)

// console.log(app.$data)
// console.log(app.$props)

// console.log(app.$el)//<div>0</div>

// console.log(app.$options)
// {
//   components: {…},
//   directives: {…},
//   filters: {…},
//   _base: ƒ,
//   template: "<div ref="div">{{text}} {{obj.a}}</div>",
//  
//    …
// }

//当vue发生下一次变化的时候才会触发的方法
// app.$options.render = (h) => { 
//   return h('div', {}, 'new render function')
// }

//$root为其根节点 树状结构 从上到下渲染
// console.log(app.$root === app)

// console.log(app.$children) 子组件

// console.log(app.$slots)
// console.log(app.$scopedSlots)

// console.log(app.$refs) 节点操作 像操作vue实例一样操作 当前节点
// console.log(app.$isServer) 是否在服务端运行

//监听
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)

// app.$on('test', (a, b) => { 全部对应事件传过来的值
//   console.log(`test emited ${1} ${b}`)
// })
// app.$once('test', (a, b) => { 只接受一次
//   console.log(`test emited ${1} ${b}`)
// })
// setInterval(() => { 发射事件
//   app.$emit('test', 1, 2)
// }, 1000)

// app.$forceUpdate()
// vue异步操作 $nextTick