// nuxt.config.{js,ts}
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/image',
  ],
  supabase: {
    redirect: false,
    url: 'https://jjtqvxvprcmblezstaks.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdHF2eHZwcmNtYmxlenN0YWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NjAxMjAsImV4cCI6MjAwNzMzNjEyMH0.glxbp12RNVsu6TaSqPGH_CUDs9AH7T1jNkfwLtz3ZQI',
    clientOptions: {
      realtime: {
        params: {
          eventsPerSecond: 1,
        },
      },
    },
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
      htmlAttrs: {
        class: 'h-full bg-gray-900' 
      },
      bodyAttrs: {
        class: 'h-full' 
      },
    },
    keepalive: true,
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
});