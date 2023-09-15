import { ref, onMounted, onBeforeUnmount, provide, watch, computed } from 'vue';
import { useIdle } from '@vueuse/core';
import { useWebSocketStore } from '~/store/index';

export function useWebSocket() {
  const route = useRoute();
  const webSocketStore = useWebSocketStore();
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
    if (!route.path.startsWith('/dashboard')) {
      return; // Do not connect WebSocket if route does not start with "/dashboard"
    }
    ws = new WebSocket(
      'wss://brostonksnode-6745321f7dfb.herokuapp.com/index-ws'
    );

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

  const { idle, reset } = useIdle(60000);

  watch(idle, (newIdleValue) => {
    console.log('Idle value changed:', newIdleValue);
  
    if (!newIdleValue) {
      if (ws.readyState === WebSocket.CLOSED) {
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

  return {
    webSocketStatus,
    webSocketPing,
  };
}
