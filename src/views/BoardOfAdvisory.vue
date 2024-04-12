<template>
    <section
        class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative mx-auto">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-3 text-4xl leading-normal tracking-wider font-semibold text-white">Advisory committee for EAGMA</h3>
                <p class="mt-3 text-xl text-[#C2922E]">Our advisory board is integral in overseeing all facets of the event, ensuring solutions that align with <br>
the event's vision and resonate even beyond its conclusion. Serving as a panel of experts, they<br>
adeptly manage the event's objectives and overarching theme.</p>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <!-- <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link :to="{name:''}">EAGMA</router-link</li> -->
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link :to="{ name: 'home' }"></router-link>EAGMA
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                        class="pi pi-angle-double-right" style="font-size: 1rem"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                    aria-current="page">Board of advisory</li>
            </ul>
        </div>
    </section>

    <div class="container mx-auto py-48">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[40px]	align-content: center;">
        <!-- user -->
      <div class="group relative">
        <div class=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
          <div class=" h-auto rounded-t-md  relative mx-auto  overflow-hidden">
            <img src="../assets/img/team/1.png" alt="" class=" w-full h-full object-cover rounded-t-md ">
          </div>
          <div class="course-content p-6">
            <h4 class=" lg:text-2xl text-1xl mb-1 font-bold">Mwalimu Christopher Mwakasege</h4>
            <div>A Prominent Itinerant Teacher of the Gospel in Tanzania</div>
          </div>
        </div>
      </div>
      <!-- end of user -->

        <!-- user -->
        <div class="group relative">
        <div class=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
          <div class=" h-auto rounded-t-md  relative mx-auto  overflow-hidden">
            <img src="../assets/img/team/2.png" alt="" class=" w-full h-full object-cover bg-center rounded-t-md ">
          </div>
          <div class="course-content p-6">
            <h4 class=" lg:text-2xl text-1xl mb-1 font-bold">Hon Eric James Shigongo</h4>
            <div>A member of the Parliament of Tanzania, an Entrepreneur and the founder of Global Publishers</div>
          </div>
        </div>
      </div>
      <!-- end of user -->

        <!-- user -->
        <div class="group relative">
        <div class=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
          <div class=" h-auto rounded-t-md  relative mx-auto  overflow-hidden">
            <img src="../assets/img/team/3.png" alt="" class=" w-full h-full object-cover rounded-t-md ">
          </div>
          <div class="course-content p-6">
            <h4 class=" lg:text-2xl text-1xl mb-1 font-bold">Js Malachi Joseph</h4>
            <div>Prophet and Preacher at Christ Mandate Ministries (CMPM)</div>
          </div>
        </div>
      </div>
      <!-- end of user -->

        <!-- user -->
        <div class="group relative">
        <div class=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
          <div class=" h-auto rounded-t-md  relative mx-auto  overflow-hidden">
            <img src="../assets/img/team/4.png" alt="" class=" w-full h-full object-cover rounded-t-md ">
          </div>
          <div class="course-content p-6">
            <h4 class=" lg:text-2xl text-1xl mb-1 font-bold">Phillip Saliboko</h4>
            <div>Managing Director at ELYON Trading & Investments Company Ltd</div>
          </div>
        </div>
      </div>
      <!-- end of user -->

       <!-- user -->
       <div class="group relative">
        <div class=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
          <div class=" h-[270px] rounded-t-md  relative mx-auto  overflow-hidden">
            <img src="../assets/img/team/fefe.png" alt="" class=" w-full h-full object-cover rounded-t-md ">
          </div>
          <div class="course-content p-6">
            <h4 class=" lg:text-2xl text-1xl mb-1 font-bold">Magreth Wilson Chacha</h4>
            <div>Ceo Of Centre Stage Group of
Company And Founder Of Eagma.</div>
          </div>
        </div>
      </div>
      <!-- end of user -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import OrganizationChart from 'primevue/organizationchart';

const data = ref({
    key: '0',
    type: 'person',
    styleClass: 'bg-black text-white border-round-xl',
    data: {
        name: 'Founder',
    },
    children: [
        {
            key: '0_0',
            type: 'person',
            styleClass: 'bg-black text-white border-round-xl',
            data: {
                name: 'Board of advisory',
            },
            children: [
                {
                    label: 'MINISTRY OF CULTURE ARTS & SPORTS TANZANIA',
                    styleClass: 'bg-black text-white border-round-xl',
                    children: [
                        {
                            label: 'BASATA',
                            styleClass: 'bg-black text-white border-round-xl'
                        },
                        {
                            label: 'COSOTA',
                            styleClass: 'bg-black text-white border-round-xl'
                        },
                        {
                            label: 'JUDGES',
                            styleClass: 'bg-black text-white border-round-xl'
                        },
                    ]
                },
                {
                    label: 'EAST AFRICA CORPORATION CULTURE ARTS & SPORTS',
                    styleClass: 'bg-black text-white border-round-xl',
                    children: [
                        {
                            label: 'KENYA COMMITTEE',
                            styleClass: 'bg-black text-white border-round-xl'
                        },
                        {
                            label: 'UGANDA COMMITTEE',
                            styleClass: 'bg-black text-white border-round-xl'
                        },
                        {
                            label: 'RWANDA/BURUNDI COMMITTEE',
                            styleClass: 'bg-black text-white border-round-xl'
                        },
                    ]
                },
                {
                    label: 'ORGANIZING COMMITTEE CHAIRMAN',
                    styleClass: 'bg-black text-white border-round-xl',
                    children:[
                        {
                            label: 'EVENT COMMITTEE',
                            styleClass: 'bg-black text-white border-round-xl'
                        },
                    ]
                }, {
                    label: 'MAIN SPONSOR & PARTNERS',
                    styleClass: 'bg-black text-white border-round-xl',
                    children:[
                        {
                            label: 'MARKETING & PR TEAM',
                            styleClass: 'bg-black text-white border-round-xl'
                        },
                    ]
                }
            ]
        },
        // {
        //     key: '0_1',
        //     type: 'person',
        //     styleClass: 'bg-black text-white border-round-xl',
        //     data: {
        //         image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
        //         name: 'Stephen Shaw',
        //         title: 'CTO'
        //     },
        //     children: [
        //         {
        //             label: 'Development',
        //             styleClass: 'bg-black text-white border-round-xl'
        //         },
        //         {
        //             label: 'UI/UX Design',
        //             styleClass: 'bg-black text-white border-round-xl'
        //         }
        //     ]
        // }
    ]
});
</script>