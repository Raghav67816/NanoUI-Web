import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NanoUI",
  description: "Documentation For NanoUI Framework",
  base: '/NanoUI-Web/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    ],

    sidebar: [
      {
        text: "Getting Started",
        link: "/getting-started.md"
      },
      {
        text: "Fundamentals",
        items: [
          {text: "Screen", link: "/Fundamentals/Screen.md"},
          {
            text: "Widgets",
            items: [
              {text: "Button", link: "/Fundamentals/Widgets/Button.md"},
              {text: "Label", link: "/Fundamentals/Widgets/Label.md"},
              {text: "Progress Bar", link: "/Fundamentals/Widgets/Progress Bar.md"},
              {text: "ListWidget", link: "/Fundamentals/Widgets/ListWidget.md"},
            ],
            collapsed: true
          }
        ],
        collapsed: true
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Raghav67816/NanoUI/' }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
