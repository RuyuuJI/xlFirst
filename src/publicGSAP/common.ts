import { gsap } from 'gsap'
import { effectConfig } from './config'
  interface fadeEffectConfig extends effectConfig {
    direction: any, // 移动方向
    moveDistance: number // 移动距离
  }
//   八向 + 距离 + 360° 消失
gsap.registerEffect({
    name: 'fade',
    defaults: {
        direction: '' || 0, // ','分割实现八个方向
        duration: 1.5,
        moveDistance: 30
    },
    effect: (targets: {x: number, y: number}[], config: fadeEffectConfig) => {
        // queryselector(targets) -> element[]
        let move = {
            x: 0,
            y: 0
        }
        if (targets && targets.length > 0) {
            move = {
                x: (targets[0].x || 0),
                y: (targets[0].y || 0)
            }
        }
        let directions = []
        if (config.direction && typeof config.direction === 'string') {
            // 方向
            directions = config.direction.split(',')
            directions.forEach(item => {
                console.log(item)
                switch (item) {
                    case 'top': 
                        move.y -= config.moveDistance
                    break;
                    case 'left': 
                        move.x -= config.moveDistance
                        break;
                    case 'right': 
                        move.x += config.moveDistance
                        break;
                    case 'bottom': 
                        move.y += config.moveDistance
                        break;
                    default: break;
                }
            })
        } else if (config.direction && typeof config.direction === 'number') {
            // 数字角度 （0 - 360)
            move.x = config.moveDistance * Math.cos((config.direction  * 2 * Math.PI)/ 360) | 0
            move.y = -config.moveDistance * Math.sin((config.direction  * 2 * Math.PI)/ 360) | 0
           
        }
        return gsap.to(targets, {
            duration: config.duration,
            opacity: 0,
            ...move 
        })
    },
    extendTimeline: true, // 在注册过后可以作用全部不timeline
})

export default gsap