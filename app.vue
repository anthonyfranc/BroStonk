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

const { webSocketStatus, webSocketPing } = useWebSocket();
const show = ref(false);

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);
</script>

<script>
export default {
  // This option will be called every time the route changes
  beforeEnter: async (to, from, next) => {
    // Call initFlowbite
    await initFlowbite();

    // Continue with the route change
    next();
  },
};
</script>
