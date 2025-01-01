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
    headText: "Hobby",
    price: "Free",
    title: "Includes",
    listBoolean: false,
    buttonBoolean: true,
    column: "  ",
    listItem: [
      "Pro two-week trial",
      "2000 completions",
      "50 slow premium requests",
    ],
  },
  {
    id: 2,
    headText: "Pro",
    price: "$20",
    priceText: "/month",
    title: "Everything in Hobby, plus",
    listBoolean: true,
    buttonBoolean: false,
    column: computed(() =>
      isWindow.value ? "max-[1280px]:col-start-2 max-[1280px]:col-end-7" : ""
    ),
    listItem: [
      "Unlimited completions",
      "500 fast premium requests per month",
      "Unlimited slow premium requests",
      "10 o1-mini uses per day",
    ],
  },
  {
    id: 3,
    headText: "Business",
    price: "$40",
    priceText: "/user/month",
    title: "Everything in Pro, plus",
    listBoolean: true,
    buttonBoolean: false,
    column: computed(() =>
      isWindow.value ? "max-[1280px]:col-start-1 max-[1280px]:col-end-7" : ""
    ),
    listItem: [
      "Enforce privacy mode org-wide",
      "Centralized team billing",
      "Admin dashboard with usage stats",
      "SAML/OIDC SSO",
    ],
  },
]);
</script>

<template>
  <div class="mt-[160px]">
    <div class="">
      <div
        class="sm:text-[52px] text-[42px] font-[600] bg-gradient-to-b from-[rgb(153,153,153)] via-[rgba(245,245,245)] to-[rgba(245,245,245,29%)] bg-clip-text text-transparent"
      >
        Pricing
      </div>
      <div class="mt-[16px] sm:text-[22px] text-[20px] text-[#ccc]">
        Choose the plan that works for you
      </div>
    </div>

    <div
      class="mt-[82px] grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[24px]"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="border border-[#333] rounded-[24px] p-[12px]"
        :class="item.column"
      >
        <div
          class="bg-[#0c0c0c] border border-[#333] flex flex-col justify-between h-full rounded-[12px] p-[32px]"
        >
          <div class="">
            <div class="text-[22px]">{{ item.headText }}</div>
            <div class="text-[52px] mb-[16px] font-[600]">
              {{ item.price }}
              <span class="text-[22px]">{{ item.priceText }}</span>
            </div>
            <div class="border-t border-[#333]"></div>
            <div class="text-[24px] font-[600] my-[16px]">{{ item.title }}</div>
            <div class="mb-[80px]">
              <ul
                class="list-image-[url('/check.svg')] list-disc list-inside text-[#ccc]"
              >
                <li>{{ item.listItem[0] }}</li>
                <li>{{ item.listItem[1] }}</li>
                <li>{{ item.listItem[2] }}</li>
                <li v-if="item.listBoolean">{{ item.listItem[3] }}</li>
              </ul>
            </div>
          </div>
          <div
            v-if="item.buttonBoolean"
            class="flex flex-col gap-3 sm:flex-row"
          >
            <v-btn
              color="white"
              size="large"
              to="/"
              class="uppercase !tracking-[0.56px] !leading-none"
              prepend-icon="mdi-microsoft-windows"
              >Download</v-btn
            >
            <v-btn
              to="/"
              size="large"
              variant="outlined"
              class="uppercase !tracking-[0.56px]"
              >Others</v-btn
            >
          </div>
          <div v-else class="">
            <v-btn
              color="white"
              size="large"
              block
              to="/"
              class="uppercase !tracking-[0.56px] !leading-none"
              >Get Started</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
