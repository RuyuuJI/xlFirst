<template>
  <div class="paginationRing">
      <svg ref="ring" xmlns="http://www.w3.org/2000/svg" version="1.1">
         <template v-for="page in pageList">
           <circle v-if="page.name !== $route.name" :key="page.name" @click="toPage(page.name)"
           class="page"
           cx="100" cy="50" r="20" stroke="black" 
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
    this.init()
  },
  methods: {
    // 初始化位置
    init () {
    },
    // 打开选择
    open (e) {
      this.move({
        x: e.x,
        y: e.y
      })
    },
    // 关闭选择
    hide () {
      console.log('hide')
    },
    move ({ x, y}) {
      let ring = this.$refs.ring
      gsap.fromTo(ring, {
        x: Number(gsap.getProperty(ring, "x")),
        y: Number(gsap.getProperty(ring, "y"))
      },
      {
        x: x,
        y: y,
        rotation: 720,
        duration: 1.5,
        ease: "power2.out"
      })
    },
    // 路由切换
    toPage(page) {
    if (page)
        this.$router.push({ name: page})
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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .page{
    stroke: antiquewhite;
    fill: transparent;
    cursor: pointer;
  }
}
</style>