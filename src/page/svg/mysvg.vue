<template>
    <div class="mysvg">
        <div class="btns" >
            <el-button @click="toPage('pathSVG')">pathSVG</el-button>
            <el-button @click="toPage('wi')">wi</el-button>

      </div>
      <router-view ></router-view>
    </div>
</template>
<script lang="ts">
import gsap from '../../publicGSAP/common'
export default {
    name: 'mysvg',
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
