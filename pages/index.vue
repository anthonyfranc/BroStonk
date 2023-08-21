<template>
  <statusBar />
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats />
    <StatsTable :crypto="crypto" />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client instance
const supabaseUrl = 'https://jjtqvxvprcmblezstaks.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdHF2eHZwcmNtYmxlenN0YWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NjAxMjAsImV4cCI6MjAwNzMzNjEyMH0.glxbp12RNVsu6TaSqPGH_CUDs9AH7T1jNkfwLtz3ZQI';
const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
};

const supabase = createClient(supabaseUrl, supabaseKey, options);

// Fetch the crypto data using an asynchronous function
const fetchCryptoData = async () => {
  const { data, error } = await supabase.from('crypto').select('*');
  if (data) {
    crypto.value = data;
  }
};

const crypto = ref([]); // Initialize as an empty array

fetchCryptoData(); // Fetch and populate the crypto data

definePageMeta({
  colorMode: 'dark',
});
</script>
