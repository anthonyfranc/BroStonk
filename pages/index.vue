<!-- MyComponent.vue -->
<template>
  <div>
    <p>WebSocket Status: {{ webSocketStatus }}</p>
  </div>
</template>

<script setup lang="ts">
import { useWebSocketStatus } from '~/composables/useWebSocketStatus';

const webSocketStatus = useWebSocketStatus();
</script>
