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
import { useRoute } from 'vue-router';

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
  // Check if Flowbite has been initialized on initial page load
  if (!flowbiteInitialized.value) {
    // Initialize Flowbite components
    reinitializeFlowbite();
  }
});

// Watch the route for changes and set Flowbite as not initialized
watch(useRoute().fullPath, () => {
  flowbiteInitialized.value = false;
});
</script>
