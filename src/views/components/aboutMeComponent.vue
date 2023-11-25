<template>
  <div class="about-me-container">
    <div class="about-me-text">
      <div class="writings">
        <h1>About Me</h1>
        <p>
          As an aspiring professional in Electrical/Electronic Engineering with
          a focused interest in
          <span>Human-Computer Interaction and cutting-edge technologies,</span>
          I bring a breadth of skills and experiences in software development
          and innovative research.
          <br />
          <br />
          <span>Education:</span>
          <br />
          <br />
          I completed my
          <span>BSc. in Electrical/Electronic Engineering</span> with First
          Class Honors at
          <span>Kwame Nkrumah University of Science and Technology</span> .
          Achieving a <span>GPA of 3.74</span>, I honed my expertise in
          <span>programming, database systems, and machine learning.</span>
          <br />
          <br />
          <span>Technical Expertise:</span>
          <br />
          <br />
          Proficient in <span>TypeScript/JavaScript, Python, and C/C++</span>,
          I've applied these skills to create intuitive interfaces and dynamic
          user experiences. Frameworks like <span>React and Vue </span> have
          been integral to my projects, including microprocessor design, game
          development, and dynamic server-side components using
          <span>NodeJS and Laravel</span> .
          <br />
          <br />
          <span>Professional Experience:</span>
          <br />
          <br />
          During my internship at <span>Sourcertz Technologies Ghana</span>, I
          contributed to dynamic UX/UI creations using Vue, designed and managed
          relational databases, and actively engaged in server-side development
          using Laravel.
          <br />
          <br />
          <span>Key Skills:</span>
          <br />
          <br />
          My technical arsenal includes expertise in
          <span>MongoDB, MySQL, Git,</span> and various frameworks such as
          <span> React, Vue, NodeJS, and Laravel</span>
          .
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutMeComponent",
  components: {},
};
</script>

<style scoped>
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

  width: 90%;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  background-color: #2e2e2e; /* Darker background color */
  color: white;
  padding: 10px;
}

.writings {
  margin: 10px;
  padding: 10px;
  font-size: 18px;
  font-weight: 200;
  height: min-content;

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
</style>
