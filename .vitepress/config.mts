import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dse-as Documentation",
  description: "Documentation for dse-as",
  srcDir: 'src',
  outDir: 'docs/.vitepress/dist',
  ignoreDeadLinks: [ 
    '/LICENSE' 
  ],
  // base: '/docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/dse-as/docs/edit/main/src/:path',
      text: 'Suggest changes to this page',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dse-as/docs' },
      { icon: 'discord', link: 'https://discord.com/channels/1282268879128625186' },
    ]
  }
})
