<template>
  <div class="paginationRing">
      <svg ref="ring" class="ring" xmlns="http://www.w3.org/2000/svg" version="1.1"
        >
        <defs > 
          <filter id="shodowLight" width="200%" height="200%">
            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"/>
            <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
            <feGaussianBlur stdDeviation="1"/>
          </filter>
        </defs>
         <template v-for="page in pageList">
           <circle v-if="page.name !== $route.name" :key="page.name" @click="toPage(page.name)"
           class="page"
           cx="80" cy="50" r="20" stroke="black" stroke-width="3"
           filter="url(#shodowLight)"/>
         </template>
      </svg>
 
  </div>
</template>

<script lang="ts">
import gsap from 'gsap'

import { routes } from '../router/index'
export default {
  name: 'pagination-ring',
  data () {
    return {
      pageList: routes[0].children || []
    }
  },
  created () {
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
      let num = this.pageList.length 
      // let r = 0
    },
    // 打开选择
    open (e) {
      let ring = this.$refs.ring
      gsap.to(ring, {
        autoAlpha: 1
      })
      this.move({
        x: e.x,
        y: e.y
      })
    },
    // 关闭选择
    hide () {
      let ring = this.$refs.ring
      gsap.to(ring, {
        autoAlpha: 0
      })
    },
    move ({ x, y}) {
      let ring = this.$refs.ring
      gsap.fromTo(ring, {
        x: gsap.getProperty(ring, "x"),
        y: gsap.getProperty(ring, "y")
      },
      {
        x: x,
        y: y,
        rotation: (gsap.getProperty(ring, "rotation") > 0 ? -360 : 360),
        duration: 1.5,
        ease: "power2.out"
      })
    },
    // 路由切换
    toPage(page) {
    if (page)
        this.$router.push({ name: page})
        this.hide()
    },
  }
}
</script>

<style lang="scss">
.paginationRing{
  position: fixed;
  display: block;
  height: 0;
  width: 0;
  left: 0;
  top: 0;
  z-index: 9999;
  .ring{
    display: block;
    width: fit-content;
    height: fit-content;
    pointer-events: none;
    .page{
    stroke: rgb(175, 166, 153);
    fill: transparent;
    cursor: pointer;
    transition: all .5s linear;
    pointer-events: all;
    &:hover{
      stroke: aliceblue;
    }
  }
  }
  
}
</style>