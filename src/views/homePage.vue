<template>
  <div id="home">
    <navBar />
    <namesComponent />
  </div>
</template>

<script>
import navBar from "./components/navigationBar.vue";
import namesComponent from "./components/namesComponent.vue";
export default {
  name: "homePage",
  components: {
    navBar,
    namesComponent,
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #1a1a1a;
}
</style>
