// store/index.js
import { defineStore } from 'pinia';

export const useWebSocketStore = defineStore('webSocket', {
  state: () => ({
    webSocketStatus: '',
    webSocketPing: '',
  }),
  actions: {
    setWebSocketStatus(status) {
      this.webSocketStatus = status;
    },
    setWebSocketPing(ping) {
      this.webSocketPing = ping;
    },
  },
});

export const useUiStore = defineStore('ui', {
  state: () => ({
    sidebarOpen: false 
  })
})
