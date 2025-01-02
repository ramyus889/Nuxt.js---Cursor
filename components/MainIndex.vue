<template>
  <div
    class="bg-[url('/bg-compress.jpg')] font-geist-mono pt-[80px] bg-cover bg-center rounded-[16px] min-[1440px]:h-[800px] lg:h-[700px] h-[600px] overflow-hidden px-5"
  >
    <div
      class="min-[1400px]:text-[154px] font-geist-sans lg:text-[110px] min-[700px]:text-[70px] min-[510px]:text-[50px] min-[440px]:text-[40px] text-[30px] font-[600] text-center min-[1400px]:leading-[127px] lg:leading-[90px] sm:leading-[60px] min-[1400px]:tracking-[-6.16px] lg:tracking-[-4.34px]"
    >
      The AI Code Editor
    </div>
    <div
      class="text-[22px] leading-[27px] text-center sm:mt-[48px] mt-[24px] max-w-[620px] mx-auto"
    >
      Built to make you extraordinarily productive, Cursor is the best way to
      code with AI.
    </div>
    <div class="flex sm:flex-row flex-col justify-center gap-[26px] mt-[35px]">
      <v-btn
        color="white"
        :size="isMobile ? 'large' : 'x-large'"
        to="/"
        rounded="lg"
        class="uppercase !tracking-[0.32px] !leading-none"
        prepend-icon="mdi-microsoft-windows"
        >Download for Windows</v-btn
      >
      <v-btn
        to="/"
        :size="isMobile ? 'large' : 'x-large'"
        rounded="lg"
        class="uppercase !tracking-[0.32px] !leading-none bg-black"
        prepend-icon="mdi-video"
        >Watch Demo</v-btn
      >
    </div>
    <div class="flex justify-center mt-[40px] max-w-[1296px] mx-auto">
      <img src="/watch-demo.webp" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const isMobile = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 400;
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateIsMobile);
});
</script>
