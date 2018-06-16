import Router from 'vue-router'

import routes from './routes'

export default () => {
    return new Router({
        routes,
        mode: 'history',
        base: '/base/',
        linkActiveClass: 'active-link',
        linkExactActiveClass: 'exact-active-link',
        scrollBehavior(to, from, savedPosition) { //保持浏览页面的已滚动高度
            if (savedPosition) {
                return savedPosition
            } else {
                return {
                    x: 0,
                    y: 0
                }
            }
        },
        fallback: true //是否支持哈希导航 true为自动处理 
        // parseQuery (query) { ？后面的字符串转 json对象

        // },
        // stringifyQuery (obj) { 将对象转为 字符串

        // }
    })
}
