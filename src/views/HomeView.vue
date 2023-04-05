<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <login></login>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LoginComponents from '@/components/login_page.vue'


export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    'login': LoginComponents
  }
}
</script>
