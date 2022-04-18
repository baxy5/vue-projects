import { createRouter, createWebHistory } from "vue-router";
import FormGenerator from "../views/FormGenerator.vue";

const routes = [
  {
    path: "/form-generator",
    name: "FormGenerator",
    component: FormGenerator,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
