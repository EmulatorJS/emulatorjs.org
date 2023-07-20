import { description } from '../../package.json'
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import path from 'path'

export default {
  title: 'EmulatorJS',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/vnd.microsoft.icon' }],
    ['script', { src: '/log.js', content: '' }],
    ['script', { content: "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-R87E52EEFR');'" }]
  ],
  theme: defaultTheme({
    logo: '/favicon.ico',
    repo: 'https://github.com/EmulatorJS/EmulatorJS',
    repoLabel: 'EmulatorJS',
    accentColor: '#0098C5',
    editLink: false,
    navbar: [
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
      }
    ],
    sidebar: [
    {
        text: 'Docs',
        link: '/docs/',
        collapsable: false,
        children: [
          {
            text: 'News',
            link: '/docs/News',
          },
          {
            text: 'Getting Started',
            link: '/docs/Getting Started.html',
          },
          {
            text: 'Features',
            link: '/docs/Features',
          },
          {
            text: 'Options',
            link: '/docs/Options',
          },
          {
            text: 'Languages',
            link: '/docs/Languages',
          },
          {
            text: 'Roadmap',
            link: '/docs/Roadmap',
          },
          {
            text: 'Changelog',
            link: 'https://github.com/EmulatorJS/EmulatorJS/blob/main/CHANGES.md',
          },
          {
            text: 'Contribute',
            link: '/docs/Contribute',
          },
          {
            text: 'FAQ',
            link: '/docs/FAQ',
          }
        ]
      },
      {
        text: 'For Developers',
        link: '/docs4devs/',
        collapsable: false,
        children: [
          {
            text: 'Building EmulatorJS',
            link: '/docs4devs/Building',
          },
          {
            text: 'Building RetroArch Cores',
            link: '/docs4devs/BuildingRAW',
          },
          {
            text: 'Control Mapping',
            link: '/docs4devs/Control Mapping.html',
          },
          {
            text: 'Virutal Gamepad Settings',
            link: '/docs4devs/Virutal Gamepad Settings.html',
          },
          {
            text: 'Minifying',
            link: '/docs4devs/Minifying',
          },
          {
            text: 'Cores',
            link: '/docs4devs/Cores',
          },
          {
            text: 'Netplay',
            link: '/docs4devs/Netplay',
          }
        ]
      }
    ]
  }),
  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin(),
    searchPlugin({
      maxSuggestions: 10,
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => page.frontmatter.tags ?? [],
      locales: {
        '/': {
          placeholder: 'Search',
        }
      }
    }),
    registerComponentsPlugin({
      components: {
        AddScript: path.resolve(__dirname, './components/AddScript.vue'),
      },
    }),
    googleAnalyticsPlugin({
      id: 'G-R87E52EEFR',
      debug: true
    }),
  ]
}
