<template>
<NuxtLayout>
  <NuxtPage />
</NuxtLayout>
<Notify /></template>

<script setup>
import { useWebSocket } from '~/composables/useWebSocket.js';
import { initFlowbite } from 'flowbite';

const { webSocketStatus, webSocketPing } = useWebSocket();
const nuxtApp = useNuxtApp();

nuxtApp.hook('page:start', () => {
  initFlowbite();
});

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);
</script>
