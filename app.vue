<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
import { useWebSocket } from '~/composables/useWebSocket.js';

// No need to import or use useWebSocketStore or webSocketStore here
const { webSocketStatus, webSocketPing } = useWebSocket();

// Initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
