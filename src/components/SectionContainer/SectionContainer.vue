<script setup lang="ts">
defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div
    :class="
      'sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto ' + className
    "
  >
    <slot />
  </div>
</template>
