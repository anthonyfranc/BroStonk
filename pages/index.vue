<template>
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats :webSocketStatus="webSocketStatus" :webSocketPing="webSocketPing" />
  </div>
  <div
    id="toast-bottom-right"
    class="
      fixed
      flex
      items-center
      w-full
      max-w-xs
      p-4
      space-x-
      text-gray-500
      bg-white
      divide-x divide-gray-200
      rounded-lg
      shadow
      right-5
      bottom-5
      dark:text-gray-400 dark:divide-gray-700
      space-x
      dark:bg-gray-800
      slide-up
    "
    role="alert"
  >
    <div
      class="
        inline-flex
        items-center
        justify-center
        flex-shrink-0
        w-3
        h-3
        text-blue-500
        bg-blue-100
        rounded-lg
        dark:bg-gray-300 dark:gray-gray-300
      "
    >
      <div
        class="
          inline-flex
          items-center
          justify-center
          flex-shrink-0
          w-3
          h-3
          text-blue-500
          bg-blue-100
          rounded-lg
          dark:bg-gray-300 dark:gray-gray-300
          animate-ping
        "
      ></div>
    </div>
    <div class="ml-3 text-sm font-normal">
      {{ webSocketStatus }} | {{ webSocketPing }} MS
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, provide, watch } from 'vue';
import { useIdle } from '@vueuse/core';

let ws;
const webSocketStatus = ref('');
const webSocketPing = ref(0);
let pingInterval = null;
let idleTimeout = null; // Declare idleTimeout

const pingWebSocket = () => {
  if (ws && ws.readyState === WebSocket.OPEN) {
    const pingTimestamp = new Date().getTime();
    ws.send(`ping:${pingTimestamp}`);
  }
};

const startPingInterval = () => {
  if (!pingInterval) {
    pingInterval = setInterval(() => {
      pingWebSocket();
    }, 1000);
  }
};

const stopPingInterval = () => {
  if (pingInterval) {
    clearInterval(pingInterval);
    pingInterval = null;
  }
};

const handlePongMessage = (event) => {
  if (event.data.startsWith('pong:')) {
    const [, pongTimestamp, originalPingTimestamp] = event.data.split(':');
    const currentTimestamp = new Date().getTime();
    const ping = currentTimestamp - parseInt(originalPingTimestamp); // Parse originalPingTimestamp
    webSocketPing.value = ping;
  }
};

const setupWebSocket = () => {
  ws = new WebSocket('wss://brostonksnode-6745321f7dfb.herokuapp.com');

  ws.onopen = () => {
    console.log('WebSocket connection opened');
    ws.send('startFetching');
    pingWebSocket();
    webSocketStatus.value = 'WebSocket connection opened';
    startPingInterval();
  };

  ws.onclose = () => {
    console.log('WebSocket connection closed');
    stopPingInterval();
  };

  ws.onmessage = handlePongMessage;
};

onMounted(() => {
  setupWebSocket();
});

const { idle, reset } = useIdle(10000);

watch(idle, (newIdleValue) => {
  console.log('Idle value changed:', newIdleValue);

  if (!newIdleValue) {
    if (ws.readyState !== WebSocket.OPEN) {
      console.log('Reconnecting WebSocket...');
      setupWebSocket(); // Reestablish WebSocket connection and event listeners
      webSocketStatus.value = 'WebSocket connection reopened';
    }
  } else {
    if (ws.readyState === WebSocket.OPEN) {
      ws.close();
    }
    stopPingInterval();
    console.log('WebSocket connection closed due to inactivity');
    webSocketStatus.value = 'WebSocket connection closed due to inactivity';
  }
});

onBeforeUnmount(() => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.close();
  }
  stopPingInterval();
});

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);

definePageMeta({
  colorMode: 'dark',
});
</script>

<style type="css">
div.slide-up {
  animation: slideInLogo 1s ease 0s 1 normal none;
}

@keyframes slide-up {
  from {
    margin-top: 100%;
    height: 300%;
  }
  to {
    margin-top: 0%;
    height: 100%;
  }
}
</style>
