<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <router-link :to="{ name: 'home' }">
        <img src="@/assets/eagma.svg" class="h-24 mr-3" alt="EAGMA LOGO" />
      </router-link>
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-16 h-16 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    <div class="w-full md:block md:w-auto" id="navbar-default" :class="{ 'block': isOpen, 'hidden': !isOpen }">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="item.route" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              {{ item.label }}
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const menuItems = [
  { label: "Home", route: { name: "home" } },
  { label: "Voting", route: "#" },
  { label: "Photos & Videos", route: "#" },
  { label: "Road To EAGMA", route: { name: "roadtoeagma" } },
  { label: "About EAGMA", route: { name: "about" } },
];
</script>