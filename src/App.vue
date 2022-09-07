<template>
  <router-link :to="{ name: 'home' }">❌</router-link>
  <router-view></router-view>
</template>

<style>
@import "./assets/scss/base.scss";
@import "./assets/scss/common.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  font-size: 30px;
  text-decoration: none;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 16px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script lang="ts" setup></script>
