
<template>
    <router-link class="text-white bg-[#C2922E] hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" :to="{ name: 'artistDetial', params: { slug }}">
      View Profile
    </router-link>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    slug: String
  })
  </script>
  