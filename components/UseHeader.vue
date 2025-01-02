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

        <div class="lg:flex hidden gap-[44px]">
          <NuxtLink to="/UsePricing" class="uppercase">Pricing</NuxtLink>
          <NuxtLink to="/UseFeatures" class="uppercase">Features</NuxtLink>
          <NuxtLink to="/" class="uppercase">Blog</NuxtLink>
        </div>
        <div class="items-center hidden gap-2 lg:flex">
          <v-btn
            to="/"
            size="large"
            variant="outlined"
            class="uppercase !tracking-[0.56px]"
            >Sign In</v-btn
          >
          <v-btn
            color="white"
            size="large"
            to="/"
            class="uppercase !tracking-[0.56px] !leading-none"
            prepend-icon="mdi-microsoft-windows"
            >Download</v-btn
          >
        </div>
        <div class="flex lg:hidden me-[50px]">
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
            <v-btn
              key="3"
              as="nuxt-link"
              to="/"
              icon="mdi-post"
              class="ms-10"
            ></v-btn>
            <v-btn
              key="4"
              as="nuxt-link"
              to="/"
              icon="mdi-login"
              class="ms-10"
            ></v-btn>
            <v-btn
              key="5"
              as="nuxt-link"
              to="/"
              icon="mdi-download"
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
