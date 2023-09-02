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

const { webSocketStatus, webSocketPing } = useWebSocket();
const show = ref(false);

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);

// Create a reactive variable to track Flowbite initialization
const flowbiteInitialized = ref(false);

// Function to reinitialize Flowbite
const reinitializeFlowbite = () => {
    initFlowbite();
    flowbiteInitialized.value = true; // Mark Flowbite as initialized
};

onMounted(() => {
  // Initialize Flowbite components on initial page load
  initFlowbite();
  flowbiteInitialized.value = true; // Mark Flowbite as initialized
});

// Watch the flowbiteInitialized variable and reinitialize Flowbite when it becomes true
watch(flowbiteInitialized, (isInitialized) => {
  if (isInitialized) {
    reinitializeFlowbite();
  }
});
</script>
