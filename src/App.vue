<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Login></Login>
  <!-- <Register></Register> -->
  <router-view></router-view>
</template>

<script>
import Login from './view/Login.vue';
import Register from './view/Register.vue';
import Main from './view/Main.vue';

export default {
  name: 'App',
  components: {
    Login,
    Register,
    Main
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
