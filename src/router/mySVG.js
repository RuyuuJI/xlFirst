import mysvg from '@/page/svg/mysvg'

import wi from '@/page/svg/wi'
import pathSVG from '@/page/svg/pathSVG'
export let mySVG = [
    { 
        path: '/mysvg', name: 'mysvg', component: mysvg ,
        children: [
            {
                path: '/pathSVG', name: 'pathSVG', component: pathSVG
            },
            {
                path: '/wi', name: 'wi', component: wi
            }
        ]

    }
]
export default mySVG