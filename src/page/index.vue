<template>
  <div class="index" >
      <!-- <el-menu ></el-menu> -->
      <mouse-point ></mouse-point>
             <template v-for="(path,index) in childRoute" >
                <el-button :key="index" @click="toPage(path.name)">{{path.text || ''}}</el-button>
            </template>
      <router-view > </router-view>
  </div>
</template>

<script lang="ts">
import mousePoint from '../components/mousePoint.vue'
export default {
    name: 'index',
    components: {
      mousePoint
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