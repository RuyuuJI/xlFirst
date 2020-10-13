import threedemo from '@/page/threeDemo'

import threeBirds from '@/page/threeDemo/threeBirds'

export let threeDemo = 
    { 
        path: '/threedemo', name: 'threedemo', component: threedemo ,
        children: [
            {
                path: 'threeBirds', name: 'threeBirds', component: threeBirds
            }
        ]

    }
export default threeDemo