<template>
  <statusBar />
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats />
    <StatsTable />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import type { RealtimeChannel } from '@supabase/supabase-js';

const client = useSupabaseClient();

let realtimeChannel: RealtimeChannel;

// Fetch collaborators and get the refresh method provided by useAsyncData
const { data: collaborators, refresh: refreshCollaborators } =
  await useAsyncData('collaborators', async () => {
    const { data } = await client.from('collaborators').select('name');
    return data;
  });

definePageMeta({
  colorMode: 'dark',
});
</script>
