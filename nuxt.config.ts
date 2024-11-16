export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxthq/studio',
  ],

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      templateParams: {
        separator: '•',
      },
    },
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
  },

  runtimeConfig: {
    redis: {
      host: '',
      port: 0,
      password: '',
      username: '',
    },
  },

  routeRules: {
    '/': { prerender: true },
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2024-10-02',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
