<template>
  <div class="pt-[20px] xl:pt-[150px] pb-[150px]">
    <div class="max-w-[1350px] mx-auto px-[15px]">
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-[60px]">
        <div class="xl:col-span-2">
          <div class="grid grid-cols-1 gap-[100px]">
            <div class="" v-for="blog in blogdata" :key="blog.index">
              <div class="mt-[35px] mb-[10px] font-semibold">{{ blog.created_at}}</div>
              <div class="text-[#C2922E] text-[26px] leading-[1.3] font-bold">
                <div class="">
                  {{blog.title}}
                </div>
              </div>
              <div class="mt-[15px] mb-[25px]">
                <div class="inline md:block">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything
                </div>
                <div class="inline md:block">
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to
                </div>
                <div class="">
                  repeat predefined chunks. If you are going to use a passage of Lorem
                  Ipsum.
                </div>
              </div>
              <div class="flex justify-start">
                <router-link :to="{ name: 'blog-post', params: { slug:blog.slug } }" class="group flex items-center gap-[10px]">
                  <div
                    class="relative text-[#101010] text-[16px] leading-[1] font-['Space_Grotesk'] font-bold"
                  >
                    <div
                      class="text-[#C2922E] absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 group-hover:scale-y-100 transition-all duration-[.3s]"
                    >
                      READ MORE
                    </div>
                    <div
                      class="origin-bottom scale-y-100 group-hover:scale-y-0 transition-all duration-[.3s]"
                    >
                      READ MORE
                    </div>
                  </div>
                  <div class="relative">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 origin-bottom scale-y-0 group-hover:scale-y-100 transition-all duration-[.3s]"
                    >
                      <img
                        class="invert"
                        src="../assets/img/portfolio-arrow.svg"
                        alt=""
                      />
                    </div>
                    <div
                      class="origin-top scale-y-100 group-hover:scale-y-0 transition-all duration-[.3s]"
                    >
                      <img
                        class="invert"
                        src="../assets/img/portfolio-arrow.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden xl:block">
          <form action="#" class="group relative">
            <div
              class="absolute top-0 right-0 left-0 h-1/2 grid grid-cols-6 overflow-hidden"
            >
              <div
                class="bg-[#101010] origin-top rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-0 delay-[.5s] transition-all duration-[.3s]"
              ></div>
              <div
                class="bg-[#101010] origin-top rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-[.1s] delay-[.4s] transition-all duration-[.3s]"
              ></div>
              <div
                class="bg-[#101010] origin-top rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-[.2s] delay-[.3s] transition-all duration-[.3s]"
              ></div>
              <div
                class="bg-[#101010] origin-top rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-[.3s] delay-[.2s] transition-all duration-[.3s]"
              ></div>
              <div
                class="bg-[#101010] origin-top rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-[.4s] delay-[.1s] transition-all duration-[.3s]"
              ></div>
              <div
                class="bg-[#101010] origin-top rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-[.5s] delay-0 transition-all duration-[.3s]"
              ></div>
            </div>
            <div
              class="absolute right-0 bottom-0 left-0 h-1/2 grid grid-cols-6 overflow-hidden"
            >
              <div
                class="bg-[#101010] origin-bottom rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-0 delay-[.5s] transition-all duration-[.3s]"
              ></div>
              <div
                class="bg-[#101010] origin-bottom rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-[.1s] delay-[.4s] transition-all duration-[.3s]"
              ></div>
              <div
                class="bg-[#101010] origin-bottom rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-[.2s] delay-[.3s] transition-all duration-[.3s]"
              ></div>
              <div
                class="bg-[#101010] origin-bottom rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-[.3s] delay-[.2s] transition-all duration-[.3s]"
              ></div>
              <div
                class="bg-[#101010] origin-bottom rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-[.4s] delay-[.1s] transition-all duration-[.3s]"
              ></div>
              <div
                class="bg-[#101010] origin-bottom rotate-45 scale-y-0 group-hover:rotate-0 group-hover:scale-y-100 group-hover:delay-[.5s] delay-0 transition-all duration-[.3s]"
              ></div>
            </div>
            <div
              class="relative flex justify-between items-center border-[1px] border-[#dee2e6]"
            >
              <input
                type="text"
                class="h-[70px] px-[30px] bg-transparent focus:outline-none group-hover:text-white group-hover:placeholder-white group-hover:delay-[.5s] delay-0 transition-all duration-[.3s]"
                placeholder="Search..."
              />
              <button class="w-[70px] flex justify-center">
                <i class="pi pi-search"></i>
              </button>
            </div>
          </form>
          <div class="py-[30px]"></div>
          <div class="bg-white p-[30px] mb-[60px]">
								<div class="text-[#171a1d] text-[26px] leading-[26px] font-medium mb-[40px]">Categories</div>
                <div class="py-4" 
                v-for="blog in blog"
                :key="blog.index" >
								<router-link :to="{name:''}" class="flex items-center justify-between hover:text-[#ff5100]">
                  <div class="flex items-center">
										<div class="me-[10px]"><i class="pi pi-angle-double-right"></i></div>
										<div class="">{{blog.name}}</div>
									</div>
									<div class="">{{blog.blogpost_set.length}}</div>
                </router-link>
              </div>
							</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import instance from "@/service";
const blog = ref([])
const blogdata = ref([])

const getNews = function(){
  instance.get("blog/")
  .then(async(response) => {
    console.log(response.data);
    blog.value = await response.data;
    blogdata.value = response.data.map(blog => blog.blogpost_set).flat();
  })
  .catch(error => {
    console.log(error);
  });
};

onMounted(() => {
  getNews()
})
</script>