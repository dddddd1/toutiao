<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang='stylus'>
html,body
  height 100%
  max-width 640px
  margin 0px auto
  #app
    height 100%
</style>
