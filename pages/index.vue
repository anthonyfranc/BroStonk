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
onMounted(() => {
  new Crate({
    server: '1146980018174578688', // BroStonks
    channel: '1146980018631737386', // #general
  });
});

definePageMeta({
  colorMode: 'dark',
});
</script>
