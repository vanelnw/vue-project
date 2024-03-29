import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router"; // Import VueRouter here if it's not imported in App.vue

Vue.config.productionTip = false;

import "./tailwind.css";

Vue.use(VueRouter); // Make sure to use VueRouter here

// If you have separate routes configuration, import it here and create a router instance
// import routes from './router'
// const router = new VueRouter({
//   routes,
//   mode: "history",
// });

// Or if you're defining routes directly in App.vue, you don't need to create router here

new Vue({
  render: (h) => h(App),
  // router, // Uncomment this line if you have a separate router instance
}).$mount("#app");
