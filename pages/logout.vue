<template>
  <div></div>
</template>

<script setup>
const supabase = useSupabaseClient();

const { error } = await supabase.auth.signOut();
if (error) {
  // Handle the error, such as displaying an error message.
  console.error('Error signing out with Supabase:', error.message);
} else {
  // Sign-out was successful, navigate to the root path.
  navigateTo({ path: '/' });
}
</script>
