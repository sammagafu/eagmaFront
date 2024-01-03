<template>
  <div class="pt-[20px] xl:pt-[150px] pb-[150px]">
    <div class="max-w-[1350px] mx-auto px-[15px]">
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-[60px]">
        <div class="xl:col-span-2">
          <div class="grid grid-cols-1 gap-[100px]">
            <div class="" v-for="index in 4" :key="index">
              <div data-scroll="[data-scroll-item]" class="">
                <div data-scroll-cog="" class="hidden">
                  { "scrollTrigger": { "trigger": "[data-scroll-item]" } }
                </div>
                <div data-scroll-item="" class="group c-active">
                  <div class="relative bg-[#555]">
                    <img
                      class="w-full scale-y-0 group-[.c-active]:scale-y-100 group-[.c-active]:delay-[.5s] delay-0 transition-all duration-[.3s]"
                      src="../assets/img/banner/slider-1.jpg"
                      alt=""
                    />
                    <div
                      class="absolute top-0 right-0 left-0 h-1/2 grid grid-cols-6 overflow-hidden"
                    >
                      <div
                        class="bg-white origin-top group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-0 delay-[.5s] transition-all duration-[.3s]"
                      ></div>
                      <div
                        class="bg-white origin-top group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.4s] transition-all duration-[.3s]"
                      ></div>
                      <div
                        class="bg-white origin-top group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.3s] transition-all duration-[.3s]"
                      ></div>
                      <div
                        class="bg-white origin-top group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.2s] transition-all duration-[.3s]"
                      ></div>
                      <div
                        class="bg-white origin-top group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-[.1s] transition-all duration-[.3s]"
                      ></div>
                      <div
                        class="bg-white origin-top group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.5s] delay-0 transition-all duration-[.3s]"
                      ></div>
                    </div>
                    <div
                      class="absolute right-0 bottom-0 left-0 h-1/2 grid grid-cols-6 overflow-hidden"
                    >
                      <div
                        class="bg-white origin-bottom group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-0 delay-[.5s] transition-all duration-[.3s]"
                      ></div>
                      <div
                        class="bg-white origin-bottom group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.4s] transition-all duration-[.3s]"
                      ></div>
                      <div
                        class="bg-white origin-bottom group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.3s] transition-all duration-[.3s]"
                      ></div>
                      <div
                        class="bg-white origin-bottom group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.2s] transition-all duration-[.3s]"
                      ></div>
                      <div
                        class="bg-white origin-bottom group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-[.1s] transition-all duration-[.3s]"
                      ></div>
                      <div
                        class="bg-white origin-bottom group-[.c-active]:rotate-45 group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.5s] delay-0 transition-all duration-[.3s]"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-[35px] mb-[10px] font-semibold">14 Mar, 2023</div>
              <div class="text-[#C2922E] text-[26px] leading-[1.3] font-bold">
                <div class="">
                  From Concept to Reality, The Journey of a Successful Concept Interior
                  Design.
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
                <a href="#" class="group flex items-center gap-[10px]">
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
                </a>
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
          <div class="bg-[#f4f3f1] pt-[20px] pb-[50px] px-[30px]">
            <div
              class="text-[#101010] text-[26px] leading-[1.3] font-['Space_Grotesk'] font-bold mt-[15px] mb-[30px]"
            >
              Popular Category
            </div>
            <div data-scroll="[data-scroll-item]" class="">
              <div data-scroll-cog="" class="hidden">
                { "scrollTrigger": { "trigger": "[data-scroll-item]" } }
              </div>
              <div data-scroll-item="" class="group">
                <div class="flex gap-[5px]">
                  <div class="relative">
                    <div
                      class="text-[#f68a0a] absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-0 delay-[.5s] transition-all duration-[.3s]"
                    >
                      01/
                    </div>
                    <div
                      class="origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-0 delay-[.5s] transition-all duration-[.3s]"
                    >
                      01/
                    </div>
                  </div>
                  <div class="relative">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-0 delay-[.5s] transition-all duration-[.3s]"
                    >
                      Architecture Design
                    </div>
                    <div
                      class="text-[#f68a0a] origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-0 delay-[.5s] transition-all duration-[.3s]"
                    >
                      Architecture Design
                    </div>
                  </div>
                </div>
                <div class="border-t-[1px] border-t-[#dee2e6] my-[15px]"></div>
                <div class="flex gap-[5px]">
                  <div class="relative">
                    <div
                      class="text-[#f68a0a] absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-[.1s] delay-[.4s] transition-all duration-[.3s]"
                    >
                      02/
                    </div>
                    <div
                      class="origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-[.1s] delay-[.4s] transition-all duration-[.3s]"
                    >
                      02/
                    </div>
                  </div>
                  <div class="relative">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-[.1s] delay-[.4s] transition-all duration-[.3s]"
                    >
                      Interior Design
                    </div>
                    <div
                      class="text-[#f68a0a] origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-[.1s] delay-[.4s] transition-all duration-[.3s]"
                    >
                      Interior Design
                    </div>
                  </div>
                </div>
                <div class="border-t-[1px] border-t-[#dee2e6] my-[15px]"></div>
                <div class="flex gap-[5px]">
                  <div class="relative">
                    <div
                      class="text-[#f68a0a] absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-[.2s] delay-[.3s] transition-all duration-[.3s]"
                    >
                      03/
                    </div>
                    <div
                      class="origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-[.2s] delay-[.3s] transition-all duration-[.3s]"
                    >
                      03/
                    </div>
                  </div>
                  <div class="relative">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-[.2s] delay-[.3s] transition-all duration-[.3s]"
                    >
                      Luxury Interior Design
                    </div>
                    <div
                      class="text-[#f68a0a] origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-[.2s] delay-[.3s] transition-all duration-[.3s]"
                    >
                      Luxury Interior Design
                    </div>
                  </div>
                </div>
                <div class="border-t-[1px] border-t-[#dee2e6] my-[15px]"></div>
                <div class="flex gap-[5px]">
                  <div class="relative">
                    <div
                      class="text-[#f68a0a] absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-[.3s] delay-[.2s] transition-all duration-[.3s]"
                    >
                      04/
                    </div>
                    <div
                      class="origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-[.3s] delay-[.2s] transition-all duration-[.3s]"
                    >
                      04/
                    </div>
                  </div>
                  <div class="relative">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-[.3s] delay-[.2s] transition-all duration-[.3s]"
                    >
                      Office Interior Design
                    </div>
                    <div
                      class="text-[#f68a0a] origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-[.3s] delay-[.2s] transition-all duration-[.3s]"
                    >
                      Office Interior Design
                    </div>
                  </div>
                </div>
                <div class="border-t-[1px] border-t-[#dee2e6] my-[15px]"></div>
                <div class="flex gap-[5px]">
                  <div class="relative">
                    <div
                      class="text-[#f68a0a] absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-[.4s] delay-[.1s] transition-all duration-[.3s]"
                    >
                      05/
                    </div>
                    <div
                      class="origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-[.4s] delay-[.1s] transition-all duration-[.3s]"
                    >
                      05/
                    </div>
                  </div>
                  <div class="relative">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-[.4s] delay-[.1s] transition-all duration-[.3s]"
                    >
                      Home Decoration
                    </div>
                    <div
                      class="text-[#f68a0a] origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-[.4s] delay-[.1s] transition-all duration-[.3s]"
                    >
                      Home Decoration
                    </div>
                  </div>
                </div>
                <div class="border-t-[1px] border-t-[#dee2e6] my-[15px]"></div>
                <div class="flex gap-[5px]">
                  <div class="relative">
                    <div
                      class="text-[#f68a0a] absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-[.5s] delay-0 transition-all duration-[.3s]"
                    >
                      06/
                    </div>
                    <div
                      class="origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-[.5s] delay-0 transition-all duration-[.3s]"
                    >
                      06/
                    </div>
                  </div>
                  <div class="relative">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 origin-left scale-x-0 group-[.c-active]:scale-x-100 group-[.c-active]:delay-[.5s] delay-0 transition-all duration-[.3s]"
                    >
                      House Exterior Design
                    </div>
                    <div
                      class="text-[#f68a0a] origin-right scale-x-100 group-[.c-active]:scale-x-0 group-[.c-active]:delay-[.5s] delay-0 transition-all duration-[.3s]"
                    >
                      House Exterior Design
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-[30px]"></div>
          <div class="bg-[#f4f3f1] pt-[10px] pb-[50px] px-[30px]">
            <div
              class="text-[#101010] text-[26px] leading-[1.3] font-['Space_Grotesk'] font-bold mt-[15px] mb-[30px]"
            >
              Popular Tags
            </div>
            <div class="flex flex-wrap gap-[20px]">
              <a
                href="#"
                class="group/btn h-[50px] w-[100px] flex items-center justify-center bg-white relative"
              >
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-5 overflow-hidden"
                >
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.6s] delay-0 transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.5s] delay-[.1s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.4s] delay-[.2s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.3s] delay-[.3s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.2s] delay-[.4s] transition-all duration-[.3s]"
                  ></div>
                </div>
                <div class="relative text-[16px]">
                  <div
                    class="text-white absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-y-100 group-hover/btn:delay-[.1s] delay-[.5s] transition-all duration-[.3s]"
                  >
                    Interior
                  </div>
                  <div
                    class="origin-bottom scale-y-100 group-hover/btn:scale-y-0 group-hover/btn:delay-0 delay-[.6s] transition-all duration-[.3s]"
                  >
                    Interior
                  </div>
                </div>
              </a>
              <a
                href="#"
                class="group/btn h-[50px] w-[150px] flex items-center justify-center bg-white relative"
              >
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-5 overflow-hidden"
                >
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.6s] delay-0 transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.5s] delay-[.1s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.4s] delay-[.2s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.3s] delay-[.3s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.2s] delay-[.4s] transition-all duration-[.3s]"
                  ></div>
                </div>
                <div class="relative text-[16px]">
                  <div
                    class="text-white absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-y-100 group-hover/btn:delay-[.1s] delay-[.5s] transition-all duration-[.3s]"
                  >
                    Architecture
                  </div>
                  <div
                    class="origin-bottom scale-y-100 group-hover/btn:scale-y-0 group-hover/btn:delay-0 delay-[.6s] transition-all duration-[.3s]"
                  >
                    Architecture
                  </div>
                </div>
              </a>
              <a
                href="#"
                class="group/btn h-[50px] w-[110px] flex items-center justify-center bg-white relative"
              >
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-5 overflow-hidden"
                >
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.6s] delay-0 transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.5s] delay-[.1s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.4s] delay-[.2s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.3s] delay-[.3s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.2s] delay-[.4s] transition-all duration-[.3s]"
                  ></div>
                </div>
                <div class="relative text-[16px]">
                  <div
                    class="text-white absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-y-100 group-hover/btn:delay-[.1s] delay-[.5s] transition-all duration-[.3s]"
                  >
                    Design
                  </div>
                  <div
                    class="origin-bottom scale-y-100 group-hover/btn:scale-y-0 group-hover/btn:delay-0 delay-[.6s] transition-all duration-[.3s]"
                  >
                    Design
                  </div>
                </div>
              </a>
              <a
                href="#"
                class="group/btn h-[50px] w-[120px] flex items-center justify-center bg-white relative"
              >
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-5 overflow-hidden"
                >
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.6s] delay-0 transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.5s] delay-[.1s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.4s] delay-[.2s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.3s] delay-[.3s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.2s] delay-[.4s] transition-all duration-[.3s]"
                  ></div>
                </div>
                <div class="relative text-[16px]">
                  <div
                    class="text-white absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-y-100 group-hover/btn:delay-[.1s] delay-[.5s] transition-all duration-[.3s]"
                  >
                    Furniture
                  </div>
                  <div
                    class="origin-bottom scale-y-100 group-hover/btn:scale-y-0 group-hover/btn:delay-0 delay-[.6s] transition-all duration-[.3s]"
                  >
                    Furniture
                  </div>
                </div>
              </a>
              <a
                href="#"
                class="group/btn h-[50px] w-[100px] flex items-center justify-center bg-white relative"
              >
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-5 overflow-hidden"
                >
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.6s] delay-0 transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.5s] delay-[.1s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.4s] delay-[.2s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.3s] delay-[.3s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.2s] delay-[.4s] transition-all duration-[.3s]"
                  ></div>
                </div>
                <div class="relative text-[16px]">
                  <div
                    class="text-white absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-y-100 group-hover/btn:delay-[.1s] delay-[.5s] transition-all duration-[.3s]"
                  >
                    Office
                  </div>
                  <div
                    class="origin-bottom scale-y-100 group-hover/btn:scale-y-0 group-hover/btn:delay-0 delay-[.6s] transition-all duration-[.3s]"
                  >
                    Office
                  </div>
                </div>
              </a>
              <a
                href="#"
                class="group/btn h-[50px] w-[100px] flex items-center justify-center bg-white relative"
              >
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-5 overflow-hidden"
                >
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.6s] delay-0 transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.5s] delay-[.1s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.4s] delay-[.2s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.3s] delay-[.3s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.2s] delay-[.4s] transition-all duration-[.3s]"
                  ></div>
                </div>
                <div class="relative text-[16px]">
                  <div
                    class="text-white absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-y-100 group-hover/btn:delay-[.1s] delay-[.5s] transition-all duration-[.3s]"
                  >
                    Flat
                  </div>
                  <div
                    class="origin-bottom scale-y-100 group-hover/btn:scale-y-0 group-hover/btn:delay-0 delay-[.6s] transition-all duration-[.3s]"
                  >
                    Flat
                  </div>
                </div>
              </a>
              <a
                href="#"
                class="group/btn h-[50px] w-[100px] flex items-center justify-center bg-white relative"
              >
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-5 overflow-hidden"
                >
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.6s] delay-0 transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.5s] delay-[.1s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.4s] delay-[.2s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.3s] delay-[.3s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.2s] delay-[.4s] transition-all duration-[.3s]"
                  ></div>
                </div>
                <div class="relative text-[16px]">
                  <div
                    class="text-white absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-y-100 group-hover/btn:delay-[.1s] delay-[.5s] transition-all duration-[.3s]"
                  >
                    Door
                  </div>
                  <div
                    class="origin-bottom scale-y-100 group-hover/btn:scale-y-0 group-hover/btn:delay-0 delay-[.6s] transition-all duration-[.3s]"
                  >
                    Door
                  </div>
                </div>
              </a>
              <a
                href="#"
                class="group/btn h-[50px] w-[100px] flex items-center justify-center bg-white relative"
              >
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-5 overflow-hidden"
                >
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.6s] delay-0 transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.5s] delay-[.1s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.4s] delay-[.2s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.3s] delay-[.3s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.2s] delay-[.4s] transition-all duration-[.3s]"
                  ></div>
                </div>
                <div class="relative text-[16px]">
                  <div
                    class="text-white absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-y-100 group-hover/btn:delay-[.1s] delay-[.5s] transition-all duration-[.3s]"
                  >
                    Gallery
                  </div>
                  <div
                    class="origin-bottom scale-y-100 group-hover/btn:scale-y-0 group-hover/btn:delay-0 delay-[.6s] transition-all duration-[.3s]"
                  >
                    Gallery
                  </div>
                </div>
              </a>
              <a
                href="#"
                class="group/btn h-[50px] w-[100px] flex items-center justify-center bg-white relative"
              >
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-5 overflow-hidden"
                >
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.6s] delay-0 transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.5s] delay-[.1s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.4s] delay-[.2s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.3s] delay-[.3s] transition-all duration-[.3s]"
                  ></div>
                  <div
                    class="bg-[#101010] origin-bottom scale-y-0 rotate-45 group-hover/btn:rotate-0 group-hover/btn:scale-y-100 group-hover/btn:delay-[.2s] delay-[.4s] transition-all duration-[.3s]"
                  ></div>
                </div>
                <div class="relative text-[16px]">
                  <div
                    class="text-white absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-y-100 group-hover/btn:delay-[.1s] delay-[.5s] transition-all duration-[.3s]"
                  >
                    Urban
                  </div>
                  <div
                    class="origin-bottom scale-y-100 group-hover/btn:scale-y-0 group-hover/btn:delay-0 delay-[.6s] transition-all duration-[.3s]"
                  >
                    Urban
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
