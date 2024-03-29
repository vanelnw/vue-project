<template>
  <div id="app">
    <router-view /> <!-- This will render the component based on the current route -->
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "./pages/HomePage.vue";
import ProductListPage from "./pages/ProductListPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  { path: "/products", component: ProductListPage },
  // Uncomment and import other routes if needed
  // { path: '/product/:id', component: ProductDetailsPage, props: true },
  // { path: '/shopping-cart', component: ShoppingCartPage },
  // { path: '/dashboard', component: DashboardPage }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default {
  name: "App",
  router
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
