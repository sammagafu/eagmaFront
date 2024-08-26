<template>
  <!-- Breadcrum component -->
  <!-- <Breadcrum
    :page-title="'About Us'"
    :background-url="backgroundUrl"
    :links="pageLinks"
  /> -->
  <!-- Breadcrum component -->
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
          <img class="w-full" src="@/assets/img/team.png" alt="" />
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

  <!-- counter -->
  <div class="py-[150px]">
    <div class="max-w-[1350px] mx-auto px-[15px]">
      <div data-scroll="[data-scroll-item]" class="">
        <div data-scroll-cog="" class="hidden">
          { "scrollTrigger": { "trigger": "[data-scroll-item]" } }
        </div>
        <div data-scroll-item="odometer" class="group c-active">
          <div class="relative">
            <div class="absolute top-0 right-0 bottom-0 left-0 hidden xl:flex justify-center items-center">
              <img class="" src="../assets/img/fun-divider.svg" alt="" />
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-2">
              <div class="relative">
                <div class="absolute top-0 right-0 bottom-0 left-0 hidden md:flex justify-center items-center">
                  <img class="" src="../assets/img/fun-divider.svg" alt="" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-0">
                  <div class="flex justify-center">
                    <div class="">
                      <div class="flex text-[#C2922E] text-[100px] leading-[100px] font-bold font-['Space_Grotesk']">
                        <div class="odometer odometer-auto-theme" data-v="46">
                          <div class="odometer-inside">
                            <span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span
                                class="odometer-digit-inner"><span class="odometer-ribbon"><span
                                    class="odometer-ribbon-inner"><span
                                      class="odometer-value">4</span></span></span></span></span>
                          </div>
                        </div>
                        <div class="">k</div>
                      </div>
                      <div class="text-[18px] leading-[28px] text-center">
                        music catalogue
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="">
                      <div class="flex text-[#C2922E] text-[100px] leading-[100px] font-bold font-['Space_Grotesk']">
                        <div class="odometer odometer-auto-theme" data-v="3">
                          <div class="odometer-inside">
                            <span class="odometer-digit"><span class="odometer-digit-spacer">1</span><span
                                class="odometer-digit-inner"><span class="odometer-ribbon"><span
                                    class="odometer-ribbon-inner"><span
                                      class="odometer-value">0</span></span></span></span></span>
                          </div>
                        </div>
                        <div class="">k</div>
                      </div>
                      <div class="text-[18px] leading-[28px] text-center">
                        registered users
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden xl:block relative">
                <div class="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <img class="" src="../assets/img/fun-divider.svg" alt="" />
                </div>
                <div class="grid grid-cols-2">
                  <div class="flex justify-center">
                    <div class="">
                      <div class="flex text-[#C2922E] text-[100px] leading-[100px] font-bold font-['Space_Grotesk']">
                        <div class="odometer odometer-auto-theme" data-v="26">
                          <div class="odometer-inside">
                            <span class="odometer-digit"><span class="odometer-digit-spacer">2</span><span
                                class="odometer-digit-inner"><span class="odometer-ribbon"><span
                                    class="odometer-ribbon-inner"><span
                                      class="odometer-value">2</span></span></span></span></span>
                          </div>
                        </div>
                      </div>
                      <div class="text-[18px] leading-[28px] text-center">
                        registered artists
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="">
                      <div class="flex text-[#C2922E] text-[100px] leading-[100px] font-bold font-['Space_Grotesk']">
                        <div class="odometer odometer-auto-theme" data-v="24">
                          <div class="odometer-inside">
                            <span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span
                                class="odometer-digit-inner"><span class="odometer-ribbon"><span
                                    class="odometer-ribbon-inner"><span
                                      class="odometer-value">2</span></span></span></span></span>
                          </div>
                        </div>
                        <div class="">+</div>
                      </div>
                      <div class="text-[18px] leading-[28px] text-center">
                        awards categories
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- counter ends here -->

  <!-- comittee -->
  <!-- <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[40px]">
      <div class="group relative" v-for="index in 4" :key="index">
        <div class=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
          <div class=" h-[270px] rounded-t-md  relative mx-auto  overflow-hidden">
            <img src="../assets/img/team/fefe.png" alt="" class=" w-full h-full object-cover rounded-t-md ">
          </div>
          <div class="course-content p-6">
            <h4 class=" lg:text-2xl text-1xl mb-1 font-bold">Erics Widget</h4>
            <div>UI/UX Designer</div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup>
// import PageTitle from "@/components/PageTitle.vue";

import Breadcrum from "@/components/Breadcrum.vue";
import { ref } from "vue";

const backgroundUrl = "@/assets/img/banner/home-banner.png";
const pageLinks = [{ text: "Home", route: { name: "home" } }, { text: "About" }];
</script>
