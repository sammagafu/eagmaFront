
<template>
    <router-link class="text-white bg-navy hover:bg-slate-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-semibold px-4 py-4 text-center w-full uppercase" :to="{ name: 'artistDetial', params: { slug }}">
      View Profile
    </router-link>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    slug: String
  })
  </script>
  