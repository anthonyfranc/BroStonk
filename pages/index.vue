<template>
  <statusBar />
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats />
    <StatsTable />
  </div>
  <Footer />
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: 'dark',
});
</script>
