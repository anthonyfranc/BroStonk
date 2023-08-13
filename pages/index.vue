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

if (process.client) {
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

  let idleTimeout;

  // Ping the server every 5 seconds
  const pingInterval = setInterval(() => {
    pingWebSocket();
  }, 1000);

  const { idle, reset } = useIdle(10000);

  watch(idle, (idleValue) => {
    if (idleValue) {
      idleTimeout = setTimeout(() => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.close();
        }
        clearInterval(pingInterval); // Clear the ping interval
        console.log('WebSocket connection closed due to inactivity');
        webSocketStatus.value = 'WebSocket connection closed due to inactivity';
      }, 1000);
    } else {
      clearTimeout(idleTimeout);
      reset();
      if (ws.readyState !== WebSocket.OPEN) {
        ws = new WebSocket('wss://secretfussyscan.anthonyfranc.repl.co');
        ws.onopen = () => {
          console.log('WebSocket connection reopened');
          ws.send('startFetching');
          webSocketStatus.value = 'WebSocket connection reopened';
        };
        // Restart the ping interval
        pingInterval = setInterval(() => {
          pingWebSocket();
        }, 5000);
      }
    }
  });

  onBeforeUnmount(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.close();
    }
    clearInterval(pingInterval); // Clear the ping interval on unmount
  });
}

provide('webSocketStatus', webSocketStatus);
provide('webSocketPing', webSocketPing);

definePageMeta({
  colorMode: 'dark',
});
</script>
