<template>
    <section
        class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative mx-auto">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-3 text-4xl leading-normal tracking-wider font-semibold text-white">Artists</h3>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <!-- <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link :to="{name:''}">EAGMA</router-link</li> -->
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link :to="{ name: 'home' }"></router-link>EAGMA</li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="pi pi-angle-double-right" style="font-size: 1rem"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                    aria-current="page">Artist</li>
            </ul>
        </div>
    </section>
    <section class="py-16">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-3">
            <div class="bg-gray-200 rounded-xl shadow-md overflow-hidden mt-6" v-for="artist in artist" :key="artist.index">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" :src="artist.photo" :alt="artist.name">
                    </div>
                    <div class="p-8">
                        <h1 class="text-2xl font-bold mb-2"><router-link :to="{name:'artistDetial',params: { slug:artist.slug } }">{{ artist.name }}</router-link></h1>
                        <p class="text-gray-500 mb-4">{{artist.gender}}</p>

                        <router-link class="text-white bg-[#C2922E] hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" :to="{name:'artistDetial',params: { slug:artist.slug } }">View Profile</router-link>
                        <!-- <a
                            href="#"
                            class="text-white bg-[#C2922E] hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                            >View Profile</a
                          > -->
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
const artist = ref([])


const getArtist = function () {
    instance.get("artist/artist/")
        .then(async (response) => {
            console.log(response.data);
            artist.value = await response.data;
            // categories.value = response.data.map(award => award.categories).flat();
        })
        .catch(error => {
            console.log(error);
        });
};

onMounted(() => {
    getArtist()
})
</script>
