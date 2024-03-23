import { description } from './package.json'
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
    ['meta', ],
   // ['script', { src: '/log.js', content: '' }],
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
            text: 'How To Embed',
            link: '/docs/Embed',
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
                link: '/systems/3DO',
              },
              {
                text: 'Arcade',
                link: '/systems/Arcade',
              },
              {
                text: 'Atari 2600',
                link: '/systems/Atari 2600.html',
              },
              {
                text: 'Atari 5200',
                link: '/systems/Atari 5200.html',
              },
              {
                text: 'Atari 7800',
                link: '/systems/Atari 7800.html',
              },
              {
                text: 'Atari Jaguar',
                link: '/systems/Atari Jaguar.html',
              },
              {
                text: 'Atari Lynx',
                link: '/systems/Atari Lynx.html',
              },
              {
                text: 'ColecoVision',
                link: '/systems/ColecoVision.html',
              },
              {
                text: 'Commodore 64',
                link: '/systems/Commodore 64.html',
              },
              {
                text: 'Commodore 128',
                link: '/systems/Commodore 128.html',
              },
              {
                text: 'Commodore Amiga',
                link: '/systems/Commodore Amiga.html',
              },
              {
                text: 'Commodore PET',
                link: '/systems/Commodore PET.html',
              },
              {
                text: 'Commodore Plus/4',
                link: '/systems/Commodore Plus4.html',
              },
              {
                text: 'Commodore VIC-20',
                link: '/systems/Commodore VIC20.html',
              },
              {
                text: 'MAME 2003',
                link: '/systems/MAME 2003.html',
              },
              {
                text: 'NES-Famicom',
                link: '/systems/NES-Famicom.html',
              },
              {
                text: 'Nintendo 64',
                link: '/systems/Nintendo 64.html',
              },
              {
                text: 'Nintendo DS',
                link: '/systems/Nintendo DS.html',
              },
              {
                text: 'Nintendo Game Boy Advance',
                link: '/systems/Nintendo Game Boy Advance.html',
              },
              {
                text: 'Nintendo Game Boy',
                link: '/systems/Nintendo Game Boy.html',
              },
              {
                text: 'PlayStation',
                link: '/systems/PlayStation',
              },
              {
                text: 'Sega 32X',
                link: '/systems/Sega 32X.html',
              },
              {
                text: 'Sega CD',
                link: '/systems/Sega CD.html',
              },
              {
                text: 'Sega Game Gear',
                link: '/systems/Sega Game Gear.html',
              },
              {
                text: 'Sega Master System',
                link: '/systems/Sega Master System.html',
              },
              {
                text: 'Sega Mega Drive',
                link: '/systems/Sega Mega Drive.html',
              },
              {
                text: 'Sega Saturn',
                link: '/systems/Sega Saturn.html',
              },
              {
                text: 'SNES-Super Famicom',
                link: '/systems/SNES',
              },
              {
                text: 'Virtual Boy',
                link: '/systems/Virtual Boy.html',
              }
            ]
          },
          {
            text: 'Languages',
            link: '/docs/Languages',
          },
          {
            text: 'CDN',
            link: '/docs/CDN',
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
      maxSuggestions: 12,
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => {
        const tags = page.frontmatter.tags ?? [];
        const title = page.title ?? ''; 
        return [...tags, title];
      },
      hotKeys: ['s', '/', { key: 'f', ctrl: true }],
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
