<script setup>
const user = useSupabaseUser();

onMounted(() => {
  if (user) {
    initFlowbite();
    navigateTo({ path: '/' });
  }
});
</script>
