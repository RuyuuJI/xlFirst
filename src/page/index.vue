<template>
  <div class="index" >
      <!-- <el-menu ></el-menu> -->
      <mouse-point ></mouse-point>
      <router-view > </router-view>
  </div>
</template>

<script lang="ts">
import mousePoint from '../utils/mousePoint.vue'
export default {
    name: 'index',
    components: {
      mousePoint
    },
    created() {
    }
}
</script>

<style>

</style>