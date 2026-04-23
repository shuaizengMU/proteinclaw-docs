import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ProteinClaw Docs',
  description: 'Documentation for ProteinClaw — a conversational protein research agent.',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    // Cloudflare Web Analytics (docs site) — user replaces with docs token
    [
      'script',
      {
        defer: '',
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        'data-cf-beacon': '{"token": "PASTE_DOCS_TOKEN_HERE"}',
      },
    ],
  ],
  themeConfig: {
    logo: '/icon.png',
    nav: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Main site', link: 'https://proteinclaw.org' },
    ],
    sidebar: [
      { text: 'Overview', items: [{ text: 'Introduction', link: '/' }] },
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'FAQ', link: '/faq' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shuaizengMU/ProteinClaw' },
    ],
    search: { provider: 'local' },
    footer: {
      message: 'MIT License',
      copyright: '© 2026 ProteinClaw',
    },
  },
})
