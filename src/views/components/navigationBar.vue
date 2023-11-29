<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link
          to="/"
          :class="{ 'active-link': $route.path === '/' }"
          class="router-link"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          to="/aboutMe"
          :class="{ 'active-link': $route.path === '/aboutMe' }"
          class="router-link"
          >About</router-link
        >
      </li>
      <li>
        <a
          href="https://docs.google.com/document/d/1iPGW9dLkH8iJO0ZkWKUogVNs6WAGul9nNSC5tT_ju54/edit?usp=sharing"
          >Resume</a
        >
      </li>
      <li>
        <router-link
          to="/contactMe"
          :class="{ 'active-link': $route.path === '/contactMe' }"
          class="router-link"
          >Contact Me</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scoped>
/* Shared styles for both large and small screens */
.navbar {
  color: grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Adjust to your preference */
  align-items: center; /* Align vertically in the center */
  padding: 2%;
  height: 5vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-end; /* Adjust to your preference */
  align-items: center; /* Align vertically in the center */
  width: 100%;
  list-style-type: none;
  margin-right: 10%;
}

li {
  margin-left: 7%;
  font-size: 20px;
  font-weight: 200;
  color: black;
}

a {
  text-decoration: none;
  color: orange;
}

.router-link {
  text-decoration: none;
  color: orange;
}

.active-link {
  /* Style for the active link */
  color: #ff6600; /* Example color for the active link */
  font-style: italic;
}

/* Media query for screens smaller than 768px */
@media (max-width: 768px) {
  .navbar {
    display: flex;
    flex-direction: row;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  li {
    margin-left: 0px;
    margin-bottom: 5%; /* Adjust to your preference */
  }
}
</style>
