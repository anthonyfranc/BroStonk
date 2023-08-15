// nuxt.config.{js,ts}
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
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
  plugins: [
    {
      src: '~/plugins/webSocketPlugin.js',
      mode: 'client',
    },
  ],
});
