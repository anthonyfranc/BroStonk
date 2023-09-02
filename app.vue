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
const supabase = useSupabaseClient();

nuxtApp.hook('page:start', () => {
  initFlowbite();
});

supabase.auth.onAuthStateChange((event, session) => {
  if (event == 'SIGNED_IN') {
    initFlowbite();
    navigateTo({ path: '/confirm' });
  }
});

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);
</script>
