<template>
  <div class="min-h-screen">
    <NuxtLayout>
      <LoaderIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useWebSocket } from '~/composables/useWebSocket.js';
import { initFlowbite } from 'flowbite';

const { webSocketStatus, webSocketPing } = useWebSocket();
const show = ref(false);
const nuxtApp = useNuxtApp();

nuxtApp.hook('page:start', () => {
  initFlowbite();
});

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);
</script>
