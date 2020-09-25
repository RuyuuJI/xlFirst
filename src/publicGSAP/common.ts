import { gsap } from 'gsap'
import { effectConfig } from './config'
  interface fadeEffectConfig extends effectConfig {
    direction: any, // 移动方向
    moveDistance: number // 移动距离
  }
//   八项距离消失
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
            while (config.direction <= 360) {
                if (config.direction > 0 && config.direction <= 90) {
                    move.x = config.moveDistance * Math.cos(config.direction / 360)
                    move.y = config.moveDistance * Math.sin(config.direction / 360)
                } else if (config.direction > 90 && config.direction <= 180) {

                } else if (config.direction > 180 && config.direction <= 270) {

                } else if (config.direction > 270 && config.direction <= 360) {

                } else {
                    config.direction = Math.abs(config.direction) > 360
                        ? config.direction -360
                        : Math.abs(config.direction)
                }
            }
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