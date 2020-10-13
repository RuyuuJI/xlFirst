<template>
  <div class="index" >
      <!-- <el-menu ></el-menu> -->
      <mouse-point ></mouse-point>
      <pagination-ring />
      <!-- <button @click="toPage('mysvg')" >mysvg</button>
      <button @click="toPage('index')" >index</button> -->

      <router-view > </router-view>
  </div>
</template>

<script lang="ts">
import mousePoint from '../components/mousePoint.vue'
import paginationRing from '../components/paginationRing.vue'
export default {
    name: 'index',
    components: {
      mousePoint,
      paginationRing
    },
    methods: {
        toPage(page) {
            this.$router.push({ name: page})
        }
    },
    created() {
    }
}
</script>

<style>

</style>