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
</script>
