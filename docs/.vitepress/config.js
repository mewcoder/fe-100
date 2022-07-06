import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "标题",
  description: "副标题",
  themeConfig: {
    nav: [
      { text: "引导", link: "/guide/" },
      {
        text: "配置",
        items: [
          { text: "doc1", link: "/config/doc1" },
          { text: "doc2", link: "/config/doc2" },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "引导",
          collapsible: false,
          items: [{ text: "引导", link: "/guide/" }],
        },
      ],
      "/config/": [
        {
          title: "配置",
          collapsible: false,
          items: [
            { text: "doc1", link: "/config/doc1" },
            { text: "doc2", link: "/config/doc2" },
          ],
        },
      ],
    },
  },
  appearance: true,
});
