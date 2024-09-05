
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

  <div class="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px] bg-amber-100">
    <div class="container mx-auto">
      <div class="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div class="lg:pr-[60px] rtl:lg:pr-0 rtl:lg:pl-[60px] xl:pr-[100px] rtl:xl:pr-0 rtl:xl:pl-[100px]">
          <h4 class="text-black uppercase text-[12px] md:text-[15px] font-bold mb-[15px]">
            Our Goal
          </h4>
          <h2
            class="text-black font-semibold text-[14px] md:text-[20px] lg:text-[26px] xl:text-[32px] leading-[1.5] mb-[15px] md:mb-[30px]">
            This platform aims to acknowledge, motivate, reward, and cultivate the talents
            of artists, particularly gospel singers, in order to reshape and impact
            society, with a focus on Tanzania and East Africa as a whole.
          </h2>
          <p class="text-[12px] md:text-[18px] lg:text-[24px] xl:text-[30px">
            Promoting the heritage of East African Musical Talents by increasing the level
            of excellence of musical talent acquisition and uniting the diversity in the
            talents as a common goal in one platform that shares experiences, values and
            culture.
          </p>
        </div>
        <div
          class="hidden xl:block group/hw relative overflow-hidden hway hway-active hway-active hway-active hway-active hway-active hway-active hway-active hway-active hway-active">
          <div
            class="absolute top-0 left-0 bg-[#C2922E] h-[55%] w-full group-[.hway-active]/hw:w-0 transition-all duration-[.5s]">
          </div>
          <div
            class="absolute bottom-0 right-0 bg-[#C2922E] h-[55%] w-full group-[.hway-active]/hw:w-0 transition-all duration-[.5s]">
          </div>
          <img class="w-full" src="@/assets/img/team-h.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>

  <section class="section-wrap bg-amber-100">
    <div class="container mx-auto">
      <div class="grid sm:grid-rows-2 sm:grid-flow-rows grid-cols-2 gap-2">
        <!-- First column -->

        <div class="p-4">
          <div class="p-[24px] bg-[#14212b] relative z-[1] rounded-[10px] overflow-hidden col:p-[20px] drop-shadow">
            <div>
              <h2 class="text-[#C2922E] text-[34px] mb-[20px] font-semibold">
                Our Mission
              </h2>
              <p class="text-amber-100 text-[18px] mb-[20px]">
                Creating an academy for nurturing young talents through creative and
                innovative ways
              </p>
              <p class="text-amber-100 text-[18px] mb-[20px]">
                Appreciating, celebrating, and recognizing East African musical talent
              </p>
              <p class="text-amber-100 text-[18px] mb-[20px]">
                Fostering positive changes in the behaviour of young talents in society by
                providing a platform for them to express themselves creatively and have
                their voices heard.
              </p>
            </div>

            <div class="absolute right-[-70px] bottom-[-70px] w-[200px] h-[200px] bg-gray-600 rounded-[50%] z-[-1]"></div>
            <div class="absolute right-0 top-0">
              <img src="../assets/img/mission-shape.png" alt="" />
            </div>
          </div>
        </div>

        <!-- Second column -->

        <div class="p-4">
          <!-- Content for the second column -->
          <div class="p-[24px] bg-[#14212b] relative z-[1] rounded-[10px] overflow-hidden col:p-[20px] drop-shadow">
            <div class="wpo-vission-text">
              <h2 class="text-[#C2922E] text-[34px] mb-[20px] font-semibold">
                Our Vision
              </h2>
              <p class="text-amber-100 text-[18px] mb-[20px]">
                Preserving East African musical heritage
              </p>
              <p class="text-amber-100 text-[18px] mb-[20px]">
                Promoting excellence in presentation and grooming of our Musical Talents
              </p>
              <p class="text-amber-100 text-[18px] mb-[20px]">
                Expanding opportunities for creatively delivering top-notch talents.
              </p>
              <p class="text-amber-100 text-[18px] mb-[20px]">
                Expanding opportunities for creatively delivering top-notch talents.
              </p>
              <div class="absolute right-[-70px] bottom-[-70px] w-[200px] h-[200px] bg-gray-600 rounded-[50%] z-[-1]">
              </div>
              <div class="absolute right-0 top-0">
                <img src="../assets/img/mission-shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- swipper ends here -->

  <section class="category bg-slate-800 py-12">
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

  <section id="home" class="relative overflow-hidden mt-48" v-if="verse">
    <div class="px-4 md:px-10">
      <div
        class="rounded-2xl overflow-hidden bg-no-repeat bg-cover bg-center bg-[url('../assets/img/header/bible.jpg')]">
        <div class="bg-black/60 rounded-2xl">
          <div class="container mx-auto">
            <div class="p-6 relative">
              <div class="flex h-full items-center justify-center py-36">
                <div class="text-center max-w-3xl mx-auto relative">
                  <span
                    class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-white bg-white/10">Verse of the Day</span>
                  <h1 class="md:text-5xl/snug text-3xl font-medium text-white mt-10">
                    {{verse.text}}
                  </h1>
                  <p class="w-3/4 mx-auto text-base font-normal text-white/80 mt-5">
                    {{  }}
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
import axios from "axios";

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

window.myCallback = function(response) {
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
      'https://labs.bible.org/api/?passage=random&type=json&callback=myCallback',
      {
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
  getVerse();
})


</script>
