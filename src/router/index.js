
import index from '../page/index'
import mysvg from './mySVG'


export let routes = [
    {                    //每一个链接都是一个对象
        path: '/',         //链接路径
        name: 'index',     //路由名称，
        component: index   //对应的组件模板
    },
    ...mysvg
]