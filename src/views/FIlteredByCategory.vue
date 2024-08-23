<template>
	<section
		class="py-28 w-full table relative bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat">
		<div class="absolute inset-0 bg-slate-900/50"></div>
		<div class="container mx-auto">
			<div class="grid grid-cols-1 pb-8 text-center mt-10 z-10">
				<h3 class="mb-3 font-medium leading-normal text-3xl mt-10 text-white"></h3>
			</div>
		</div>
	</section>
    <div v-for="(entry, index) in nominees" :key="index">
        <h3>Artist: {{ entry.artist.name }}</h3>
        <p>Award Name: {{ entry.award.name }}</p>
        <hr>
      </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute } from 'vue-router';
import instance from "@/service";

const currentParams = ref({});
const route = useRoute();
const nominees = ref([])





const getNews = function () {
	instance.get(`nominees/category/${route.params.slug}`)
		.then(async (response) => {
			console.log(response.data);
			nominees.value = await response.data;
		})
		.catch(error => {
			console.log(error);
		});
};

onMounted(() => {
	getNews()
})


</script>
