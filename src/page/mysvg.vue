<template>
    <div class="mysvg">
        <div class="btns" >
            <template v-for="(path,index) in childRoute" >
                <el-button :key="index" @click="toPage(path.name)">{{path.text || ''}}</el-button>
            </template>
      </div>
      <router-view ></router-view>
    </div>
</template>
<script lang="ts">
import gsap from '../publicGSAP/common'
const childRoute = [
    {
        name: 'pathSVG',
        text: 'path动画'
    },
    {
        name: 'wi',
        text: 'gsap动画测试'
    }
]
export default {
    name: 'mysvg',
    data () {
        return {
            childRoute
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
.mysvg{
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  background: #1f1f1f;
}
</style>
