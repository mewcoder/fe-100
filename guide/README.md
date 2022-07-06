---
sidebar: auto
---

# 引导

## 1.HTML

HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。除 HTML 以外的其它技术则通常用来描述一个网页的表现与展示效果（如 CSS），或功能与行为（如 JavaScript）。

## 2.CSS

层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 样式表 语言，用来描述 HTML 或 XML（包括如 SVG、MathML、XHTML 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。

## 3.DEMO

:::demo 注意：[vuepress 安装 element-ui 的坑](https://blog.csdn.net/qq_32855007/article/details/108726430)
```vue
<template>
  <div class="container">
    <el-button type="primary" @click="hello">{{ btnText }}</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnText: "Hello World!",
    };
  },
  methods: {
    hello() {
      alert("Hello World!");
    },
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: center;
}
</style>
```
