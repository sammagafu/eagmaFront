<template>
   <LoadingOverlay :isLoading="loading" />
  <!-- Jumbotron -->
  <section class="py-44 lg:py-44 w-full table relative bg-slider-img bg-center bg-cover">
    <div class="absolute inset-0 bg-black"></div>
    <div class="container mx-auto relative">
      <div class="grid grid-cols-1 text-center">
        <div
          class="text-alternate lg:text-5xl text-4xl lg:leading-normal leading-normal font-bold mb-7 position-relative">
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
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary animate-bounce" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </router-link>
    </div>
  </section>

  <!-- swipper starts here -->

  <div class="bg-black py-48">
    <div class="container mx-auto">
      <div class="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div class="lg:pr-[60px] rtl:lg:pr-0 rtl:lg:pl-[60px] xl:pr-[100px] rtl:xl:pr-0 rtl:xl:pl-[100px] order-2 mx-8">
          <h4 class="text-alternate uppercase text-[12px] md:text-[15px] font-bold mb-[15px] tracking-widest">
            Our Goal
          </h4>
          <h2
            class="text-white font-semibold text-[14px] md:text-[20px] lg:text-[26px] xl:text-[32px] leading-[1.5] mb-[15px] md:mb-[30px]">
            This platform aims to acknowledge, motivate, reward, and cultivate the talents
            of artists, particularly gospel singers, in order to reshape and impact
            society, with a focus on Tanzania and East Africa as a whole.
          </h2>
          <p class="text-[12px] md:text-[18px] lg:text-[24px] xl:text-[30px text-white">
            Promoting the heritage of East African Musical Talents by increasing the level
            of excellence of musical talent acquisition and uniting the diversity in the
            talents as a common goal in one platform that shares experiences, values and
            culture.
          </p>
        </div>
        <div
          class="hidden xl:block group/hw relative overflow-hidden hway hway-active hway-active hway-active hway-active hway-active hway-active hway-active hway-active hway-active">
          <img class="w-full" src="@/assets/img/team-m.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>

  <section class="section-wrap pb-24 bg-black">
    <div class="container mx-auto">
      <ul class="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
        <!-- Service Item -->
        <li class="" data-jos_delay="0" data-jos_once="1" data-jos_animation="fade-up" data-jos_timingfunction="ease"
          data-jos_duration="0.7" data-jos_counter="1">
          <div class="bg-alternate">
            <div
              class="flex h-full flex-col items-start overflow-hidden rounded-[20px] p-[30px] transition duration-300">
              <div class="mx-auto">

                <h4 class="mb-[15px] mt-[30px] uppercase font-semibold text-center tracking-widest"> Our Mission</h4>
              </div>
              <p class="">
                Creating an academy for nurturing young talents through creative and
                innovative ways
              </p>
              <p class="">
                Appreciating, celebrating, and recognizing East African musical talent
              </p>
              <p class="">
                Fostering positive changes in the behaviour of young talents in society by
                providing a platform for them to express themselves creatively and have
                their voices heard.
              </p>
              <!-- <a class="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5" href="/service-details"><img src="" alt="icon-black-arrow-right" width="34" height="28"></a> -->
            </div>
          </div>
        </li>
        <!-- Service Item -->
        <!-- Service Item -->
        <li class="" data-jos_delay="0.3" data-jos_once="1" data-jos_animation="fade-up" data-jos_timingfunction="ease"
          data-jos_duration="0.7" data-jos_counter="1">
          <div class="bg-alternate">
            <div class="flex h-full flex-col items-start overflow-hidden p-[30px] transition duration-300">
              <div class="mx-auto">

                <h4 class="mb-[15px] mt-[30px] uppercase font-semibold text-center tracking-widest"> Our Vision</h4>
              </div>

              <p class="">
                Preserving East African musical heritage
              </p>
              <p class="">
                Promoting excellence in presentation and grooming of our Musical Talents
              </p>
              <p class="">
                Expanding opportunities for creatively delivering top-notch talents.
              </p>
              <p class="">
                Expanding opportunities for creatively delivering top-notch talents.
              </p>
              <!-- <a class="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5" href="/service-details"><img src="" alt="icon-black-arrow-right" width="34" height="28"></a> -->
            </div>
          </div>
        </li>
      </ul>

    </div>
  </section>
  <!-- swipper ends here -->

  <section class="category py-12 bg-black">
    <div class="container mx-auto">
      <div class="col-span-7 m-8">
        <!-- <h6 class="text-white uppercase">categories</h6> -->
        <h2 class="text-6xl font-bold text-alternate pb-12">Award categories</h2>
        <p class="max-w-6xl text-lg py-4 text-alternate">
          Each category embodies a unique facet of musical brilliance, from emerging
          talents to collaborative innovations and societal impact. Explore these
          categories to celebrate the boundless creativity shaping our musical world.
        </p>
      </div>
    </div>
    <div class="container mx-auto py-8 sm:px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
  <div v-for="(award, index) in categories" :key="index">
    <router-link :to="{ name: 'filtered-artist', params: { slug: award.slug } }" class="pointer">
      <!-- Add h-full to ensure all cards stretch to the same height -->
      <div class="relative overflow-hidden bg-gradient-to-r from-alternate to-alternate-light rounded-lg max-w-full shadow-lg flex flex-col h-full">
        <svg
          class="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style="transform: scale(1.5); opacity: 0.1;"
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div class="relative pt-10 px-10 flex items-center justify-center flex-grow">
          <img
            class="relative w-60 hover:scale-125 transition-all duration-300"
            src="@/assets/img/awards.png"
            alt=""
          />
        </div>
        <!-- Add flex-grow to stretch the text section to fill remaining space -->
        <div class="relative text-black px-6 pb-6 mt-6 flex-grow flex items-center justify-center">
          <div class="flex justify-center">
            <span class="block text-baseline text-center font-semibold uppercase tracking-wider">{{ award.name }}</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</div>

    </div>

  </section>

  <section id="home" class="relative overflow-hidden bg-black" v-if="verse">
    <div class="px-4 md:px-10">
      <div
        class="rounded-2xl overflow-hidden">
        <div class="bg-black/60 rounded-2xl">
          <div class="container mx-auto">
            <div class="p-6 relative">
              <div class="flex h-full items-center justify-center py-36">
                <div class="text-center max-w-6xl mx-auto relative">
                  <span
                    class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-alternate bg-white/10">Verse
                    of the Day</span>
                  <h1 class="md:text-5xl/snug text-3xl font-medium text-alternate mt-10">
                    {{verse.text}}
                  </h1>
                  <p class="w-3/4 mx-auto text-xl font-normal text-alternate-dark/80 mt-5">
                    {{ verse.bookname }} {{ verse.chapter }}:{{ verse.verse }}
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


<script setup>
  import {
    ref,
    reactive,
    onMounted,
    computed
  } from "vue";
  import {
    Swiper,
    SwiperSlide
  } from "swiper/vue";
  import {
    Autoplay,
    Pagination,
    Navigation,
    EffectFade
  } from "swiper/modules";
  import VueWriter from "vue-writer";
  import instance from "@/service";


  // images
  import sliderImgUrl from "@/assets/img/banner/slider-1.jpg";

  // css
  import "swiper/css";
  import "swiper/css/navigation";
  import axios from "axios";
  import LoadingOverlay from '@/components/LoadingOverlay.vue';

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

  const verse = ref({
    bookname: '',
    chapter: '',
    verse: '',
    text: '',
  });
  const loading = ref(false);


  const handleSlideChange = () => {
    console.log("slide change");
  };

  window.myCallback = function (response) {
    const result = response[0];
    verse.value = {
      bookname: result.bookname,
      chapter: result.chapter,
      verse: result.verse,
      text: result.text,
    };
    loading.value = false;
  };

  const getVerse = () => {
    loading.value = true;
    const script = document.createElement('script');
    script.src = 'https://labs.bible.org/api/?passage=random&type=json&callback=myCallback';
    document.body.appendChild(script);
  };
  const getRandomVerse = () => {
    axios
      .get(
        'https://labs.bible.org/api/?passage=random&type=json&callback=myCallback', {
          crossDomain: true,
          responseType: 'jsonp',
        }
      )
      .then((response) => {
        const result = response.data[0];
        bookname.value = result.bookname;
        chapter.value = result.chapter;
        verse.value = result.verse;
        text.value = result.text;
        // verse.value = {
        //   bookname: result.bookname,
        //   chapter: result.chapter,
        //   verse: result.verse,
        //   text: result.text,
        // };
        console.log('verse.value :>> ', text.value);
      })

      .catch((error) => {
        console.error('Error fetching verse:', error);
      });
  };

  async function fetchInitialData() {
  try {
    const [categoriesResponse, blogsResponse, nomineesResponse] = await Promise.all([
      instance.get("awards/active/"),
      instance.get("blog/latest/"),
      instance.get("nominees/")
    ]);
    categories.value = categoriesResponse.data.map(award => award.categories).flat();
    blog.value = blogsResponse.data;
    nominees.value = nomineesResponse.data;
  } catch (error) {
    console.error('Error during initial data fetch:', error);
  } finally {
    loading.value = false;  // Set loading to false once all data is fetched or in case of an error
  }
}


  onMounted(() => {
    fetchInitialData();
    getVerse();
  })
</script>