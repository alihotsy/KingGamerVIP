import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/client/home/index.vue";
import Product from "../views/client/product";

// Admin
import AdminProduct from "../views/admin/product";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/productos",
    name: "Productos",
    component: Product,
  },
  {
    path: "/admin/productos",
    name: "AdminProduct",
    component: AdminProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
