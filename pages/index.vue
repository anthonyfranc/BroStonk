<template>
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats :webSocketStatus="webSocketStatus" :webSocketPing="webSocketPing" />
  </div>
</template>

<script setup>
import { useWebSocket } from '~/composables/useWebSocket.js';

const { webSocketStatus, webSocketPing } = useWebSocket();

definePageMeta({
  colorMode: 'dark',
});
</script>
