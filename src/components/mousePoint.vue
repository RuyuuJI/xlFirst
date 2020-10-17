<template>
  <div ref="mousePoint" class="mousePoint" @click.prevent=""></div>
</template>

<script lang="ts">
import gsap from 'gsap'
export default {
    name: 'mouse-point',
    data () {
        return {
            state: 'hide', // hide/open 
            speed: 0.1 // 0 - 1
        }
    },
    mounted () {
        this.init()
        this.initClick()
    },
    methods: {
        // 初始化设置
        init () {
            let ball = document.querySelector('.mousePoint')
            gsap.set('.mousePoint', {
                xPercent: -50,
                yPercent: -50
            })
            let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // 球位置
            let mouse = { x: pos.x, y: pos.y }; // 鼠标位置
            let speed = this.speed;
            window.addEventListener("mousemove", e => {    
                mouse.x = e.x;
                mouse.y = e.y;  
            });
            let xSet = gsap.quickSetter(ball, "x", "px");
            let ySet = gsap.quickSetter(ball, "y", "px");
            gsap.ticker.add(() => {
                let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
            
                pos.x += (mouse.x - pos.x) * dt;
                pos.y += (mouse.y - pos.y) * dt;
                xSet(pos.x);
                ySet(pos.y);
            });
        },
        // 右键点击
        initClick () {
            let that = this
            document.oncontextmenu = (e) => {
                e.preventDefault()
                // hide the selector
       
                if (that.state !== 'open') {
                    let hide = () => {
                        if (that.state === 'hide') return
                        that.state = 'hide'
                        this.$emit('hide')
                        document.removeEventListener('click', hide)
                }
                    document.addEventListener('click', hide)
                }
                that.state = 'open'
                // open the selector
                this.$emit('open', e)
            }
        }
    },
}
</script>

<style>
.mousePoint{
    width: 30px;
    height: 30px;
    position: fixed;
    top: 0;
    left: 0;
    border: 3px solid rgb(77, 156, 235);
    border-radius: 50%;
    z-index: 9999;
    pointer-events: none;
}
</style>