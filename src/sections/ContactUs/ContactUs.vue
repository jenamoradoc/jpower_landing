<script setup lang="ts">
import SectionContainer from '../../components/SectionContainer/SectionContainer.vue';
</script>

<template>
  <section class="h-full relative">
    <div
      class="bg-call-us bg-no-repeat bg-cover h-[437px] absolute top-0 w-full -z-10"
    ></div>
    <SectionContainer className="pt-6">
      <div class="relative">
        <div
          class="w-[1280px] h-[14px] bg-secondary absolute -left-96 -bottom-4"
        ></div>
        <h3
          class="text-[40px] capitalize font-bold text-center text-white drop-shadow-custom"
        >
          Get <span class="text-secondary">free</span> quote or can
          <span class="text-tertiary">call us</span> at
        </h3>
      </div>

      <h2 class="text-secondary text-[54px] text-center font-bold my-10">
        123-456-7890
      </h2>

      <div class="grid grid-cols-2 lg:w-[1012px] h-[817px] mx-auto">
        <div class="bg-[#f1f1f1] pt-32">
          <h4 class="font-semibold text-xl ml-5 mb-5">Why choose us</h4>
          <div class="pl-10 w-10/12 pr-8 grid gap-10">
            <div class="flex flex-col gap-4">
              <h3 class="font-semibold text-4xl">Experience</h3>
              <p class="text-xl">
                Over 10 years of experience in the electrical industry.
              </p>
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="font-semibold text-4xl">Quality</h3>
              <p class="text-xl">
                Committed to providing high-quality services with a satisfaction
                guarantee.
              </p>
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="font-semibold text-4xl">Customer Service</h3>
              <p class="text-xl">
                Exceptional customer service from start to finish.
              </p>
            </div>
          </div>
          <p class="text-4xl font-bold bg-secondary w-11/12 pl-10 py-3 mt-12">
            +100<br />
            Happy Clients
          </p>
        </div>
        <form class="bg-secondary pt-32 px-10">
          <h3 class="font-semibold text-[28px]">
            Get a Free Personalized Quote
          </h3>
          <span class="text-quaternary text-[15px] my-3 block"
            >All fields are required</span
          >

          <div class="grid grid-cols-2 gap-4">
            <div class="w-full">
              <label class="text-quaternary text-[15px]" for="firstName"
                >Name</label
              >
              <input
                class="px-2 py-2.5 rounded-md border w-full"
                type="text"
                id="firstName"
              />
            </div>
            <div class="w-full">
              <label class="text-quaternary text-[15px]" for="lastName"
                >Last Name</label
              >
              <input
                class="px-2 py-2.5 rounded-md border w-full"
                type="text"
                id="lastName"
              />
            </div>
            <div class="col-span-2">
              <label class="text-quaternary text-[15px] block" for="email"
                >Email</label
              >
              <input
                class="px-2 py-2.5 rounded-md border w-full"
                type="email"
                id="email"
              />
            </div>
            <div>
              <label class="text-quaternary text-[15px]" for="address"
                >Address</label
              >
              <input class="px-2 py-2.5 rounded-md border w-full" type="text" />
            </div>
            <div>
              <label class="text-quaternary text-[15px] block" for="phoneNumber"
                >Phone Number</label
              >
              <input
                class="px-2 py-2.5 rounded-md border w-full"
                type="tel"
                id="phoneNumber"
              />
            </div>

            <div>
              <label class="text-quaternary text-[15px]" for="contactMethod"
                >Prefered Contact Method</label
              >
              <div class="flex gap-7">
                <div class="flex gap-2">
                  <input
                    type="checkbox"
                    name="phone"
                    id="phone-contact"
                    class="w-4"
                  />
                  <label for="phone-contact" class="text-quaternary text-[15px]"
                    >Phone</label
                  >
                </div>
                <div class="flex gap-2">
                  <input
                    type="checkbox"
                    name="email"
                    id="email-contact"
                    class="w-4"
                  />
                  <label for="email-contact" class="text-quaternary text-[15px]"
                    >Email</label
                  >
                </div>
              </div>
            </div>
          </div>

          <button
            class="bg-primary text-secondary w-full drop-shadow-custom text-4xl rounded-lg py-2 mt-24 shadow-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </SectionContainer>
  </section>
</template>
