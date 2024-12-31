<script setup lang="ts">
const items = ref([
  {
    id: 1,
    src: "/frontier-black.webp",
    title: "Frontier Intelligence",
    text: "Powered by a mix of purpose-built and frontier models, Cursor is smart and fast.",
  },
  {
    id: 2,
    src: "/sec-black.webp",
    title: "Private and Secure",
    text: "With Privacy Mode, your code is only stored locally. Cursor is SOC 2 certified.",
  },
  {
    id: 3,
    src: "/familiar-black.webp",
    title: "Feels Familiar",
    text: "Import all your extensions, themes, and keybindings in one click.",
  },
]);
</script>

<template>
  <div class="flex place-content-center mt-[224px]">
    <div class="w-full">
      <div
        class="sm:text-[52px] text-[32px] font-[600] max-[1024px]:text-center bg-gradient-to-b from-[rgb(153,153,153)] via-[rgba(245,245,245)] to-[rgba(245,245,245,29%)] bg-clip-text text-transparent"
      >
        Build software faster
      </div>
      <div
        class="flex flex-col items-center gap-5 lg:gap-0 lg:items-end lg:justify-between lg:flex-row"
      >
        <div class="text-[22px] text-center">
          Intelligent, fast, and familiar, Cursor is the best way to code with
          AI.
        </div>
        <div class="">
          <v-btn variant="outlined" size="large">See More Features</v-btn>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-[18px] mt-[97px]">
        <NuxtLink
          to="/"
          v-for="item in items"
          :key="item.id"
          class="border border-[#333] transition bg-[#0c0c0c] rounded-[16px] pt-[32px] max-w-[400px]"
        >
          <div class="px-[32px]">
            <div class="text-[36px] font-[600]">{{ item.title }}</div>
            <div
              class="text-[#b3b3b3] text-[18px] font-[600] max-w-[250px] mt-[24px]"
            >
              {{ item.text }}
            </div>
          </div>
          <div class="mt-[32px]">
            <img :src="item.src" alt="" class="rounded-b-[16px]" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
