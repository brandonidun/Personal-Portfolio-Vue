<template>
  <div id="contactMe">
    <navBar />
    <div class="about-me-container">
      <div class="about-me-text">
        <div class="writings">
          <h1>Contact Information:</h1>
          <br />
          <p>
            Feel free to connect with me:
            <br />
            <br />
            Brandon Idun-Tawiah
            <br />
            <br />
            Phone: +233 20 030 2212
            <br />
            <br />
            Email:
            <span
              ><a href="biduntawiah@gmail.com">biduntawiah@gmail.com</a></span
            >
            <br />
            <br />
            LinkedIn:
            <span
              ><a
                href="https://www.linkedin.com/in/brandon-idun-tawiah-462a586a/"
                >brandonidun</a
              ></span
            >
            <br />
            <br />
            GitHub:
            <span
              ><a href="https://github.com/brandonidun">brandonidun</a></span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "./components/navigationBar.vue";
export default {
  name: "contactMe",
  components: {
    navBar,
  },
};
</script>

<style scoped>
#contactMe {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
}
.about-me-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about-me-text {
  display: flex;
  flex-direction: column;

  width: max-content;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  background-color: #2e2e2e; /* Darker background color */
  color: white;
  padding: 10px;
}

.writings {
  margin: 40px;
  padding: 10px;
  font-size: 18px;
  font-weight: 200;
  height: max-content;

  color: #fff; /* Light text color */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
h1 {
  font-size: 30px;
  font-weight: 100;
  color: #fff; /* Light text color */
  display: flex;
  align-items: center;
}
span {
  color: #ff6600;
}
a {
  text-decoration: none;
  color: #ff6600; /* Orange color for links */
}
</style>
