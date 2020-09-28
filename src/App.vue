<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script lang="ts">
// -------------------
export default {
  name: 'app',
  created () {
      // if (!this.$route.name) this.$router.push('mysvg')
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}
#app{
    position: relative;
    display: block;
    background: #1f1f11;
    height: 100vh;
}
</style>
