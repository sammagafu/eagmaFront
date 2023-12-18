<script setup>
import { ref,reactive, onMounted,computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


const onSwiper = ref(null);
const onSlideChange = ref(null);

const handleSwiper = (swiperInstance) => {
  onSwiper.value = swiperInstance;
};

const handleSlideChange = () => {
  console.log('slide change');
};

</script>

<template>

  <!-- swipper starts here -->
<div class="py-8">
  <swiper
    :slides-per-view="5"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="index in 10" :key="index">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" :src="'@assets/img/nomiees/juma.jpg'" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    </swiper-slide>

  </swiper>
</div>
  <!-- swipper ends here -->

</template>