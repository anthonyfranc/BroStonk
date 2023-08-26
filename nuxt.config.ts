// nuxt.config.{js,ts}
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
  ],
  supabase: {
    redirect: false,
    url: 'https://supabase.brostonks.com',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE4NTA4MDE4MDYsImlhdCI6MTY5MzAxNzQwNiwiaXNzIjoic3VwYWJhc2UiLCJyb2xlIjoiYW5vbiJ9.BnInpw16V_5acXUTyCi7g_UFGBNzVBzODHwZ_8ENNJ4',
  },
  colorMode: {
    classSuffix: '',
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  ssr: true,
  app: {
    head: {
      bodyAttrs: {
        class: 'h-full bg-white dark:bg-gray-900 antialiased',
      },
    },
    keepalive: true,
  },
});
