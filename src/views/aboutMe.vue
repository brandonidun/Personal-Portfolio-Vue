<template>
  <div id="aboutMe">
    <navBar />
    <br />
    <aboutMeComponent />
  </div>
</template>

<script>
import aboutMeComponent from "./components/aboutMeComponent.vue";
import navBar from "./components/navigationBar.vue";
export default {
  name: "aboutMe",
  components: {
    navBar,
    aboutMeComponent,
  },
};
</script>

<style scoped>
#aboutMe {
  height: 200vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
}
</style>
