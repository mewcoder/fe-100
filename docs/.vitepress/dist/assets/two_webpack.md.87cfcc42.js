import{_ as e,c as l,o as a,a as i}from"./app.8f85f826.js";const k=JSON.parse('{"title":"Webpack","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"\u6784\u5EFA\u5DE5\u5177\u5BF9\u6BD4","slug":"\u6784\u5EFA\u5DE5\u5177\u5BF9\u6BD4"},{"level":2,"title":"Webpeck\u6784\u5EFA\u6D41\u7A0B\u2B50","slug":"webpeck\u6784\u5EFA\u6D41\u7A0B\u2B50"},{"level":2,"title":"\u4EC0\u4E48\u662FTapable","slug":"\u4EC0\u4E48\u662Ftapable"},{"level":2,"title":"Loader\u548CPlugin \u7684\u4E0D\u540C \u2B50","slug":"loader\u548Cplugin-\u7684\u4E0D\u540C-\u2B50"},{"level":2,"title":"loader \u600E\u4E48\u5199\u2B50","slug":"loader-\u600E\u4E48\u5199\u2B50"},{"level":2,"title":"Plugin \u600E\u4E48\u5199\u2B50","slug":"plugin-\u600E\u4E48\u5199\u2B50"},{"level":2,"title":"\u5F02\u6B65\u52A0\u8F7D\u539F\u7406","slug":"\u5F02\u6B65\u52A0\u8F7D\u539F\u7406"},{"level":2,"title":"HMR\u539F\u7406\u2B50","slug":"hmr\u539F\u7406\u2B50"},{"level":2,"title":"Webpack5 \u65B0\u7279\u6027\u2B50","slug":"webpack5-\u65B0\u7279\u6027\u2B50"},{"level":2,"title":"Tree Shaking \u548CScope Hoisting","slug":"tree-shaking-\u548Cscope-hoisting"},{"level":2,"title":"hash\u3001chunkhash\u3001contenthash\u533A\u522B","slug":"hash\u3001chunkhash\u3001contenthash\u533A\u522B"},{"level":2,"title":"\u5E93\u600E\u4E48\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D","slug":"\u5E93\u600E\u4E48\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D"},{"level":2,"title":"Source Map\u6700\u4F73\u5B9E\u8DF5","slug":"source-map\u6700\u4F73\u5B9E\u8DF5"},{"level":2,"title":"AST\u548CBabel","slug":"ast\u548Cbabel"}],"relativePath":"two/webpack.md"}'),r={name:"two/webpack.md"},h=i('<h1 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h1><h2 id="\u6784\u5EFA\u5DE5\u5177\u5BF9\u6BD4" tabindex="-1">\u6784\u5EFA\u5DE5\u5177\u5BF9\u6BD4 <a class="header-anchor" href="#\u6784\u5EFA\u5DE5\u5177\u5BF9\u6BD4" aria-hidden="true">#</a></h2><p>\u7B54\u6848</p><ul><li>webpack \uFF1A\u53EF\u4EE5\u6253\u5305\u4EFB\u4F55\u8D44\u6E90\uFF0C\u914D\u7F6E\u7565\u590D\u6742\uFF0C\u9002\u5408\u9879\u76EE\u5F00\u53D1</li><li>rollup\uFF1A\u57FA\u4E8E ES6 \u7684\uFF0C\u4E00\u822C\u7528\u6765\u6253\u5305\u7C7B\u5E93</li><li>vite\uFF1A\u6253\u5305\u662F\u57FA\u4E8Erollup\uFF0Cdev\u6A21\u5F0F\u542F\u52A8\u5FEB\uFF0C\u57FA\u4E8EES module\uFF0C\u4F7F\u7528ES build \u5B9E\u65F6\u7F16\u8BD1</li></ul><h2 id="webpeck\u6784\u5EFA\u6D41\u7A0B\u2B50" tabindex="-1">Webpeck\u6784\u5EFA\u6D41\u7A0B\u2B50 <a class="header-anchor" href="#webpeck\u6784\u5EFA\u6D41\u7A0B\u2B50" aria-hidden="true">#</a></h2><p>\u7B54\u6848</p><ul><li>\u521D\u59CB\u5316\u53C2\u6570\uFF0C\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C\u547D\u4EE4\u884C\u4E2D\u8BFB\u53D6</li><li>\u5F00\u59CB\u7F16\u8BD1\uFF0C\u521D\u59CB\u5316 complier\u5BF9\u8C61\uFF0C\u52A0\u8F7D\u63D2\u4EF6\uFF0C\u5F00\u59CB\u7F16\u8BD1</li><li>\u7F16\u8BD1\u6A21\u5757\uFF0C\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u9012\u5F52\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u901A\u8FC7\u5BF9\u5E94\u7684 loader \u8FDB\u884C\u52A0\u8F7D\u7F16\u8BD1</li><li>\u7F16\u8BD1\u5B8C\u6210\u540E\u7EC4\u6210 chunk\uFF0C\u751F\u6210\u4EE3\u7801\uFF0C\u6700\u540E\u8F93\u51FA bundle</li></ul><blockquote><p>webpack \u4F1A\u5728\u7279\u5B9A\u7684\u65F6\u95F4\u70B9\u5E7F\u64AD\u4E8B\u4EF6\uFF0C\u89E6\u53D1\u6240\u76D1\u542C\u4E8B\u4EF6\u7684\u63D2\u4EF6\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\u3002</p></blockquote><h2 id="\u4EC0\u4E48\u662Ftapable" tabindex="-1">\u4EC0\u4E48\u662FTapable <a class="header-anchor" href="#\u4EC0\u4E48\u662Ftapable" aria-hidden="true">#</a></h2><p>\u7B54\u6848webpack\u672C\u8D28\u4E0A\u662F\u4E00\u79CD\u4E8B\u4EF6\u6D41\u7684\u673A\u5236\uFF0Ccompiler \u548C complation \u90FD\u662F\u57FA\u4E8E Tapable \u5B9E\u73B0\u7684\uFF0CTapable \u662F\u4E00\u79CD\u53D1\u5E03\u8BA2\u9605\u7684\u4E8B\u4EF6\u7CFB\u7EDF\u3002</p><p>Tapable\u63D0\u4F9B\u4E86\u5F88\u591A\u7C7B\u578B\u7684hook\uFF0C\u5206\u4E3A\u540C\u6B65\u548C\u5F02\u6B65\u4E24\u5927\u7C7B(\u5F02\u6B65\u4E2D\u53C8\u533A\u5206\u5F02\u6B65\u5E76\u884C\u548C\u5F02\u6B65\u4E32\u884C)\uFF0C\u53EF\u8FDB\u884C\u591A\u79CD\u5F62\u5F0F\u7684\u6D41\u7A0B\u63A7\u5236\u3002</p><blockquote><p>compiler\u548C Compilation\u7684\u533A\u522B</p><ul><li>compiler \u53EF\u4EE5\u7406\u89E3\u4E3A webpack \u7684\u5B9E\u4F8B\uFF0C\u4EE3\u8868\u4E86 webpack \u7684\u914D\u7F6E\uFF0C\u5305\u62ECoptions\u3001loader\u548Cplugin</li><li>compilation \u8868\u793A\u4E00\u6B21\u8D44\u6E90\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002\u5305\u542B\u8FD9\u6B21\u6784\u5EFA\u4E2D\u7684\u5168\u90E8\u8D44\u6E90\u548C\u4FE1\u606F\uFF0C\u6587\u4EF6\u6709\u6539\u52A8\u5C31\u4F1A\u91CD\u65B0\u6784\u5EFA\u3002</li></ul></blockquote><h2 id="loader\u548Cplugin-\u7684\u4E0D\u540C-\u2B50" tabindex="-1">Loader\u548CPlugin \u7684\u4E0D\u540C \u2B50 <a class="header-anchor" href="#loader\u548Cplugin-\u7684\u4E0D\u540C-\u2B50" aria-hidden="true">#</a></h2><p>\u7B54\u6848</p><ul><li>webpack \u5C06\u4E00\u8D77\u6587\u4EF6\u90FD\u770B\u6210\u6A21\u5757\uFF0C\u901A\u8FC7 loader \u53EF\u4EE5\u5BF9\u6587\u4EF6\u8FDB\u884C\u8F6C\u6362</li><li>plugin \u53EF\u4EE5\u6269\u5C55webpack\u7684\u529F\u80FD\uFF0C\u4F5C\u7528\u4E0E\u6574\u4E2A\u6784\u5EFA\u5468\u671F\uFF0C\u901A\u8FC7\u76D1\u542C\u7279\u5B9A\u7684\u4E8B\u4EF6\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\u3002</li></ul><p>\u5E38\u89C1\u7684 loader \u548C plugin \u7B54\u6848loader\uFF1A</p><ul><li>saas-loader \u628A sass \u8BED\u6CD5\u8F6C\u6362\u6210 css</li><li>css-loader \u5206\u6790 css \u6A21\u5757\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u5E76\u5408\u6210\u2F00\u4E2A css</li><li>style-loader \u4F1A\u628Acss-loader\u2F63\u6210\u7684\u5185\u5BB9\uFF0C\u4EE5 style \u6302\u8F7D\u5230\u2EDA\u2FAF</li><li>postcss-loader \u4F7F\u7528 autoprefixer \u81EA\u52A8\u6DFB\u52A0\u6D4F\u89C8\u5668\u524D\u7F00</li><li>file-loader \u79FB\u52A8\u9759\u6001\u8D44\u6E90\u5230\u8F93\u51FA\u76EE\u5F55</li><li>url-loader \u540Cfile-loader \u8FD8\u53EF\u4EE5\u5C0F\u56FE\u8F6Cbase64</li><li>babel-loader \u8F6C\u4E49 js</li></ul><p>plugin\uFF1A</p><ul><li>html-webpack-plugin \u2F83\u52A8\u2F63\u6210html\u2F42\u4EF6</li><li>clean-webpack-plugin \u9ED8\u8BA4\u4F1A\u5220\u9664 output \u6307\u5B9A\u7684\u8F93\u51FA\u2F6C\u5F55</li><li>terser-webpack-plugin \u538B\u7F29\u4EE3\u7801</li><li>mini-css-extract-plugin \u63D0\u53D6css</li><li>define-plugin \u6CE8\u5165\u5168\u5C40\u53D8\u91CF</li></ul><h2 id="loader-\u600E\u4E48\u5199\u2B50" tabindex="-1">loader \u600E\u4E48\u5199\u2B50 <a class="header-anchor" href="#loader-\u600E\u4E48\u5199\u2B50" aria-hidden="true">#</a></h2><p>\u7B54\u6848loader \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u7684\u53C2\u6570\u662F\u5339\u914D\u5230\u7684\u6587\u4EF6\u7684\u6E90\u7801\uFF0C\u8FD4\u56DE\u7ED3\u679C\u662F\u5904\u7406\u540E\u7684\u6E90\u7801\u3002</p><ul><li>this.callback(null, data) \u53EF\u901A\u8FC7callback \u4EE3\u66FFreturn</li><li>\u901A\u8FC7 loader-utils \u7684 getOptions \u65B9\u6CD5\u83B7\u53D6</li><li>\u5F02\u6B65\u5904\u7406\uFF0C\u901A\u8FC7<code>this.async</code>\u6765\u8FD4\u56DE\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF08\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F Error\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u5904\u7406\u7684\u7ED3\u679C\uFF09</li></ul><h2 id="plugin-\u600E\u4E48\u5199\u2B50" tabindex="-1">Plugin \u600E\u4E48\u5199\u2B50 <a class="header-anchor" href="#plugin-\u600E\u4E48\u5199\u2B50" aria-hidden="true">#</a></h2><p>\u7B54\u6848webpack \u5728\u6574\u4E2A\u7F16\u8BD1\u5468\u671F\u4E2D\u4F1A\u89E6\u53D1\u5F88\u591A\u4E0D\u540C\u7684\u4E8B\u4EF6\uFF0Cplugin \u53EF\u4EE5\u5728\u5BF9\u5E94\u7684\u94A9\u5B50\u4E0A\u6CE8\u518C\u4E8B\u4EF6\uFF0Cwebpack\u5185\u90E8\u4E5F\u662F\u901A\u8FC7\u5F88\u591A\u63D2\u4EF6\u5B9E\u73B0\u7684\u3002</p><ul><li>\u63D2\u4EF6\u4E00\u4E2A\u7C7B\uFF0C\u6709\u4E2Aapply\u65B9\u6CD5\uFF0C\u53C2\u6570\u662Fcompiler</li><li>apply \u65B9\u6CD5\u5185\u90E8\u901A compiler \u7684 hooks \u6CE8\u518C\u4E0D\u540C\u65F6\u95F4\u70B9\u7684\u4E8B\u4EF6</li></ul><h2 id="\u5F02\u6B65\u52A0\u8F7D\u539F\u7406" tabindex="-1">\u5F02\u6B65\u52A0\u8F7D\u539F\u7406 <a class="header-anchor" href="#\u5F02\u6B65\u52A0\u8F7D\u539F\u7406" aria-hidden="true">#</a></h2><p>\u7B54\u6848</p><ul><li>\u67E5\u627E\u7F13\u5B58</li><li>\u901A\u8FC7jsonp\u52A0\u8F7D\u4EE3\u7801\uFF0C\u6267\u884C\u56DE\u8C03\uFF0C\u662F\u4E2Apromise</li></ul><p><a href="https://zhuanlan.zhihu.com/p/88332125" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/88332125</a></p><h2 id="hmr\u539F\u7406\u2B50" tabindex="-1">HMR\u539F\u7406\u2B50 <a class="header-anchor" href="#hmr\u539F\u7406\u2B50" aria-hidden="true">#</a></h2><p>\u7B54\u6848</p><ul><li>dev-server \u76D1\u542C\u7F16\u8BD1\u5B8C\u6210\u4E8B\u4EF6\uFF0C\u5229\u7528ws\u544A\u8BC9\u6D4F\u89C8\u5668\u7684hash\u548C\u66F4\u65B0\u6A21\u5757\u5217\u8868</li><li>\u901A\u8FC7jsonp\u83B7\u53D6\u66F4\u65B0\u6A21\u5757\u7684 js</li><li>\u66FF\u6362\u5148\u7528\u6A21\u5757\uFF0C\u8C03\u7528 module.hot.accept() \u5B8C\u6210\u70ED\u66F4\u65B0</li></ul><h2 id="webpack5-\u65B0\u7279\u6027\u2B50" tabindex="-1">Webpack5 \u65B0\u7279\u6027\u2B50 <a class="header-anchor" href="#webpack5-\u65B0\u7279\u6027\u2B50" aria-hidden="true">#</a></h2><p>\u7B54\u6848</p><ul><li>\u5185\u7F6E\u9759\u6001\u8D44\u6E90\u6784\u5EFA\u80FD\u529B\uFF0C\u9700\u8981\u989D\u5916\u7684loader</li><li>\u6301\u4E45\u5316\u7F13\u5B58\uFF0C\u63D0\u4F9B\u4E8C\u6B21\u6784\u5EFA\u901F\u5EA6</li><li>\u6A21\u5757\u8054\u90A6</li></ul><blockquote><ul><li>\u4F7F\u7528Module Federation\u65F6\uFF0C\u5E94\u7528\u5C06\u88AB\u5212\u5206\u4E3A\u66F4\u5C0F\u7684\u5E94\u7528\u5757\uFF0C\u6BCF\u4E2A\u5E94\u7528\u5757\u90FD\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6784\u5EFA\uFF0C\u8FD9\u4E9B\u6784\u5EFA\u90FD\u5C06\u7F16\u8BD1\u4E3A\u5BB9\u5668</li><li>\u4E00\u4E2A\u88AB\u5F15\u7528\u7684\u5BB9\u5668\u88AB\u79F0\u4E3Aremote, \u5F15\u7528\u8005\u88AB\u79F0\u4E3Ahost</li></ul></blockquote><h2 id="tree-shaking-\u548Cscope-hoisting" tabindex="-1">Tree Shaking \u548CScope Hoisting <a class="header-anchor" href="#tree-shaking-\u548Cscope-hoisting" aria-hidden="true">#</a></h2><p>\u7B54\u6848tree shaking\uFF1Atree shaking \u901A\u5E38\u7528\u4E8E\u63CF\u8FF0\u79FB\u9664 JavaScript \u4E0A\u4E0B\u6587\u4E2D\u7684\u672A\u5F15\u7528\u4EE3\u7801(dead-code)\u3002\u5B83\u4F9D\u8D56\u4E8E ES2015 \u6A21\u5757\u8BED\u6CD5\u7684 \u9759\u6001\u7ED3\u6784 \u7279\u6027\uFF0C\u4F8B\u5982 import \u548C export\u3002\u8FD9\u4E2A\u6982\u5FF5\u662F\u4ECErollup\u6765\u7684\u3002 \u6761\u4EF6\uFF1A</p><ul><li>\u751F\u4EA7\u6A21\u5F0F\u4E0B\uFF0C\u542F\u52A8\u4EE3\u7801\u4F18\u5316\uFF0C\u901A\u8FC7 terser \u5220\u9664dead code</li><li>\u5F15\u5165\u7684\u5305\u8981<code>package.json</code>\u8981<code>sideEffects:false</code></li><li>Webpack \u4E2D\u4F7F\u7528 babel-loader \u65F6\uFF0C\u5EFA\u8BAE\u5C06 babel-preset-env \u7684 moduels \u914D\u7F6E\u9879\u8BBE\u7F6E\u4E3A false\uFF0C\u5173\u95ED\u6A21\u5757\u5BFC\u5165\u5BFC\u51FA\u8BED\u53E5\u7684\u8F6C\u8BD1</li></ul><p>Scope Hoisting\uFF1A</p><ul><li>\u5206\u6790\u51FA\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5C3D\u53EF\u80FD\u7684\u628A\u6253\u6563\u7684\u6A21\u5757\u5408\u5E76\u5230\u4E00\u4E2A\u51FD\u6570\u4E2D\u53BB\uFF0C\u4F46\u524D\u63D0\u662F\u4E0D\u80FD\u9020\u6210\u4EE3\u7801\u5197\u4F59\u3002 \u56E0\u6B64\u53EA\u6709\u90A3\u4E9B\u88AB\u5F15\u7528\u4E86\u4E00\u6B21\u7684\u6A21\u5757\u624D\u80FD\u88AB\u5408\u5E76\u3002</li><li>\u7531\u4E8E Scope Hoisting \u9700\u8981\u5206\u6790\u51FA\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u56E0\u6B64\u6E90\u7801\u5FC5\u987B\u91C7\u7528 ES6 \u6A21\u5757\u5316\u8BED\u53E5\uFF0C\u4E0D\u7136\u5B83\u5C06\u65E0\u6CD5\u751F\u6548\u3002</li></ul><h2 id="hash\u3001chunkhash\u3001contenthash\u533A\u522B" tabindex="-1">hash\u3001chunkhash\u3001contenthash\u533A\u522B <a class="header-anchor" href="#hash\u3001chunkhash\u3001contenthash\u533A\u522B" aria-hidden="true">#</a></h2><p>\u7B54\u6848</p><ul><li>hash\uFF1A\u548C\u6574\u4E2A\u9879\u76EE\u7684\u6784\u5EFA\u76F8\u5173\uFF0C\u53EA\u8981\u6709\u6587\u4EF6\u4FEE\u6539\uFF0Chash\u503C\u5C31\u53D8</li><li>chunkhash\uFF1A\u6839\u636Echunk\u751F\u6210hash\u503C\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u5165\u53E3\u6587\u4EF6</li><li>contenthash\uFF1A\u6839\u636E\u5185\u5BB9\u751F\u6210hash\u503C</li><li>js\u7528chunkhash,css\u7528contenhash\uFF0C\u56FE\u7247\u7528contenthash(file-loader\u7684hash\u662F\u6587\u4EF6\u5185\u5BB9\u7684)</li></ul><h2 id="\u5E93\u600E\u4E48\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D" tabindex="-1">\u5E93\u600E\u4E48\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D <a class="header-anchor" href="#\u5E93\u600E\u4E48\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a></h2><p>\u7B54\u6848</p><ul><li>babel-plugin-import \u5229\u7528babel\u63D2\u4EF6\u901A\u8FC7\u751F\u6210AST\u5BF9 import\u8BED\u53E5\uFF0C\u8FDB\u884C\u8F6C\u6362\u548C\u751F\u6210\u3002</li><li>\u6BD4\u5982 import {Button} from &#39;xxx&#39; \u53D8\u4E3A import button from &#39;xxx/button&#39;</li></ul><h2 id="source-map\u6700\u4F73\u5B9E\u8DF5" tabindex="-1">Source Map\u6700\u4F73\u5B9E\u8DF5 <a class="header-anchor" href="#source-map\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a></h2><p>\u7B54\u6848</p><h2 id="ast\u548Cbabel" tabindex="-1">AST\u548CBabel <a class="header-anchor" href="#ast\u548Cbabel" aria-hidden="true">#</a></h2><p>\u7B54\u6848</p><ul><li>\u62BD\u8C61\u8BED\u6CD5\u6811\uFF1A\u5BF9\u4EE3\u7801\u7684\u4E00\u79CD\u62BD\u8C61\u8868\u793A\uFF0C\u662F\u6811\u5F62\u7ED3\u6784\u3002</li><li>\u5E94\u7528\uFF1A\u4EE3\u7801\u9AD8\u4EAE\uFF0CJS\u8F6C\u4E49\uFF0C\u4EE3\u7801\u538B\u7F29\uFF0CESLint\uFF0CPrettier\u7B49</li><li>babel \u7F16\u8BD1 ES5 \u7684\u8FC7\u7A0B\uFF1Aparse\uFF08\u89E3\u6790\u4EE3\u7801\u751F\u6210AST\uFF09\u3001transform\uFF08\u901A\u8FC7 traverse \u904D\u5386 AST \u8FDB\u884C\u5904\u7406\u8F6C\u6362\uFF09\u3001generator (\u751F\u6210\u4EE3\u7801)</li></ul>',52),t=[h];function o(s,p,n,c,d,u){return a(),l("div",null,t)}var g=e(r,[["render",o]]);export{k as __pageData,g as default};
