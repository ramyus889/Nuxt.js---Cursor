<template>
  <div class="flex justify-center mt-[136px]">
    <div class="">
      <div class="text-[14px] text-[#999] uppercase text-center">
        Trusted by Engineers at
      </div>
      <div
        class="flex flex-wrap justify-center items-center gap-x-[90px] gap-y-[44px] mt-[12px]"
      >
        <div v-for="item in items" :key="item.id" class="">
          <img :src="item.src" alt="" class="w-[140px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  { id: 1, src: "/shopify.svg" },
  { id: 2, src: "/openai.svg" },
  { id: 3, src: "/replicate.svg" },
  { id: 4, src: "/perplexity.svg" },
  { id: 5, src: "/midjourney.svg" },
  { id: 6, src: "/samsung.svg" },
  { id: 7, src: "/instacart.svg" },
  { id: 8, src: "/ramp.svg" },
  { id: 9, src: "/wb.svg" },
]);
</script>
