<template>
  <LazystatusBar />
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats />
    <StatsTable />
  </div>
  <Footer />
</template>

<script setup>
definePageMeta({
  colorMode: 'dark',
});
</script>
