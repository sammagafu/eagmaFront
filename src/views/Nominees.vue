<!-- YourMainTemplate.vue -->
<template>

      <section class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
      </section>
      
      <!-- Artist Cards Section -->
      <section class="py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-3">
        <ArtistCard v-for="artist in nominees" :key="artist.index" :artist="artist.artist" :category="artist.category" :award="artist.award.id"/>
      </div>
    </div>
  </section>


  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import instance from "@/service";
  import ArtistCard from '../components/ArtistCard.vue';
  


  
  // Variables
  const nominees = ref([]);

  // Methods
  const getArtists = async () => {
      try {
          const response = await instance.get("nominees/");
          nominees.value = response.data;
          console.log(response.data)
      } catch (error) {
          console.error(error);
      }
  };
  
  // Lifecycle hook
  onMounted(() => {
      getArtists();
  });
  </script>
  