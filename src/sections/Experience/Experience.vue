<script setup lang="ts">
import SectionContainer from '../../components/SectionContainer/SectionContainer.vue';

import { Electrician, Plug, Guarantee, Brush, Tools } from '../../assets';
</script>

<template>
  <section class="h-full">
    <SectionContainer className="grid grid-cols-2 py-20">
      <div class="relative">
        <img :src="Electrician" alt="Electrician" draggable="false" />
        <div
          class="bg-secondary w-[208px] h-[307px] flex flex-col justify-center items-center rounded-2xl absolute -bottom-[7.5rem] right-16"
        >
          <img
            :src="Plug"
            alt="+100 Happy Clients"
            class="w-[100px] h-[100px] mb-2"
          />
          <span class="font-bold text-[32px] block text-primary">+100</span>
          <span class="font-bold text-xl text-primary">Happy Clients</span>
        </div>
      </div>

      <div class="grid justify-between gap-5">
        <h2 class="text-[32px] font-semibold leading-9">
          We are passionate about bringing energy solutions to homes and
          businesses across California.
        </h2>

        <p class="font-normal text-xl text-black mb-6 leading-6">
          Our extensive experience means we have encountered and successfully
          resolved a wide variety of electrical issues. This wealth of knowledge
          allows us to provide efficient and effective solutions tailored to
          your specific needs.
        </p>

        <div class="grid gap-5 w-full mb-4">
          <div class="flex items-start gap-8">
            <img
              :src="Guarantee"
              alt="Committed to Providing High-Quality Services with a Satisfaction
            Guarantee"
              draggable="false"
              class="w-16 mt-1"
            />
            <div class="w-full max-w-[500px]">
              <h4 class="font-semibold text-xl leading-6">
                Committed to Providing High-Quality Services with a Satisfaction
                Guarantee
              </h4>
              <p class="font-normal text-xl leading-6">
                Our rigorous quality control process includes thorough
                inspections and testing to guarantee that every job meets our
                high standards.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-8">
            <img
              :src="Brush"
              alt="Customized Solutions"
              draggable="false"
              class="w-16 h-16"
            />
            <div class="w-full max-w-[500px]">
              <h4 class="font-semibold text-xl leading-6">
                Customized Solutions
              </h4>
              <p class="font-normal text-xl leading-6">
                We tailor our energy solutions and upgrades to meet the specific
                needs of your home or business.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-8">
            <img
              :src="Tools"
              alt="Expert Technicians"
              draggable="false"
              class="w-16 h-16"
            />
            <div class="w-full max-w-[500px]">
              <h4 class="font-semibold text-xl leading-6">
                Expert Technicians
              </h4>
              <p class="font-normal text-xl leading-6">
                Our team of certified technicians ensures top-quality
                installation and service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  </section>
</template>
