<template>
  <div class="min-h-screen">
    <NuxtLayout>
      <LoaderIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
import { useWebSocket } from '~/composables/useWebSocket.js';

// No need to import or use useWebSocketStore or webSocketStore here
const { webSocketStatus, webSocketPing } = useWebSocket();
const nuxtApp = useNuxtApp();
const show = ref(false);

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);

// Initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
