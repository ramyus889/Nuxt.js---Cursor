<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
const isWindow = ref(false);

const updateIsWindow = () => {
  isWindow.value = window.innerWidth >= 1024;
};

onMounted(() => {
  updateIsWindow();
  window.addEventListener("resize", updateIsWindow);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsWindow);
});
const items = ref([
  {
    id: 1,
    src: "/editor-1.svg",
    title: "Tab",
    text: " Cursor includes a powerful autocomplete that predicts your next edit. Once enabled, it is always on and will suggest edits to your code across multiple lines, taking into account your recent changes.",
    cardFlex: [
      {
        id: 1,
        title: "Multi-Line Edits",
        src: "/card-1.svg",
        text: "Cursor can suggest multiple edits at once, saving you time",
        column: "",
      },
      {
        id: 2,
        title: "Smart Rewrites",
        src: "/card-2.svg",
        text: "Type carelessly, and Cursor will fix your mistakes.",
        column: computed(() =>
          isWindow.value
            ? "max-[1280px]:col-start-2 max-[1280px]:col-end-7"
            : ""
        ),
      },
      {
        id: 3,
        title: "Cursor Prediction",
        src: "/card-3.svg",
        text: "Cursor predicts your next cursor position so you can seamlessly navigate your code",
        column: computed(() =>
          isWindow.value
            ? "max-[1280px]:col-start-1 max-[1280px]:col-end-7"
            : ""
        ),
      },
    ],
  },
  {
    id: 2,
    src: "/editor-2.svg",
    title: "Chat",
    padding: "xl:pe-[142px] items-center",
    paddingImg: "max-[1280px]:px-5",
    text: ' Chat lets you talk with an AI that sees your codebase. The chat can always see your current file and cursor, so you can ask it things like: "Is there a bug here?". You can add particular blocks of code to the context with Ctrl+Shift+L or "@." You can chat with your entire codebase with Ctrl+Enter.',
    cardFlex: [
      {
        id: 1,
        title: "Instant Apply",
        src: "/card-4.svg",
        column: "",
        text: "Apply the code suggestions from chat back into your codebase by clicking the play button on top of any chat codeblock.",
      },
      {
        id: 2,
        title: "Codebase Answers",
        src: "/card-5.svg",
        column: "",
        text: "Use @Codebase or Ctrl Enter to ask questions about your codebase. Cursor will search your codebase to find relevant code to your query.",
      },
      {
        id: 3,
        title: "Reference your Code",
        src: "/card-6.svg",
        column: "",
        text: "Reference code with @ symbols to be used as context for the AI. Just type @ to see a list of all the files and code symbols in your folder.",
      },
      {
        id: 4,
        title: "Use Images",
        src: "/card-7.svg",
        column: "",
        text: "Hit the image button under chat or drag an image into the input box to include visual context into chat.",
      },
      {
        id: 5,
        title: "Ask the Web",
        src: "/card-8.svg",
        column: "",
        text: "Get up-to-date information from the internet with @Web. Cursor will search the web for you and use the latest information to answer your question.",
      },
      {
        id: 6,
        title: "Use Documentation",
        src: "/card-9.svg",
        text: "Reference popular libraries using @LibraryName, or add your own using @Docs → Add new doc.",
      },
    ],
  },
  {
    id: 3,
    src: "/editor-3.svg",
    title: "Ctrl K",
    text: ' Ctrl K lets you edit and write code with the AI. To edit, try selecting some code, click "Edit," and describe how the code should be changed. To generate completely new code, just type Ctrl K without selecting anything.',
    cardFlex: [
      {
        id: 1,
        title: "Fast Edits",
        src: "/card-10.svg",
        column: "",
        text: "Edit and write code with the AI. Select some code, click Ctrl K, and describe how the code should be changed. Or, generate new code with Ctrl K without selecting anything.",
      },
      {
        id: 2,
        title: "Terminal Ctrl K",
        src: "/card-11.svg",
        column: computed(() =>
          isWindow.value
            ? "max-[1280px]:col-start-2 max-[1280px]:col-end-7"
            : ""
        ),
        text: "Use Ctrl K in the terminal to write terminal commands in plain english. Cursor will convert them into the terminal command you need.",
      },
      {
        id: 3,
        title: "Quick Questions",
        src: "/card-12.svg",
        column: computed(() =>
          isWindow.value
            ? "max-[1280px]:col-start-1 max-[1280px]:col-end-7"
            : ""
        ),
        text: "If you have any quick questions about certain parts of your code, you can select and click on 'quick question' to get your answer right away.",
      },
    ],
  },
]);
</script>

<template>
  <div class="font-geist-mono">
    <div
      class="text-center lg:text-[116px] sm:text-[90px] text-[60px] font-[600] sm:leading-[129px] leading-[76px] font-geist-sans bg-gradient-to-b from-[rgb(153,153,153)] via-[rgba(245,245,245)] to-[rgba(245,245,245,29%)] bg-clip-text text-transparent"
    >
      Features
    </div>
    <div class="text-[22px] text-center mt-[16px]">Build software faster</div>
    <div class="mt-[80px] flex flex-col gap-20">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex flex-col gap-[18px]"
      >
        <div
          :class="item.padding"
          class="bg-[url('/bg-compress.jpg')] bg-cover bg-center xl:pt-[156px] rounded-[24px] flex xl:flex-row flex-col items-end overflow-hidden"
        >
          <div class="xl:p-[56px] p-[30px]">
            <div class="sm:text-[52px] text-[35px] font-geist-sans font-[600]">
              {{ item.title }}
            </div>
            <div class="mt-[24px]">
              {{ item.text }}
            </div>
          </div>
          <img :src="item.src" alt="" :class="item.paddingImg" class="ps-5" />
        </div>
        <div
          class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[24px] mt-[24px]"
        >
          <div
            v-for="item2 in item.cardFlex"
            :key="item2.id"
            :class="item2.column"
            class=""
          >
            <div class="border border-[#333] rounded-[24px] p-[38px] h-full">
              <div class="flex place-content-center">
                <img :src="item2.src" alt="" />
              </div>
              <div class="font-geist-sans text-[24px] font-[600]">
                {{ item2.title }}
              </div>
              <div class="text-[18px] text-[#999]">
                {{ item2.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
