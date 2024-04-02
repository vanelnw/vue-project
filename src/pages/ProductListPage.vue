<template>
    <div id="product-list">
      <div v-if="loading" class="loading-indicator">
        Loading...
      </div>
      <ul v-else  class="grid grid-cols-4 gap-5">
        <li v-for="product in products" :key="product.id">
          <ProductDetails :product="product"></ProductDetails>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import ProductDetails from '../components/Products/ProductDetails.vue';
  export default {
    components:{
            ProductDetails
        },

    data() {
      return {
        products: [],
        loading: false // Add loading state
      };
    },
    mounted() {
      this.getProducts();
    },
    methods: {
      async getProducts() {
        this.loading = true; // Set loading to true when fetching starts
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
  
          const data = await response.json();
          this.products = data;
        } catch (error) {
          console.error(error);
        } finally {
          this.loading = false; // Set loading to false when fetching completes
        }
      },

      truncateTitle(title) {
      const maxLength = 20; // Set the maximum length for the title
      if (title.length > maxLength) {
        return title.substring(0, maxLength) + '...'; // Truncate the title and add ellipsis
      } else {
        return title; // Return the title as is if it's within the limit
      }
    },
    },
  };
  </script>
  
  <style scoped>
  .loading-indicator {
    margin-top: 20px;
  }
  </style>
  