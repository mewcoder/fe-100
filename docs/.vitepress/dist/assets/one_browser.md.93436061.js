import{_ as l,c as e,o as i,a as t}from"./app.8f85f826.js";const m=JSON.parse('{"title":"\u6D4F\u89C8\u5668","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"HTML/DOM","slug":"html-dom"},{"level":3,"title":"offsetHeight-scrollHeight-clientHeight-\u533A\u522B","slug":"offsetheight-scrollheight-clientheight-\u533A\u522B"},{"level":3,"title":"property \u548C attribute\u533A\u522B","slug":"property-\u548C-attribute\u533A\u522B"},{"level":3,"title":"async \u548C defer \u533A\u522B","slug":"async-\u548C-defer-\u533A\u522B"},{"level":3,"title":"href \u548C src \u533A\u522B","slug":"href-\u548C-src-\u533A\u522B"},{"level":3,"title":"CSS\u4F1A\u963B\u585E\u6E32\u67D3\u5417","slug":"css\u4F1A\u963B\u585E\u6E32\u67D3\u5417"},{"level":3,"title":"HTML5 \u65B0\u7279\u6027","slug":"html5-\u65B0\u7279\u6027"},{"level":3,"title":"token\u4F1A\u52AB\u6301\u7684\u95EE\u9898","slug":"token\u4F1A\u52AB\u6301\u7684\u95EE\u9898"},{"level":2,"title":"\u7F51\u7EDC/\u6D4F\u89C8\u5668","slug":"\u7F51\u7EDC-\u6D4F\u89C8\u5668"},{"level":3,"title":"TCP\u548CUDP\u533A\u522B","slug":"tcp\u548Cudp\u533A\u522B"},{"level":3,"title":"HTTP/1.1\u957F\u8FDE\u63A5 \u548C HTTP/2.0\u591A\u8DEF\u590D\u7528?","slug":"http-1-1\u957F\u8FDE\u63A5-\u548C-http-2-0\u591A\u8DEF\u590D\u7528"},{"level":3,"title":"HTTPS","slug":"https"},{"level":3,"title":"\u957F\u8FDE\u63A5/\u957F\u8F6E\u8BE2/\u77ED\u8F6E\u8BE2/websocket","slug":"\u957F\u8FDE\u63A5-\u957F\u8F6E\u8BE2-\u77ED\u8F6E\u8BE2-websocket"},{"level":3,"title":"DNS\u89E3\u6790","slug":"dns\u89E3\u6790"},{"level":3,"title":"\u6D4F\u89C8\u5668\u5B89\u5168","slug":"\u6D4F\u89C8\u5668\u5B89\u5168"},{"level":3,"title":"\u6D4F\u89C8\u5668\u5B58\u50A8","slug":"\u6D4F\u89C8\u5668\u5B58\u50A8"},{"level":3,"title":"\u8DE8\u57DF\u95EE\u9898","slug":"\u8DE8\u57DF\u95EE\u9898"},{"level":3,"title":"HTTP\u72B6\u6001\u7801","slug":"http\u72B6\u6001\u7801"},{"level":3,"title":"\u7F13\u5B58","slug":"\u7F13\u5B58"},{"level":3,"title":"\u4E8B\u4EF6\u5FAA\u73AF","slug":"\u4E8B\u4EF6\u5FAA\u73AF"},{"level":3,"title":"\u6D4F\u89C8\u5668\u8FDB\u7A0B","slug":"\u6D4F\u89C8\u5668\u8FDB\u7A0B"},{"level":3,"title":"\u4ECE\u8F93\u5165URL\u5230\u663E\u793A\u9875\u9762","slug":"\u4ECE\u8F93\u5165url\u5230\u663E\u793A\u9875\u9762"},{"level":3,"title":"rAF/rIC","slug":"raf-ric"}],"relativePath":"one/browser.md"}'),a={name:"one/browser.md"},r=t(`<h1 id="\u6D4F\u89C8\u5668" tabindex="-1">\u6D4F\u89C8\u5668 <a class="header-anchor" href="#\u6D4F\u89C8\u5668" aria-hidden="true">#</a></h1><h2 id="html-dom" tabindex="-1">HTML/DOM <a class="header-anchor" href="#html-dom" aria-hidden="true">#</a></h2><h3 id="offsetheight-scrollheight-clientheight-\u533A\u522B" tabindex="-1">offsetHeight-scrollHeight-clientHeight-\u533A\u522B <a class="header-anchor" href="#offsetheight-scrollheight-clientheight-\u533A\u522B" aria-hidden="true">#</a></h3><ul><li>style.width\u7684\u8FD4\u56DE\u503C\u662F\u5B57\u7B26\u4E32\uFF0C\u5E76\u4E14\u5E26\u6709\u5355\u4F4D</li><li>offsetHeight/offsetWidth \uFF1Aborder + padding + content</li><li>clientHeight/clientWidth \uFF1Apadding + content</li><li>scrollHeight/scrollWidth \uFF1Apadding + \u5B9E\u9645\u5185\u5BB9\u7684\u5C3A\u5BF8</li><li>scrollTop/scrollLeft : DOM \u5185\u90E8\u5143\u7D20\u6EDA\u52A8\u7684\u8DDD\u79BB</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2021/png/338495/1620556246492-47ff64d3-9e0b-4531-a259-77eced186322.png?x-oss-process=image%2Fresize%2Cw_937%2Climit_0#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=url&amp;id=wnd35&amp;margin=%5Bobject%20Object%5D&amp;originHeight=424&amp;originWidth=937&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><ul><li>window.innerHeight\uFF1A<strong>\u53EF\u89C6\u533A\u57DF\u9AD8\u5EA6</strong></li><li>document.documentElement.clientHeight\uFF1A**\u53EF\u89C6\u533A\u57DF\u9AD8\u5EA6\uFF0C**\u4E0D\u5305\u542B\u6EDA\u52A8\u6761</li><li>document.documentElement.scrollHeight\uFF1Ahtml\u5143\u7D20\u9AD8\u5EA6</li><li>document.body.clientHeight\uFF1Abody\u5143\u7D20\u9AD8\u5EA6</li></ul><h3 id="property-\u548C-attribute\u533A\u522B" tabindex="-1">property \u548C attribute\u533A\u522B <a class="header-anchor" href="#property-\u548C-attribute\u533A\u522B" aria-hidden="true">#</a></h3><ul><li>property\uFF1A\u6BCF\u4E2ADOM\u8282\u70B9\u90FD\u662F JS \u5BF9\u8C61\uFF0C\u64CD\u4F5C property \u662F JS \u8303\u7574\u7684</li><li>attribute\uFF1A\u662FDOM\u4E0A\u7684\u5C5E\u6027</li></ul><p>\u4E24\u8005\u4E4B\u95F4\u7684\u533A\u522B\u662F\uFF1A</p><ul><li>\u81EA\u5B9A\u4E49\u7684 property \u4E0E attribute \u4E0D\u540C\u6B65,\u4E0D\u76F8\u7B49</li><li>\u975E\u81EA\u5B9A\u4E49\u7684 DOM property \u4E0E attributes \u662F\u6709\u6761\u4EF6\u540C\u6B65\u7684\uFF08\u5982 value\u4E0D\u4F1A\u540C\u6B65\uFF09</li></ul><h3 id="async-\u548C-defer-\u533A\u522B" tabindex="-1">async \u548C defer \u533A\u522B <a class="header-anchor" href="#async-\u548C-defer-\u533A\u522B" aria-hidden="true">#</a></h3><ul><li>\u4E24\u4E2A\u90FD\u662F\u5F02\u6B65\u52A0\u8F7D JS \u811A\u672C\uFF0C\u4E0D\u963B\u585E html \u89E3\u6790</li><li>defer \u662F\u5148\u52A0\u8F7D\uFF0C\u7B49\u5230dom\u89E3\u6790\u5B8C\uFF0C\u5728DOMContentLoaded\u4E8B\u4EF6\u4E4B\u524D\u6267\u884C\u811A\u672C</li><li>async \u662F\u52A0\u8F7D\u5B8C\u7ACB\u5373\u6267\u884C</li><li>type=&quot;module&quot; \u7B49\u540C\u4E8Edefer</li></ul><h3 id="href-\u548C-src-\u533A\u522B" tabindex="-1">href \u548C src \u533A\u522B <a class="header-anchor" href="#href-\u548C-src-\u533A\u522B" aria-hidden="true">#</a></h3><ul><li>href \u7528\u4E8E\u5EFA\u7ACB\u5F53\u524D\u9875\u9762\u4E0E\u5F15\u7528\u8D44\u6E90\u4E4B\u95F4\u7684\u5173\u7CFB\uFF08\u94FE\u63A5\uFF09\u5982 a / link\uFF0C</li><li>src \u5219\u4F1A\u66FF\u6362\u5F53\u524D\u6807\u7B7E\uFF0C\u5982 img / script/ iframe</li></ul><h3 id="css\u4F1A\u963B\u585E\u6E32\u67D3\u5417" tabindex="-1">CSS\u4F1A\u963B\u585E\u6E32\u67D3\u5417 <a class="header-anchor" href="#css\u4F1A\u963B\u585E\u6E32\u67D3\u5417" aria-hidden="true">#</a></h3><ul><li>CSS \u4E0D\u4F1A\u963B\u585E DOM \u89E3\u6790\uFF08link\u5728head\u4E2D\uFF09</li><li>CSS \u4F1A\u963B\u585E DOM \u6811\u7684\u6E32\u67D3\uFF08\u963B\u585Erender tree\u7684\u5F62\u6210\uFF09</li><li>\u4F1A\u963B\u585E\u540E\u9762\u7684 JS \u7684\u6267\u884C\uFF08JS\u53EF\u4EE5\u66F4\u6539DOM\u6837\u5F0F\uFF09</li></ul><h3 id="html5-\u65B0\u7279\u6027" tabindex="-1">HTML5 \u65B0\u7279\u6027 <a class="header-anchor" href="#html5-\u65B0\u7279\u6027" aria-hidden="true">#</a></h3><ul><li>\u8BED\u4E49\u5316\u6807\u7B7E</li><li>canvas/svg</li><li>localStorage / sessionStorage</li><li>websocket</li><li>history api @\u8DEF\u7531 <ul><li>puhState / replaceState\u65B9\u6CD5</li><li>popstate\u4E8B\u4EF6\uFF0C\u4E0A\u8FF0\u4E24\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u89E6\u53D1</li></ul></li><li>\u5A92\u4F53/\u8868\u5355/\u5B9A\u4F4D\u76F8\u5173</li></ul><h3 id="token\u4F1A\u52AB\u6301\u7684\u95EE\u9898" tabindex="-1">token\u4F1A\u52AB\u6301\u7684\u95EE\u9898 <a class="header-anchor" href="#token\u4F1A\u52AB\u6301\u7684\u95EE\u9898" aria-hidden="true">#</a></h3><ul><li><p>token \u662F\u4E3A\u4E86\u9632\u6B62 csrf \u653B\u51FB\u7684\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u643A\u5E26\u540C\u57DF Cookie \u53D1\u9001\u8BF7\u6C42\u3002</p></li><li><p>CSRF \u7684\u8FC7\u7A0B\uFF1A</p><ul><li>\u7528\u6237\u767B\u5F55\u4E86 <code>a.com</code> \uFF0C\u6709\u4E86 cookie</li><li>\u9ED1\u5BA2\u5F15\u8BF1\u7528\u6237\u8BBF\u95EE <code>b.com</code> \u7F51\u9875\uFF0C\u5077\u5077\u8BA9\u7528\u6237\u8BBF\u95EE\u4E86 <code>a.com/api/xxx</code>\uFF08\u5E72\u67D0\u4EF6\u4E8B\uFF09</li><li><code>a.com</code> api \u63A5\u53E3\u6536\u5230\u8BF7\u6C42 cookie \uFF0C\u8BEF\u4EE5\u4E3A\u662F\u771F\u5B9E\u7528\u6237\u7684\u8BF7\u6C42\uFF0C\u5C31\u53D7\u7406\u4E86</li></ul></li><li></li></ul><h2 id="\u7F51\u7EDC-\u6D4F\u89C8\u5668" tabindex="-1">\u7F51\u7EDC/\u6D4F\u89C8\u5668 <a class="header-anchor" href="#\u7F51\u7EDC-\u6D4F\u89C8\u5668" aria-hidden="true">#</a></h2><h3 id="tcp\u548Cudp\u533A\u522B" tabindex="-1">TCP\u548CUDP\u533A\u522B <a class="header-anchor" href="#tcp\u548Cudp\u533A\u522B" aria-hidden="true">#</a></h3><ul><li>TCP\u662F\u9762\u5411\u5B57\u8282\u6D41\u7684(\u53EF\u62C6\u5206/\u5408\u5E76)\uFF0CUDP\u662F\u9762\u5411\u62A5\u6587\u7684</li><li>TCP\u9762\u5411\u8FDE\u63A5\uFF0CUDP\u65E0\u8FDE\u63A5</li><li>TCP\u53EA\u80FD\u4E00\u5BF9\u4E00\u901A\u4FE1\uFF0CUDP\u652F\u6301\u4E00\u5BF9\u4E00\uFF0C\u4E00\u5BF9\u591A\uFF0C\u591A\u5BF9\u4E00\uFF0C\u591A\u5BF9\u591A</li><li>TCP\u53EF\u9760\u4F20\u8F93\uFF0C\u4F7F\u7528\u6D41\u91CF\u63A7\u5236\u548C\u62E5\u585E\u63A7\u5236\uFF0CUDP\u4E0D\u53EF\u9760</li><li>TCP\u5934\u90E8\u5F00\u9500\u5927\uFF0820-60\u5B57\u8282\uFF09\uFF0CUDP\u5934\u90E8\u5F00\u9500\u5C0F\uFF088\u5B57\u8282\uFF09</li></ul><h3 id="http-1-1\u957F\u8FDE\u63A5-\u548C-http-2-0\u591A\u8DEF\u590D\u7528" tabindex="-1">HTTP/1.1\u957F\u8FDE\u63A5 \u548C HTTP/2.0\u591A\u8DEF\u590D\u7528? <a class="header-anchor" href="#http-1-1\u957F\u8FDE\u63A5-\u548C-http-2-0\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a></h3><ul><li>HTTP/1.1\uFF1A\u540C\u2F00\u65F6\u95F4\u2F00\u4E2ATCP\u8FDE\u63A5\u53EA\u80FD\u5904\u7406\u2F00\u4E2A\u8BF7\u6C42, \u91C7\u2F64\u2F00\u95EE\u2F00\u7B54\u7684\u5F62\u5F0F, \u4E0A\u2F00\u4E2A\u8BF7\u6C42\u54CD\u5E94\u540E\u624D\u80FD\u5904\u7406\u4E0B\u2F00\u4E2A\u8BF7\u6C42. \u7531\u4E8E\u6D4F\u89C8\u5668\u6700\u2F24TCP\u8FDE\u63A5\u6570\u7684\u9650\u5236, \u6240\u4EE5\u6709\u4E86\u6700\u2F24\u5E76\u53D1\u8BF7\u6C42\u6570\u7684\u9650\u5236.</li><li>HTTP/2.0\uFF1A\u540C\u57DF\u540D\u4E0B\u6240\u6709\u901A\u4FE1\u90FD\u5728\u5355\u4E2A\u8FDE\u63A5\u4E0A\u5B8C\u6210\uFF0C\u6D88\u9664\u4E86\u56E0\u591A\u4E2A TCP \u8FDE\u63A5\u2F7D\u5E26\u6765\u7684\u5EF6\u65F6\u548C\u5185\u5B58\u6D88\u8017\u3002\u5355\u4E2A\u8FDE\u63A5\u4E0A\u53EF\u4EE5\u5E76\u2F8F\u4EA4\u9519\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u4E4B\u95F4\u4E92\u4E0D\u5E72\u6270\u3002</li></ul><p>\u90A3\u4E3A\u4EC0\u4E48HTTP/1.1\u4E0D\u80FD\u5B9E\u73B0\u591A\u8DEF\u590D\u2F64?</p><ul><li>HTTP/2\u662F\u57FA\u4E8E\u2F06\u8FDB\u5236\u201C\u5E27\u201D\u7684\u534F\u8BAE\uFF0CHTTP/1.1\u662F\u57FA\u4E8E(\u62A5\u6587)\u201C\u2F42\u672C\u5206\u5272\u201D\u89E3\u6790\u7684\u534F\u8BAE\u3002</li><li>HTTP1.1\u7684\u62A5\u2F42\u7ED3\u6784\u4E2D, \u670D\u52A1\u5668\u9700\u8981\u4E0D\u65AD\u7684\u8BFB\u2F0A\u5B57\u8282\uFF0C\u76F4\u5230\u9047\u5230\u6362\u2F8F\u7B26, \u6216\u8005\u8BF4\u2F00\u4E2A\u7A7A\u2F69\u2F8F. \u5904\u7406\u987A\u5E8F\u662F\u4E32\u2F8F\u7684, \u2F00\u4E2A\u8BF7\u6C42\u548C\u2F00\u4E2A\u54CD\u5E94\u9700\u8981\u901A\u8FC7\u2F00\u95EE\u2F00\u7B54\u7684\u5F62\u5F0F\u624D\u80FD\u5BF9\u5E94\u8D77\u6765\u3002</li><li>HTTP2.0\u4E2D\uFF0C\u6709\u4E24\u4E2A\u2FAE\u5E38\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5206\u522B\u662F\u5E27\uFF08frame\uFF09\u548C\u6D41\uFF08stream\uFF09\u3002\u5E27\u4EE3\u8868\u7740\u6700\u2F29\u7684\u6570\u636E\u5355\u4F4D\uFF0C\u6BCF\u4E2A\u5E27\u4F1A\u6807\u8BC6\u51FA\u8BE5\u5E27\u5C5E\u4E8E\u54EA\u4E2A\u6D41\uFF0C\u6D41\u4E5F\u5C31\u662F\u591A\u4E2A\u5E27\u7EC4\u6210\u7684\u6570\u636E\u6D41\u3002</li><li>\u591A\u8DEF\u590D\u2F64\uFF0C\u5C31\u662F\u5728\u2F00\u4E2A TCP \u8FDE\u63A5\u4E2D\u53EF\u4EE5\u5B58\u5728\u591A\u6761\u6D41\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4E5F\u5C31\u662F\u53EF\u4EE5\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42\uFF0C\u5BF9\u7AEF\u53EF\u4EE5\u901A\u8FC7\u5E27\u4E2D\u7684\u6807\u8BC6\u77E5\u9053\u5C5E\u4E8E\u54EA\u4E2A\u8BF7\u6C42\u3002\u901A\u8FC7\u8FD9\u4E2A\u6280\u672F\uFF0C\u53EF\u4EE5\u907F\u514D HTTP \u65E7\u7248\u672C\u4E2D\u7684\u961F\u5934\u963B\u585E\u95EE\u9898\uFF0C\u6781\u2F24\u7684\u63D0\u2FBC\u4F20\u8F93\u6027\u80FD\u3002</li></ul><h3 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-hidden="true">#</a></h3><p>HTTS \u5176\u5B9E\u5C31\u662F HTTP+TLS \u7684\u4F20\u8F93\u65B9\u5F0F\uFF0CTLS \u53EB\u4F20\u8F93\u5C42\u5B89\u5168\uFF0C\u4E4B\u524D\u53EB SSL\uFF08\u5B89\u5168\u5957\u63A5\u5C42\uFF09\u3002</p><p>\u56E0\u4E3A HTTP \u5C5E\u4E8E\u660E\u6587\u4F20\u8F93\uFF0C\u53EF\u4EE5\u88AB\u622A\u53D6\u5230\u3002\u90A3\u4E48\u5C31\u9700\u8981\u5BF9\u4F20\u8F93\u62A5\u6587\u8FDB\u884C\u52A0\u5BC6\uFF0C\u52A0\u5BC6\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A\u975E\u5BF9\u79F0\u548C\u5BF9\u79F0\u3002\u5BF9\u79F0\u5C31\u662F\u540C\u4E00\u4E2A\u5BC6\u94A5\u8FDB\u884C\u52A0\u5BC6\u89E3\u5BC6\uFF0C\u975E\u5BF9\u79F0\u5C31\u662F\u6709\u4E00\u7EC4\u516C\u79C1\u5BC6\u94A5\uFF0C\u53EF\u4EE5\u4E92\u76F8\u52A0\u89E3\u5BC6\u3002</p><p>\u90A3\u4E48 TLS \u662F\u600E\u4E48\u505A\u7684\u5462\uFF1F</p><p>\u56E0\u4E3A\u975E\u5BF9\u79F0\u52A0\u5BC6\u7684\u6548\u7387\u4E0D\u9AD8\uFF0C\u5BF9 http \u62A5\u6587\u4E00\u822C\u91C7\u7528\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u7136\u540E\u901A\u8FC7\u975E\u5BF9\u79F0\u52A0\u5BC6\u4F20\u8F93\u8FD9\u4E2A\u4F1A\u8BDD\u5BC6\u94A5\u3002</p><p>\u6BD4\u5982\u5BA2\u6237\u7AEF\u751F\u6210\u4E00\u4E2A\u4F1A\u8BDD\u5BC6\u94A5\u901A\u8FC7\u4E00\u4E2A\u516C\u94A5\u52A0\u5BC6\uFF0C\u670D\u52A1\u7AEF\u901A\u8FC7\u79C1\u94A5\u89E3\u5BC6\u83B7\u5F97\u4F1A\u8BDD\u5BC6\u94A5\uFF0C\u5C31\u53EF\u4EE5\u5B89\u5168\u5730\u4F20\u8F93\u62A5\u6587\u4E86\u3002</p><p>\u4F46\u662F\u8FD9\u4E2A\u516C\u94A5\u4E0D\u80FD\u5B89\u5168\u5730\u4F20\u8F93\u5230\u5BA2\u6237\u7AEF\u624B\u91CC\uFF0C\u5373\u4F7F\u52A0\u5BC6\u4E5F\u9700\u8981\u5BF9\u5E94\u7684\u5BC6\u94A5\u8FDB\u884C\u4F20\u8F93\uFF0C\u73B0\u5728\u7684\u901A\u8FC7 CA \u673A\u6784 \u89E3\u51B3\u8FD9\u4E2A\u5BC6\u94A5\u7684\u4FE1\u4EFB\u95EE\u9898\u3002</p><p>\u670D\u52A1\u7AEF\u5411 CA \u673A\u6784\u7533\u8BF7\u4E00\u4E2A\u8BC1\u4E66\uFF0C\u8FD9\u4E2A\u8BC1\u4E66\uFF0C\u5C31\u662F\u7528 CA \u673A\u6784\u7684\u79C1\u94A5 \u52A0\u5BC6\u8FC7\u7684 \u7F51\u7AD9\u7684\u516C\u94A5\u3002</p><p>\u7136\u540E\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5F97\u5230\u8FD9\u4E2A\u8BC1\u4E66\uFF0C\u901A\u8FC7\u9884\u88C5\u5728\u5BA2\u6237\u7AEF\u7684 CA \u673A\u6784\u7684\u516C\u94A5 \u8FDB\u884C\u89E3\u5BC6\u548C\u9A8C\u8BC1\u7B7E\u540D\uFF0C\u5F97\u5230\u8FD9\u4E2A\u7F51\u7AD9\u7684\u516C\u94A5\u3002</p><p>\u7B80\u5355\u7684\u8BB2\uFF0C\u5BA2\u6237\u7AEF\u5C31\u53EF\u4EE5\u751F\u6210\u4E00\u4E2A\u4F1A\u8BDD\u5BC6\u94A5\u901A\u8FC7\u516C\u94A5\u52A0\u5BC6\u4F20\u8F93\u7ED9\u670D\u52A1\u7AEF\uFF0C\u670D\u52A1\u7AEF\u901A\u8FC7\u5BF9\u5E94\u7684\u79C1\u94A5\u89E3\u5BC6\u540E\u5C31\u5171\u4EAB\u4E86\u8FD9\u4E2A\u4F1A\u8BDD\u5BC6\u94A5\u3002</p><p>\u4F46\u662F\uFF0C\u771F\u5B9E\u60C5\u51B5\u4E0D\u662F\u8FD9\u4E2A\u7B80\u5355\u6D41\u7A0B(RSA)\uFF0C\u6709\u5BC6\u94A5\u4EA4\u6362\u7B97\u6CD5\uFF0C\u6BD4\u5982 ECDHE\uFF0C\u5728\u8BF7\u6C42\u8FD4\u56DE\u8BC1\u4E66\u7684\u8FC7\u7A0B\uFF0C\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u4F1A\u5206\u522B\u4EA4\u4E92\u4E24\u4E2A\u968F\u673A\u6570\uFF0C\u7136\u540E\u81EA\u4E2A\u901A\u8FC7\u534F\u5546\u597D\u7684\u7B97\u6CD5\u53C2\u6570\u751F\u6210\u7B2C\u4E09\u4E2A\u968F\u673A\u6570\uFF0C\u518D\u901A\u8FC7\u8FD9\u4E2A\u4E09\u4E2A\u968F\u673A\u6570\u751F\u6210\u4F1A\u8BDD\u5BC6\u94A5\uFF0C\u8FD9\u4E2A\u5BC6\u94A5\u662F\u4E0D\u9700\u8981\u4F20\u8F93\u7684\uFF0C\u4E24\u8FB9\u90FD\u77E5\u9053\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u52A0\u5BC6\u4F20\u8F93\u4E86\u3002</p><h3 id="\u957F\u8FDE\u63A5-\u957F\u8F6E\u8BE2-\u77ED\u8F6E\u8BE2-websocket" tabindex="-1">\u957F\u8FDE\u63A5/\u957F\u8F6E\u8BE2/\u77ED\u8F6E\u8BE2/websocket <a class="header-anchor" href="#\u957F\u8FDE\u63A5-\u957F\u8F6E\u8BE2-\u77ED\u8F6E\u8BE2-websocket" aria-hidden="true">#</a></h3><ul><li>\u957F\u8FDE\u63A5\uFF1A<code>Connection\uFF1Akeep-alive</code></li><li>\u957F\u8F6E\u8BE2\uFF1A\u670D\u52A1\u7AEF\u5C06\u8BF7\u6C42\u6302\u8D77\u4E00\u5B9A\u7684\u65F6\u95F4\u518D\u8FD4\u56DE\uFF08\u5FAE\u4FE1\u4E8C\u7EF4\u7801\uFF09</li><li>\u77ED\u8F6E\u8BE2\uFF1A\u5BA2\u6237\u7AEF\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u53D1\u9001\u8BF7\u6C42</li><li>websocket\uFF1A\u5168\u53CC\u5DE5\u7684\u534F\u8BAE\uFF0C\u53EF\u4EE5\u76F8\u4E92\u6536\u53D1\u6D88\u606F\u3002</li></ul><h3 id="dns\u89E3\u6790" tabindex="-1">DNS\u89E3\u6790 <a class="header-anchor" href="#dns\u89E3\u6790" aria-hidden="true">#</a></h3><p><strong>DNS\uFF08Domain Name System\uFF0C\u57DF\u540D\u7CFB\u7EDF\uFF09\u662F\u4E00\u4E2A\u5C06\u57DF\u540D\u548C IP \u5730\u5740\u76F8\u4E92\u6620\u5C04\u7684\u5206\u5E03\u5F0F\u670D\u52A1</strong></p><p>\u7F13\u5B58\uFF1A\u6D4F\u89C8\u5668-\u64CD\u4F5C\u7CFB\u7EDF-\u8DEF\u7531\u5668-\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668</p><p>1.\u5BA2\u6237\u7AEF\u53D1\u9001\u8BF7\u6C42\u7ED9\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u5982\u679C\u6CA1\u6709\u7EE7\u7EED\uFF08\u9012\u5F52\uFF09</p><p>2.\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u5411\u6839\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u8FD4\u56DE\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u5730\u5740\uFF0C\u7136\u540E\u8BF7\u6C42\u62FF\u5230\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u6700\u540E\u8BF7\u6C42\u62FF\u5230IP\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF08\u8FED\u4EE3\uFF09</p><p>\u4E00\u822C\u6211\u4EEC\u5411\u672C\u5730 DNS \u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u7684\u65B9\u5F0F\u5C31\u662F\u9012\u5F52\u67E5\u8BE2\uFF0C\u56E0\u4E3A\u6211\u4EEC\u53EA\u9700\u8981\u53D1\u51FA\u4E00\u6B21\u8BF7\u6C42\uFF0C\u7136\u540E\u672C\u5730 DNS \u670D\u52A1\u5668\u8FD4\u56DE\u7ED9\u6211 \u4EEC\u6700\u7EC8\u7684\u8BF7\u6C42\u7ED3\u679C\u3002\u800C\u672C\u5730 DNS \u670D\u52A1\u5668\u5411\u5176\u4ED6\u57DF\u540D\u670D\u52A1\u5668\u8BF7\u6C42\u7684\u8FC7\u7A0B\u662F\u8FED\u4EE3\u67E5\u8BE2\u7684\u8FC7\u7A0B\uFF0C\u56E0\u4E3A\u6BCF\u4E00\u6B21\u57DF\u540D\u670D\u52A1\u5668\u53EA\u8FD4\u56DE\u5355\u6B21 \u67E5\u8BE2\u7684\u7ED3\u679C\uFF0C\u4E0B\u4E00\u7EA7\u7684\u67E5\u8BE2\u7531\u672C\u5730 DNS \u670D\u52A1\u5668\u81EA\u5DF1\u8FDB\u884C\u3002</p><h3 id="\u6D4F\u89C8\u5668\u5B89\u5168" tabindex="-1">\u6D4F\u89C8\u5668\u5B89\u5168 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5B89\u5168" aria-hidden="true">#</a></h3><p><strong>csrf\uFF1A\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020(Cross\u2014Site Request Forgery)</strong></p><p>\u653B\u51FB\u8005\u5229\u7528HTTP\u8BF7\u6C42\u4F1A\u643A\u5E26cookie\u7684\u7279\u5B9A\uFF0C\u5229\u7528\u7528\u6237\u7684\u767B\u9646\u72B6\u6001\u53D1\u9001\u6076\u610F\u8BF7\u6C42\u3002</p><p>\u65B9\u6CD5\uFF1A\u81EA\u52A8\u53D1\u8D77get/post\u8BF7\u6C42\uFF1B\u8BF1\u5BFC\u70B9\u51FB</p><p><strong>\u9632\u5FA1</strong>\uFF1A</p><ul><li><p>CSRF token \u9A8C\u8BC1</p></li><li><p>HTTP \u8BF7\u6C42\u5934\u7684 referer \u5B57\u6BB5\uFF08\u53EF\u4EE5\u4F2A\u9020\uFF09\uFF0COrigin(\u4E0D\u542B\u5177\u4F53url)</p></li><li><p>SameSite \u9650\u5236 Cookie \u5728\u8DE8\u7AD9\u8BF7\u6C42\u65F6\u4E0D\u4F1A\u88AB\u53D1\u9001</p><ul><li>Strict\uFF0C\u5FC5\u987B\u662F\u76F8\u540C\u7AD9\u70B9</li><li>Lax \u5BBD\u677E\uFF0C\u5141\u8BB8\u90E8\u5206\u7C7B\u578B\uFF0C\u6BD4\u5982 a\u94FE\u63A5</li><li>None \u4E0D\u9650\u5236</li></ul></li></ul><p><strong>XSS\uFF1A\u8DE8\u7AD9\u811A\u672C(Cross Site Scripting)</strong></p><ul><li>\u5B58\u50A8\u578B\uFF1A\u5C06\u6076\u610F\u4EE3\u7801\u5B58\u5728\u670D\u52A1\u5668\uFF0C\u8BF7\u6C42\u542B\u6709\u6076\u610F\u4EE3\u7801\u7684\u9875\u9762\u3002</li><li>\u53CD\u5C04\u578B\uFF1A\u6784\u5EFA\u542B\u6709\u6076\u610F\u4EE3\u7801\u7684url\uFF0C\u670D\u52A1\u5668\u4E0D\u5B58\u50A8\uFF0C\u540E\u7AEF\u76F4\u63A5\u8FD4\u56DE\u5230\u9875\u9762\u3002</li><li>DOM\u578B\uFF1A\u524D\u7AEF\u89E3\u6790\u6076\u610F\u4EE3\u7801\u6267\u884C\uFF0C\u76F8\u6BD4\u524D\u4E24\u8005\uFF0C\u5C5E\u4E8E\u524D\u7AEF\u7684\u6F0F\u6D1E\u3002</li></ul><p><strong>\u9632\u5FA1</strong>\uFF1A</p><ul><li><p>\u672C\u8D28\u662F\u9632\u6B62\u6076\u610F\u811A\u672C\u7684\u6CE8\u5165</p></li><li><p>\u5B58\u50A8\u578B\u548C\u53CD\u5C04\u6027\uFF1A\u6539\u6210\u7EAF\u524D\u7AEF\u6E32\u67D3\uFF0C \u5BF9\u8F93\u5165\u5185\u5BB9\u8FDB\u884C\u8F6C\u4E49\u548C\u8FC7\u6EE4</p></li><li><p>DOM\u578B\uFF1A\u8C28\u614E innerHTML/ v-html \uFF0C\u5B57\u7B26\u4E32\u505A\u4EE3\u7801\u6267\u884C\u7684 eval,Function</p></li><li><p>CSP \u5185\u5BB9\u5B89\u5168\u7B56\u7565 Content-Security-Policy\uFF0C\u767D\u540D\u5355\u544A\u8BC9\u6D4F\u89C8\u5668\u8BA4\u53EF\u7684\u8D44\u6E90\u6765\u6E90\uFF0Chttp\u54CD\u5E94\u5934/meta</p></li><li><p>\u5F88\u591AXSS\u76D7\u53D6\u662Fcookie\u7684\uFF0C\u53EF\u4EE5\u8BBE\u7F6ECookie \u7684 HttpOnly</p></li></ul><h3 id="\u6D4F\u89C8\u5668\u5B58\u50A8" tabindex="-1">\u6D4F\u89C8\u5668\u5B58\u50A8 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5B58\u50A8" aria-hidden="true">#</a></h3><p><strong>Cookie</strong>\uFF1A4K\uFF0C\u7528\u4E8EHTTP\u8BF7\u6C42\u5934\uFF0C\u540C\u6E90\uFF0C\u6BCF\u4E2A\u57DF\u540DCookie\u6570\u91CF\u4E0D\u8D85\u8FC720\u4E2A</p><ul><li>\u53EF\u8BBE\u7F6E\u6709\u6548\u671F\uFF08Expires/Max-Age\uFF09</li><li>Domain/Path \u5B9A\u4E49\u4E86 Cookie \u7684\u4F5C\u7528\u57DF</li><li>Secure \u6807\u8BB0\u4E3A\u53EA\u80FD\u901A\u8FC7HTTPS\u53D1\u9001</li><li>HttpOnly\u65E0\u6CD5\u901A\u8FC7JS\u8BBF\u95EE\uFF08 Document.cookie\uFF09</li><li>SameSite \u9650\u5236Cookie \u5728\u8DE8\u7AD9\u8BF7\u6C42\u65F6\u4E0D\u4F1A\u88AB\u53D1\u9001\uFF0C\u540C\u7AD9\uFF1A<strong>\u4E8C\u7EA7\u57DF\u540D</strong></li><li>\u4E3B\u8981\u7528\u4E8E\uFF0C\u4F1A\u8BDD\u72B6\u6001\u7BA1\u7406\uFF0C\u884C\u4E3A\u8DDF\u8E2A\u3002</li><li>\u7F3A\u9677\uFF1A\u7A7A\u95F4\u5C0F\uFF0C\u7F51\u7EDC\u8BF7\u6C42\u4F1A\u643A\u5E26</li></ul><blockquote><p>\u64CD\u4F5C\uFF1Adocument.cookie \u8BFB\u53D6/\u6216\u5199\u5165\uFF0C\u5199\u5165\u662F\u8FFD\u52A0</p></blockquote><p><strong>LocalStorage/SessionStorage</strong>\uFF1A5M</p><ul><li><p>\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u672C\u5730\u5B58\u50A8\u65B9\u6CD5\uFF0C\u540C\u6E90\u7B56\u7565\uFF0CAPI\u7B80\u5355</p></li><li><p>SessionStorage\uFF1A\u5F53\u524D\u7A97\u53E3\u5173\u95ED\u5C31\u5931\u6548\u4E86\uFF0C\u591A\u4E2A\u540C\u6E90\u9875\u9762\u4E0D\u5171\u4EAB</p></li><li><p>localStorage\uFF1A\u6C38\u4E45\u4FDD\u5B58\uFF0C\u540C\u6E90\u9875\u9762\u5171\u4EAB</p></li><li><p>\u7F3A\u70B9\uFF1A\u7A7A\u95F4\u5C0F\uFF0C\u53EA\u80FD\u5B58\u5B57\u7B26\u4E32</p></li></ul><blockquote><p>\u65B9\u6CD5\uFF1AsetItem/getItem/removeItem/clear</p></blockquote><p><strong>IndexedDB</strong>\uFF1A\u7528\u4E8E\u5BA2\u6237\u7AEF\u5B58\u50A8\u5927\u91CF\u7ED3\u6784\u5316\u6570\u636E\uFF0C\u91C7\u7528\u952E\u503C\u5B58\u50A8\uFF0C\u63A5\u8FD1NoSQL\u6570\u636E\u5E93\uFF0C\u540C\u6E90\u7B56\u7565\uFF0C\u652F\u6301\u5F02\u6B65\uFF0C\u652F\u6301\u4E8B\u52A1\uFF0C\u7A7A\u95F4\u5927\uFF08\u4E0D\u5C11\u4E8E250M\uFF09</p><h3 id="\u8DE8\u57DF\u95EE\u9898" tabindex="-1">\u8DE8\u57DF\u95EE\u9898 <a class="header-anchor" href="#\u8DE8\u57DF\u95EE\u9898" aria-hidden="true">#</a></h3><p>\u540C\u6E90\u7B56\u7565\uFF1A\u534F\u8BAE+\u57DF\u540D+\u7AEF\u53E3</p><p><strong>JSONP</strong></p><ul><li>\u524D\u7AEF\u6784\u5EFA\u4E00\u4E2A\u5168\u5C40\u51FD\u6570\u7684\u56DE\u8C03promise</li><li>\u670D\u52A1\u7AEF\u8FD4\u56DE\u4E00\u4E2A\u4F20\u5165\u6570\u636E\u7684\u8C03\u7528\u51FD\u6570\u7684\u5B57\u7B26\u4E32</li></ul><blockquote><p>\u4EC5\u652F\u6301get\uFF0C\u4E0D\u5B89\u5168</p></blockquote><p><strong>CORS</strong></p><p>\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF08CORS\uFF0CCross-Origin Resource Sharing\uFF09</p><p>\u5728\u670D\u52A1\u7AEF\u5141\u8BB8\u8DE8\u57DF\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7HTTP\u54CD\u5E94\u5934\u544A\u8BC9\u6D4F\u89C8\u5668\u5F53\u524D\u8BF7\u6C42\u5141\u8BB8\u8DE8\u57DF\u3002</p><p>\u7B80\u5355\u8BF7\u6C42\uFF1A</p><ul><li>\u8BF7\u6C42\u65B9\u6CD5\u4E3A <strong>GET</strong>\u3001<strong>POST</strong>\u3001<strong>HEAD</strong>\u3002</li><li>\u8BF7\u6C42\u5934\u53EA\u80FD\u4F7F\u7528\u4E0B\u9762\u7684\u5B57\u6BB5\uFF1A <ul><li>Accept</li><li>Accept-Language</li><li>Content-Type \uFF08\u53EA\u9650\u4E8E text/plain\u3001multipart/form-data\u3001application/x-www-form-urlencoded\uFF09</li><li>Content-Language</li></ul></li></ul><p>\u4EFB\u610F\u4E00\u6761\u8981\u6C42\u4E0D\u7B26\u5408\u7684\u5373\u4E3A\u975E\u7B80\u5355\u8BF7\u6C42</p><ul><li>\u975E\u7B80\u5355\u8BF7\u6C42\u4F1A\u5148\u53D1\u4E2A\u9884\u68C0\u8BF7\u6C42\uFF08Preflight\uFF09</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u7B80\u5355\u8BF7\u6C42\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF7\u6C42\u5934\uFF1AOrigin   \u54CD\u5E94\u5934\uFF1AAccess-Control-Allow-Origin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- \u9884\u68C0\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF7\u6C42\u5934\uFF1AMethod\uFF1AOPTIONS  </span></span>
<span class="line"><span style="color:#A6ACCD;">Access-Control-Request-Headers:content-type</span></span>
<span class="line"><span style="color:#A6ACCD;">Access-Control-Request-Methods:POST</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u54CD\u5E94\u5934:</span></span>
<span class="line"><span style="color:#A6ACCD;">Access-Control-Allow-Headers: content-type</span></span>
<span class="line"><span style="color:#A6ACCD;">Access-Control-Allow-Origin: *</span></span>
<span class="line"><span style="color:#A6ACCD;">Access-Control-Request-Methods: POST,GET,OPTIONS</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>CORS\u643A\u5E26Cookie <ul><li>\u9884\u68C0\u7684\u54CD\u5E94\u5934\u91CC\u8981 Access-Control-Allow-Credentials: true</li><li>Access-Control-Allow-Origin \u4E0D\u80FD\u4E3A\u7A7A</li><li>\u5728\u8BF7\u6C42\u4E2D\u8BBE\u7F6E withCredentials</li></ul></li></ul><p><strong>\u4EE3\u7406\u8F6C\u53D1</strong></p><ul><li>\u6B63\u5411\u4EE3\u7406</li><li>\u53CD\u5411\u4EE3\u7406</li></ul><h3 id="http\u72B6\u6001\u7801" tabindex="-1">HTTP\u72B6\u6001\u7801 <a class="header-anchor" href="#http\u72B6\u6001\u7801" aria-hidden="true">#</a></h3><ul><li><p>1\xD7\xD7\uFF1A\u4E2D\u95F4\u72B6\u6001</p><ul><li>101 Switching Protocols</li></ul></li><li><p>2\xD7\xD7\uFF1A\u6210\u529F</p><ul><li><p>200 OK</p></li><li><p>204 No Content\uFF1A\u6CA1\u6709body \u57CB\u70B9\u4E0A\u62A5</p></li><li><p>206 Partial Content</p></li></ul></li><li><p>3xx\uFF1A\u91CD\u5B9A\u5411</p><ul><li><p>301 \u6C38\u4E45\u91CD\u5B9A\u5411</p></li><li><p>302 \u4E34\u65F6\u91CD\u5B9A\u5411 \uFF1B\u6548\u679C\u548C301\u4E00\u6837\uFF0C\u53EA\u662F\u8BED\u4E49\u4E0D\u4E00\u6837</p></li><li><p>304 \u7F13\u5B58\u91CD\u5B9A\u5411 \u534F\u5546\u7F13\u5B58\u9A8C\u8BC1</p></li></ul></li><li><p>4xx\uFF1A\u5BA2\u6237\u7AEF\u9519\u8BEF</p><ul><li><p>400 Bad Request\uFF1A\u901A\u7528\u7684\u9519\u8BEF\u7801</p></li><li><p>401 unauthorized \u672A\u6388\u6743</p></li><li><p>403 Forbidden</p></li><li><p>404 Not Found</p></li><li><p>405 Method Not Allowed</p></li></ul></li><li><p>5xx\uFF1A\u670D\u52A1\u5668\u9519\u8BEF</p><ul><li><p>500 Internal Server Error\uFF1A\u901A\u7528\u7684\u9519\u8BEF\u7801</p></li><li><p>502 Bad Gateway\uFF1A\u7F51\u5173/\u4EE3\u7406\u9519\u8BEF</p></li><li><p>503 Service Unavailable</p></li></ul></li></ul><h3 id="\u7F13\u5B58" tabindex="-1">\u7F13\u5B58 <a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true">#</a></h3><p>\u6D4F\u89C8\u5668\u7F13\u5B58\uFF1AService Worker / Memory Cache / Disk Cache / Push Cache</p><p>HTTP\u7F13\u5B58\uFF1A</p><p>\u5F3A\u7F13\u5B58\uFF1A</p><ul><li><p>1.0 \u54CD\u5E94\u5934 Expires</p></li><li><p>Pragma\uFF1Anocache</p></li><li><p>1.1 Cache-Control\uFF1A max-age\uFF1Bno-store/no-cache\uFF1Bprivate/public</p></li><li><p>\u6CA1\u6709\u7F13\u5B58\uFF0C\u6D4F\u89C8\u5668\u4F1A\u542F\u53D1\u5F0F\u7F13\u5B58</p></li></ul><p>\u534F\u5546\u7F13\u5B58\uFF1A</p><ul><li>Last-modified - If-Modified-Since</li><li>Etag - If-None-Match</li></ul><h3 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a></h3><p>JS \u662F\u5355\u7EBF\u7A0B\u7684\u8BED\u8A00\uFF0C\u53EA\u6709\u4E00\u4E2A\u6267\u884C\u6808\uFF0C\u5148\u6267\u884C\u5F53\u524D\u4EFB\u52A1\uFF0C\u9047\u5230\u5F02\u6B65\u4E8B\u4EF6\u5C31\u653E\u5165\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u5206\u4E3A\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\uFF0C\u5F53\u524D\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u4F1A\u5904\u7406\u6240\u6709\u7684\u5FAE\u4EFB\u52A1\uFF0C\u518D\u4ECE\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u4E00\u4E2A\u5F00\u59CB\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u3002</p><ul><li>\u6E32\u67D3\u662F\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u6267\u884C\u524D <a href="https://zhuanlan.zhihu.com/p/78113300" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/78113300</a></li></ul><p><img src="https://cdn.nlark.com/yuque/0/2022/png/338495/1654402275546-74fadbb4-590b-42cb-9079-9df66ae710ed.png" alt="image.png"></p><p>\u5B8F\u4EFB\u52A1\uFF1Ascript\u6807\u7B7E / \u4EA4\u4E92\u4E8B\u4EF6</p><ul><li>setTimeout() / setInterval() /requestAnimationFrame() / <strong>Node</strong>: setImmediate\uFF08\uFF09</li></ul><p>\u5FAE\u4EFB\u52A1\uFF1A</p><ul><li>Promise() / MutationObserver() / queueMicrotask() / <strong>Node</strong>: process.nextTick()</li></ul><p>Node:</p><ul><li>Node10 \u4EE5\u540E\uFF0C\u6BCF\u6267\u884C\u5B8C\u4E00 \u4E2Atimers \u7C7B\u56DE\u8C03\uFF0C\u4F8B\u5982 setTimeout ,setImmediate \u4E4B\u540E\uFF0C\u90FD\u4F1A\u628A\u5FAE\u4EFB\u52A1\u7ED9\u6267\u884C\u6389\uFF08promise\u7B49\uFF09</li></ul><h3 id="\u6D4F\u89C8\u5668\u8FDB\u7A0B" tabindex="-1">\u6D4F\u89C8\u5668\u8FDB\u7A0B <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u8FDB\u7A0B" aria-hidden="true">#</a></h3><ul><li>\u4E3B\u8FDB\u7A0B</li><li><strong>\u6E32\u67D3\u8FDB\u7A0B</strong><ul><li>GUI\u6E32\u67D3\u7EBF\u7A0B \u548CJS\u5F15\u64CE\u4E92\u65A5</li><li>JS\u5F15\u64CE</li><li>\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B</li><li>\u5B9A\u65F6\u5668\u89E6\u53D1\u7EBF\u7A0B</li><li>\u5F02\u6B65HTTP\u8BF7\u6C42\u7EBF\u7A0B</li></ul></li><li>GPU\u8FDB\u7A0B</li><li>\u7F51\u7EDC\u8FDB\u7A0B</li><li>\u63D2\u4EF6\u8FDB\u7A0B</li></ul><h3 id="\u4ECE\u8F93\u5165url\u5230\u663E\u793A\u9875\u9762" tabindex="-1">\u4ECE\u8F93\u5165URL\u5230\u663E\u793A\u9875\u9762 <a class="header-anchor" href="#\u4ECE\u8F93\u5165url\u5230\u663E\u793A\u9875\u9762" aria-hidden="true">#</a></h3><ul><li><p>\u6D4F\u89C8\u5668\u5904\u7406URL</p><ul><li>\u6D4F\u89C8\u5668\u8FDB\u7A0B</li></ul></li><li><p>\u7F51\u7EDC\u8FDB\u7A0B \u53D1\u8D77\u8BF7\u6C42</p><ul><li><p>\u68C0\u67E5\u7F13\u5B58</p></li><li><p>DNS\u67E5\u627E</p></li><li><p>HTTP(S) / TCP\u8FDE\u63A5</p></li></ul></li><li><p>\u54CD\u5E94\u8BF7\u6C42 \u6E32\u67D3\u8FDB\u7A0B \u6E32\u67D3\u9875\u9762</p></li><li><p>\u5173\u952E\u6E32\u67D3\u8DEF\u5F84</p><ul><li>\u89E3\u6790HTML\u548CCSS\u5206\u522B\u751F\u6210DOM\u6811\u548CCSS\u89C4\u5219\u6811</li><li>\u7EC4\u88C5\u6210 render\u6811\uFF0C\u53EA\u6DFB\u52A0\u53EF\u89C1\u7684\u8282\u70B9</li><li>\u5E03\u5C40 \uFF1A\u8BA1\u7B97\u51FA \u8282\u70B9\u7684\u5E03\u5C40\u4FE1\u606F\uFF08\u5927\u5C0F\u548C\u4F4D\u7F6E\uFF09</li><li>\u901A\u8FC7\u5E03\u5C40\u6811\uFF0C\u8FDB\u884C\u5206\u5C42\u751F\u6210\u56FE\u5C42\u6811</li><li>\u4E3A\u6BCF\u4E2A\u56FE\u5C42\u751F\u6210\u7ED8\u5236\u5217\u8868\uFF0C\u7ED8\u5236\u8282\u70B9\u7684\u5916\u89C2\uFF08\u989C\u8272\u7B49\uFF09\u7B49</li><li>\u5408\u6210\uFF1A\u5C06\u56FE\u5C42\u5212\u5206\u56FE\u5757\uFF0C\u5149\u6805\u5316\uFF08\u8F6C\u4F4D\u56FE\uFF09\uFF0C\u53D1\u9001\u7ED8\u5236\u547D\u4EE4\u6D4F\u89C8\u8FDB\u7A0B\uFF0C\u6E32\u67D3\u663E\u793A</li></ul></li></ul><h3 id="raf-ric" tabindex="-1">rAF/rIC <a class="header-anchor" href="#raf-ric" aria-hidden="true">#</a></h3><ul><li><code>requestAnimationFrame</code>\uFF1A\u544A\u8BC9\u6D4F\u89C8\u5668\u5728\u4E0B\u4E00\u6B21\u7ED8\u5236\u4E4B\u524D\u6267\u884C\u8BE5\u56DE</li><li><code>requestIdleCallback</code>\uFF1A\u5728\u6D4F\u89C8\u5668\u7A7A\u95F2\u7684\u4E8B\u4EF6\u6267\u884C</li></ul><p><img src="https://www.yuque.com/api/filetransfer/images?url=http%3A%2F%2Fzhufengpeixun.com%2Fjg-vue%2Fassets%2Fimg%2Fframe.99c33aee.png&amp;sign=26fbeb015210d4a241e2400c683f4b5223c809174b5f7db41286c8560e4e11ad" alt="img"></p><p><img src="https://images.cubox.pro/1655882282065/10575/image.jpg" alt="img"></p>`,107),s=[r];function p(o,n,c,h,d,u){return i(),e("div",null,s)}var C=l(a,[["render",p]]);export{m as __pageData,C as default};
