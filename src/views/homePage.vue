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
  justify-content: space-between;
  background-color: #1a1a1a;
}
@media (max-width: 768px) {
  #home {
    height: 100vh;
  }
}
</style>
