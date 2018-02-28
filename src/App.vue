<template>
  <div id="app">
      <!-- <test></test> -->
    <router-view/>
  </div>
</template>

<script>
import test from '@/components/test'

export default {
  name: 'App',
   components: {
      test
    },
}
</script>

<style>

</style>
