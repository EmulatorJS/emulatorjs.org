const { description } = require('../../package')

module.exports = {
  title: 'EmulatorJS',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/vnd.microsoft.icon' }],
   // ['script', { async:true, src: 'https://www.googletagmanager.com/gtag/js?id=G-R87E52EEFR', content: '' }],
   // ['script', { content: "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-R87E52EEFR');'" }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'Code Editor',
        link: '/editor.html'
      },
      {
        text: 'Demo',
        link: '/demo.html'
      },
      {
        text: 'EmulatorJS',
        link: 'https://github.com/ethanaobrien/emulatorjs'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Docs',
          collapsable: false,
          children: [
            'Introduction',
            'Options'
          ]
        },
        {
          title: 'Developers',
          collapsable: false,
          children: [
            'intro',
            'Building',
            'Control Mapping',
            'Minifying'
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
