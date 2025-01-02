<script setup lang="ts">
const items1 = ref([
  {
    id: 1,
    title: "Why isn't Cursor completely free?",
    text: "Large language models cost quite a bit of money to run. To grow Cursor sustainably without compromising our service quality, we need to cover our costs.",
  },
  {
    id: 4,
    title: "What code do you store?",
    text: 'With "Privacy mode", your code is never stored anywhere other than your machine and will never be trained on. Otherwise, we may collect usage and telemetry data (including prompts, code snippets, or editor actions) to help improve Cursor.',
  },
  {
    id: 7,
    title: "Who owns the code generated in Cursor?",
    text: "You! Regardless of whether you use the free, pro or business version of Cursor, all generated code is yours and free to be used however you like, including commercially.",
  },
]);

const items2 = ref([
  {
    id: 2,
    title: "What are the premium models?",
    imageBool: true,
    text: "GPT-4, GPT-4o, and Claude 3.5 Sonnet are all considered premium models. You have 500 fast uses and unlimited slow uses each month for these models. Each request to Claude 3.5 Haiku counts as 1/3 of a premium request.",
    image: "/premium-models-dark.avif",
  },
  {
    id: 5,
    title: "How do the plan limits work?",
    imageBool: false,
    text: "If you go over your limit, we'll nicely ask you to upgrade. You can use up to 50 uses of the premium models for free.",
  },
  {
    id: 8,
    title: "What is Cursor Tab?",
    imageBool: false,
    text: "This is Cursor's native autocomplete feature. It's a more powerful Copilot that suggests entire diffs with especially good memory.",
  },
]);

const items3 = ref([
  {
    id: 3,
    title: "What are fast and slow uses?",
    buttonBoolean: false,
    text: "Fast uses of premium models are given first priority by our backend. On Pro, once you hit your fast usage limit, you can still use premium models, but your requests may be queued behind others at times of high load.",
  },
  {
    id: 6,
    title: "Do all Cursor features work with an API key?",
    buttonBoolean: false,
    text: "A few important Cursor features (including Tab and Apply from Chat) are powered by custom models and cannot be charged to an API key.",
  },
  {
    id: 9,
    title: "Where can I ask more questions?",
    buttonBoolean: true,
    border: "border border-[#333] rounded-[24px] p-[12px]",

    text: "You’re welcome to join our forum and share your thoughts! If you prefer a private conversation, feel free to email us directly.",
  },
]);
</script>

<template>
  <div class="mt-[123px] font-geist-mono">
    <div class="text-[36px] font-[600]">Frequently Asked Questions</div>
    <div class="mt-[56px] flex max-[1280px]:flex-wrap gap-[16px]">
      <div class="flex flex-col gap-[16px]">
        <div
          v-for="item in items1"
          :key="item.id"
          class="bg-[#0c0c0c] border border-[#333] rounded-[16px] p-[24px] h-full"
        >
          <div class="text-[24px] font-[600]">{{ item.title }}</div>
          <div class="text-[#b3b3b3] mt-[16px]">
            {{ item.text }}
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-[16px]">
        <div
          v-for="item in items2"
          :key="item.id"
          class="bg-[#0c0c0c] border border-[#333] rounded-[16px] p-[24px]"
        >
          <div class="text-[24px] font-[600]">{{ item.title }}</div>
          <div class="text-[#b3b3b3] mt-[16px]">
            {{ item.text }}
          </div>
          <img v-if="item.imageBool" :src="item.image" alt="" />
        </div>
      </div>

      <div class="flex flex-col gap-[16px]">
        <div v-for="item in items3" :key="item.id" :class="item.border">
          <div
            class="bg-[#0c0c0c] border border-[#333] rounded-[16px] p-[24px]"
          >
            <div class="text-[24px] font-[600]">{{ item.title }}</div>
            <div class="text-[#b3b3b3] mt-[16px]">
              {{ item.text }}
            </div>
            <div
              v-if="item.buttonBoolean"
              class="flex flex-col gap-3 sm:flex-row mt-[45px]"
            >
              <v-btn
                color="white"
                size="large"
                to="/"
                class="uppercase !tracking-[0.56px] !leading-none"
                >Our Forum</v-btn
              >
              <v-btn
                to="/"
                size="large"
                variant="outlined"
                class="uppercase !tracking-[0.56px]"
                >Contact Us</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
