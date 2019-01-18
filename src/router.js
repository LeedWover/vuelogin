import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Movies from "./views/Movies.vue";
import About from "./views/About.vue";
import login from "./views/login.vue";
import registration from "./views/registration.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/movies",
      name: "movies",
      component: Movies
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/registration",
      name: "registration",
      component: registration
    }
  ]
});
