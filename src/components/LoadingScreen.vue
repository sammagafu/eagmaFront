<template>
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div class="spinner-border text-white" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true // Initially set to true to show the loading screen
      };
    },
    mounted() {
      // Simulate loading time for CSS and API data
      setTimeout(() => {
        this.isLoading = false; // Set isLoading to false once loading is done
      }, 2000); // Adjust the timeout value as needed
    }
  };
  </script>
  
  <style>
  /* Add any additional styling here */
  </style>
  