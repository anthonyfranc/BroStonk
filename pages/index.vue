<template>
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats :webSocketStatus="webSocketStatus" :webSocketPing="webSocketPing" />
    <p>Ping: {{ webSocketPing }} ms</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, provide, watch } from "vue";
import { useIdle } from "@vueuse/core";

let ws;
const webSocketStatus = ref("");
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
  if (event.data.startsWith("pong:")) {
    const [, pongTimestamp, originalPingTimestamp] = event.data.split(":");
    const currentTimestamp = new Date().getTime();
    const ping = currentTimestamp - parseInt(originalPingTimestamp); // Parse originalPingTimestamp
    webSocketPing.value = ping;
  }
};

const setupWebSocket = () => {
  ws = new WebSocket("wss://secretfussyscan.anthonyfranc.repl.co");

  ws.onopen = () => {
    console.log("WebSocket connection opened");
    ws.send("startFetching");
    pingWebSocket();
    webSocketStatus.value = "WebSocket connection opened";
    startPingInterval();
  };

  ws.onclose = () => {
    console.log("WebSocket connection closed");
    stopPingInterval();
  };

  ws.onmessage = handlePongMessage;
};

onMounted(() => {
  setupWebSocket();
});

const { idle, reset } = useIdle(10000);

watch(idle, (newIdleValue) => {
  console.log("Idle value changed:", newIdleValue);

  if (!newIdleValue) {
    if (ws.readyState !== WebSocket.OPEN) {
      console.log("Reconnecting WebSocket...");
      setupWebSocket(); // Reestablish WebSocket connection and event listeners
      webSocketStatus.value = "WebSocket connection reopened";
    }
  } else {
    if (ws.readyState === WebSocket.OPEN) {
      ws.close();
    }
    stopPingInterval();
    console.log("WebSocket connection closed due to inactivity");
    webSocketStatus.value = "WebSocket connection closed due to inactivity";
  }
});

onBeforeUnmount(() => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.close();
  }
  stopPingInterval();
});

provide("webSocketStatus", webSocketStatus);
provide("webSocketPing", webSocketPing);

definePageMeta({
  colorMode: "dark",
});
</script>
