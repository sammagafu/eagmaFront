<template>
    <section
        class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative mx-auto">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-3 text-4xl leading-normal tracking-wider font-semibold text-white">How to Volunteer
                </h3>
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
                    aria-current="page">How to Volunteer</li>
            </ul>
        </div>
    </section>
    <div class="container mx-auto py-12">
        <div class="grid grid-cols-1 gap-[40px] align-content: center;">
            <div class="py-2">
                <p class="py-2">Are you passionate about music and want to make a difference in the industry? Volunteering with the East Africa Gospel Music Awards (EAGMA) is your chance to contribute to the growth and celebration of gospel music across East Africa. Whether you have a talent for event management, social media, marketing, or just a passion for helping out, EAGMA offers a platform to showcase your skills while making a positive impact.</p>
            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">How to Get Involved</h2>
                <p>Express Your Interest: Let us know why you’re excited to volunteer with EAGMA! Tell us about your skills, experience, and how you’d like to contribute to our events.</p>

            </div>
            <div class="py-2">
                <h2 class="leading-normal tracking-wider font-semibold">Email Us: Send an email to <a href="mailto:info@eagma.co.tz" class="underline text-blue-800 pointer">info@eagma.co.tz</a> with the subject line “Volunteering with EAGMA.” In your email, include:</h2>
                <ul>
                    <li>Your full name and contact information.
                    </li>
                    <li>A brief description of your skills or areas of interest.
                    </li>
                    <li>Any relevant experience you have (optional but helpful).
                    </li>
                    <li>Your availability (dates or times you can commit to).
                    </li>
                </ul>
            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">What to Expect Next</h2>
                <p class="py-2">Once we receive your email, our team will review your application and get in touch with you to discuss volunteer opportunities that match your interests and availability..</p>
            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">Why Volunteer?</h2>
                <ul>
                    <li>Gain Experience: Volunteering with EAGMA is a great way to gain hands-on experience in event management, marketing, and more.</li>
                    <li>Network: Meet like-minded individuals and connect with professionals in the music industry.
                    </li>
                    <li>Make an Impact: Play a vital role in supporting and promoting gospel music across the region.
                    </li>
                </ul>
            </div>

            <div class="py-2">
                <p class="">oin us and be a part of something extraordinary. Your contribution can make a big difference!

Email us today at <a href="mailto:info@eagma.co.tz" class="underline text-blue-800 pointer">info@eagma.co.tz</a> – we look forward to welcoming you to the EAGMA family!</p>
            </div>
        </div>
    </div>
</template>