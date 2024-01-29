<template>
      <section
        class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative mx-auto">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-3 text-4xl leading-normal tracking-wider font-semibold text-white">{{artist.name}}</h3>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <!-- <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link :to="{name:''}">EAGMA</router-link</li> -->
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link :to="{ name: 'home' }"></router-link>EAGMA</li>
                <li class="inline-block text-base text-white/50 mx-2 ltr:rotate-0 rtl:rotate-180"><i class="pi pi-angle-double-right" style="font-size: 1rem"></i></li>
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link :to="{ name: 'artist' }"></router-link>Artist</li>
                <li class="inline-block text-base text-white/50 mx-2 ltr:rotate-0 rtl:rotate-180"><i class="pi pi-angle-double-right" style="font-size: 1rem"></i></li>
                
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                    aria-current="page">{{artist.name}}</li>
            </ul>
        </div>
    </section>
    <section class="py-36">
        <div class="container mx-auto">
            <div class="md:container container-fluid relative">
                <div class="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-[url('@/assets/img/banner/slider-2.jpg')] bg-center bg-no-repeat bg-cover blur-sm"></div>
            </div>
        
        <div class="container relative md:mt-24 mt-16">
                <div class="md:flex">
                    <div class="lg:w-1/4 md:w-1/3 md:px-3">
                        <div class="relative md:-mt-48 -mt-32">
                            <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                <div class="profile-pic text-center mb-5">
                                    <input id="pro-img" name="profile-image" type="file" class="hidden" onchange="loadFile(event)">
                                    <div>
                                        <div class="relative h-28 w-28 mx-auto">
                                            <img :src="artist.photo" class="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="">
                                            <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                                        </div>

                                        <div class="mt-4">
                                            <h5 class="text-lg font-semibold text-slate-400">{{ artist.name }}</h5>
                                            <p class="text-slate-400">{{artist.gender}}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="border-t border-gray-100 dark:border-gray-700">
                                    <ul class="list-none sidebar-nav mb-0 pb-0" id="navmenu-nav">
                                        <li class="navbar-item account-menu active">
                                            <a href="user-account.html" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span class="me-2 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay size-4"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg></span>
                                                <h6 class="mb-0 font-medium">Account</h6>
                                            </a>
                                        </li>
    
                                        <li class="navbar-item account-menu">
                                            <a href="user-billing.html" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span class="me-2 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit size-4"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></span>
                                                <h6 class="mb-0 font-medium">Billing Info</h6>
                                            </a>
                                        </li>
    
                                        <li class="navbar-item account-menu">
                                            <a href="user-payment.html" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span class="me-2 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card size-4"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></span>
                                                <h6 class="mb-0 font-medium">Payment</h6>
                                            </a>
                                        </li>
    
                                        <li class="navbar-item account-menu">
                                            <a href="user-invoice.html" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span class="me-2 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text size-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></span>
                                                <h6 class="mb-0 font-medium">Invoice</h6>
                                            </a>
                                        </li>
    
                                        <li class="navbar-item account-menu">
                                            <a href="user-social.html" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span class="me-2 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2 size-4"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></span>
                                                <h6 class="mb-0 font-medium">Social Profile</h6>
                                            </a>
                                        </li>
    
                                        <li class="navbar-item account-menu">
                                            <a href="user-notification.html" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span class="me-2 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell size-4"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></span>
                                                <h6 class="mb-0 font-medium">Notifications</h6>
                                            </a>
                                        </li>
    
                                        <li class="navbar-item account-menu">
                                            <a href="user-setting.html" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span class="me-2 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings size-4"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></span>
                                                <h6 class="mb-0 font-medium">Settings</h6>
                                            </a>
                                        </li>
    
                                        <li class="navbar-item account-menu">
                                            <a href="lock-screen.html" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                                <span class="me-2 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out size-4"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></span>
                                                <h6 class="mb-0 font-medium">Sign Out</h6>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
                        <h5 class="text-lg font-semibold mb-6">My Orders</h5>
                        <div class="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                            <table class="w-full text-start text-slate-500 dark:text-slate-400">
                                <thead class="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                    <tr class="text-start">
                                        <th scope="col" class="px-2 py-3 text-start">Order no.</th>
                                        <th scope="col" class="px-2 py-3 text-start">Date</th>
                                        <th scope="col" class="px-2 py-3 text-start">Status</th>
                                        <th scope="col" class="px-2 py-3 text-start">Total</th>
                                        <th scope="col" class="px-2 py-3 text-start">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white dark:bg-slate-900 text-start">
                                        <th class="px-2 py-3 text-start" scope="row">7107</th>
                                        <td class="px-2 py-3 text-start">1st November 2021</td>
                                        <td class="px-2 py-3 text-start text-green-600">Delivered</td>
                                        <td class="px-2 py-3 text-start">$ 320 <span class="text-slate-400">for 2items</span></td>
                                        <td class="px-2 py-3 text-start"><a href="javascript:void(0)" class="text-orange-500">View <i class="mdi mdi-chevron-right"></i></a></td>
                                    </tr>

                                    <tr class="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
                                        <th class="px-2 py-3 text-start" scope="row">8007</th>
                                        <td class="px-2 py-3 text-start">4th November 2021</td>
                                        <td class="px-2 py-3 text-start text-slate-400">Processing</td>
                                        <td class="px-2 py-3 text-start">$ 800 <span class="text-slate-400">for 1item</span></td>
                                        <td class="px-2 py-3 text-start"><a href="javascript:void(0)" class="text-orange-500">View <i class="mdi mdi-chevron-right"></i></a></td>
                                    </tr>

                                    <tr class="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
                                        <th class="px-2 py-3 text-start" scope="row">8008</th>
                                        <td class="px-2 py-3 text-start">4th November 2021</td>
                                        <td class="px-2 py-3 text-start text-red-600">Canceled</td>
                                        <td class="px-2 py-3 text-start">$ 800 <span class="text-slate-400">for 1item</span></td>
                                        <td class="px-2 py-3 text-start"><a href="javascript:void(0)" class="text-orange-500">View <i class="mdi mdi-chevron-right"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import instance from "@/service";
import { useRoute } from 'vue-router';

const route = useRoute();
const artist = ref([])

const getArtist = function () {
	instance.get(`artist/artist/${route.params.slug}`)
		.then(async (response) => {
			console.log(response.data);
			artist.value = await response.data;
		})
		.catch(error => {
			console.log(error);
		});
};

onMounted(() => {
	getArtist()
})

</script>
