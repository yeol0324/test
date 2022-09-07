import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/test",
    name: "test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestView.vue"),
  },
  {
    path: "/pageOne",
    name: "pageOne",
    component: () => import("../views/PageOne.vue"),
    children: [
      {
        path: "pageOne1",
        name: "pageOne1",
        component: () => import("../views/PageOne1.vue"),
      },
      {
        path: "pageOne2",
        name: "pageOne2",
        component: () => import("../views/PageOne2.vue"),
      },
      {
        path: "pageOne3",
        name: "pageOne3",
        component: () => import("../views/PageOne3.vue"),
      },
    ],
  },
  {
    path: "/pageTwo",
    name: "pageTwo",
    component: () => import("../views/PageTwo.vue"),
  },
  {
    path: "/pageThree",
    name: "pageThree",
    component: () => import("../views/PageThree.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
