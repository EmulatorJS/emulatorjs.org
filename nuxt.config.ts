export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  components: [{
    dirs: ['~/components'],
    level: -1
  }],
  modules: [
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-R87E52EEFR'
  },
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['AddScript' || 'ThemeImage'].includes(tag),
    },
  },
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in'
    },
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
    }
  }
})
