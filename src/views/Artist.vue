<template>
    <div class="bg-black pt-[20px] xl:pt-[150px] pb-[150px]">
        <div class="max-w-[1350px] mx-auto px-[15px]">
            <div class="card">
                <DataView :value="loading ? [] : artist" :layout="layout">
                    <template #header>
                        <div class="flex justify-end">
                            <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                                <template #option="{ option }">
                                    <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                                </template>
                            </SelectButton>
                        </div>
                    </template>

                    <!-- List View -->
                    <template #list="slotProps">
                        <div v-if="loading" class="flex flex-col">
                            <!-- Placeholder skeleton loader for list view -->
                            <div v-for="i in 6" :key="i">
                                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4 border-t border-surface-200 dark:border-surface-700">
                                    <Skeleton class="md:w-40 h-40 rounded" />
                                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                        <Skeleton class="h-6 w-48" />
                                        <Skeleton class="h-6 w-32" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="flex flex-col">
                            <!-- Actual list content -->
                            <div v-for="(item, index) in slotProps.items" :key="index">
                                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                                    :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                                    <div class="md:w-40 relative">
                                        <img class="block xl:block mx-auto rounded w-full" :src="item.get_photo"
                                            :alt="item.name" />
                                        <Tag :value="item.gender" severity="info" class="absolute bg-primary"
                                            style="left: 4px; top: 4px"></Tag>
                                    </div>
                                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                            <div>
                                                <div class="text-lg font-medium mt-2 text-primary-dark">{{ item.name }}</div>
                                            </div>
                                        </div>
                                        <div class="p-2">
                                            <ArtistProfile :slug="item.slug"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                    <!-- Grid View -->
                    <template #grid="slotProps">
                        <div v-if="loading" class="grid grid-cols-12 gap-4">
                            <!-- Placeholder skeleton loader for grid view -->
                            <div v-for="i in 6" :key="i" class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4 p-2">
                                <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
                                    <Skeleton class="h-64 w-full rounded" />
                                    <Skeleton class="h-6 w-48 mt-4" />
                                    <Skeleton class="h-6 w-32 mt-2" />
                                </div>
                            </div>
                        </div>
                        <div v-else class="grid grid-cols-12 gap-12 bg-black pt-8">
                            <!-- Actual grid content -->
                            <div v-for="(item, index) in slotProps.items" :key="index"
                                class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4">
                                <div
                                    class="flex flex-col bg-alternate">
                                    <div class="flex justify-center">
                                        <div class="relative mx-auto w-full h-72 overflow-hidden">
                                            <img class="" :src="item.get_photo" :alt="item.name" />
                                            <Tag :value="item.gender" severity="info"
                                                class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></Tag>
                                        </div>
                                    </div>
                                    <div class="pt-6 px-4">
                                        <div class="flex flex-row justify-between items-start gap-2">
                                            <div>
                                                <div class="text-xl font-semibold mt-1 text-black uppercase">{{ item.name }}</div>
                                            </div>
                                        </div>
                                        <div class="my-8">
                                            <ArtistProfile :slug="item.slug"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import instance from "@/service";
import DataView from 'primevue/dataview';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';
import Skeleton from 'primevue/skeleton';
import ArtistProfile from '@/components/ArtistProfile.vue';

const artist = ref([]);
const layout = ref('grid');
const options = ref(['list', 'grid']);
const loading = ref(true); // Add a loading state

const getArtist = () => {
    instance.get("artist/artist/")
        .then(async (response) => {
            artist.value = await response.data;
            loading.value = false; // Set loading to false once data is fetched
        })
        .catch(error => {
            console.log(error);
            loading.value = false; // Set loading to false even if there's an error
        });
};

onMounted(() => {
    getArtist();
});
</script>
