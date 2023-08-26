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
    key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNjkzMDU5OTYyLCJleHAiOjIwMDg0MTk5NjJ9.JnlrUwdGleburTGcmWTCMlzAe0dzSxkZmQ2i3BjWyJM',
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
