<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import './assets/css/style.css'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>