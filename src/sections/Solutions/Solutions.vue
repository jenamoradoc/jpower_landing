<script setup lang="ts">
import SectionContainer from '../../components/SectionContainer/SectionContainer.vue';

import { services } from '../../utilities/services.utility';
</script>

<template>
  <section class="h-full bg-primary overflow-hidden">
    <SectionContainer class="pt-20 pb-24">
      <div class="relative">
        <div
          class="w-[700px] h-4 bg-secondary absolute overflow-hidden -left-96 bottom-0"
        ></div>
        <h4 class="text-white font-semibold">
          Energy Upgrades, Powering Progress
        </h4>
        <h2 class="text-white font-semibold text-[32px] drop-shadow-custom">
          Our Services &amp; Solutions
        </h2>
      </div>

      <div class="grid grid-cols-3 gap-8">
        <div
          v-for="{ title, description, icon } in services"
          class="bg-white px-7 pb-7 pt-20 relative mt-20"
        >
          <div
            class="bg-secondary w-[116px] h-[110px] flex justify-center items-center absolute -top-12"
          >
            <img
              :src="icon"
              :alt="title"
              class="w-[100px] h-[100px]"
              draggable="false"
            />
          </div>
          <div class="grid gap-5">
            <h3 class="text-xl font-semibold">{{ title }}</h3>
            <p class="font-normal text-xl leading-6">{{ description }}</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  </section>
</template>
