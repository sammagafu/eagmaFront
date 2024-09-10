<template>
  <header class="sticky top-0 z-50 bg-black shadow-md">
    <div class="container mx-auto flex justify-center items-center">
      <router-link :to="{ name: 'home' }" class="text-xl font-bold text-gray-800">
            <img src="@/assets/eagma.svg" class="h-48" alt="EAGMA LOGO" />
          </router-link>
    </div>
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center h-16 items-center">
        <!-- <div class="flex-shrink-0">
          
        </div> -->
        <div class="hidden md:flex space-x-8 ">
          <router-link v-for="(item, index) in menuItems" :key="index" :to="item.route" 
            class="text-alternate hover:text-alternate-light font-semibold uppercase tracking-widest">
            {{ item.label }}
          </router-link>
        </div>
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link v-for="(item, index) in menuItems" :key="index" :to="item.route" 
          class="block text-gray-600 hover:text-gray-800">
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const menuItems = [
  { label: "Home", route: { name: "home" } },
  { label: "Nominees", route: {name:"nominees"} },
  { label: "Know the Artist", route: {name:"artist"} },
  { label: "Road To EAGMA", route: { name: "roadtoeagma" } },
  { label: "About EAGMA", route: { name: "about" } },
  { label: "Contact Us", route: { name: "contactus" } },
];
</script>