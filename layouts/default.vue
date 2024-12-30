<script setup lang="ts">
useHead({
  title: "Nuxt.js",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Nuxt 3 Frontend Development" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/Code/frontend.jpg" }],
});
</script>
<template>
  <v-app>
    <v-main>
      <UseHeader />
      <div
        class="my-[107px] min-[2300px]:mx-[331px] min-[2000px]:mx-[200px] min-[1600px]:mx-[150px] min-[1500px]:mx-[100px] min-[1280px]:mx-[50px] mx-[20px]"
      >
        <slot />
      </div>
    </v-main>
  </v-app>
</template>
