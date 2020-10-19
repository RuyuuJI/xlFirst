
import index from '../../src/page/index'
import mysvg from '../router/mySVG'
import threeDemo from './threeDemo'


export let routes = [
    {                    //每一个链接都是一个对象
        path: '/',         //链接路径
        name: 'index',     //路由名称，
        children: [ 
            mysvg,
            threeDemo
        ],
        component: index   //对应的组件模板
    },
    
]
export default {
    routes: routes
}