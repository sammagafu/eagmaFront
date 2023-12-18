<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// images
import imgUrl from "@/assets/img/artist.jpg";
import avatar from "@/assets/img/avatar-1.jpg";
import sliderImgUrl from "@/assets/img/banner/slider-1.jpg";

import "swiper/css";
import "swiper/css/navigation";

const modules = [Autoplay, Pagination, Navigation];

const onSwiper = ref(null);
const onSlideChange = ref(null);

const handleSwiper = (swiperInstance) => {
  onSwiper.value = swiperInstance;
};

const handleSlideChange = () => {
  console.log("slide change");
};
</script>

<template>
  <!-- Jumbotron -->
  <section
    class="py-36 md:py-80 w-full table relative bg-slider-img bg-center bg-cover"
    :style="{ 'background-image': `url(${sliderImgUrl})` }"
    style="z-index: 0"
  >
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div class="container mx-auto relative">
      <div class="grid grid-cols-1 text-center">
        <h4
          class="text-yellow-500 lg:text-5xl text-4xl lg:leading-normal leading-normal font-bold mb-7 position-relative"
        >
          Celebrating, Nurturing, and Empowering <br />
          Musical Talents
        </h4>
        <p class="text-white mb-0 max-w-6xl text-lg mx-auto">
          Welcome to our vibrant platform dedicated to celebrating and elevating the
          exceptional musical talent of East Africa. Through our innovative academy, we're
          committed to nurturing the creativity of young talents, offering a
          transformative space where voices are not just heard but celebrated, paving the
          way for positive societal change. Join us on this inspiring journey of creative
          expression, empowerment, and impactful transformation
        </p>
      </div>
    </div>
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <a href="#nominees">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-white animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path></svg
      ></a>
    </div>
  </section>

  <!-- swipper starts here -->
  <section id="nominees">
    <div class="container mx-auto py-48">
      <div class="grid grid-cols-12 gap-4">
        <div class="intro col-span-4 mx-8">
          <h2 class="text-6xl font-bold">Meet the Nominees</h2>
          <p class="py-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aspernatur a
            sequi, aliquid veritatis quasi magnam nulla aperiam illo ratione placeat
            nostrum rem quas nam recusandae eius adipisci consequatur neque!
          </p>
        </div>
        <div class="col-span-8">
          <swiper
            :slides-per-view="3"
            :space-between="5"
            :navigation="true"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="index in 10" :key="index">
              <div class="relative">
                <img class="rounded" :src="imgUrl" alt="Product Image" />
                <div
                  class="absolute inset-0 flex flex-col bg-gradient-to-b from-transparent to-black rounded-3"
                >
                  <div class="flex-grow flex flex-col justify-end p-3 text-center">
                    <h4 class="text-white font-bold">Artist Name</h4>
                    <p class="text-white text-opacity-85">Best Artist of the year</p>
                    <div class="py-4 mx-auto">
                      <a
                        href="#"
                        class="text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                        >View Profile</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>

  <section class="category bg-slate-800 py-14">
    <div class="container mx-auto">
      <div class="lg:col-span-7 text-center">
        <!-- <h6 class="text-white uppercase">categories</h6> -->
        <h2 class="text-4xl text-amber-100 uppercase">Award categories</h2>
        <p class="mb-0 max-w-6xl text-lg mx-auto py-4 text-amber-100">
          Each category embodies a unique facet of musical brilliance, from emerging
          talents to collaborative innovations and societal impact. Explore these
          categories to celebrate the boundless creativity shaping our musical world.
        </p>
      </div>
    </div>
    <div class="container mx-auto py-14">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="index in 24" :key="index" class="bg-slate-600 py-4 rounded-2xl">
          <div class="flex items-center px-8">
            <div class="flex-shrink-0">
              <img class="w-14 h-14 rounded-full" :src="avatar" alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                Neil Sims
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                email@windster.com
              </p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >
              $320
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- swipper ends here -->
</template>

<style>
/* Your custom styles here */
/* You can customize the scaling transition and other styles */
.swiper-slide {
  transition: transform 0.3s ease;
  /* Example transition */
}
</style>
