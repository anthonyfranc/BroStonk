// middleware/flowbite.js

import { initFlowbite } from 'flowbite';
import { useRoute } from 'vue-router';

export default function () {
  const route = useRoute();

  // Assuming you want to call initFlowbite on every route change
  if(process.client){
    initFlowbite();

  }
}