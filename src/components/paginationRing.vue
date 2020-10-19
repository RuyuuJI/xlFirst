<template>
  <div class="paginationRing">
      <svg ref="ring" class="ring" xmlns="http://www.w3.org/2000/svg" version="1.1"
        width="150" height="150">
         <template v-for="page in pageList">
           <circle v-if="page.name !== $route.name" :key="page.name" @click="toPage(page.name)"
           class="page"
           cx="80" cy="50" r="20" stroke="black" 
           stroke-width="2"/>
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
  height: 100px;
  width: 100px;
  left: 0;
  top: 0;
  z-index: 9999;
  border: 2px solid white;
  .page{
    stroke: antiquewhite;
    fill: transparent;
    cursor: pointer;
  }
}
</style>