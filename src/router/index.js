import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
