export default defineNuxtRouteMiddleware(() => {
  const supabase = useSupabaseClient();
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      initFlowbite();
      navigateTo({ path: '/' });
    }
  });
});
