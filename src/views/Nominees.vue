<!-- YourMainTemplate.vue -->
<template>

      <section class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
      </section>
      
      <!-- Artist Cards Section -->

      <div class="pt-[20px] xl:pt-[150px] pb-[150px]">
   <div class="max-w-[1350px] mx-auto px-[15px]">
     <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-[60px]">
       <div class="xl:col-span-2">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-3">
        <ArtistCard v-for="artist in nominees" :key="artist.index" :artist="artist.artist" :category="artist.category" :award="artist.award.id"/>
      </div>
       </div>
       <div class="hidden xl:block">
         <div class="py-[30px]"></div>
         <div class="bg-gray-200 p-[30px] mb-[60px]">
                       <div class="text-[#171a1d] text-[26px] leading-[26px] font-medium mb-[40px]">Filter By Category</div>
               <div class="py-4" 
               v-for="blog in blog"
               :key="blog.index" >
                       <router-link :to="{name:''}" class="flex items-center justify-between hover:text-[#ff5100]">
                 <div class="flex items-center">
                             <div class="me-[10px]"><i class="pi pi-angle-double-right"></i></div>
                             <div class="">{{blog.name}}</div>
                          </div>
                          <div class="">{{blog.blogpost_set.length}}</div>
               </router-link>
             </div>
                    </div>
       </div>
     </div>
   </div>
 </div>

      
    <section class="py-16">
    <div class="container mx-auto">
      
      
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
  