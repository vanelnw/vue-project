import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './pages/HomePage.vue'
import ProductListPage from './pages/ProductListPage.vue'

Vue.config.productionTip = false

import './tailwind.css'


const routes = [
  { path: '/', component: HomePage },
  { path: '/product-list', component: ProductListPage },
  // { path: '/product/:id', component: ProductDetailsPage, props: true },
  // { path: '/shopping-cart', component: ShoppingCartPage },
  // { path: '/dashboard', component: DashboardPage }
]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
