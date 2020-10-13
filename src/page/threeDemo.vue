<template>
    <div class="threeBirds">
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
