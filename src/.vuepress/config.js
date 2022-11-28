const { description } = require('../../package')

module.exports = {
  title: 'EmulatorJS',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/vnd.microsoft.icon' }],
    ['script', { async:true, src: 'https://www.googletagmanager.com/gtag/js?id=G-R87E52EEFR', content: '' }],
    ['script', { content: "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-R87E52EEFR');'" }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Documentation',
        link: '/docs/',
      },
      {
        text: 'Code Editor',
        link: '/editor.html'
      },
      {
        text: 'Demo',
        link: 'https://demo.emulatorjs.org/'
      },
      {
        text: 'EmulatorJS',
        link: 'https://github.com/EmulatorJS/EmulatorJS'
      }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Docs',
        path: '/docs/',
        collapsable: false,
        children: [
          ['/docs/News', 'News'],
          ['/docs/Getting Started', 'Getting Started'],
          ['/docs/Features', 'Features'],
          ['/docs/Options', 'Options'],
          ['/docs/Languages', 'Languages'],
          ['/docs/Roadmap', 'Roadmap'],
          ['https://github.com/EmulatorJS/EmulatorJS/blob/main/CHANGES.md', 'Changelog'],
          ['/docs/Contribute', 'Contribute']
        ]
      },
      {
        title: 'For Developers',
        path: '/docs4devs/',
        collapsable: false,
        children: [
          ['/docs4devs/Building', 'Building EmulatorJS'],
          ['/docs4devs/BuildingRAW', 'Building RetroArch Cores'],
          ['/docs4devs/Control Mapping', 'Control Mapping'],
          ['/docs4devs/Virutal Gamepad Settings', 'Virutal Gamepad Settings'],
          ['/docs4devs/Minifying', 'Minifying'],
          ['/docs4devs/Cores', 'Cores'],
          ['/docs4devs/Netplay', 'Netplay']
        ]
      }
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
