import { ref, onBeforeUnmount, watch, provide } from 'vue';
import { useIdle } from '@vueuse/core';

const webSocketStatus = ref('WebSocket connecting');

export default defineNuxtPlugin((app) => {
  let ws;
  const webSocketStatus = ref('');
  const webSocketPing = ref(0);
  let pingInterval = null;
  let idleTimeout = null;

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
      const ping = currentTimestamp - parseInt(originalPingTimestamp);
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

  setupWebSocket(); // Call setupWebSocket immediately when the plugin is loaded

  const { idle } = useIdle(10000);

  watch(idle, (newIdleValue) => {
    console.log('Idle value changed:', newIdleValue);

    if (!newIdleValue) {
      if (ws.readyState !== WebSocket.OPEN) {
        console.log('Reconnecting WebSocket...');
        setupWebSocket();
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
  app.setupWebSocket = setupWebSocket;
  provide('webSocketStatus', webSocketStatus);
});
