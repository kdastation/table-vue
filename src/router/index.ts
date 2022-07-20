import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/home-view.vue";
import WorkerView from "@/views/worker-view.vue";
import { RoutesPathNames } from "@/router/routes-path-names";

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutesPathNames.HOME_VIEW,
    name: "home",
    component: HomeView,
  },
  {
    path: RoutesPathNames.WORKER_VIEW,
    name: "worker",
    component: WorkerView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
