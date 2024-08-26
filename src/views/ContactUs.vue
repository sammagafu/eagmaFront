<template>
    <div class="relative z-30 bg-white mt-0 xl:mt-[150px] mb-[150px]">
			<div class="group relative xl:absolute top-0 right-0 bottom-0 xl:w-1/2 hway overflow-hidden hway-active">
				<div class="absolute h-full w-0 group-[.hway-active]:w-full bg-[#C2922E] transition-all duration-[.5s]"></div>
				<div class="absolute h-full w-0 group-[.hway-active]:w-full bg-white transition-all duration-[.5s] group-[.hway-active]:delay-[.25s]"></div>
				<iframe class="xl:absolute top-0 left-0 w-full h-[500px] xl:h-full grayscale origin-left scale-x-0 group-[.hway-active]:scale-x-100 transition-all duration-[.5s] group-[.hway-active]:delay-[.5s] border-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31695.965398682052!2d39.261007!3d-6.770379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c464d4a627b%3A0x66672793ac5eaca2!2sRegent%20Business%20Park!5e0!3m2!1sen!2stz!4v1724675224212!5m2!1sen!2stz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
			<div class="max-w-screen-xl mx-auto px-4">
				<div class="grid grid-cols-1 xl:grid-cols-2 xl:gap-[100px] mt-[100px] xl:mt-0">
					<div class="">
						<div class="mb-[10px] flex items-center">
							<div class="w-[10px] h-[10px] bg-[#C2922E] rounded-[10px] me-[10px]"></div>
							<div class="">Contact Us</div>
						</div>
						<div class="text-[55px] leading-[65px] font-['Inter_Tight'] font-black mb-[50px]">
							<div class="">Get in Touch</div>
						</div>
						<form class="grid grid-cols-2 gap-[30px]">
							<div class="relative border-b-[2px] border-b-[#454545]">
								<input type="text" id="n" name="n" placeholder="Name" class="peer bg-transparent p-[10px] ps-0 text-transparent placeholder:text-transparent focus:text-white focus:ps-[10px] focus:outline-none focus:placeholder:text-white transition-all duration-[.5s]">
								<label for="n" class="absolute top-0 bottom-0 left-0 z-[-1] flex items-center">Name</label>
								<div class="absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-[#C2922E] origin-left scale-x-0 peer-focus:scale-x-100 transition-all duration-[.5s] delay-[.25s] peer-focus:delay-0"></div>
								<div class="absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-[#101010] origin-left scale-x-0 peer-focus:scale-x-100 transition-all duration-[.5s] peer-focus:delay-[.25s]"></div>
							</div>
							<div class="relative border-b-[2px] border-b-[#454545]">
								<input type="text" id="e" name="e" placeholder="Email" class="peer bg-transparent p-[10px] ps-0 text-transparent placeholder:text-transparent focus:text-white focus:ps-[10px] focus:outline-none focus:placeholder:text-white transition-all duration-[.5s]">
								<label for="e" class="absolute top-0 bottom-0 left-0 z-[-1] flex items-center">Email</label>
								<div class="absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-[#C2922E] origin-left scale-x-0 peer-focus:scale-x-100 transition-all duration-[.5s] delay-[.25s] peer-focus:delay-0"></div>
								<div class="absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-[#101010] origin-left scale-x-0 peer-focus:scale-x-100 transition-all duration-[.5s] peer-focus:delay-[.25s]"></div>
							</div>
							<div class="relative border-b-[2px] border-b-[#454545]">
								<input type="text" id="p" name="p" placeholder="Phone" class="peer bg-transparent p-[10px] ps-0 text-transparent placeholder:text-transparent focus:text-white focus:ps-[10px] focus:outline-none focus:placeholder:text-white transition-all duration-[.5s]">
								<label for="p" class="absolute top-0 bottom-0 left-0 z-[-1] flex items-center">Phone</label>
								<div class="absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-[#C2922E] origin-left scale-x-0 peer-focus:scale-x-100 transition-all duration-[.5s] delay-[.25s] peer-focus:delay-0"></div>
								<div class="absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-[#101010] origin-left scale-x-0 peer-focus:scale-x-100 transition-all duration-[.5s] peer-focus:delay-[.25s]"></div>
							</div>
							<div class="relative border-b-[2px] border-b-[#454545]">
								<input type="text" id="s" name="s" placeholder="Subject" class="peer bg-transparent p-[10px] ps-0 text-transparent placeholder:text-transparent focus:text-white focus:ps-[10px] focus:outline-none focus:placeholder:text-white transition-all duration-[.5s]">
								<label for="s" class="absolute top-0 bottom-0 left-0 z-[-1] flex items-center">Subject</label>
								<div class="absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-[#C2922E] origin-left scale-x-0 peer-focus:scale-x-100 transition-all duration-[.5s] delay-[.25s] peer-focus:delay-0"></div>
								<div class="absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-[#101010] origin-left scale-x-0 peer-focus:scale-x-100 transition-all duration-[.5s] peer-focus:delay-[.25s]"></div>
							</div>
							<div class="col-span-2 relative border-b-[2px] border-b-[#454545]">
								<textarea id="m" name="m" rows="2" placeholder="Message" class="peer w-full bg-transparent p-[30px] ps-0 text-transparent placeholder:text-transparent focus:text-white focus:ps-[30px] focus:outline-none focus:placeholder:text-white transition-all duration-[.5s]"></textarea>
								<label for="m" class="absolute top-0 bottom-0 left-0 z-[-1] pt-[30px]">Message</label>
								<div class="absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-[#C2922E] origin-left scale-x-0 peer-focus:scale-x-100 transition-all duration-[.5s] delay-[.25s] peer-focus:delay-0"></div>
								<div class="absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-[#101010] origin-left scale-x-0 peer-focus:scale-x-100 transition-all duration-[.5s] peer-focus:delay-[.25s]"></div>
							</div>
							<div class="flex">
								<button class="group h-[65px] relative items-center">
									<span class="absolute top-0 bottom-0 left-0 my-auto w-[65px] h-[65px] group-hover:left-[75%] group-hover:w-[20px] group-hover:h-[20px] rounded-[65px] bg-[#C2922E] transition-all duration-[.5s]"></span>
									<span class="relative ms-[32px] me-[10px] group-hover:ms-0 group-hover:me-[20px] transition-all duration-[.5s]">Send Now</span>
									<span class="relative"><i class="fas fa-long-arrow-right"></i></span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
</template>