<script setup lang="ts"></script>

<template>
  <div class="fixed top-0 left-0 right-0 z-10">
    <div class="flex place-content-center font-geist-mono">
      <div
        class="mt-[24px] min-[2300px]:mx-[435px] min-[2000px]:mx-[300px] min-[1600px]:mx-[200px] min-[1280px]:mx-[100px] mx-[20px] rounded-[16px] flex justify-between items-center bg-black px-[7px] pt-[7px] pb-[8px] w-full"
      >
        <div class="">
          <NuxtLink to="/">
            <img src="/Cursor.png" alt="" />
          </NuxtLink>
        </div>

        <div class="sm:flex hidden gap-[44px]">
          <NuxtLink to="/UsePricing" class="uppercase">Pricing</NuxtLink>
          <NuxtLink to="/UseFeatures" class="uppercase">Features</NuxtLink>
        </div>
        <div class="flex sm:hidden me-[50px]">
          <v-speed-dial location="bottom center" transition="fade-transition">
            <template v-slot:activator="{ props: activatorProps }">
              <v-fab
                v-bind="activatorProps"
                size="small"
                icon="mdi-menu"
              ></v-fab>
            </template>

            <v-btn
              key="1"
              as="nuxt-link"
              to="/UsePricing"
              icon="mdi-currency-usd"
              class="mt-6 ms-10"
            ></v-btn>
            <v-btn
              key="2"
              as="nuxt-link"
              to="/UseFeatures"
              icon="mdi-feature-search"
              class="ms-10"
            ></v-btn>
          </v-speed-dial>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-skeleton-loader:deep(.v-skeleton-loader__image) {
  border-radius: 16px;
  height: 30px;
}
</style>
