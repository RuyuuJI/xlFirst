<template>
    <div class="threeDemo">
        <div class="btns" >
            <template v-for="(path,index) in childRoute" >
                <el-button :key="index" @click="toPage(path.name)">{{path.text || ''}}</el-button>
            </template>
      </div>
      <router-view ></router-view>
    </div>
</template>
<script lang="ts">
const childRoute = [
    {
        name: 'threeBirds',
        text: '三只鸟'
    }
]
export default {
    name: 'threeDemo',
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
.threeDemo{
  position: relative;
  height: 100%;
  background: rgb(58, 56, 56);
  .btns{
      position: absolute;
  }
}
</style>
