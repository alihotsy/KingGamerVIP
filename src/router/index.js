import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/client/home/index.vue";
import Product from "../views/client/product";
import News from "../views/client/news";
import Login from "../views/auth/Login";
// Admin
import AdminProduct from "../views/admin/product";
import AdminNews from "../views/admin/news";
import AdminProfile from "../views/admin/profile";

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
    path: "/noticias",
    name: "Noticias",
    component: News,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/productos",
    name: "AdminProduct",
    component: AdminProduct,
  },
  {
    path: "/admin/noticias",
    name: "AdminNews",
    component: AdminNews,
  },
  {
    path: "/admin/perfil",
    name: "AdminProfile",
    component: AdminProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
