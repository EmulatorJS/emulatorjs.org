export default defineAppConfig({
  docus: {
    title: 'EmulatorJS',

    description: 'A tool to embed an emulator into your website',

    url: 'https://emulatorjs.org',

    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      github: 'EmulatorJS/EmulatorJS',
      discord: {
        lable: 'Join our Discord',
        href: 'https://discord.gg/6akryGkETU',
        icon: 'fa-brands:discord',
        rel: 'noopener noreferrer'
      }
    },

    layout: 'default',

    header: {
      title: 'EmulatorJS',
      logo: {
        light: "favicon.ico",
        dark: "favicon.ico"
      },
      showLinkIcon: true,
      fluid: true,
      exclude: []
    },

    navigation: {
      enabled: true,
      links: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Documentation',
          href: '/getting-started'
        },
        {
          text: 'Code Editor',
          href: '/editor'
        },
        {
          text: 'Demo',
          href: 'https://demo.emulatorjs.org',
          target: '_blank'
        }
      ],
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Created By EumlatorJS',
        href: 'https://github.com/EumlatorJS'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },

    github: {
      branch: "main",
      repo: "EmulatorJS",
      owner: "EmulatorJS",
      edit: true
    },
  }
})