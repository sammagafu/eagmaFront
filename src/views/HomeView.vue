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
          <h2 class="text-6xl font-bold">Meet the Exceptional Nominees</h2>
          <p class="py-8">
            Step into the realm of musical excellence as we proudly present our
            extraordinary nominees. These talented individuals and groups represent the
            pinnacle of artistic achievement and dedication within the world of music.
            Handpicked for their outstanding contributions, they embody innovation,
            passion, and the spirit of musical creativity.
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
        <div v-for="index in 12" :key="index" class="bg-slate-600 py-4 rounded-2xl">
          <div class="flex items-center px-8">
            <div class="flex-shrink-0">
              <!-- <img class="w-14 h-14 rounded-full" :src="avatar" alt="Neil image" /> -->
              <svg
                width="52"
                height="96"
                viewBox="0 0 52 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_70_234)">
                  <path
                    d="M51.027 96C51.7912 95.47 52.0077 94.75 52.0001 93.8275C51.9618 89.2675 51.9822 84.7075 51.9822 80.1475C51.9822 76.75 50.217 75.0175 46.7629 75H45.8866C46.1413 70.97 44.3226 68.81 40.0279 68.975C40.4838 66.035 40.9245 63.1725 41.3754 60.31C42.6796 51.9767 43.9863 43.6508 45.2956 35.3325C46.4708 27.8325 47.6434 20.3383 48.8134 12.85C49.086 11.1 48.5893 10.5125 46.7501 10.495C32.2078 10.345 18.5111 6.895 5.61933 0.32C5.4611 0.225731 5.31114 0.118695 5.17101 0L4.02474 0C3.15102 0.5775 3.00583 1.36 3.14593 2.3575C4.10371 9.2875 5.01053 16.2225 5.93264 23.1575C6.85476 30.0925 7.77432 37.0275 8.69643 43.9625C9.17702 47.5825 9.6593 51.2042 10.1433 54.8275C10.1764 55.0775 10.2019 55.3275 10.2528 55.5775C10.4566 56.555 11.1036 57.0925 11.9468 56.995C12.8383 56.8925 13.3758 56.1675 13.2535 55.1525C13.0293 53.2925 12.7772 51.435 12.5301 49.5775C11.5434 42.1475 10.5559 34.7183 9.5676 27.29C8.64719 20.3167 7.72083 13.3475 6.78852 6.3825C6.69427 5.675 6.61022 4.965 6.50069 4.1175C18.6893 9.99622 32.0366 13.198 45.614 13.5C42.7102 32.0333 39.8122 50.52 36.9202 68.96H15.1079C14.7819 66.4925 14.4635 64.0525 14.1374 61.6125C13.9999 60.5925 13.335 59.965 12.4791 60.03C11.6232 60.095 11.0756 60.7325 11.0781 61.625C11.0795 61.8441 11.0948 62.0628 11.124 62.28C11.4059 64.385 11.6912 66.4892 11.9799 68.5925C11.9926 68.685 11.9799 68.78 11.9799 68.9975C10.3089 68.905 8.69643 69.085 7.43298 70.355C6.16954 71.625 6.03708 73.23 6.13897 75.0025C5.54291 75.0025 5.01308 74.9875 4.48325 75.0025C3.30694 75.0251 2.18557 75.4953 1.35577 76.3139C0.525974 77.1325 0.0526619 78.2354 0.0357094 79.39C-0.00504684 84.3575 -0.00759506 89.3275 0.0637321 94.295C0.0637321 94.8675 0.657246 95.4325 0.975655 96H51.027ZM3.06951 92.9575V80.1025C3.06951 78.45 3.53057 78 5.22705 78H31.3952C31.713 78.0206 32.0322 78.0097 32.3478 77.9675C33.163 77.795 33.6444 77.2825 33.6215 76.4525C33.5986 75.67 33.1248 75.185 32.3478 75.0325C32.0321 74.9915 31.7131 74.9807 31.3952 75H9.28231C8.97154 72.9825 9.21862 71.955 11.743 71.9725C21.1984 72.04 30.6539 72 40.1094 72C40.522 72 40.9398 71.975 41.3499 72.0125C42.188 72.09 42.6974 72.56 42.7891 73.38C42.8187 73.9196 42.8187 74.4604 42.7891 75C41.3219 75 39.9591 75 38.5938 75C37.3914 75 36.6935 75.565 36.696 76.5C36.6986 77.435 37.3991 78 38.6039 78C41.3728 78 44.1417 78 46.9131 78C48.4084 78 48.9128 78.5 48.9128 79.97C48.9128 84.03 48.9128 88.0908 48.9128 92.1525C48.9128 92.4225 48.8771 92.69 48.8593 92.955L3.06951 92.9575Z"
                    fill="#D9B59D"
                  />
                  <path
                    d="M33.4584 35.75C33.1833 34.1875 32.8471 32.47 32.6051 30.75C32.567 30.3151 32.7052 29.883 32.9897 29.5475C34.1054 28.3925 35.2823 27.2975 36.4642 26.2025C36.994 25.7025 37.2819 25.1575 37.0704 24.4525C36.859 23.7475 36.2706 23.4525 35.5574 23.37C33.95 23.155 32.3402 22.9575 30.7481 22.665C30.3117 22.566 29.9321 22.303 29.691 21.9325C28.9268 20.5675 28.2441 19.1575 27.5615 17.75C27.2329 17.075 26.7693 16.6 25.9745 16.6075C25.1798 16.615 24.7315 17.1075 24.4054 17.7825C23.7508 19.1325 23.0273 20.455 22.4007 21.8175C22.3022 22.0739 22.1288 22.296 21.9022 22.4561C21.6757 22.6162 21.406 22.7071 21.1271 22.7175C19.5172 22.905 17.9048 23.1075 16.3204 23.4375C15.8109 23.5425 15.1308 23.9925 15.0085 24.4175C14.959 24.7093 14.9741 25.0082 15.0527 25.2938C15.1314 25.5794 15.2719 25.845 15.4645 26.0725C16.5878 27.3 17.8717 28.3875 19.0307 29.5725C19.1652 29.7257 19.2674 29.9036 19.3313 30.0958C19.3951 30.2881 19.4193 30.4909 19.4026 30.6925C19.1835 32.265 18.8676 33.8275 18.59 35.395C18.4652 36.11 18.5085 36.7775 19.186 37.2375C19.8229 37.665 20.4368 37.515 21.0685 37.18C22.4364 36.4525 23.8374 35.7775 25.1951 35.0325C25.7478 34.73 26.1834 34.685 26.7642 35.0125C28.1983 35.815 29.6706 36.5575 31.148 37.28C32.3402 37.855 33.4737 37.1625 33.4584 35.75ZM25.9949 21.415C26.5044 22.43 26.9705 23.24 27.3348 24.09C27.4884 24.5019 27.7651 24.8587 28.1287 25.1139C28.4922 25.369 28.9258 25.5105 29.3726 25.52C30.3074 25.6 31.2295 25.77 32.279 25.935C31.4512 26.7575 30.7354 27.495 29.9865 28.2025C29.7189 28.4238 29.5195 28.7139 29.4106 29.0402C29.3018 29.3666 29.2877 29.7163 29.37 30.05C29.5815 31.05 29.7114 32.0675 29.9024 33.2475C28.8555 32.71 27.9487 32.2775 27.075 31.79C26.7505 31.5903 26.3753 31.4844 25.9924 31.4844C25.6094 31.4844 25.2342 31.5903 24.9098 31.79C24.0361 32.2625 23.1267 32.6975 22.1078 33.2275C22.2963 32.0675 22.4134 31.0775 22.6172 30.11C22.713 29.7627 22.7037 29.3956 22.5907 29.0534C22.4776 28.7112 22.2656 28.4086 21.9804 28.1825C21.2162 27.4975 20.4775 26.7875 19.5758 25.95C20.8138 25.7725 21.7766 25.61 22.7471 25.5025C23.6132 25.4075 24.222 25.0375 24.5837 24.2325C24.9836 23.34 25.4498 22.5 25.9949 21.405V21.415Z"
                    fill="#C2922E"
                  />
                  <path
                    d="M26.0586 48C28.4479 48 30.8356 48 33.2215 48C34.4417 48 35.1371 47.465 35.16 46.535C35.1829 45.605 34.4671 45.005 33.1986 45.005C28.3893 45.005 23.5809 45.005 18.7734 45.005C17.5532 45.005 16.8578 45.5375 16.8349 46.4675C16.812 47.3975 17.5354 48 18.7989 48C21.2188 48 23.6387 48 26.0586 48Z"
                    fill="white"
                  />
                  <path
                    d="M25.9974 54C27.429 54 28.8631 54 30.2947 54C31.4206 54 32.1033 53.4125 32.1033 52.5C32.1033 51.5875 31.4257 51 30.2972 51C27.4307 51 24.565 51 21.7002 51C20.5769 51 19.8916 51.5875 19.8916 52.5C19.8916 53.4125 20.5794 54 21.7002 54C23.1318 54 24.5659 54 25.9974 54Z"
                    fill="white"
                  />
                  <path
                    d="M25.9389 87C28.965 87 31.9886 87 35.0148 87C36.0464 87 36.7113 86.3525 36.6883 85.47C36.6654 84.5875 36.0235 84.0525 35.0352 84.01C34.9409 84.01 34.8441 84.01 34.7499 84.01C28.9217 84.01 23.0944 84.01 17.2679 84.01C15.9943 84.01 15.2811 84.5825 15.3065 85.5425C15.332 86.5025 16.0274 87.005 17.2476 87.005C20.143 87.0017 23.0401 87 25.9389 87Z"
                    fill="#C2922E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_70_234">
                    <rect
                      width="52"
                      height="96"
                      fill="white"
                      transform="matrix(-1 0 0 1 52 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-xl font-medium text-amber-100 dark:text-amber-100">
                Music Category Name
              </p>
            </div>
            <!--  -->
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
