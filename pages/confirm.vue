<template>
  <div></div>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
const supabase = useSupabaseClient();

supabase.auth.onAuthStateChange((event, session) => {
  if (event == 'SIGNED_IN') {
    initFlowbite();
    navigateTo({ path: '/confirm' });
  }
});
</script>
