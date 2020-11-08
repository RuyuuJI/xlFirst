import threedemo from '@/page/threeDemo'

import threeBirds from '@/page/threeDemo/threeBirds'
import plane from '@/page/threeDemo/plane'

export let threeDemo = 
    { 
        path: '/threedemo', name: 'threedemo', component: threedemo ,
        children: [
            {
                path: 'threeBirds', name: 'threeBirds', component: threeBirds
            },
            {
                path: 'plane', name: 'Plane', component: plane
            }
        ]

    }
export default threeDemo