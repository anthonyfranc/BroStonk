<template>
  <div>
    <NuxtLayout>
      <NuxtPage
        :webSocketStatus="webSocketStatus"
        :webSocketPing="webSocketPing"
      />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
import { useWebSocket } from '~/composables/useWebSocket.js';

// No need to import or use useWebSocketStore or webSocketStore here
const { webSocketStatus, webSocketPing } = useWebSocket();

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);

// Initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<style type="css" scoped>
@media (max-height: 100px) {
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
