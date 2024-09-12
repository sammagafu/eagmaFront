<template>
  <!-- Breadcrum component -->
  <!-- <Breadcrum
    :page-title="'About Us'"
    :background-url="backgroundUrl"
    :links="pageLinks"
  /> -->
  <!-- Breadcrum component -->
  <div class="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px] bg-black">
    <div class="container mx-auto">
      <div class="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div class="lg:pr-[60px] rtl:lg:pr-0 rtl:lg:pl-[60px] xl:pr-[100px] rtl:xl:pr-0 rtl:xl:pl-[100px]">
          <h4 class="text-alternate uppercase text-[12px] md:text-[15px] font-bold mb-[15px]">
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
          <div
            class="absolute top-0 left-0 bg-navy h-[55%] w-full group-[.hway-active]/hw:w-0 transition-all duration-[.5s]">
          </div>
          <div
            class="absolute bottom-0 right-0 bg-navy h-[55%] w-full group-[.hway-active]/hw:w-0 transition-all duration-[.5s]">
          </div>
          <img class="w-full" src="@/assets/img/team-h.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>

  <section class="section-wrap bg-black">
    <div class="container mx-auto py-24">
      <ul class="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
        <!-- Service Item -->
        <li class="h-full" data-jos_delay="0" data-jos_once="1" data-jos_animation="fade-up"
          data-jos_timingfunction="ease" data-jos_duration="0.7" data-jos_counter="1">
          <div class="border py-6 rounded-lg border-alternate text-alternate">
            <div
              class="flex h-full flex-col items-start overflow-hidden rounded-[20px] p-[30px] transition duration-300">
              <div class="mx-auto justify-center flex flex-col items-center">
                <img src="@/assets/img/icons/mission.svg" alt="mission" class="w-24 h-24 text-primary">

                <h4 class="mb-[15px] mt-[30px] uppercase font-semibold text-center tracking-widest text-2xl"> Our
                  Mission</h4>
              </div>
              <p class="text-center ">
                to nurture young talents through creative and innovative methods, celebrate and recognize East African
                musical excellence, and foster positive societal change by giving young artists a platform to express
                themselves and be heard.
              </p>
              <!-- <a class="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5" href="/service-details"><img src="" alt="icon-black-arrow-right" width="34" height="28"></a> -->
            </div>
          </div>
        </li>
        <!-- Service Item -->
        <!-- Service Item -->
        <li class="h-full" data-jos_delay="0.3" data-jos_once="1" data-jos_animation="fade-up"
          data-jos_timingfunction="ease" data-jos_duration="0.7" data-jos_counter="1">
          <div class="border py-6 rounded-lg border-alternate text-alternate">
            <div class="flex h-full flex-col items-start overflow-hidden p-[30px] transition duration-300">
              <div class="mx-auto justify-center flex flex-col items-center">
                <img src="@/assets/img/icons/vision.svg" alt="vision" class="w-24 h-24 text-primary">
                <h4 class="mb-[15px] mt-[30px] uppercase font-semibold text-center tracking-widest text-2xl"> Our Vision
                </h4>
              </div>

              <p class="text-center">
                We aim to preserve East African musical heritage, promote excellence in talent grooming and
                presentation, and expand opportunities for showcasing top-tier creative talents.
              </p>
              <!-- <a class="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5" href="/service-details"><img src="" alt="icon-black-arrow-right" width="34" height="28"></a> -->
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>


  <div class="py-32 bg-black">

    <div class="container mx-auto">
      <div class="container relative mx-auto py-12">
        <div class="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 class="mb-3 text-4xl leading-normal tracking-wider font-semibold text-alternate">EAGMA STRUCTURE</h3>
          <p class="mt-3 text-xl text-alternate">Our advisory board is integral in overseeing all facets of the event,
            ensuring solutions that align with <br>
            the event's vision and resonate even beyond its conclusion. Serving as a panel of experts, they<br>
            adeptly manage the event's objectives and overarching theme.</p>
        </div>
        <!--end grid-->
      </div>
    </div>
    <div class="container mx-auto">
      <div class="card overflow-x-auto">
        <OrganizationChart :value="data">
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
        </div>
    </div>

    <!-- <div class="text-center pb-8">
        
        <h2 class="text-4xl leading-normal tracking-wider font-semibold text-black">EAGMA STRUCTURE</h2>
      </div> -->

  </div>


  <div class="py-32 bg-black">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[40px]	align-content: center;">
        <!-- user -->
        <div class="group relative">
          <div class=" bg-navy shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
            <div class=" h-auto rounded-t-md  relative mx-auto  overflow-hidden">
              <img src="../assets/img/team/1.png" alt="" class=" w-full h-full object-cover rounded-t-md ">
            </div>
            <div class="course-content p-4 text-alternate">
              <h4 class="font-bold py-4">Mwalimu Christopher Mwakasege</h4>
              <div class="text-sm text-white">A Prominent Itinerant Teacher of the Gospel in Tanzania</div>
            </div>
          </div>
        </div>
        <!-- end of user -->

        <!-- user -->
        <div class="group relative">
          <div class=" bg-navy shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
            <div class=" h-auto rounded-t-md  relative mx-auto  overflow-hidden">
              <img src="../assets/img/team/2.png" alt="" class=" w-full h-full object-cover bg-center rounded-t-md ">
            </div>
            <div class="course-content p-4 text-alternate">
              <h4 class="font-bold py-4">Hon Eric James Shigongo</h4>
              <div class="text-sm text-white">A member of the Parliament of Tanzania, an Entrepreneur and the founder of
                Global Publishers</div>
            </div>
          </div>
        </div>
        <!-- end of user -->

        <!-- user -->
        <div class="group relative">
          <div class=" bg-navy shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
            <div class=" h-auto rounded-t-md  relative mx-auto  overflow-hidden">
              <img src="../assets/img/team/3.png" alt="" class=" w-full h-full object-cover rounded-t-md ">
            </div>
            <div class="course-content p-4 text-alternate">
              <h4 class="font-bold py-4">Js Malachi Joseph</h4>
              <div class="text-sm text-white">Prophet and Preacher at Christ Mandate Ministries (CMPM)</div>
            </div>
          </div>
        </div>
        <!-- end of user -->

        <!-- user -->
        <div class="group relative">
          <div class=" bg-navy shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
            <div class=" h-auto rounded-t-md  relative mx-auto  overflow-hidden">
              <img src="../assets/img/team/4.png" alt="" class=" w-full h-full object-cover rounded-t-md ">
            </div>
            <div class="course-content p-4 text-alternate">
              <h4 class="font-bold py-4">Phillip Saliboko</h4>
              <div class="text-sm text-white">Managing Director at ELYON Trading & Investments Company Ltd</div>
            </div>
          </div>
        </div>
        <!-- end of user -->

        <!-- user -->
        <div class="group relative">
          <div class=" bg-navy shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
            <div class=" h-[270px] rounded-t-md  relative mx-auto  overflow-hidden">
              <img src="../assets/img/team/mc.jpg" alt="" class=" w-full h-full object-cover rounded-t-md ">
            </div>
            <div class="course-content p-4 text-alternate">
              <h4 class="font-bold py-4">Magreth Wilson Chacha</h4>
              <div class="text-sm text-white">Managing Director Of Centre Stage Group of
                Company And Founder Of Eagma.</div>
            </div>
          </div>
        </div>
        <!-- end of user -->

        <!-- user -->
        <div class="group relative">
          <div class=" bg-navy shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
            <div class=" h-[270px] rounded-t-md  relative mx-auto  overflow-hidden">
              <img src="../assets/img/team/ado.jpg" alt="" class=" w-full h-full object-cover rounded-t-md ">
            </div>
            <div class="course-content p-4 text-alternate">
              <h4 class="font-bold py-4">Addo November</h4>
              <div class="text-sm text-white">Board of Advisory Member</div>
            </div>
          </div>
        </div>
        <!-- end of user -->
      </div>
    </div>
  </div>


  <!-- counter -->
  <div class="py-[150px] bg-black">
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
                    <div class="text-alternate">
                      <div class="flex text-[100px] leading-[100px] font-bold font-['Space_Grotesk']">
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
                    <div class="text-alternate">
                      <div class="flex text-[100px] leading-[100px] font-bold font-['Space_Grotesk']">
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
                  <div class="flex justify-center items-center">
                    <div class="text-alternate">
                      <div class="flex text-[100px] leading-[100px] font-bold font-['Space_Grotesk']">
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
                    <div class="text-alternate">
                      <div class="flex text-[100px] leading-[100px] font-bold font-['Space_Grotesk']">
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
  import OrganizationChart from 'primevue/organizationchart';
  import Breadcrum from "@/components/Breadcrum.vue";
  import {
    ref
  } from "vue";

  const backgroundUrl = "@/assets/img/banner/home-banner.png";
  const pageLinks = [{
    text: "Home",
    route: {
      name: "home"
    }
  }, {
    text: "About"
  }];

  const data = ref({
  label: 'Founder',
  children: [
    {
      label: 'Board of advisory',
      children: [
        {
          label: 'MINISTRY OF CULTURE ARTS & SPORTS TANZANIA',
          children: [
            { label: 'BASATA' },
            { label: 'COSOTA' },
            { label: 'JUDGES' }
          ]
        },
        {
          label: 'EAST AFRICA CORPORATION CULTURE ARTS & SPORTS',
          children: [
            { label: 'KENYA COMMITTEE' },
            { label: 'UGANDA COMMITTEE' },
            { label: 'RWANDA/BURUNDI COMMITTEE' }
          ]
        },
        {
          label: 'ORGANIZING COMMITTEE CHAIRMAN',
          children: [
            { label: 'EVENT COMMITTEE' }
          ]
        },
        {
          label: 'MAIN SPONSOR & PARTNERS',
          children: [
            { label: 'MARKETING & PR TEAM' }
          ]
        }
      ]
    }
  ]
});


</script>

<style scoped>
/* Styling node content */
.node-content {
  padding: 5px 10px;
  background: #632e2e;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
}

/* Ensuring that vertical lines (down) are properly connected */
.p-organizationchart .p-organizationchart-line-down {
  border-left: 2px solid #fff; /* Vertical line color */
  height: 20px; /* Adjust height to align nodes vertically */
  margin-left: -1px; /* Adjust to align with parent node */
}

/* Ensuring that horizontal lines (left and right) are properly connected */
.p-organizationchart .p-organizationchart-line-right,
.p-organizationchart .p-organizationchart-line-left {
  border-top: 2px solid #fff; /* Horizontal line color */
  height: 2px; /* Line thickness */
  margin-top: -1px; /* Adjust to remove gap between lines and nodes */
}

/* Extending lines from the center to ensure a connected look */
.p-organizationchart .p-organizationchart-line-right:before,
.p-organizationchart .p-organizationchart-line-left:before {
  content: '';
  display: block;
  width: 50%;
  height: 2px; /* Height of side lines */
  background-color: #fff !important; /* Line color */
  position: absolute;
  top: 0; /* Aligns line at the correct height */
  left: 0; /* Adjust starting point of the line */
}

/* Basic node styling */
.p-organizationchart-node-content {
  background: #f4f4f4;
  color: #333;
  border-radius: 5px;
  padding: 10px;
}
</style>
