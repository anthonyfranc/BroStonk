<template>
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats />
    <div>WebSocket Connection Status: {{ webSocketStatus }}</div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const webSocketStatus = inject('webSocketStatus');

definePageMeta({
  colorMode: 'dark',
});
</script>
