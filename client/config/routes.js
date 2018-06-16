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
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/login/exact',
        component: Login
    },
]