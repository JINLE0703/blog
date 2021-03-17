(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"html-语义化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-语义化"}},[t._v("#")]),t._v(" HTML 语义化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过标签自己的属性来控制显示效果，让人更容易读懂")])]),t._v(" "),a("li",[a("p",[t._v("有利于搜索引擎优化和页面爬取")])])]),t._v(" "),a("h2",{attrs:{id:"行内元素-vs-块级元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行内元素-vs-块级元素"}},[t._v("#")]),t._v(" 行内元素 vs 块级元素")]),t._v(" "),a("p",[t._v("行内元素特指 "),a("strong",[t._v("不会独占一行")]),t._v(" 的元素，如 "),a("code",[t._v("span")]),t._v("、"),a("code",[t._v("a")]),t._v("、"),a("code",[t._v("label")]),t._v(" 等")]),t._v(" "),a("ul",[a("li",[t._v("行内元素属性标签它和其它标签处在同一行内")]),t._v(" "),a("li",[t._v("行内元素只能容纳文本或者其他行内元素")]),t._v(" "),a("li",[t._v("行内元素属性标签无法设置 "),a("code",[t._v("width | height | margin-top | margin-bottom | padding-top | padding-bottom")])]),t._v(" "),a("li",[t._v("行内元素宽度随内容增加，高度随字体大小改变")])]),t._v(" "),a("p",[t._v("块级元素特指 "),a("strong",[t._v("会独占一行")]),t._v(" 的元素，如 "),a("code",[t._v("div")]),t._v("、"),a("code",[t._v("p")]),t._v("、"),a("code",[t._v("h1")]),t._v(" 等")]),t._v(" "),a("ul",[a("li",[t._v("块级元素其宽度自动填满其父元素宽度")]),t._v(" "),a("li",[t._v("块级元素可以包含行内元素和块级元素")]),t._v(" "),a("li",[a("strong",[t._v("p 标签中不能嵌套 div 标签")])])]),t._v(" "),a("h2",{attrs:{id:"前端路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由"}},[t._v("#")]),t._v(" 前端路由")]),t._v(" "),a("h3",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("在前端技术早期，一个 url 对应一个页面，如果你要从 A 页面切换到 B 页面，那么必然伴随着页面的刷新，这个用户体验并不好")]),t._v(" "),a("p",[t._v("后来，Ajax 出现使得可以在不刷新页面的情况下发起请求，与之共生的是 "),a("strong",[t._v("SPA（单页面应用）")])]),t._v(" "),a("p",[t._v("SPA 极大地提升了用户体验，它允许页面在不刷新的情况下更新页面内容，使内容的切换更加流畅，但仍然有两个问题：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("SPA 不会记住你的操作")]),t._v("，SPA 其实并不知道当前的页面进展到了哪一步，可能你在一个站点下经过了反复的前进才终于唤出了某一块内容，但是此时只要刷新一下页面，一切就会被清零，你必须重复之前的操作、才可以重新对内容进行定位")]),t._v(" "),a("li",[t._v("由于"),a("strong",[t._v("有且仅有一个 URL 给页面做映射")]),t._v("，这对 SEO 也不够友好，搜索引擎无法收集全面的信息")])]),t._v(" "),a("p",[t._v("前端路由可以帮助我们在仅有一个页面的情况下，记住用户当前走到了哪一步，即 "),a("strong",[t._v("为 SPA 中的各个视图匹配一个唯一标识")])]),t._v(" "),a("p",[t._v("解决思路：")]),t._v(" "),a("ol",[a("li",[t._v("拦截用户的刷新操作，避免服务端盲目响应、返回不符合预期的资源内容，把刷新这个动作完全放到前端逻辑里消化掉")]),t._v(" "),a("li",[t._v("感知 URL 的变化，给 URL 做一些微小的处理，这些处理并不会影响 URL 本身的性质，不会影响服务器对它的识别，只有前端感知得到；一旦感知到，就根据这些变化、用 JS 去生成不同的内容")])]),t._v(" "),a("h3",{attrs:{id:"hash-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式"}},[t._v("#")]),t._v(" hash 模式")]),t._v(" "),a("p",[t._v("hash 模式是指通过改变 URL 后面以 "),a("code",[t._v("#")]),t._v(" 分隔的字符串，从而让页面感知到路由变化的一种实现方式")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 主页\nhttps://www.imooc.com/#index\n\n// 活动页\nhttps://www.imooc.com/#activePage\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"hash-改变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-改变"}},[t._v("#")]),t._v(" hash 改变")]),t._v(" "),a("p",[t._v("可以通过 location 暴露出来的属性，直接去修改当前 URL 的 hash 值")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"hash-感知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-感知"}},[t._v("#")]),t._v(" hash 感知")]),t._v(" "),a("p",[t._v("通过监听 "),a("code",[t._v("hashchange")]),t._v(" 事件，我们可以用 JS 来捕捉 hash 值的变化，进而决定我们页面内容是否需要更新")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听hash变化，点击浏览器的前进后退会触发")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hashchange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据 hash 的变化更新内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"history-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-模式"}},[t._v("#")]),t._v(" history 模式")]),t._v(" "),a("p",[t._v("history 模式利用 history API 实现 url 地址改变，网页内容改变")]),t._v(" "),a("p",[a("code",[t._v("window.history")]),t._v(" 属性指向 History 对象，它表示当前窗口的浏览历史，当发生改变时，只会改变页面的路径，不会刷新页面")]),t._v(" "),a("p",[t._v("History 对象主要有两个属性：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("History.length")]),t._v("：当前窗口访问过的网址数量（包括当前网页）")]),t._v(" "),a("li",[a("code",[t._v("History.state")]),t._v("：History 堆栈最上层的状态值")])]),t._v(" "),a("h4",{attrs:{id:"history-改变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-改变"}},[t._v("#")]),t._v(" history 改变")]),t._v(" "),a("p",[t._v("在 HTML4 时，可以通过下面的接口来操作浏览历史、实现跳转动作")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前进到下一页")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后退到上一页")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前进两页")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后退两页")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("blockquote",[a("p",[t._v("移动到以前访问过的页面时，页面通常是从浏览器缓存之中加载，而不是重新要求服务器发送新的网页")])]),t._v(" "),a("p",[t._v("从 HTML5 开始，浏览器支持了 "),a("code",[t._v("pushState")]),t._v(" 和 "),a("code",[t._v("replaceState")]),t._v(" 两个 API，允许对浏览历史进行修改和新增")]),t._v(" "),a("h5",{attrs:{id:"pushstate-object-title-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pushstate-object-title-url"}},[t._v("#")]),t._v(" pushState(object, title, url)")]),t._v(" "),a("p",[t._v("该方法用于在历史中添加一条记录，不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有变化")]),t._v(" "),a("p",[t._v("该方法三个参数：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("object")]),t._v("：是一个对象，通过 "),a("code",[t._v("pushState")]),t._v(" 方法可以将该对象内容传递到新页面中")]),t._v(" "),a("li",[a("code",[t._v("title")]),t._v("：指标题，几乎没有浏览器支持该参数，传一个空字符串比较安全")]),t._v(" "),a("li",[a("code",[t._v("url")]),t._v("：新的网址，必须与当前页面处在同一个域。不指定的话则为当前的路径，如果设置了一个跨域网址，则会报错")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {foo: "bar"}')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("blockquote",[a("p",[t._v("如果 "),a("code",[t._v("pushState")]),t._v(" 的 URL 参数设置了一个新的锚点值（即 hash），并不会触发 "),a("code",[t._v("hashchange")]),t._v(" 事件。反过来，如果 URL 的锚点值变了，则会在 History 对象创建一条浏览记录")])]),t._v(" "),a("h5",{attrs:{id:"replacestate-object-title-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacestate-object-title-url"}},[t._v("#")]),t._v(" replaceState(object, title, url)")]),t._v(" "),a("p",[t._v("该方法用来修改 History 对象的当前记录，用法与 "),a("code",[t._v("pushState")]),t._v(" 一样")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?page=1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// URL 显示为 http://example.com/example.html?page=1")]),t._v("\n\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?page=2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// URL 显示为 http://example.com/example.html?page=2")]),t._v("\n\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?page=3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// URL 显示为 http://example.com/example.html?page=3")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"history-感知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-感知"}},[t._v("#")]),t._v(" history 感知")]),t._v(" "),a("p",[t._v("可以通过监听 "),a("code",[t._v("popstate")]),t._v(" 事件来感知浏览历史的变化")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'popstate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("注意这里有个坑")]),t._v("："),a("code",[t._v("go")]),t._v("、"),a("code",[t._v("forward")]),t._v(" 和 "),a("code",[t._v("back")]),t._v(" 等方法的调用确实会触发 "),a("code",[t._v("popstate")]),t._v("，但是 "),a("code",[t._v("pushState")]),t._v(" 和 "),a("code",[t._v("replaceState")]),t._v(" 不会")])])}),[],!1,null,null,null);s.default=e.exports}}]);