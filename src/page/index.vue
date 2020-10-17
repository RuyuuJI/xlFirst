<template>
  <div class="index" >
      <mouse-point ></mouse-point>
        <template v-for="(path,index) in childRoute" >
            <el-button :key="index" @click="toPage(path.name)">{{path.text || ''}}</el-button>
        </template>
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
    data () {
        return {
            childRoute: []
        }
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

<style scoped lang="scss">
.index{
    position: relative;
    display: block;
    height: 100vh;
    width: 100vw;
}
</style>