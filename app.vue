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
import { ref, onMounted, watch } from 'vue';

const { webSocketStatus, webSocketPing } = useWebSocket();
const show = ref(false);

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);

// Function to reinitialize Flowbite
const reinitializeFlowbite = () => {
  if (process.client) {
    initFlowbite();
  }
};

onMounted(() => {
  // Initialize Flowbite components on initial page load
  reinitializeFlowbite();

  // Watch for route changes and reinitialize Flowbite
  watch(
    () => useRoute().fullPath,
    () => {
      reinitializeFlowbite();
    }
  );
});
</script>
