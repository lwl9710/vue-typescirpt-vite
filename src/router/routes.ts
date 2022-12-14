export default [
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/home/Home.vue"),
    meta: { title: "Home" }
  },
  {
    name: "About",
    path: "/about",
    component: () => import("@/pages/about/About.vue"),
    meta: { title: "About" }
  },
]
