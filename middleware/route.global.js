// middleware/flowbite.js

import { initFlowbite } from 'flowbite';

export default function () {
  onUpdated(() => {
    initFlowbite();
  });
}
