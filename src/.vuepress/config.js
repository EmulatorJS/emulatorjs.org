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
      },
      {
        text: 'Join Discord',
        link: 'https://discord.gg/6akryGkETU'
      }
    ],
    sidebarDepth: 2,
    sidebar: [
    {
        text: 'Docs',
        link: '/docs/',
        collapsible: false,
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
            text: 'Systems',
            link: '/docs/Systems',
            collapsible: true,
            children: [
              {
                text: '3DO',
                link: '/github/docs/Systems/3DO',
              },
              {
                text: 'Arcade',
                link: '/github/docs/Systems/Arcade',
              },
              {
                text: 'Atari 2600',
                link: '/github/docs/Systems/Atari 2600.html',
              },
              {
                text: 'Atari 5200',
                link: '/github/docs/Systems/Atari 5200.html',
              },
              {
                text: 'Atari 7800',
                link: '/github/docs/Systems/Atari 7800.html',
              },
              {
                text: 'Atari Jaguar',
                link: '/github/docs/Systems/Atari Jaguar.html',
              },
              {
                text: 'Atari Lynx',
                link: '/github/docs/Systems/Atari Lynx.html',
              },
              {
                text: 'MAME 2003',
                link: '/github/docs/Systems/MAME 2003.html',
              },
              {
                text: 'NES-Famicom',
                link: '/github/docs/Systems/NES-Famicom.html',
              },
              {
                text: 'Nintendo 64',
                link: '/github/docs/Systems/Nintendo 64.html',
              },
              {
                text: 'Nintendo DS',
                link: '/github/docs/Systems/Nintendo DS.html',
              },
              {
                text: 'Nintendo Game Boy Advance',
                link: '/github/docs/Systems/Nintendo Game Boy Advance.html',
              },
              {
                text: 'Nintendo Game Boy',
                link: '/github/docs/Systems/Nintendo Game Boy.html',
              },
              {
                text: 'PlayStation',
                link: '/github/docs/Systems/PlayStation',
              },
              {
                text: 'Sega 32X',
                link: '/github/docs/Systems/Sega 32X.html',
              },
              {
                text: 'Sega CD',
                link: '/github/docs/Systems/Sega CD.html',
              },
              {
                text: 'Sega Game Gear',
                link: '/github/docs/Systems/Sega Game Gear.html',
              },
              {
                text: 'Sega Master System',
                link: '/github/docs/Systems/Sega Master System.html',
              },
              {
                text: 'Sega Mega Drive',
                link: '/github/docs/Systems/Sega Mega Drive.html',
              },
              {
                text: 'Sega Saturn',
                link: '/github/docs/Systems/Sega Saturn.html',
              },
              {
                text: 'SNES-Super Famicom',
                link: '/github/docs/Systems/SNES',
              },
              {
                text: 'Virtual Boy',
                link: '/github/docs/Systems/Virtural Boy.html',
              }
            ]
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
            link: '/github/CHANGES',
          },
          {
            text: 'How To Contribute',
            link: '/docs/Contribute',
          },
          {
            text: 'Contributors',
            link: '/github/docs/Contributors',
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
        collapsible: false,
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
      debug: false
    })
  ]
}
