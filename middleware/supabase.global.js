export default defineNuxtRouteMiddleware(() => {
  const supabase = useSupabaseClient();
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      initFlowbite();
      //navigateTo({ path: '/' });
    }
    else if(event == 'SIGNED_OUT'){
      //navigateTo({ path: '/' });
    }
  });
});
