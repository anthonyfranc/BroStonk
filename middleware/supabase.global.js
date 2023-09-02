const supabase = useSupabaseClient();

export default defineNuxtRouteMiddleware(() => {
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      initFlowbite();
      navigateTo({ path: '/' });
    }
  });
});
