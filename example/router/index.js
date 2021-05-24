/*
 * @Description: 
 * @Author: panrui
 * @Date: 2021-05-21 18:02:50
 * @LastEditTime: 2021-05-24 15:36:33
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: 'country',
        name: 'Country',
        component: () => import(/* webpackChunkName: "about" */ "../views/Country.vue"),
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
