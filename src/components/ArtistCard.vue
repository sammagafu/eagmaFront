<template>
  <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto md:mx-0" :src="artist.photo" :alt="artist.name" width="384" height="512">
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          {{ artist.name }}
        </div>
        <div class="text-slate-700 dark:text-slate-500">
          Nominated for: {{ category.name }}
        </div>
        <div class="flex py-4">
          <ArtistProfile :slug="artist.slug"/>
          <VoteButton :category="category" :artist="artist"/>
        </div>
      </figcaption>
    </div>
  </figure>
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

</script>