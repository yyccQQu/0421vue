import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app/:id', // /app/xxx
        // path: '/app',
        props: true,
        // props: (route) => ({ id: route.query.b }),解耦,组件复用率更高
        component: Todo,
        // components: { 路由命名
        //     default: Todo,
        //     a: Login
        // },
        //路由懒加载
        //  component: () =>
        //      import ( /* webpackChunkName: "todo-view" */ '../views/todo/todo.vue'),


        name: 'app',
        meta: {
            title: 'this is app',
            description: 'asdasd'
        },
        children: [
          {
            path: 'test',
            component: Login
          }
        ],
        //进入该路由之前的钩子
        beforeEnter(to, from, next) {
            console.log('app route before enter')
            next()
        }
    },
    {
        path: '/login',
        component: Login
        // component: () =>
        //     import (/*webpackChunkName: "login-view"*/ '../views/login/login.vue'),

    },
    {
        path: '/login/exact',
        component: Login
    },
]