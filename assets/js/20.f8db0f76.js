(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{375:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"rail模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rail模型"}},[t._v("#")]),t._v(" RAIL模型")]),t._v(" "),a("p",[t._v("RAIL 是一个以用户为中心的性能模型，它把用户的体验拆分成几个关键点，并且定义好了每一个的性能指标")]),t._v(" "),a("p",[t._v("有以下四方面：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Response —— 事件处理最好在 50ms 内完成")])]),t._v(" "),a("li",[a("strong",[t._v("Animation —— 在 10ms 内产生一帧")])]),t._v(" "),a("li",[a("strong",[t._v("Idle —— 最大化空闲时间")])]),t._v(" "),a("li",[a("strong",[t._v("Load —— 传输内容到页面可交互的时间不超过 5 秒")])])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("h5",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),a("ul",[a("li",[t._v("用户的输入到响应的时间不超过 100ms，给用户的感受是瞬间就完成")])]),t._v(" "),a("h5",{attrs:{id:"优化方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化方案"}},[t._v("#")]),t._v(" 优化方案")]),t._v(" "),a("ul",[a("li",[t._v("事件处理函数在 50ms 内完成，考虑到 idle task 的情况，事件会排队，等待时间大概在 50ms")]),t._v(" "),a("li",[t._v("复杂的 js 计算尽可能放在后台，如 web worker，避免对用户输入造成阻塞")]),t._v(" "),a("li",[t._v("超过50ms的响应，一定要提供反馈，比如倒计时，进度百分比等")])]),t._v(" "),a("blockquote",[a("p",[t._v("idle task：除了要处理输入事件，浏览器还有其它任务要做，这些任务会占用部分时间，一般情况会花费 50ms 的时间，输入事件的响应则排在其后")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/jinle0703/img-host/master/blog/idleTask%E7%A4%BA%E6%84%8F%E5%9B%BE",alt:"Idle Task示意图"}})]),t._v(" "),a("h3",{attrs:{id:"animation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" Animation")]),t._v(" "),a("h5",{attrs:{id:"目标-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标-2"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),a("ul",[a("li",[t._v("产生每一帧的时间不要超过 10ms，为了保证浏览器 60 帧，每一帧的时间在 16ms 左右，但浏览器需要用 6ms 来渲染每一帧")])]),t._v(" "),a("h5",{attrs:{id:"优化方案-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化方案-2"}},[t._v("#")]),t._v(" 优化方案")]),t._v(" "),a("h3",{attrs:{id:"idle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idle"}},[t._v("#")]),t._v(" Idle")]),t._v(" "),a("h5",{attrs:{id:"目标-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标-3"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),a("ul",[a("li",[t._v("最大化空闲时间，以增大 50ms 内响应用户输入的几率")])]),t._v(" "),a("h5",{attrs:{id:"优化方案-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化方案-3"}},[t._v("#")]),t._v(" 优化方案")]),t._v(" "),a("ul",[a("li",[t._v("用空闲时间来完成一些延后的工作，如先加载页面可见的部分，然后利用空闲时间加载剩余部分")]),t._v(" "),a("li",[t._v("在空闲时间内执行的任务尽量控制在 50ms 以内")]),t._v(" "),a("li",[t._v("如果用户在空闲时间任务进行时进行交互，必须以此为最高优先级，并暂停空闲时间的任务")])]),t._v(" "),a("h3",{attrs:{id:"load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[t._v("#")]),t._v(" Load")]),t._v(" "),a("h5",{attrs:{id:"目标-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标-4"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),a("ul",[a("li",[t._v("优化加载速度，可以根据设备、网络等条件。目前，比较好的一个方式是，让页面在一个中配的 3G 网络手机上打开时间不超过 5 秒")]),t._v(" "),a("li",[t._v("对于第二次打开，尽量不超过 2 秒")])]),t._v(" "),a("h5",{attrs:{id:"优化方案-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化方案-4"}},[t._v("#")]),t._v(" 优化方案")]),t._v(" "),a("ul",[a("li",[t._v("在手机设备上测试加载性能，选用中配的 3G 网络（400kb/s，400ms RTT），可以使用 "),a("strong",[t._v("WebPageTest")]),t._v(" 来测试")]),t._v(" "),a("li",[t._v("禁用渲染阻塞的资源，延后加载")]),t._v(" "),a("li",[t._v("让第一次加载的资源更少")])]),t._v(" "),a("h2",{attrs:{id:"渲染优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染优化"}},[t._v("#")]),t._v(" 渲染优化")]),t._v(" "),a("h3",{attrs:{id:"重排-回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排-回流"}},[t._v("#")]),t._v(" 重排/回流")]),t._v(" "),a("p",[t._v("重排也就是回流，对性能开销比较大，一般是元素的几何位置发生变化，浏览器触发重新布局")]),t._v(" "),a("p",[t._v("以下操作会触发回流：")]),t._v(" "),a("ul",[a("li",[t._v("页面初次渲染（开销最大）")]),t._v(" "),a("li",[t._v("添加、删除可见 DOM 元素")]),t._v(" "),a("li",[t._v("移动元素位置")]),t._v(" "),a("li",[t._v("改变元素尺寸，比如边距、填充、边框、宽度和高度等")]),t._v(" "),a("li",[t._v("改变元素内容，比如文字数量，图片大小等")]),t._v(" "),a("li",[t._v("改变元素字体大小")]),t._v(" "),a("li",[t._v("改变浏览器窗口尺寸")]),t._v(" "),a("li",[t._v("激活CSS伪类（例如："),a("code",[t._v(":hover")]),t._v("）")]),t._v(" "),a("li",[t._v("设置 style 属性的值")]),t._v(" "),a("li",[t._v("获取 offsetTop、scrollTop、clientTop 等（浏览器需要重新计算）")])]),t._v(" "),a("h4",{attrs:{id:"优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("样式集中改变")]),t._v(" "),a("ul",[a("li",[t._v("静态页面尽量更改类名而不是样式")]),t._v(" "),a("li",[t._v("动态页面尽量统一更改")])])]),t._v(" "),a("li",[a("strong",[t._v("分离读写操作")])]),t._v(" "),a("li",[a("strong",[t._v("将 DOM 离线")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("display: none")]),t._v(" 会触发一次重排，可将其设置后进行变更操作后，再设置 "),a("code",[t._v("display")]),t._v(" 属性")]),t._v(" "),a("li",[a("code",[t._v("documentFragment")]),t._v(" 创建一个 DOM 碎片进行批量操作")]),t._v(" "),a("li",[t._v("复制节点后变更再替换原本节点")])])]),t._v(" "),a("li",[a("strong",[t._v("脱离文档流")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("absolute | fixed")]),t._v(" 会使的该元素单独成为渲染树中 "),a("code",[t._v("body")]),t._v(" 的一个子元素，重排开销比较小")])])]),t._v(" "),a("li",[a("strong",[t._v("优化动画")])])]),t._v(" "),a("h3",{attrs:{id:"布局抖动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局抖动"}},[t._v("#")]),t._v(" 布局抖动")]),t._v(" "),a("p",[t._v("当我们的代码执行一系列连续的读取和写入 DOM 时会发生布局抖动，迫使浏览器重新计算布局信息，造成 Web 应用程序产生更慢、更少的响应")]),t._v(" "),a("h4",{attrs:{id:"优化-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化-2"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),a("ul",[a("li",[t._v("读写分离，批量的读取和写入，如 "),a("a",{attrs:{href:"https://github.com/wilsonpage/fastdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("fastdom"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("避免回流，可以用 tarnsform-translate 来做位移")])]),t._v(" "),a("h3",{attrs:{id:"重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[t._v("#")]),t._v(" 重绘")]),t._v(" "),a("p",[t._v("修改了元素的背景颜色等外观属性，不引发布局阶段直接进入绘制阶段就是重绘")]),t._v(" "),a("h3",{attrs:{id:"requestanimationframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[t._v("#")]),t._v(" requestAnimationFrame")]),t._v(" "),a("p",[t._v("requestAnimationFrame 是浏览器用于定时循环操作的一个接口，类似于 setTimeout，主要用途是按帧对网页进行重绘")]),t._v(" "),a("p",[t._v("requestAnimationFrame 最大的优势是 "),a("strong",[t._v("由系统来决定回调函数的执行时机，它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次（在触发重新布局前）")])]),t._v(" "),a("p",[t._v("requestAnimationFrame 还能 "),a("strong",[t._v("节约 CPU 资源")]),t._v("，一旦页面不处于浏览器的当前标签，就会自动停止刷新")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动画操作")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"常用-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用-api"}},[t._v("#")]),t._v(" 常用 API")]),t._v(" "),a("h3",{attrs:{id:"时间节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间节点"}},[t._v("#")]),t._v(" 时间节点")]),t._v(" "),a("p",[a("code",[t._v("performance.getEntriesByType('navigation')[0]")]),t._v(" 可以获取一个有关时间节点的对象")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取首次可交互时间")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Time to Interactive 可交互时间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'navigation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domInteractive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" diff "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domInteractive "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TTI: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" diff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ul",[a("li",[t._v("DNS 解析耗时 —— domainLookupEnd - domainLookupStart")]),t._v(" "),a("li",[t._v("TCP 连接耗时 —— connectEnd - connectStart")]),t._v(" "),a("li",[t._v("SSL 安全连接耗时 —— connectEnd - secureConnectionStart")]),t._v(" "),a("li",[t._v("网络请求耗时（TTFB） —— responseStart - requestStart")]),t._v(" "),a("li",[t._v("数据传输耗时 —— responseEnd - responseStart")]),t._v(" "),a("li",[t._v("DOM 解析耗时 —— domInteractive - responseEnd")]),t._v(" "),a("li",[t._v("资源加载耗时 —— loadEventStart - domContentLoadedEventEnd")]),t._v(" "),a("li",[t._v("First Byte 时间 —— responseStart - domainLookupStart")]),t._v(" "),a("li",[t._v("白屏时间 —— responseEnd - fetchStart")]),t._v(" "),a("li",[t._v("首次可交互时间 —— domInteractive - fetchStart")]),t._v(" "),a("li",[t._v("DOM Ready 时间 —— domContentLoadEventEnd - fetchStart")]),t._v(" "),a("li",[t._v("页面完全加载时间 —— loadEventStart - fetchStart")]),t._v(" "),a("li",[t._v("http 头部大小 —— transferSize - encodedBodySize")]),t._v(" "),a("li",[t._v("重定向次数 —— performance.navigation.redirectCount")]),t._v(" "),a("li",[t._v("重定向耗时 —— redirectEnd - redirectStart")])]),t._v(" "),a("h3",{attrs:{id:"观察长任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察长任务"}},[t._v("#")]),t._v(" 观察长任务")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 观察长任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nobserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("entryTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'longtask'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"页面可见性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面可见性"}},[t._v("#")]),t._v(" 页面可见性")]),t._v(" "),a("p",[t._v("监听 "),a("code",[t._v("visibilitychange")]),t._v(" 事件可以监控页面的可见性（显示 or 隐藏）")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 见面可见性的状态监听")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'visibilitychange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitHidden "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webkit 事件名称")]),t._v("\n    vEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webkitvisibilitychange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("visibilityChanged")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitHidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Web page is hidden."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Web page is visible."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" visibilityChanged"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h3",{attrs:{id:"网络状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络状态"}},[t._v("#")]),t._v(" 网络状态")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取网络状态")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozConnection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitConnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effectiveType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateConnectionStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection type changed from "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" to "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effectiveType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effectiveType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateConnectionStatus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"性能测试工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能测试工具"}},[t._v("#")]),t._v(" 性能测试工具")]),t._v(" "),a("ul",[a("li",[t._v("WebPageTest")]),t._v(" "),a("li",[t._v("Chrome lightHouse")]),t._v(" "),a("li",[t._v("Chrome DevTools")])]),t._v(" "),a("h2",{attrs:{id:"webpagetest-本地部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpagetest-本地部署"}},[t._v("#")]),t._v(" WebPageTest 本地部署")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("拉取镜像")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker pull webpagetest/server\n\ndocker pull webpagetest/agent\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("运行实例")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('docker run -d -p 4000:80 --rm webpagetest/server\n\ndocker run -d -p 4001:80 --network="host" -e "SERVER_URL=http://localhost:4000/work/" -e "LOCATION=Test" webpagetest/agent\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);