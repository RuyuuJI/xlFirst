<template>
  <div class="pathSVG">
     <svg  version="1.1" x="0" y="0"  xml:space="preserve"
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 
        <g >
            <path class="arc" ref="arc"
                d="M100,300 l 50,-25 
           a25,25 1 0,0 50,-25 l 50,-25 
           a25,50 -30 0,1 50,-25 l 50,-25 
           a25,75 -30 1,1 50,-25 l 50,-25 
           a25,100 -30 0,1 50,-25 l 50,-25">

            </path>
        </g>
        <g ref="pie" class="pie">
             <path d="M300,200 h-150 a150,150 10 1,0 150,-150 z"
                    class="pie small"  />
            <path d="M275,175 v-150 a150,150 0 0,0 -150,150 z"
                      class="pie big"   />
        </g>
        <g ref="doubleArc" class="doubleArc">
            <path d="M80 80
           A 45 45, 0, 0, 1, 125 125
           L 125 80" fill="green"/>
                <path d="M230 80
           A 45 45, 0, 1, 0, 275 125
           L 275 80 Z" fill="red"/>
                <path d="M80 230
           A 45 45, 0, 0, 1, 125 275
           L 125 230 Z" fill="purple"/>
                <path d="M230 230
           A 45 45, 0, 1, 1, 275 275
           L 275 230 Z" fill="blue"/>
        </g>
     </svg>
  </div>
</template>

<script>
import gsap from '../../publicGSAP/common'

export default {
    name: 'pathSVG',
    mounted () {
        this.change()
    },
    methods: {
        change () {
            console.dir(this.$refs.pie)
            gsap.to([this.$refs.pie], {
                y:300,
                duration: 1
            })
             gsap.to([this.$refs.doubleArc], {
                x:500,
                duration: 1
            })
        }
    }
}
</script>

<style lang="scss">
.pathSVG{
    display: block;
    flex: 1;
    .arc{
        fill: rgb(70, 121, 167);
        stroke: aquamarine;
        stroke-width: 5px;

        // 结束线段
        stroke-linecap: round;
        // 两边相交
        stroke-linejoin: round;
        // 虚线数组
         stroke-dasharray: 10,50 20,10, 50,10;
    }
    .pie{
        fill: sandybrown;
        .small{
            stroke:rosybrown;
            stroke-width: 3px;
        }
        .big{
             stroke:rgb(194, 84, 84);
            stroke-width: 5px;
        }
    }
}
</style>