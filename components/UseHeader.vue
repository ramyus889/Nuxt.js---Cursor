<script setup lang="ts"></script>

<template>
  <div class="flex place-content-center">
    <div
      class="mt-[24px] mx-[435px] rounded-[16px] flex justify-between items-center px-[7px] pt-[7px] pb-[8px] w-full"
    >
      <div class="">
        <NuxtLink to="/">
          <img src="/Cursor.png" alt="" />
        </NuxtLink>
      </div>
      <div class="flex gap-[44px]">
        <NuxtLink to="/" class="uppercase">Pricing</NuxtLink>
        <NuxtLink to="/" class="uppercase">Features</NuxtLink>
        <NuxtLink to="/" class="uppercase">Blog</NuxtLink>
      </div>
      <div class="flex items-center gap-2">
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
    </div>
  </div>
</template>
