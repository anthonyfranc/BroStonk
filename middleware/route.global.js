// middleware/flowbite.js

import { initFlowbite } from 'flowbite';
import { useRoute } from 'vue-router';

export default function () {
  const route = useRoute();

  // Check if the redirect from Supabase occurred (modify this condition as needed)
  const redirectFromSupabase = route.fullPath.includes('brostonks.com?code=');

  // Initialize Flowbite if it hasn't been initialized and the redirect occurred
  if (redirectFromSupabase) {
    initFlowbite();
  }
}