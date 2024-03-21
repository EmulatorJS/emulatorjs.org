export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  components: [{ 
    path: './components', 
    level: -1
  }],
  head: {
    title: 'EmulatorJS',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#3eaf7c' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      ],
      script: [
        { content: "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-R87E52EEFR');'" }
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  modules: [
    'nuxt-custom-elements'
  ]
})
