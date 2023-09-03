<template>
  <statusBar />
  <div class="relative mx-auto max-w-screen-xl">
    <Header />
    <Stats />
    <StatsTable />
  </div>
  <Footer />
  <div class="absolute bottom-4 right-4 z-10">
    <Client-Only>
      <Discord />
    </Client-Only>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: 'dark',
});
</script>
