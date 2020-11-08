<template>
    <div class="threeDemo">
        <div class="btns" >
            <template v-for="(path,index) in ThreeDemoRoute" >
                <el-button :key="index" @click="toPage(path.name)">{{path.name || ''}}</el-button>
            </template>
      </div>
      <router-view ></router-view>
    </div>
</template>
<script lang="ts">
import ThreeDemoRoute from '../router/threeDemo'
export default {
    name: 'threeDemo',
    data () {
        return {
            ThreeDemoRoute: ThreeDemoRoute.children || []
        }
    },
    mounted () {
    },
    methods: {
          toPage(page) {
            this.$router.push({ name: page})
        }
    }
}
</script>

<style lang="scss">
.threeDemo{
  position: relative;
  height: 100%;
  background: rgb(58, 56, 56);
  .btns{
      display: flex;
      width: 30px;
      border-radius: 10px;
      flex-direction: row;
      overflow: hidden;
      position: absolute;
      transition: all 1.5s ease-in-out;
      &:hover{
          width: fit-content;
      }
  }
}
</style>
