<script setup>
const supabase = useSupabaseClient();

try {
  const { error } = await supabase.auth.signOut();
  if (error) {
    // Handle the error, such as displaying an error message.
    console.error('Error signing out with Discord:', error.message);
  }
} catch {
  navigateTo({ path: '/' });
}
</script>
