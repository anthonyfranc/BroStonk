export default defineNuxtPlugin(() => {
  onNuxtReady(async () => {
    initFlowbite();
  });
});
