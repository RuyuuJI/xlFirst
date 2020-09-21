import index from '../page/index'
import mysvg from './mySVG'
export let routes = [
    {
        path: 'index', name: 'index', component: { index }
    },
    ...mysvg
]
export default {
    'routes': routes
}