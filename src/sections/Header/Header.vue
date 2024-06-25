<script setup lang="ts">
import SectionContainer from '../../components/SectionContainer/SectionContainer.vue';

import Navbar from '../../components/Navbar/Navbar.vue';
</script>

<template>
  <header class="h-screen">
    <Navbar />

    <div class="h-[calc(100vh-5rem)] bg-hero bg-no-repeat bg-center bg-cover">
      <SectionContainer class="flex flex-col justify-center h-full relative">
        <div
          class="w-[251px] h-full min-h-screen absolute bg-primary top-24"
        ></div>
        <div class="pl-7 z-20">
          <h1 class="font-semibold text-[54px] text-white drop-shadow-custom">
            Reliable &amp; <br />
            Professional <br />
            <span class="font-bold text-6xl">Electric Services</span>
          </h1>
          <p class="font-semibold text-xl text-white">
            From solar system installations to emergency repairs,<br />
            we've got you covered.
          </p>

          <div class="relative">
            <button
              class="bg-secondary font-semibold text-xl h-[50px] w-[265px] rounded-2xl absolute top-20 left-[6rem] capitalize"
            >
              Contact us today
            </button>
          </div>
        </div>
      </SectionContainer>
    </div>
  </header>
</template>
