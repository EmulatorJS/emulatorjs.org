export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  components: [{ 
    global: true,
    dirs: ['~/components'],
    level: -1
  }],
  head: {
    title: 'EmulatorJS',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#00afe4' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/vnd.microsoft.icon' },
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ],
      link: [
        { rel: 'stylesheet', href: '/css/main.css' }
      ]
    }
  },
  modules: [
    'nuxt-anchorscroll',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-R87E52EEFR'
  },
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['AddScript'].includes(tag),
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
    }
  },
  anchorscroll: {
    hooks: [
      'page:transition:finish',
    ],
  },
})
