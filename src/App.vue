<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNavBarVue from '@/components/TopNavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>
    <TopNavBarVue />
  </header>
  <RouterView />
  <footer>
    <Footer />
  </footer>
</template>
