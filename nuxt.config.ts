import { createResolver } from '@nuxt/kit'
const { resolve: resolvePath } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: false },

  components: [{
    dirs: ['~/components'],
    level: -1
  },
  { path: resolvePath('components/globals'), global: true, prefix: '' },],

  modules: [
    'nuxt-gtag',
    'nuxt-anchorscroll'
  ],

  gtag: {
    id: 'G-R87E52EEFR'
  },

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#00afe4' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ],
      link: [
        { rel: 'stylesheet', href: '/css/main.css' },
        { rel: 'stylesheet', href: '/css/backToTop.min.css' }
      ],
      script: [
        { src: '/js/jquery.min.js' },
        { src: '/js/backToTop.min.js' },
        { src: '/js/main.js'}
      ]
    },
  },

  nitro: {
    preset: 'github_pages'
  },

  mdc: {
    highlight: {
      langs: ['html', 'xml', 'css', 'javascript', 'json', 'markdown', 'http']
    }
  },

  experimental: {
    viewTransition: true
  },

  anchorscroll: {
    hooks: [
      'page:transition:finish',
    ],
  },

  compatibilityDate: '2024-12-21',
})
