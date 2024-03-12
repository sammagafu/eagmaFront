<template>
    <section
        class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative mx-auto">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-3 text-4xl leading-normal tracking-wider font-semibold text-white">Board of Directors</h3>
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
                    aria-current="page">Board of Directors</li>
            </ul>
        </div>
    </section>

    <div class="py-32 container mx-auto">
        <div class="card overflow-x-auto">
            <OrganizationChart :value="data" collapsible>
                <template #person="slotProps">
                    <div class="flex flex-column">
                        <div class="flex flex-column align-items-center">
                            <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                        </div>
                    </div>
                </template>
                <template #default="slotProps">
                    <span>{{ slotProps.node.label }}</span>
                </template>
            </OrganizationChart>
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