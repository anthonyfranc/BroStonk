// composables/useWebSocketStatus.ts
import { inject } from 'vue';

export default function useWebSocketStatus() {
  return inject('webSocketStatus');
}
