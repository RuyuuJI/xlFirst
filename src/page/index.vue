<template>
  <div class="index" >
      index
      <router-view > </router-view>
  </div>
</template>

<script lang="ts">
export default {
    name: 'index',
    created() {
        console.log(this.$route)
    }
}
</script>

<style>

</style>