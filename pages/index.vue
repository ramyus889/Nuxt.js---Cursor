<script setup lang="ts">
useHead({
  title: "Cursor - Main",
});
</script>
<template>
  <div class="">
    <div
      class="min-[2300px]:mx-[331px] min-[2000px]:mx-[200px] min-[1600px]:mx-[150px] min-[1500px]:mx-[100px] min-[1280px]:mx-[50px] mx-[20px]"
    >
      <MainIndex />
    </div>
    <div
      class="min-[2300px]:mx-[591px] min-[2000px]:mx-[400px] min-[1600px]:mx-[300px] min-[1280px]:mx-[100px] mx-[20px]"
    >
      <LogoFlex />
      <CardFlex />
      <FeaturesFlex />
      <Footer />
    </div>
  </div>
</template>
