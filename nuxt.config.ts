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
    keepalive: false,
  },
});
