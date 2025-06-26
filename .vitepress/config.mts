import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'de-CH',
  title: "Dokumentation dse-as",
  description: "Dokumentation der Digitalen Edition Annemarie Schwarzenbach",
  srcDir: 'src',
  rewrites: {
    '_fetched/:slug*': ':slug*'
  },
  outDir: 'docs/.vitepress/dist',
  srcExclude: ['**/README.md'],
  cleanUrls: true,
  ignoreDeadLinks: [
    /^\/_fetched\//,
    '\./LICENSE',
  ],
  // base: '/docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Inhalt', link: '/editionsmodell' }
    ],

    sidebar: [
      {
        text: "Inhalt",
        items: [
          { text: "Editionsmodell", link: "/editionsmodell" },
          { text: "Interface-Modell", link: "/interface-model-dseas" },
          { text: "Registermodell", link: "/register-model-dseas" },
          { text: "Transkribus-Dokumentation", link: "/transkribus-dokumentation" },
          { text: "Oxygen-Dokumentation", link: "/oxygen-docu" }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/dse-as/docs/edit/main/src/:path',
      text: 'Änderungen für diese Seite vorschlagen',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dse-as' },
      { icon: 'discord', link: 'https://discord.com/channels/1282268879128625186' },
    ],

    footer: {
      message: "Veröffentlicht unter <a style='text-decoration:underline;' href='https://github.com/dse-as/docs/blob/main/LICENSE'>MIT Lizenz</a>.",
      copyright: `Copyright 2024-${new Date().getUTCFullYear()} DSL`
    },

    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },

    outline: {
      label: 'Auf dieser Seite'
    },

    lastUpdated: {
      text: 'Aktualisiert am',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Sprache wechseln',
    returnToTopLabel: 'Nach oben',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Dunkler Hintergrund',
    lightModeSwitchTitle: 'Zu hellem Hintergrund wechseln',
    darkModeSwitchTitle: 'Zu dunklem Hintergrund wechseln',

    search: {
      provider: "local"
    } 
  }
})
