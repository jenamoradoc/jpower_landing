<script setup lang="ts">
import SectionContainer from '../../components/SectionContainer/SectionContainer.vue';

import { Worker } from '../../assets';
import { users } from '../../utilities/users.utility';
</script>

<template>
  <section class="relative pt-8">
    <SectionContainer>
      <img
        :src="Worker"
        alt="Comercial, Residential & Industrial Power"
        draggable="false"
        class="absolute -top-8"
      />
    </SectionContainer>
    <div class="overflow-hidden">
      <SectionContainer>
        <div class="grid grid-cols-2">
          <div class="col-start-2 relative">
            <div
              class="w-[595px] h-[14px] bg-secondary absolute overflow-hidden -right-64 bottom-10"
            ></div>
            <h2 class="font-semibold text-5xl drop-shadow-custom text-right">
              Comercial, Residential &amp; <br />
              Industrial Power
            </h2>

            <h5 class="font-semibold text-2xl text-right capitalize mt-3">
              What our client say
            </h5>
          </div>
        </div>

        <div
          class="w-screen mt-40 -ml-4 flex gap-11 overflow-x-scroll pr-40 bg-testimonials-list py-20 no-scrollbar"
        >
          <div
            v-for="{ avatar, direction, name, testimonial } in users"
            :key="name"
            class="min-w-[498px] h-[196px] border-2 shadow-md flex justify-center items-start px-4 py-8 gap-6 flex-row"
          >
            <img :src="avatar" :alt="name" class="w-[80px] h-[80px]" />
            <blockquote class="flex gap-4 flex-col">
              <span class="font-semibold"> "{{ testimonial }}" </span>
              <p class="font-semibold">- {{ name }}, {{ direction }}</p>
            </blockquote>
          </div>
        </div>
      </SectionContainer>
    </div>
  </section>
</template>
