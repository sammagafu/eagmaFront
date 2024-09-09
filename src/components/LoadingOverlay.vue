<!-- components/LoadingOverlay.vue -->
<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" v-show="isLoading">
      <div class="text-white text-lg font-semibold">
        Loading...
        <svg class="animate-spin ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.314 1.343 6.315 3.514 8.485l2.486-2.194z"></path>
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isLoading: Boolean
    }
  }
  </script>
  
  <style scoped>
  /* Scoped styles for the loading component */
  </style>
  