<template>
        <section
        class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative mx-auto">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-3 text-4xl leading-normal tracking-wider font-semibold text-white">HOW TO VOTE</h3>
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
                    aria-current="page">How to vote</li>
            </ul>
        </div>
    </section>
    <div class="container mx-auto py-48">
        <div class="grid grid-cols-1 gap-[40px] align-content: center;">
            <div class="py-2">
                <h2 class="mb-3 text-4xl leading-normal tracking-wider font-semibold">Login to Your Account</h2>
                <p class="py-2">Start by logging into your account on the official EAGMA Awards website. If you’re new, don’t worry! You can easily create an account using your email or social media.</p>
                <img src="@/assets/img/howto/login.jpg" alt="">
            </div>
            <div class="py-2">
                <h2 class="mb-3 text-4xl leading-normal tracking-wider font-semibold">Navigate to the Nominees Section</h2>
                <p class="py-2"> Once you’re logged in, head to the nominees section. You can find this through the main menu or directly on the homepage. This is where you’ll see all the artists and categories up for voting.</p>
                <img src="@/assets/img/howto/login.jpg" alt="">
            </div>
            <div class="py-2">
                <h2 class="mb-3 text-4xl leading-normal tracking-wider font-semibold">Choose Your Favorite Artist</h2>
                <p class="py-2">Browse through the list of nominees in each category. Take your time to explore their profiles, music, and contributions. When you find the artist you want to support, click on their name.</p>
                <img src="@/assets/img/howto/login.jpg" alt="">
            </div>
            <div class="py-2">
                <h2 class="mb-3 text-4xl leading-normal tracking-wider font-semibold">Cast Your Vote</h2>
                <p class="py-2">After selecting your artist, click the “Vote” button. You may be asked to confirm your vote—make sure everything looks good, then submit! Your vote is now counted.</p>
                <img src="@/assets/img/howto/vote.jpg" alt="">
            </div>
        </div>
    </div>
</template>