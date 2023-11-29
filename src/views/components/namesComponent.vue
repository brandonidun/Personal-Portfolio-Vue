<template>
  <div class="home-container">
    <div class="main">
      <div class="home-text">
        <h3 ref="hi" id="hi">HI There! I am</h3>
        <h1 ref="mainName">[<span ref="idun" id="idun">Brandon Idun</span>]</h1>
        <h2 ref="software">Web Dev & UX Designer</h2>
        <h3 ref="know" id="know">to know more about me 😁</h3>
        <h4 ref="learn">
          <router-link to="/aboutMe">learn more</router-link>
        </h4>
      </div>
      <div class="profile-photo">
        <img class="photo" src="/1.jpg" alt="" />
      </div>
      <div class="social-media">
        <ul>
          <li>
            <div ref="socialIcons" class="social-icon">
              <a
                href="https://twitter.com/BrandonIdun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/svgs/twitter.svg"
                  alt=""
                  ref="twitter"
                  id="twitter"
                />
              </a>
            </div>
          </li>
          <li>
            <div ref="socialIcons" class="social-icon">
              <a
                href="https://www.instagram.com/brandonidun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/svgs/instagram.svg"
                  alt
                  ref="instagram"
                  id="instagram"
                />
              </a>
            </div>
          </li>
          <li>
            <div ref="socialIcons" class="social-icon">
              <a
                href="https://github.com/brandonidun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/svgs/github.svg" alt="" ref="github" id="github" />
              </a>
            </div>
          </li>
          <li>
            <div ref="socialIcons" class="social-icon">
              <a
                href="https://www.linkedin.com/in/brandon-idun-tawiah-462a586a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/svgs/linkedin.svg"
                  alt
                  ref="linkedin"
                  id="linkedin"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NamesComponent",
  data() {
    return {
      mainProps: {
        blank: false,
        blankColor: "#777",
        width: 200,
        height: 200,
        class: "m1",
      },
    };
  },
  mounted() {
    this.$refs.idun.style.width = 0;

    this.initiateAnimation();
  },
  methods: {
    revealText() {
      this.$refs.mainName.style.opacity = 1;
      this.$refs.mainName.classList.add("animateIn");

      if (window.innerWidth > 768) {
        // Adjust width for larger screens
        this.$refs.idun.style.width =
          this.$refs.mainName.offsetWidth + 25 + "px";
      } else {
        // Adjust width for smaller screens
        this.$refs.idun.style.width =
          this.$refs.mainName.offsetWidth - 65 + "px";
      }
    },
    animateHi() {
      this.$refs.hi.classList.add("animateIn");
    },
    animateTheRest() {
      this.$refs.software.classList.add("animateIn");
      this.$refs.know.classList.add("animateIn");
      this.$refs.learn.classList.add("animateIn");
    },
    // animateIcons() {
    //   const socialIcons = this.$refs.socialIcons;
    //   socialIcons.forEach((socialIcon) => {
    //     socialIcon.style.opacity = 1;
    //   });
    //   this.$refs.github.classList.add("fadeIn");
    //   this.$refs.twitter.classList.add("fadeIn");
    //   this.$refs.linkedIn.classList.add("fadeIn");
    // },

    animateIcons() {
      // Update this part according to your HTML structure
      // const socialIcons = document.querySelectorAll(".social-icon");
      const instagram = document.querySelector("#instagram");
      const twitter = document.querySelector("#twitter");
      const github = document.querySelector("#github");
      const linkedIn = document.querySelector("#linkedin");
      // socialIcons.forEach((socialIcon) => {
      //   socialIcon.style.opacity = 1;
      // });
      // // Update the following lines accordingly
      instagram.classList.add("fadeIn");
      github.classList.add("fadeIn");
      twitter.classList.add("fadeIn");
      linkedIn.classList.add("fadeIn");
    },

    initiateAnimation() {
      setTimeout(this.animateHi, 200);
      setTimeout(this.revealText, 600);
      setTimeout(this.animateTheRest, 1200);
      setTimeout(this.animateIcons, 1200);
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #1a1a1a; /* Dark background color */
  color: #fff; /* Light text color */
}

.main {
  display: flex;
  flex-direction: row;
  background-color: #2e2e2e; /* Darker background color */
  width: 80%;
  height: min-content;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  margin-bottom: 4em;
}

.home-text {
  margin-left: 5em;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-evenly;
}

h3 {
  font-size: 30px;
  font-weight: 200;
  color: #fff; /* Light text color */
}

h1 {
  font-size: 80px;
  font-weight: 200;
  color: #fff; /* Light text color */
  display: flex;
  align-items: center;
}

h2 {
  font-size: 40px;
  font-weight: 200;
  color: #fff; /* Light text color */
}

h4 {
  font-size: 20px;
  font-weight: 200;
  color: #fff; /* Light text color */
}

#learn {
  color: #ff6600; /* Orange color for the link */
}

a {
  text-decoration: none;
  color: #ff6600; /* Orange color for links */
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  margin-left: 2em;
  position: relative;
}

.photo {
  width: 100%;
  height: auto;
}

.social-media {
  margin-right: 5em;
}

.social-media ul {
  list-style: none;
}

.social-media li {
  margin-top: 25px;
  margin-bottom: 25px;
}

.social-icon img {
  opacity: 0;
  width: 40px;
}

.animateIn {
  animation-name: animateIn;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.fadeIn {
  animation-name: fadeIn;
  animation-timing-function: ease;
  animation-duration: 5s;
  animation-fill-mode: forwards;
}

#idun {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  transition: all 1.3s ease;
}

.home-text h1,
h2,
h4,
#hi,
#know {
  opacity: 0;
}

@keyframes animateIn {
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }
  90% {
    ocapity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    /* transform: translateX(-10%); */
  }
  100% {
    opacity: 1;
    /* transform: translateX(0%); */
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 29px;
  }

  h3 {
    font-size: 20px;
  }

  h2 {
    font-size: 20px;
  }

  h4 {
    font-size: 14px;
  }

  .profile-photo {
    width: 100px;
    height: 100px;
  }

  .social-icon img {
    width: 20px;
  }
  .social-media ul {
    display: flex;
    margin: 0px;
    padding: 0px;
    justify-content: space-evenly;
    flex-direction: row;
  }
  .main {
    flex-direction: column;
  }

  .home-text {
    justify-content: center;
    margin-left: 0%;
    height: 30vh;
  }
  .social-media {
    margin-right: 0px;
    width: 100%;
  }
}
</style>
