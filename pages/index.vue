<template>
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats :webSocketStatus="webSocketStatus" :webSocketPing="webSocketPing" />
    <p>Ping: {{ webSocketPing }} ms</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, provide, watch } from 'vue';
import { useIdle } from '@vueuse/core';

let ws;
const webSocketStatus = ref('');
const webSocketPing = ref(0);
let pingInterval = null;

const pingWebSocket = () => {
  if (ws && ws.readyState === WebSocket.OPEN) {
    const pingTimestamp = new Date().getTime();
    ws.send(`ping:${pingTimestamp}`);
  }
};

const handlePongMessage = (event) => {
  if (event.data.startsWith('pong:')) {
    const [, pongTimestamp, originalPingTimestamp] = event.data.split(':');
    const currentTimestamp = new Date().getTime();
    const ping = currentTimestamp - originalPingTimestamp;
    webSocketPing.value = ping;
  }
};

onMounted(() => {
  ws = new WebSocket('wss://secretfussyscan.anthonyfranc.repl.co');

  ws.onopen = () => {
    console.log('WebSocket connection opened');
    ws.send('startFetching');
    pingWebSocket();
    webSocketStatus.value = 'WebSocket connection opened';
  };

  ws.onclose = () => {
    console.log('WebSocket connection closed');
  };

  ws.onmessage = handlePongMessage;

  // Start the ping interval only if it's not already running
  if (!pingInterval) {
    pingInterval = setInterval(() => {
      pingWebSocket();
    }, 1000);
  }
});

const { idle, reset } = useIdle(10000);

watch(idle, (idleValue) => {
  if (idleValue) {
    if (ws.readyState === WebSocket.OPEN) {
      ws.close();
    }
    clearInterval(pingInterval);
    pingInterval = null; // Reset pingInterval to null
    console.log('WebSocket connection closed due to inactivity');
    webSocketStatus.value = 'WebSocket connection closed due to inactivity';
  } else {
    clearTimeout(idleTimeout);
    reset();
    if (ws.readyState !== WebSocket.OPEN) {
      ws = new WebSocket('wss://secretfussyscan.anthonyfranc.repl.co');
      ws.onopen = () => {
        console.log('WebSocket connection reopened');
        ws.send('startFetching');
        webSocketStatus.value = 'WebSocket connection reopened';
        // Restart the ping interval only if it's not already running
        if (!pingInterval) {
          pingInterval = setInterval(() => {
            pingWebSocket();
          }, 1000);
        }
      };
    }
  }
});

let idleTimeout;

onBeforeUnmount(() => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.close();
  }
  clearInterval(pingInterval);
  pingInterval = null; // Reset pingInterval to null
});

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);

definePageMeta({
  colorMode: 'dark',
});
</script>
