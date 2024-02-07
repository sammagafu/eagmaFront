<template>
  <div class="bg-gray-200 rounded-xl shadow-md overflow-hidden mt-6">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" :src="artist.photo" :alt="artist.name">
      </div>
      <div class="p-8">
        <h1 class="text-2xl font-bold mb-2">{{ artist.name }}</h1>
        <p class="text-gray-500 mb-4 text-sm">Nominated for: {{ category.name }}</p>
        <div class="flex">
          <ArtistProfile :slug="artist.slug"/>
          <VoteButton :category="category" :artist="artist"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import VoteButton from './VoteButton.vue';
import ArtistProfile from './ArtistProfile.vue';
import { defineProps,onMounted } from 'vue'

const props = defineProps({
  award : Number,
  artist: Object,
  category: Object
})

onMounted(()=>{
  // console.log('category :>> ', category);
  console.log('props :>> ', props);
});
</script>