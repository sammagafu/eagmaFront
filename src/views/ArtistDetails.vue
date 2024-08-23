<template>
    <section
        class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative mx-auto">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-3 text-4xl leading-normal tracking-wider font-semibold text-white">{{ artist.name }}</h3>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <!-- <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link :to="{name:''}">EAGMA</router-link</li> -->
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link :to="{ name: 'home' }"></router-link>EAGMA
                </li>
                <li class="inline-block text-base text-white/50 mx-2 ltr:rotate-0 rtl:rotate-180"><i
                        class="pi pi-angle-double-right" style="font-size: 1rem"></i></li>
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link :to="{ name: 'artist' }"></router-link>Artist
                </li>
                <li class="inline-block text-base text-white/50 mx-2 ltr:rotate-0 rtl:rotate-180"><i
                        class="pi pi-angle-double-right" style="font-size: 1rem"></i></li>

                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                    aria-current="page">{{ artist.name }}</li>
            </ul>
        </div>
    </section>
    <section class="py-36">
        <div class="container mx-auto">
            <div class="md:container container-fluid relative">
                <div
                    class="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-[url('@/assets/img/banner/slider-2.jpg')] bg-center bg-no-repeat bg-cover blur-sm">
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="md:flex">
                    <div class="lg:w-1/4 md:w-1/3 md:px-3">
                        <div class="relative md:-mt-48 -mt-32">
                            <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                <div class="profile-pic text-center mb-5">
                                    <div>
                                        <div class="relative h-28 w-28 mx-auto">
                                            <img :src="artist.get_photo"
                                                class="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                                                id="profile-image" alt="">
                                            <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                                        </div>

                                        <div class="mt-4">
                                            <h5 class="text-lg font-semibold text-slate-400">{{ artist.name }}</h5>
                                            <p class="text-slate-400">{{ artist.gender }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-3/4 md:w-2/3 md:px-3 md:mt-0">
                        <div class="py-2" v-html="artist.bio"></div>
                        <h5 class="text-lg font-semibold my-6">Albums</h5>
                        <div class="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                            <Accordion :multiple="true">
                                <AccordionTab v-for="album in artist.albums" :key="album.id" :header="album.name">
                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table
                                            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead
                                                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        Song Name
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Release Date
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Audio
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Video
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                                    v-for="song in album.songs" :key="song.id">
                                                    <th scope="row"
                                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {{ song.title }}
                                                    </th>
                                                    <th scope="row"
                                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {{ song.release_date }}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        <a :href="song.audio_file" target="_blank"><i class="pi pi-play"
                                                                style="color: slateblue"></i></a>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a :href="song.video_link" target="_blank"><i
                                                                class="pi pi-video" style="color: slateblue"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- <ul>
                                        <li v-for="song in album.songs" :key="song.id">
                                           
                                        </li>
                                    </ul> -->
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

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
