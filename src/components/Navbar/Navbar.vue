<script setup lang="ts">
import JPowerLogo from '../../assets/jpower.svg';

import SectionContainer from '../SectionContainer/SectionContainer.vue';
</script>

<template>
  <nav class="bg-navbar">
    <SectionContainer className="flex justify-between items-center h-20">
      <a class="h-full py-1 w-[297px] mr-20">
        <img :src="JPowerLogo" alt="JPower Connection" class="w-full h-full" />
      </a>

      <div class="flex w-full justify-between bg-primary h-full items-center">
        <ul class="flex gap-12 ml-32">
          <a href="#" class="text-white">Services</a>
          <a href="#" class="text-white">Company</a>
          <a href="#" class="text-white">Plans &amp; Pricing</a>
        </ul>

        <div class="flex gap-12 items-center">
          <a href="#" class="text-white">Contact Us</a>
          <div class="">
            <button
              class="text-white border-[1.5px] px-2 py-0.5 font-medium border-r-[0.75px]"
            >
              ES
            </button>
            <button
              class="text-white border-[1.5px] px-2 py-0.5 font-medium border-l-[0.75px]"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  </nav>
</template>
