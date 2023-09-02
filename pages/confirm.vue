<script setup>
const user = useSupabaseUser();

onMounted(() => {
  if (user) {
    navigateTo({ path: '/' });
  }
});
</script>
