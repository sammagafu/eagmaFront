<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNavBarVue from '@/components/TopNavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header class="font-serif">
    <TopNavBarVue />
  </header>
  <RouterView />
  <footer class="font-serif">
    <Footer />
  </footer>
</template>
