import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,
  // typescripts
  typescript: {
    strict: true,
    typeCheck: true
  },

  // css
  css: [
    '~/assets/css/main.css',
    '~/assets/css/twemoji.css',
    '~/assets/sass/vendor.scss',
    '~/assets/sass/app.scss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  // // plugins
  // plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['fsevents', '@headlessui/vue']
  },

  // modules
  modules: [
    'unplugin-icons/nuxt',
    '@intlify/nuxt3',
    '@pinia/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],

  // experimental features
  experimental: {
    reactivityTransform: false
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon'
          })
        ]
      })
    ]
  },

  // app config
  app: {
    baseURL: '/zachary.github.io/',
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'zh']
    }
  },

  // vueuse
  vueuse: {
    ssrHandlers: true
  },

  // content
  content: {
    documentDriven: true,
    markdown: {
      mdc: true
    },
    highlight: {
      theme: 'github-dark'
    }
  }
})
