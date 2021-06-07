/*
 * @Description: 
 * @Author: panrui
 * @Date: 2021-05-21 18:02:50
 * @LastEditTime: 2021-06-07 10:44:59
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    // redirect: "/start",
    children: [{
        path: "start",
        name: "Start",
        component: () => import( /* webpackChunkName: "about" */ "../views/Start.vue"),
      },
      {
        path: "country",
        name: "Country",
        component: () => import( /* webpackChunkName: "about" */ "../views/Country.vue"),
      },
      {
        path: "select",
        name: "Select",
        component: () => import( /* webpackChunkName: "about" */ "../views/Select.vue"),
      },
      {
        path: "selectYear",
        name: "SelectYear",
        component: () => import( /* webpackChunkName: "about" */ "../views/SelectYear.vue"),
      },
      {
        path: "cityPicker",
        name: "CityPicker",
        component: () => import( /* webpackChunkName: "about" */ "../views/CityPicker.vue"),
      },
      {
        path: "wangeditor",
        name: "Wangeditor",
        component: () => import( /* webpackChunkName: "about" */ "../views/Wangeditor.vue"),
      },
      {
        path: "dateSelect",
        name: "DateSelect",
        component: () => import( /* webpackChunkName: "about" */ "../views/DateSelect.vue"),
      },
      {
        path: "upload",
        name: "Upload",
        component: () => import( /* webpackChunkName: "about" */ "../views/Upload.vue"),
      },
      {
        path: "selectcol",
        name: "SelectCol",
        component: () => import( /* webpackChunkName: "about" */ "../views/SelectCol.vue"),
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
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;