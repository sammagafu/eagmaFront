
<template>
    <router-link class="text-white bg-slate-800 hover:bg-slate-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-4 py-1 text-center dark:focus:ring-yellow-900" :to="{ name: 'artistDetial', params: { slug }}">
      View Profile
    </router-link>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    slug: String
  })
  </script>
  