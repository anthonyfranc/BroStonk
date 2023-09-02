<script setup>
const supabase = useSupabaseClient();

supabase.auth.onAuthStateChange((event, session) => {
  navigateTo({ path: '/' });
});
</script>
