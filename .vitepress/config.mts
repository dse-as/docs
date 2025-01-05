import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dokumentation dse-as",
  description: "Dokumentation der Digitalen Edition Annemarie Schwarzenbach",
  srcDir: 'src',
  outDir: 'docs/.vitepress/dist',
  cleanUrls: true,
  ignoreDeadLinks: [ 
    '\./LICENSE' 
  ],
  // base: '/docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Arbeitsschritte', link: '/arbeitsschritte/IIIF-manifest-anlegen' }
    ],

    sidebar: [
      {
        text: "Arbeitsschritte",
        items: [
          {text: "IIIF-Manifest anlegen", link: "/arbeitsschritte/IIIF-manifest-anlegen"},
          {text: "Oxygen Framework installieren", link: "/arbeitsschritte/oxygen-framework-installieren"}
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/dse-as/docs/edit/main/src/:path',
      text: 'Suggest changes to this page',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dse-as' },
      { icon: 'discord', link: 'https://discord.com/channels/1282268879128625186' },
    ],

    search: {
      provider: "local"
    } 
  }
})
