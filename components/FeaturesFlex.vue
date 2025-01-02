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
  <div class="flex place-content-center mt-[224px] font-geist-mono">
    <div class="w-full">
      <div
        class="sm:text-[52px] text-[32px] font-geist-sans font-[600] max-[1024px]:text-center bg-gradient-to-b from-[rgb(153,153,153)] via-[rgba(245,245,245)] to-[rgba(245,245,245,29%)] bg-clip-text text-transparent"
      >
        Build software faster
      </div>
      <div
        class="flex flex-col items-center gap-5 lg:gap-0 lg:justify-between lg:flex-row"
      >
        <div class="text-[22px] max-w-[600px] max-[1024px]:text-center">
          Intelligent, fast, and familiar, Cursor is the best way to code with
          AI.
        </div>
        <div class="">
          <v-btn variant="outlined" size="large">See More Features</v-btn>
        </div>
      </div>
      <div
        class="flex max-[1400px]:flex-wrap justify-center gap-[18px] mt-[97px]"
      >
        <NuxtLink
          to="/UseFeatures"
          v-for="item in items"
          :key="item.id"
          class="border border-[#333] bg-[#0c0c0c] rounded-[16px] pt-[32px] max-w-[405px]"
        >
          <div class="px-[32px]">
            <div class="text-[36px] font-[600] font-geist-sans">
              {{ item.title }}
            </div>
            <div
              class="text-[#b3b3b3] text-[18px] font-[600] max-w-[450px] mt-[24px]"
            >
              {{ item.text }}
            </div>
          </div>
          <div class="mt-[32px]">
            <img :src="item.src" alt="" class="rounded-b-[16px]" />
          </div>
        </NuxtLink>
      </div>
      <div
        class="mt-[226px] border flex xl:flex-row flex-col xl:justify-between max-[1280px]:gap-[54px] border-[#333] bg-[#0c0c0c] rounded-[16px] sm:py-[65px] py-[32px] sm:px-[73px] px-[32px] w-full"
      >
        <div class="max-w-[525px]">
          <div
            class="bg-[#191919] rounded-[16px] p-2.5 inline-flex gap-[8px] items-center"
          >
            <img src="/blog-coffe.svg" alt="" class="w-[16px] h-[16px]" />
            <div class="text-[18px] text-[#b3b3b3] font-[600]">BLOG</div>
          </div>
          <div
            class="my-[24px] min-[500px]:text-[36px] text-[25px] font-[600] max-[640px]:text-center font-geist-sans"
          >
            Shadow Workspace: Iterating on Code in the Background
          </div>
          <div
            class="text-[#b3b3b3] font-[600] text-[18px] max-[640px]:text-center"
          >
            Hidden Electron windows and kernel-level folder proxies to let AIs
            iterate on code without affecting the user.
          </div>
          <div class="mt-[28px] flex max-[640px]:place-content-center">
            <v-btn variant="outlined" size="large">Keep Reading</v-btn>
          </div>
          <div class="mt-[95px] flex items-center gap-[24px]">
            <img
              src="/arvid.avif"
              alt=""
              class="w-[64px] h-[64px] rounded-[12px]"
            />
            <div>
              <div class="text-[18px] text-[#ccc] font-[600]">
                Posted by Arvid
              </div>
              <div class="text-[#999] font-[600]">19 minutes read.</div>
            </div>
          </div>
        </div>
        <div class="flex xl:ps-20">
          <img
            src="/bg-compress.jpg"
            class="rounded-[16px] xl:max-w-[525px] h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
