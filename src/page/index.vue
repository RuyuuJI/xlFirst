<template>
  <div class="index" >
      <!-- <el-menu ></el-menu> -->
      <mouse-point ></mouse-point>
      <button @click="toPage('mysvg')" >mysvg</button>
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
    methods: {
        toPage(page) {
            this.$router.push({ name: 'mysvg'})
        }
    },
    created() {
    }
}
</script>

<style>

</style>