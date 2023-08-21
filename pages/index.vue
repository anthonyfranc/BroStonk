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
import { RealtimeChannel, createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jjtqvxvprcmblezstaks.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdHF2eHZwcmNtYmxlenN0YWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NjAxMjAsImV4cCI6MjAwNzMzNjEyMH0.glxbp12RNVsu6TaSqPGH_CUDs9AH7T1jNkfwLtz3ZQI';
const supabase = createClient(supabaseUrl, supabaseKey);

let realtimeChannel: RealtimeChannel;

// Fetch collaborators and get the refresh method provided by useAsyncData
const crypto = supabase
  .channel('custom-all-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'crypto' },
    (payload) => {
      console.log('Change received!', payload);
    }
  )
  .subscribe();

definePageMeta({
  colorMode: 'dark',
});
</script>
