<script setup lang="ts">
import SectionContainer from '../../components/SectionContainer/SectionContainer.vue';

import Certificates from '../../assets/certifications.png';
</script>

<template>
  <section class="pt-12 pb-10">
    <SectionContainer>
      <h3 class="font-semibold text-xl text-center">Our Certifications</h3>

      <div class="flex justify-between">
        <img :src="Certificates" alt="Our Certifications" draggable="false" />
      </div>
    </SectionContainer>
  </section>
</template>
