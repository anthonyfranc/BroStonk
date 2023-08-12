<template>
  <div class="mx-auto max-w-screen-xl">
    <Header />
    <Stats />
  </div>
</template>

<script setup>
import WebSocket from 'ws';

const ws = new WebSocket('ws://secretfussyscan.anthonyfranc.repl.co');
ws.onopen = () => {
  ws.send('startFetching');
};
ws.onclose = () => {
  console.log('WebSocket connection closed');
};

onBeforeUnmount(() => {
  ws.close();
});

definePageMeta({
  colorMode: 'dark',
});
</script>
