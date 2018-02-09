<template>
  <div id="app">
    <Header></Header>  
    <header1></header1>
    <!-- <indexList></indexList> -->
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import header1 from '@/components/header1/header1'
import indexList from '@/components/indexList/indexList'
export default {
  name: 'App',
  components:{
    Header,
    header1,
    indexList
  },
}
</script>

<style>

</style>
