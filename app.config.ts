export default defineAppConfig({
  docus: {
    title: 'EmulatorJS',
    description: 'A tool to embed an emulator into your website',
    url: 'https://emulatorjs.org',
    image: 'https://emulatorjs.org/logo/EmulatorJS Logo.png',
    socials: {
      github: 'EmulatorJS/EmulatorJS',
      discord: {
        label: 'Join our Discord',
        href: 'https://discord.gg/6akryGkETU',
        icon: 'fa-brands:discord',
        rel: '',
        target: '_blank'
      }
    },
    layout: 'default',
    header: {
      title: 'EmulatorJS',
      logo: {
        light: "/logo/EmulatorJS Header.png",
        dark: "/logo/EmulatorJS Header Light.png"
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
          href: '/docs'
        },
        {
          text: 'Code Generator',
          href: '/editor'
        },
        {
          text: 'Translation Tool',
          href: '/translate'
        },
        {
          text: 'Demo',
          href: 'https://demo.emulatorjs.org',
          target: '_blank'
        }
      ],
    },
    main: {
      fluid: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: ["/editor", "/translate"]
    },
    footer: {
      credits: {
        icon: 'fa-solid:gamepad',
        text: 'Made with ❤️ by @ethanaobrien & @allancoding',
        href: 'https://github.com/EmulatorJS'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
    github: {
      branch: "main",
      repo: "emulatorjs.org",
      owner: "EmulatorJS",
      edit: true
    },
  }
})
