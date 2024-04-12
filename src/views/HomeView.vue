<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import VueWriter from "vue-writer";
import instance from "@/service";


// images
import sliderImgUrl from "@/assets/img/banner/slider-1.jpg";

// css
import "swiper/css";
import "swiper/css/navigation";

const modules = [Autoplay, Pagination, Navigation, EffectFade];

const onSwiper = ref(null);
const onSlideChange = ref(null);
const textSlider = ref([
  'Celebrating', 'Nurturing', 'Empowering'
])

const handleSwiper = (swiperInstance) => {
  onSwiper.value = swiperInstance;
};

const award = ref()
const categories = ref([])
const blog = ref([])
const nominees = ref([])

const handleSlideChange = () => {
  console.log("slide change");
};

const getCategories = function () {
  instance.get("awards/active/")
    .then(async (response) => {
      console.log(response.data);
      award.value = await response.data;
      categories.value = response.data.map(award => award.categories).flat();
    })
    .catch(error => {
      console.log(error);
    });
};

const getNews = function () {
  instance.get("blog/latest/")
    .then(async (response) => {
      console.log(response.data);
      blog.value = await response.data;
      // categories.value = response.data.map(award => award.categories).flat();
    })
    .catch(error => {
      console.log(error);
    });
};

const getNominees = function () {
  instance.get("nominees/")
    .then(async (response) => {
      console.log(response.data);
      nominees.value = await response.data;
      // categories.value = response.data.map(award => award.categories).flat();
    })
    .catch(error => {
      console.log(error);
    });
};

onMounted(() => {
  getCategories()
  getNews()
  getNominees()
})


</script>

<template>
  <!-- Jumbotron -->
  <section class="py-36 lg:py-48 w-full table relative bg-slider-img bg-center bg-cover"
    :style="{ 'background-image': `url(${sliderImgUrl})` }" style="z-index: 0">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="container mx-auto relative">
      <div class="grid grid-cols-1 text-center">
        <div
          class="text-[#C2922E] lg:text-5xl text-4xl lg:leading-normal leading-normal font-bold mb-7 position-relative">
          <VueWriter :array="textSlider" :eraseSpeed="20" :typeSpeed="100" :delay="1000" /> Musical Talents
        </div>

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
    <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2">
    <router-link :to="{name:'nominees'}">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#C2922E] animate-bounce" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </router-link>
    </div>
  </section>

  <!-- swipper starts here -->
  <section class="py-12 lg:py-48 bg-slate-800">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-3">
        <div class="relative w-full lg:w-1/4 mb-8 lg:mb-0 text-center lg:text-left">
          <div class="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
            <h2 class="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
              data-wow-delay=".3s">
              Meet the
              <span class="text-[#C2922E]">Nominees</span>
            </h2>
            <p class="text-xs md:text-base text-[#C2922E] leading-loose wow animate__animated animate__fadeIn"
              data-wow-delay=".9s">
              These talented individuals and groups represent the pinnacle of artistic
              achievement and dedication within the world of music. Handpicked for their
              outstanding contributions, they embody innovation, passion, and the spirit
              of musical creativity.
            </p>
            <router-link :to="{name:'nominees'}" class="inline-flex items-center justify-center p-5 my-6 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-[#C2922E] dark:hover:text-white">
              <span class="w-full">View More Nominees</span>
              <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </router-link>

          </div>
        </div>
        <div class="w-full lg:w-3/4 flex flex-wrap">
          <div class="relative w-full">
            <div class="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
              <swiper :slides-per-view="3" :space-between="12" :navigation="true" :modules="modules"
                :breakpoints="{ 390: { slidesPerView: 1 }, 1024: { slidesPerView: 3 } }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide v-for="nomii in nominees" :key="nomii.index">
                  <div class="relative">
                    <img class="rounded-lg drop-shadow-sm" :src="nomii.artist.photo" alt="Product Image" />
                    <div class="absolute inset-0 flex flex-col bg-gradient-to-b from-transparent to-black rounded-3">
                      <div class="flex-grow flex flex-col justify-end p-3 text-center">
                        <h4 class="text-white font-bold">{{ nomii.artist.name }}</h4>
                        <p class="text-white text-opacity-85">{{ nomii.category.name }}</p>
                        <div class="py-4 mx-auto">
                          <router-link
                            class="text-white bg-[#C2922E] hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                            :to="{ name: 'artistDetial', params: { slug: nomii.artist.slug } }">View Profile</router-link>
                          <!-- <a
                            href="#"
                            class="text-white bg-[#C2922E] hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                            >View Profile</a
                          > -->
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- swipper ends here -->

  <section class="category bg-slate-800 py-24">
    <div class="container mx-auto">
      <div class="col-span-7">
        <!-- <h6 class="text-white uppercase">categories</h6> -->
        <h2 class="text-6xl font-bold text-[#C2922E] pb-12">Award categories</h2>
        <p class="max-w-6xl text-lg py-4 text-[#C2922E]">
          Each category embodies a unique facet of musical brilliance, from emerging
          talents to collaborative innovations and societal impact. Explore these
          categories to celebrate the boundless creativity shaping our musical world.
        </p>
      </div>
    </div>
    <div class="container mx-auto py-8 sm:px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(award, index) in categories" :key="index" class="bg-[#C2922E] py-4 rounded-2xl drop-shadow-md">
          <div class="flex justify-center px-4">
            <div class="flex-shrink-0">
              <!-- <img class="w-14 h-14 rounded-full" :src="avatar" alt="Neil image" /> -->
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <div class="flex justify-between">
              <router-link :to="{name:'filtered-artist',params: { slug: award.slug }}">{{ award.name }} <i class="pi pi-angle-double-right text-slate-600"></i></router-link> 
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="home" class="relative overflow-hidden mt-48">
    <div class="px-4 md:px-10">
      <div
        class="rounded-2xl overflow-hidden bg-no-repeat bg-cover bg-center bg-[url('../assets/img/header/bible.jpg')]">
        <div class="bg-black/60 rounded-2xl">
          <div class="container mx-auto">
            <div class="p-6 relative">
              <div class="flex h-full items-center justify-center py-36">
                <div class="text-center max-w-3xl mx-auto relative">
                  <span
                    class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-white bg-white/10">knowledge
                    hub</span>
                  <h1 class="md:text-5xl/snug text-3xl font-medium text-white mt-10">
                    Bible Verse Challange
                  </h1>
                  <p class="w-3/4 mx-auto text-base font-normal text-white/80 mt-5">
                    challange others to this wonderful game and earn price in every week leaderboard
                  </p>

                  <div class="flex justify-center mt-10">
                    <a href="#"
                      class="inline-flex items-center justify-center gap-2 text-base py-2 px-8 rounded-md text-white bg-primary hover:bg-primary-700 transition-all duration-700">Play
                      Now
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        data-lucide="move-right" class="lucide lucide-move-right h-6 w-6">
                        <path d="M18 8L22 12L18 16"></path>
                        <path d="M2 12H22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <!-- flex End -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container End -->
  </section>

  <section class="py-20 border-b border-gray-200 dark:border-foreground dark:bg-background">
    <div class="container mx-auto lg:p-0 p-5">
      <div class="flex lg:flex-row flex-col lg:text-left text-center flex-wrap items-center justify-between mb-12">
        <div class="lg:mb-0 mb-4 aos-init aos-animate" data-aos="fade-up">
          <h2 class="text-2xl lg:text-3xl font-medium capitalize mb-2 text-gray-600">
            Road to EAGMA
          </h2>
          <h6 class="text-sm lg:text-base text-black font-normal">
            A selection of listing verified for quality
          </h6>
        </div>
        <div data-aos="fade-up" class="aos-init aos-animate">
          <router-link :to="{ name: 'roadtoeagma' }"
            class="text-gray-500 dark:text-gray-400 hover:text-blue-500 flex items-center">
            Explore More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-5 ml-3" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
        <!-- :to="{name:'projectdetail',params:{slug:proj.slug}} -->
        <router-link v-for="blog in blog" :key="blog.index" :to="{ name: 'blog-post', params: { slug: blog.slug } }">
          <div class="relative overflow-hidden group rounded-lg group">
            <img class="w-full h-[277px] object-cover rounded-lg transition-all group-hover:scale-105" :src="blog.photo"
              :alt="blog.title" />
            <div
              class="absolute bottom-0 top-1/2 flex flex-col justify-end left-0 p-5 rounded-b-lg pt-2 card-linear-gradient w-full">
              <h5 class="text-2xl font-medium mb-1 text-white">{{ blog.title }}</h5>
              <div class="flex flex-row justify-between">
                <p class="text-base font-normal text-gray-100">{{ blog.category.name }}</p>
                <p class="text-base font-normal text-gray-100">{{ blog.created_at
                  }}</p>
              </div>
            </div>
          </div>
        </router-link>
        <!-- <a
          href="/event-listing-details-page.html"
          data-aos="fade-up"
          data-aos-duration="800"
          class="aos-init aos-animate"
          v-for="(blog,index) in blog"
          :key="index"
        > 
          
        </a>
        -->
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

.swiper-button-next,
.swiper-button-prev {
  background-color: white;
  background-color: rgba(194, 146, 46, 0.8);
  right: 10px;
  padding: 30px;
  color: #000 !important;
  fill: black !important;
  stroke: black !important;
}
</style>
