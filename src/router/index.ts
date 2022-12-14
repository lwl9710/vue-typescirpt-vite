import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/router/routes";

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => savedPosition ? savedPosition : { left: 0, top: 0 }
});

export default router;
