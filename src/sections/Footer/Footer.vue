<script setup lang="ts">
import SectionContainer from '../../components/SectionContainer/SectionContainer.vue';

import { JPowerConnection } from '../../assets';
</script>

<template>
  <footer class="bg-primary py-10">
    <SectionContainer>
      <div class="grid grid-cols-4 gap-10">
        <div class="w-96 flex flex-col gap-2">
          <h3 class="font-semibold text-2xl text-secondary capitalize">
            Contact us
          </h3>
          <span class="block font-medium text-white"
            ><v-icon name="io-location-sharp" /> 123 Solar Street, Los Angeles,
            CA 94103</span
          >
        </div>
        <div class="text-white flex justify-center items-end">
          <v-icon name="bi-telephone-fill" />
          <span class="text-white">(123) 456-7890</span>
        </div>

        <div class="text-white flex items-end">
          <div class="flex items-center gap-2">
            <v-icon name="io-mail" />
            <a class="text-white" href="mailto:info@jpowerconnection.com"
              >info@jpowerconnection.com</a
            >
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <h3
            class="font-semibold text-2xl leading-none text-secondary capitalize"
          >
            Social info
          </h3>
          <div class="text-white flex gap-4">
            <v-icon name="fa-facebook-f" />
            <v-icon name="co-twitter" />
            <v-icon name="ri-instagram-fill" />
          </div>
        </div>
        <div class="w-80">
          <h3 class="font-semibold text-xl text-secondary capitalize">
            About us
          </h3>
          <p class="text-white font-medium">
            With over 10 years of experience in the industry, we have built a
            reputation for delivering reliable, high-quality solutions to both
            residential and commercial clients.
          </p>
        </div>
        <div class="col-span-2 ml-14">
          <h3 class="font-semibold text-xl text-secondary capitalize">
            Our solutions
          </h3>

          <ul class="list-disc pl-6 leading-5">
            <li class="text-white">Solar Systems</li>
            <li class="text-white">Breakers/Fuses</li>
            <li class="text-white">Meter &amp; Panel Upgrades</li>
            <li class="text-white">Repair Service</li>
            <li class="text-white">Dedicated Circuits</li>
            <li class="text-white">Emergency Repairs</li>
          </ul>
        </div>

        <div class="flex flex-col gap-1">
          <img :src="JPowerConnection" alt="JPower Connection" />
        </div>
      </div>
    </SectionContainer>
  </footer>
</template>
