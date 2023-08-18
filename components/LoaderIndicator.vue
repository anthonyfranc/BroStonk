<template>
  <div
    ref="progressBar"
    class="
      fixed
      left-0
      top-0
      z-1
      transition-all
      bg-[#ff6a00]
      h-[3px]
      opacity-0
      w-0
    "
    :style="{ width: '0%' }"
  ></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import useUiStore from '@/store/ui';

const nuxtApp = useNuxtApp();
const progressBar = ref(null);

nuxtApp.hook('page:finish', () => {
  if (useUiStore().$state.pageLoader) {
    useUiStore().setPageLoader(false);
  }
});

watch(
  () => useUiStore().$state.pageLoader,
  (newVal, oldVal) => {
    if (newVal) {
      progressBar.value.style.opacity = '1';
      progressBar.value.style.transitionDuration = '1000ms';
      progressBar.value.style.width = '40%';
    } else {
      progressBar.value.style.transitionDuration = '1000ms';
      progressBar.value.style.width = '100%';
      setTimeout(() => {
        progressBar.value.style.opacity = '0';
        progressBar.value.style.transitionDuration = '0ms';
        progressBar.value.style.width = '0%';
      }, 1000);
    }
  }
);
</script>
