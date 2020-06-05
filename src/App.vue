<template>
  <div id="app">
    <router-view/>
    <main-tab-bar class="main-tab-bar"/>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/normalize.css";
  .main-tab-bar {
    z-index: 9;
  }
</style>
