<template>
  <div class="index" >
      <mouse-point @open="openRing" @hide="hideRing"></mouse-point>
        <!-- <template v-for="(path,index) in childRoute" >
        <el-button :key="index" @click="toPage(path.name)">{{path.text || ''}}</el-button>
        </template> -->
      <pagination-ring ref="Ring"/>
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
    
        // 打开选择路由
        openRing (e) {
            this.$refs.Ring.open(e)
        },
        // 关闭路由
        hideRing () {
            this.$refs.Ring.hide()
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