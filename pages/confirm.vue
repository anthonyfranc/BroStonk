<template>
  <div></div>
</template>

<script setup>
const supabase = useSupabaseClient();

supabase.auth.onAuthStateChange((event, session) => {
  if (event == 'SIGNED_IN') {
    navigateTo({ path: '/' });
  }
});
</script>
