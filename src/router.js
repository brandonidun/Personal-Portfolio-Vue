// router.js

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import HomePage from "./views/homePage.vue";
import AboutMe from "./views/aboutMe.vue";
import ResuMe from "./views/resuMe.vue";
import ContactMe from "./views/contactMe.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/",
    component: App,
    children: [
      { path: "aboutMe", component: AboutMe },
      { path: "resuMe", component: ResuMe },
      { path: "contactMe", component: ContactMe },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
