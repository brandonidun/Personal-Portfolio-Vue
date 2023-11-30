<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  background-color: #2e2e2e;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
