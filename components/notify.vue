<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div
    aria-live="assertive"
    class="
      pointer-events-none
      fixed
      inset-0
      flex
      items-end
      px-4
      py-6
      sm:items-start sm:p-6
      z-40
    "
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showNotification"
          class="
            pointer-events-auto
            w-full
            max-w-sm
            overflow-hidden
            rounded-lg
            bg-white
            shadow-lg
            ring-1 ring-black ring-opacity-5
          "
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon
                  class="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  :class="{
                    'text-green-400':
                      webSocketStatus === 'WebSocket connection opened',
                    'text-yellow-400':
                      webSocketStatus ===
                      'WebSocket connection closed due to inactivity',
                    'text-red-400':
                      webSocketStatus === 'WebSocket connection closed',
                  }"
                />
              </div>
              <div class="ml-3 w-0 flex-1">
                <p
                  class="mt-0 text-sm text-gray-500"
                  v-if="webSocketStatus == 'WebSocket connection opened'"
                >
                  You have successfully connected to the server.
                </p>
                <p
                  class="mt-0 text-sm text-gray-500"
                  v-else-if="
                    webSocketStatus ==
                    'WebSocket connection closed due to inactivity'
                  "
                >
                  Closed due to inactivity. If there are other user(s) connected
                  you may see data updated still.
                </p>
                <p
                  class="mt-0 text-sm text-gray-500"
                  v-else-if="webSocketStatus == 'WebSocket connection closed'"
                >
                  There appears to be an issue that forced your connection to be
                  closed.
                </p>
                <p class="mt-0 text-sm text-gray-500" v-else>
                  Attemping to connect to the server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { inject, watch, ref } from 'vue';
import { CheckCircleIcon } from '@heroicons/vue/24/outline';

// Inject WebSocket status
const webSocketStatus = inject('webSocketStatus', ref(''));

// Create a local variable showNotification
let showNotification = ref(false);

// Create a variable to store the timeout ID
let notificationTimeoutId = null;

// Function to handle showing and hiding the notification
const handleNotification = () => {
  // Check if webSocketStatus meets the condition to show the notification
  if (webSocketStatus.value) {
    showNotification.value = true;

    // If webSocketStatus is not in the array, close the notification after 2 seconds
    if (!['WebSocket connection closed due to inactivity', 'WebSocket connection closed'].includes(webSocketStatus.value)) {
      // Set showNotification to false after 2000 milliseconds (2 seconds)
      notificationTimeoutId = setTimeout(() => {
        showNotification.value = false;
      }, 2000);
    }
  } else {
    // If webSocketStatus changes before the timeout occurs, clear the timeout
    if (notificationTimeoutId) {
      clearTimeout(notificationTimeoutId);
      notificationTimeoutId = null;
    }

    // Hide the notification for other status values
    showNotification.value = false;
  }
};

// Watch for changes in webSocketStatus
watch(webSocketStatus, handleNotification);

// Initially handle the notification based on the current webSocketStatus
handleNotification();
</script>
