<template>
  <!-- Artist Cards Section -->
  <div class="pt-[20px] xl:pt-[150px] pb-[150px] bg-black">
    <div class="max-w-[1350px] mx-auto px-[15px]">
      <Toast ref="toast" />
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-[60px]">
        <div class="xl:col-span-2">
          <div class="grid grid-cols-1 gap-6">
            <DataView :value="filteredNominees" :layout="layout" v-if="nomineesLoaded">
              <template #header>
                <div class="flex justify-end">
                  <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                    <template #option="{ option }">
                      <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                    </template>
                  </SelectButton>
                </div>
              </template>

              <!-- List View Template -->
              <template #list="slotProps">
                <div class="flex flex-col">
                  <div v-for="(item, index) in slotProps.items" :key="index">
                    <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                      <div class="md:w-40 relative">
                        <img class="block xl:block mx-auto rounded w-full" :src="item.artist.photo" :alt="item.artist.name" />
                      </div>
                      <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                          <div>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category.name }}</span>
                            <div class="text-lg font-medium mt-2">{{ item.artist.name }}</div>
                          </div>
                        </div>
                        <!-- <VoteButton :category="category" :artist="artist"/> -->
                      </div>

                      <div class="flex flex-row-reverse md:flex-col gap-2">
                        <!-- <Button label="view" class="bg-slate-800 text-white px-4 py-1" link=""></Button> -->
                        <VoteButton :category="item.category" :artist="item.artist" :award="item.award.id"/>
                        <ArtistProfile :slug="item.artist.slug"/>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </template>

              <!-- Grid View Template -->
              <template #grid="slotProps">
                <div class="grid grid-cols-12 gap-4">
                  <div v-for="(item, index) in slotProps.items" :key="index" class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
                    <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
                      <div class="bg-surface-50 flex justify-center rounded p-4">
                        <div class="relative mx-auto">
                          <img class="rounded w-full" :src="item.artist.photo" :alt="item.artist.name" />
                        </div>
                      </div>
                      <div class="pt-6">
                        <div class="flex flex-row justify-between items-start gap-2">
                          <div>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category.name }}</span>
                            <div class="text-lg font-medium mt-1">{{ item.artist.name }}</div>
                          </div>
                          <!-- <Button label="Vote" @click="voteForNominee(item.id)" /> -->
                        </div>
                      </div>

                      <div class="flex flex-col gap-2 mt-2">
                              <!-- <Button label="view" class="bg-slate-800 text-white px-4 py-1"></Button> -->
                              <VoteButton :category="item.category" :artist="item.artist" :award="item.award.id"/>
                              <ArtistProfile :slug="item.artist.slug"/>
                        </div>
                    </div>
                  </div>
                </div>
              </template>
            </DataView>
            <DataView :value="[1, 2, 3, 4, 5, 6]" :layout="layout" v-else>
              <template #header>
                <div class="flex justify-end">
                  <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                    <template #option="{ option }">
                      <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                    </template>
                  </SelectButton>
                </div>
              </template>

              <template #list>
                <div class="flex flex-col">
                  <div v-for="i in 6" :key="i">
                    <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                      <div class="md:w-40 relative">
                        <Skeleton class="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                      </div>
                      <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                          <div>
                            <Skeleton width="8rem" height="2rem" />
                            <Skeleton width="6rem" height="1rem" />
                          </div>
                        </div>
                        <Skeleton width="4rem" height="2rem" />
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <template #grid>
                <div class="grid grid-cols-12 gap-4">
                  <div v-for="i in 6" :key="i" class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
                    <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
                      <div class="bg-surface-50 flex justify-center rounded p-4">
                        <Skeleton width="75%" height="10rem" />
                      </div>
                      <div class="pt-6">
                        <div class="flex flex-row justify-between items-start gap-2">
                          <Skeleton width="8rem" height="2rem" />
                          <Skeleton width="6rem" height="1rem" />
                        </div>
                        <Skeleton width="4rem" height="2rem" />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </DataView>
          </div>
        </div>
        <div class="hidden xl:block">
          <div class="bg-primary p-[30px] mb-[60px] text-white rounded-xl">
            <div class="text-white text-[26px] leading-[26px] font-medium mb-[40px]">Filter By Category</div>
            <button @click="filterByCategory('all')" class="flex items-center justify-between hover:text-[#ff5100] py-2">
              <div class="flex items-center">
                <div class="me-[10px]"><i class="pi pi-angle-double-right"></i></div>
                <div>View all</div>
              </div>
            </button>
            <div class="py-2" v-for="category in categories" :key="category.id">
              <button @click="filterByCategory(category.id)" class="flex items-center justify-between hover:text-[#ff5100]">
                <div class="flex items-center">
                  <div class="me-[10px]"><i class="pi pi-angle-double-right"></i></div>
                  <div>{{ category.name }}</div>
                </div>
                <div class="mx-6">( {{ getNomineeCountByCategory(category.id) }} )</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <section class="py-16">
    <div class="container mx-auto"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import instance from '@/service';  // Assuming this is set up for API requests
import DataView from 'primevue/dataview';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import Skeleton from 'primevue/skeleton';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import ArtistProfile from '@/components/ArtistProfile.vue';
import VoteButton from '@/components/VoteButton.vue';

// Variables
const nominees = ref([]);
const categories = ref([]);
const selectedCategoryId = ref(null);
const layout = ref('grid');
const options = ref(['list', 'grid']);
const nomineesLoaded = ref(false);
const toast = useToast();

// Methods
const getArtists = async () => {
  try {
    const response = await instance.get("nominees/");
    nominees.value = response.data;
    categories.value = Array.from(new Set(nominees.value.map(nominee => nominee.category)));
    nomineesLoaded.value = true;
  } catch (error) {
    console.error(error);
  }
};

const filterByCategory = (categoryId) => {
  if (categoryId === 'all') {
    selectedCategoryId.value = null;
  } else {
    selectedCategoryId.value = categoryId;
  }
};

const getNomineeCountByCategory = (categoryId) => {
  return nominees.value.filter(nominee => nominee.category.id === categoryId).length;
};

const voteForNominee = async (nomineeId) => {
  try {
    const response = await instance.post(`nominees/${nomineeId}/vote/`);
    toast.add({ severity: 'success', summary: 'Vote Successful', detail: `Voted for nominee with ID: ${nomineeId}`, life: 3000 });
    console.log(response.data); // Log response data for debugging
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.add({ severity: 'warn', summary: 'Vote Failed', detail: 'You have already voted in this category.', life: 3000 });
    } else {
      toast.add({ severity: 'error', summary: 'Vote Failed', detail: `Failed to vote for nominee with ID: ${nomineeId}`, life: 3000 });
    }
    console.error(error);
  }
};

// Computed property to filter nominees based on selected category
const filteredNominees = computed(() => {
  if (!selectedCategoryId.value) return nominees.value;
  return nominees.value.filter(nominee => nominee.category.id === selectedCategoryId.value);
});

// Lifecycle hook
onMounted(() => {
  getArtists();
});
</script>
