<script setup lang="ts">
const items = ref([
  {
    id: 1,
    src: "/video/current-one.mp4",
    title: "Tab, tab, tab",
    text: "Cursor lets you breeze through changes by predicting your next edit.",
    height: "lg:h-[630px] md:h-[570px] sm:h-[500px] md:pt-[98px]",
  },
  {
    id: 2,
    src: "/video/current-two.mp4",
    title: "Knows your codebase",
    text: "Get answers from your codebase or refer to files or docs. Use the model’s code in one click.",
    height: "sm:h-[550px] md:pt-[80px]",
  },
  {
    id: 3,
    src: "/video/current-three.mp4",
    title: "Edit in natural language",
    text: "Cursor lets you write code using instructions. Update entire classes or functions with a simple prompt.",
    height: " sm:h-[530px] md:pt-[82px]",
  },
]);
</script>
<template>
  <div class="flex place-content-center mt-[212px] font-geist-mono">
    <div class="w-full">
      <div class="flex flex-col gap-[144px]">
        <div
          v-for="item in items"
          :key="item.id"
          class="flex flex-col gap-4 text-center"
        >
          <div
            class="sm:text-[52px] text-[42px] tracking-[-2.08px] font-[600] bg-gradient-to-b from-[rgb(153,153,153)] via-[rgba(245,245,245)] to-[rgba(245,245,245,29%)] bg-clip-text text-transparent"
          >
            {{ item.title }}
          </div>
          <div class="text-[22px] max-w-[750px] text-center mx-auto">
            {{ item.text }}
          </div>
          <div
            :class="item.height"
            class="md:bg-[url('/bg-compress.jpg')] mt-[56px] rounded-[24px] flex items-center justify-center md:overflow-hidden"
          >
            <video
              :src="item.src"
              autoplay
              muted
              loop
              class="lg:w-[693px] md:w-[630px] rounded-xl"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
