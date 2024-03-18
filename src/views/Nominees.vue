<template>
  <!-- YourMainTemplate.vue -->
  <section class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
  </section>

  <!-- Artist Cards Section -->
  <div class="pt-[20px] xl:pt-[150px] pb-[150px]">
    <div class="max-w-[1350px] mx-auto px-[15px]">
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-[60px]">
        <div class="xl:col-span-2">
          <div class="grid grid-cols-1 gap-6">
            <ArtistCard v-for="artist in filteredNominees" :key="artist.index" :artist="artist.artist"
              :category="artist.category" :award="artist.award.id" />
          </div>
        </div>
        <div class="hidden xl:block">
          <div class="bg-gray-300 p-[30px] mb-[60px] dark:bg-slate-800 text-[#C2922E] rounded-xl">
            <div class="text-[#C2922E] text-[26px] leading-[26px] font-medium mb-[40px]">Filter By Category</div>
            <button @click="filterByCategory()" class="flex items-center justify-between hover:text-[#ff5100] py-2">
                <div class="flex items-center">
                  <div class="me-[10px]"><i class="pi pi-angle-double-right"></i></div>
                  <div>View all</div>
                </div>
              </button>
            <div class="py-2" v-for="category in categories" :key="category.id">
              <button @click="filterByCategory(category.id)" class="flex items-center justify-between hover:text-[#ff5100]">
                <div class="flex items-center">
                  <div class="me-[10px]"><i class="pi pi-angle-double-right"></i></div>
                  <div>{{ category.name }}</div>
                </div>
                <div class="mx-6">( {{ getNomineeCountByCategory(category.id) }} )</div>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <section class="py-16">
    <div class="container mx-auto"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import instance from "@/service";
import ArtistCard from '../components/ArtistCard.vue';

// Variables
const nominees = ref([]);
const categories = ref([]);
const selectedCategoryId = ref(null); // Define selectedCategoryId here

// Methods
const getArtists = async () => {
  try {
    const response = await instance.get("nominees/");
    nominees.value = response.data;
    // Extracting categories from nominees
    categories.value = [...new Set(nominees.value.map(nominee => nominee.category))];
  } catch (error) {
    console.error(error);
  }
};

const filterByCategory = (categoryId) => {
  if (categoryId === 'all') {
    selectedCategoryId.value = null; // Set selectedCategoryId to null to view all categories
  } else {
    selectedCategoryId.value = categoryId;
  }
};

const getNomineeCountByCategory = (categoryId) => {
  return nominees.value.filter(nominee => nominee.category.id === categoryId).length;
};

// Computed property to filter nominees based on selected category
const filteredNominees = computed(() => {
  if (!selectedCategoryId.value) return nominees.value;
  return nominees.value.filter(nominee => nominee.category.id === selectedCategoryId.value);
});

// Lifecycle hook
onMounted(() => {
  getArtists();
});
</script>
