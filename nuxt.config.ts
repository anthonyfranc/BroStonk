// nuxt.config.{js,ts}
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'h-full bg-white dark:bg-gray-900',
      },
    },
    keepalive: true,
  },
});
