<template>
    <section
        class="relative table w-full items-center py-36 bg-[url('../assets/img/header/blog.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative mx-auto">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-3 text-4xl leading-normal tracking-wider font-semibold text-white">Privacy Policy & Terms
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
                    aria-current="page">Privacy Policy & Terms</li>
            </ul>
        </div>
    </section>
    <div class="container mx-auto py-12">
        <div class="grid grid-cols-1 gap-[40px] align-content: center;">
            <div class="py-2">

                <h2 class="mb-3 text-4xl leading-normal tracking-wider font-semibold">Privacy Policy</h2>
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">1. Introduction</h2>
                <p class="py-2">Your privacy is important to us. This Privacy Policy explains how we collect, use, and
                    protect your personal information when you use our services.</p>
            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">2. Information We Collect</h2>
                <ul>
                    <li>Personal Information: We may collect your name, email address, phone number, and other personal
                        details when you create an account, participate in voting, or engage with our content.</li>
                    <li>Usage Data: We collect information about how you use our website, including your IP address,
                        browser type, and interaction with our content.</li>
                </ul>

            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">3. How We Use Your Information</h2>
                <ul>
                    <li>To provide and maintain our services, including voting functionality.</li>
                    <li>To communicate with you regarding updates, promotions, and announcements.</li>
                    <li>To improve our website, services, and user experience.
                    </li>
                </ul>
            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">4. Sharing Your Information</h2>
                <p class="py-2">We do not sell your personal information. We may share your data with trusted third
                    parties who assist us in operating our website, conducting our business, or servicing you, as long
                    as those parties agree to keep this information confidential.</p>
            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">5. Security</h2>
                <p class="">We implement security measures to protect your information from unauthorized access. However, please be aware that no method of transmission over the Internet is 100% secure.</p>
            </div>

            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">6. Your Rights
                </h2>
                <p class="">You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us.</p>
            </div>

            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">7. Changes to This Policy
                </h2>
                <p class="">We may update our Privacy Policy from time to time. Any changes will be posted on this page, so please review it regularly.</p>
            </div>

            <div class="py-2">

                <h2 class="mb-3 text-4xl leading-normal tracking-wider font-semibold">Terms of Use</h2>
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">1. Acceptance of Terms</h2>
                <p class="py-2">By accessing and using our website, you agree to comply with these Terms of Use. If you
                    do not agree with any part of these terms, please do not use our website.</p>
            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">2. User Accounts</h2>
                <p>You are responsible for maintaining the confidentiality of your account information, including your
                    password. You agree to accept responsibility for all activities that occur under your account.
                </p>

            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">3. Voting Rules</h2>
                <p>Each registered user is allowed one vote per category. Any attempt to manipulate or falsify voting
                    results will result in disqualification and potential suspension of your account.</p>
            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">4. Intellectual Property</h2>
                <p class="">All content on our website, including text, graphics, logos, and images, is the property of
                    EAGMA Awards or its content suppliers and is protected by intellectual property laws.</p>
            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">5. Limitation of Liability</h2>
                <p class="">EAGMA Awards is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of our website, including but not limited to, any errors or omissions in content.</p>
            </div>
            <div class="py-2">
                <h2 class="text-2xl leading-normal tracking-wider font-semibold">6. Governing Law
                </h2>
                <p class="">These Terms of Use shall be governed by and construed in accordance with the laws of Tanzania Republic. Any disputes arising from these terms shall be resolved in the courts of Tanzania Republic.</p>
            </div>
        </div>
    </div>
</template>