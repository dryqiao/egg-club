<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header'
export default {
  name: 'App',
  components:{
    'v-header' : header
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
