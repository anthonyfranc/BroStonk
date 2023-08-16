<template>
  <!--Status Bar-->
  <div
    id="sticky-banner"
    tabindex="-1"
    class="
      top-0
      left-0
      z-50
      flex
      justify-between
      w-full
      p-4
      border-b border-gray-200
      bg-gray-500
      dark:bg-gray-700 dark:border-gray-600
    "
  >
    <div class="flex items-center mx-auto">
      <p
        class="
          flex
          items-center
          text-sm
          font-normal
          text-gray-500
          dark:text-gray-400
        "
      >
        <span
          class="
            inline-flex
            p-1
            mr-3
            bg-gray-200
            rounded-full
            dark:bg-gray-300
            w-3
            h-3
            items-center
            justify-center
            animate-pulse
          "
          :class="{
            'dark:bg-green-500':
              webSocketStatus === 'WebSocket connection opened',
            'dark:bg-yellow-500':
              webSocketStatus ===
              'WebSocket connection closed due to inactivity',
            'dark:bg-red-500':
              webSocketStatus === 'WebSocket connection closed',
          }"
        >
        </span>
        <span>
          {{
            webSocketStatus === 'WebSocket connection opened'
              ? 'Connected to server.'
              : webSocketStatus ===
                'WebSocket connection closed due to inactivity'
              ? 'Connection closed due to inactivity.'
              : webSocketStatus === 'WebSocket connection closed'
              ? 'Connection has been closed.'
              : 'Connecting to Server'
          }}
        </span>
      </p>
    </div>
    <div class="flex items-center">
      <button
        data-dismiss-target="#sticky-banner"
        type="button"
        class="
          flex-shrink-0
          inline-flex
          justify-center
          items-center
          text-gray-400
          hover:bg-gray-200 hover:text-gray-900
          rounded-lg
          text-sm
          p-1.5
          dark:hover:bg-gray-600 dark:hover:text-white
        "
      >
        <svg
          fill="#6B7280"
          class="w-5 h-5 mr-2"
          viewBox="0 -2.2 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="bg-gray-500"
            stroke-width="0.032"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  d="M8,7.8a2,2,0,1,1,2-2A2,2,0,0,1,8,7.8Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,8,4.8Zm5.66,6.66a8,8,0,0,0,0-11.31.5.5,0,0,0-.71,0,.48.48,0,0,0,0,.7,7,7,0,0,1,0,9.9.5.5,0,0,0,0,.71.49.49,0,0,0,.35.15A.51.51,0,0,0,13.66,11.46ZM11.54,9.34a5,5,0,0,0,0-7.07.5.5,0,0,0-.71,0,.48.48,0,0,0,0,.7,4,4,0,0,1,0,5.66.5.5,0,0,0,0,.71.49.49,0,0,0,.35.15A.51.51,0,0,0,11.54,9.34Zm-6.37,0a.5.5,0,0,0,0-.71A4,4,0,0,1,5.17,3a.48.48,0,0,0,0-.7.5.5,0,0,0-.71,0,5,5,0,0,0,0,7.07.51.51,0,0,0,.36.15A.49.49,0,0,0,5.17,9.34ZM3.05,11.46a.5.5,0,0,0,0-.71,7,7,0,0,1,0-9.9.48.48,0,0,0,0-.7.5.5,0,0,0-.71,0,8,8,0,0,0,0,11.31.51.51,0,0,0,.36.15A.49.49,0,0,0,3.05,11.46Z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        {{ webSocketPing }} MS
      </button>
    </div>
  </div>
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats />
    {{ webSocketStatus }}
  </div>
</template>

<script setup>
import { useWebSocket } from '~/composables/useWebSocket.js';

const { webSocketStatus, webSocketPing } = useWebSocket();

definePageMeta({
  colorMode: 'dark',
});
</script>
