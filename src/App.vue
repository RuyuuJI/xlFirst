<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script lang="ts">
export default {
  name: 'app',
  created () {
      console.log('route', this.$route)
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app{
    display: block;
    background: #1f1f11;
    height: 100%;
}
</style>
