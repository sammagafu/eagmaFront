<template>
	<section
		class="py-28 w-full table relative bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat">
		<div class="absolute inset-0 bg-slate-900/50"></div>
		<div class="container mx-auto">
			<div class="grid grid-cols-1 pb-8 text-center mt-10 z-10">
				<h3 class="mb-3 font-medium leading-normal text-3xl mt-10 text-white">{{ blog.title }}</h3>
			</div>
		</div>
	</section>
	<div class="container mx-auto py-32">
		<div class="">
			<div data-scroll-item="" class="group c-active">
				<div class="relative bg-[#555]">
					<img class="w-full scale-y-0 group-[.c-active]:scale-y-100 group-[.c-active]:delay-[.5s] delay-0 transition-all duration-[.3s]"
						:src="blog.photo" alt="">
				</div>
			</div>
		</div>
		<div class="py-[25px]"></div>
		<div class="mb-[25px]">
			Aechitecture are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
			in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
			going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
			middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
			making this the first true generator.
		</div>
		<div class="mb-[25px]">
			Aechitecture are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
			in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
			going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
			middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
			making this the first true generator.
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute } from 'vue-router';
import instance from "@/service";

const currentParams = ref({});
const route = useRoute();
const blog = ref([])





const getNews = function () {
	instance.get(`blog/latest/${route.params.slug}`)
		.then(async (response) => {
			console.log(response.data);
			blog.value = await response.data;
		})
		.catch(error => {
			console.log(error);
		});
};

onMounted(() => {
	getNews()
})


</script>
