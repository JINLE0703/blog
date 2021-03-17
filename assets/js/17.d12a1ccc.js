(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{372:function(t,a,s){"use strict";s.r(a);var e=s(25),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),s("p",[t._v("Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全")]),t._v(" "),s("ol",[s("li",[t._v("可以 "),s("strong",[t._v("窃取 Cookie 信息")]),t._v("，模拟用户登录等操作")]),t._v(" "),s("li",[t._v("可以 "),s("strong",[t._v("监听用户行为")]),t._v("，监听键盘事件，获取账号密码信息")]),t._v(" "),s("li",[t._v("可以通过 "),s("strong",[t._v("修改 DOM")]),t._v(" 伪造假的登录窗口，欺骗用户输入用户名和密码等信息")]),t._v(" "),s("li",[t._v("可以 "),s("strong",[t._v("在页面内生成浮窗广告")]),t._v("，这些广告会严重地影响用户体验")])]),t._v(" "),s("h3",{attrs:{id:"分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),s("h4",{attrs:{id:"存储型-xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储型-xss"}},[t._v("#")]),t._v(" 存储型 XSS")]),t._v(" "),s("p",[t._v("存储在 "),s("strong",[t._v("后端数据库")]),t._v("，利用 "),s("strong",[t._v("HTML 插入")])]),t._v(" "),s("ol",[s("li",[t._v("攻击者将恶意代码提交到目标网站的数据库中")]),t._v(" "),s("li",[t._v("用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器")]),t._v(" "),s("li",[t._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行")]),t._v(" "),s("li",[t._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作")])]),t._v(" "),s("p",[t._v("这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等")]),t._v(" "),s("h4",{attrs:{id:"反射型-xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射型-xss"}},[t._v("#")]),t._v(" 反射型 XSS")]),t._v(" "),s("p",[t._v("存储在 "),s("strong",[t._v("URL")]),t._v("，利用 "),s("strong",[t._v("HTML 插入")])]),t._v(" "),s("ol",[s("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码")]),t._v(" "),s("li",[t._v("用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器")]),t._v(" "),s("li",[t._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行")]),t._v(" "),s("li",[t._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作")])]),t._v(" "),s("p",[t._v("反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等，一般是需要用户主动打开才能生效，攻击者往往诱导点击")]),t._v(" "),s("h4",{attrs:{id:"dom-型-xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-型-xss"}},[t._v("#")]),t._v(" DOM 型 XSS")]),t._v(" "),s("p",[t._v("存储在 "),s("strong",[t._v("后端数据库/前端数据库/URL")]),t._v("，利用 "),s("strong",[t._v("前端 JavaScript 插入")])]),t._v(" "),s("ol",[s("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码")]),t._v(" "),s("li",[t._v("用户打开带有恶意代码的 URL")]),t._v(" "),s("li",[t._v("用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行")]),t._v(" "),s("li",[t._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作")])]),t._v(" "),s("blockquote",[s("p",[t._v("三种攻击的区别：")]),t._v(" "),s("p",[t._v("存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里")]),t._v(" "),s("p",[t._v("DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞")])]),t._v(" "),s("h3",{attrs:{id:"预防-xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预防-xss"}},[t._v("#")]),t._v(" 预防 XSS")]),t._v(" "),s("p",[t._v("XSS 攻击有两大要素：攻击者提交恶意代码、浏览器执行恶意代码")]),t._v(" "),s("h5",{attrs:{id:"输入过滤或转码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入过滤或转码"}},[t._v("#")]),t._v(" "),s("strong",[t._v("输入过滤或转码")])]),t._v(" "),s("p",[t._v("输入侧过滤能够在某些情况下解决特定的 XSS 问题，但会引入很大的不确定性和乱码问题，在防范 XSS 攻击时应避免此类方法")]),t._v(" "),s("h5",{attrs:{id:"纯前端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纯前端渲染"}},[t._v("#")]),t._v(" 纯前端渲染")]),t._v(" "),s("ol",[s("li",[t._v("浏览器先加载一个静态 HTML，此 HTML 中不包含任何跟业务相关的数据")]),t._v(" "),s("li",[t._v("然后浏览器执行 HTML 中的 JavaScript")]),t._v(" "),s("li",[t._v("JavaScript 通过 Ajax 加载业务数据，调用 DOM API 更新到页面上")])]),t._v(" "),s("p",[t._v("但纯前端渲染还需注意避免 DOM 型 XSS 漏洞（onload、javascript:xxx）")]),t._v(" "),s("h5",{attrs:{id:"充分利用-csp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#充分利用-csp"}},[t._v("#")]),t._v(" 充分利用 CSP")]),t._v(" "),s("ol",[s("li",[t._v("限制加载其他域下的资源文件，这样即使黑客插入了一个 JavaScript 文件，这个 JavaScript 文件也是无法被加载的")]),t._v(" "),s("li",[t._v("禁止向第三方域提交数据，这样用户数据也不会外泄")]),t._v(" "),s("li",[t._v("禁止执行内联脚本和未授权的脚本")]),t._v(" "),s("li",[t._v("提供了上报机制，可以帮助我们尽快发现 XSS 攻击，以便尽快修复问题")])]),t._v(" "),s("h5",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("p",[t._v("输入内容长度控制，可以增加 XSS 攻击的难度")]),t._v(" "),s("p",[t._v("Cookie 设置为 HttpOnly 可以防止 XSS 劫持 Cookie")]),t._v(" "),s("p",[t._v("验证码可以防止脚本冒充用户提交危险操作")]),t._v(" "),s("h2",{attrs:{id:"csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),s("p",[t._v("CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的")]),t._v(" "),s("p",[s("strong",[t._v("CSRF 攻击不需要将恶意代码注入用户页面，只是利用服务器漏洞和用户的登录状态实施攻击")])]),t._v(" "),s("p",[t._v("一般攻击流程如下：")]),t._v(" "),s("ol",[s("li",[t._v("受害者登录 a.com，并保留了登录凭证（Cookie）")]),t._v(" "),s("li",[t._v("攻击者引诱受害者访问了 b.com")]),t._v(" "),s("li",[t._v("b.com 向 a.com 发送了一个请求：a.com/act=xx。浏览器会默认携带 a.com 的Cookie")]),t._v(" "),s("li",[t._v("a.com 接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求")]),t._v(" "),s("li",[t._v("a.com 以受害者的名义执行了 act=xx")]),t._v(" "),s("li",[t._v("攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让 a.com 执行了自己定义的操作")])]),t._v(" "),s("h3",{attrs:{id:"分类-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分类-2"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),s("h4",{attrs:{id:"get-类型攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-类型攻击"}},[t._v("#")]),t._v(" GET 类型攻击")]),t._v(" "),s("p",[t._v("GET 类型的 CSRF 利用非常简单，只需要一个 HTTP 请求，浏览器会自动向以访问过的某网站发起一次 HTTP 请求")]),t._v(" "),s("h4",{attrs:{id:"post-类型攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-类型攻击"}},[t._v("#")]),t._v(" POST 类型攻击")]),t._v(" "),s("p",[t._v("POST 类型的 CSRF 利用一个自动提交的表单，访问恶意页面后表单会自动提交，相当于模拟一次 POST 操作")]),t._v(" "),s("h4",{attrs:{id:"链接类型攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接类型攻击"}},[t._v("#")]),t._v(" 链接类型攻击")]),t._v(" "),s("p",[t._v("链接类型的 CSRF 需要用户点击链接才会触发，这种类型通常是在论坛中发布的图片中嵌入恶意链接，或者以广告的形式诱导用户中招，攻击者通常会以比较夸张的词语诱骗用户点击")]),t._v(" "),s("h3",{attrs:{id:"预防-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预防-csrf"}},[t._v("#")]),t._v(" 预防 CSRF")]),t._v(" "),s("p",[t._v("CSRF 通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对 CSRF 的防护能力来提升安全性")]),t._v(" "),s("p",[t._v("发起攻击有三个必要条件：")]),t._v(" "),s("ol",[s("li",[t._v("目标站点一定要有 CSRF 漏洞")]),t._v(" "),s("li",[t._v("用户登录过目标站点，并在浏览器保持站点登录状态")]),t._v(" "),s("li",[t._v("需要用户打开一个第三方站点")])]),t._v(" "),s("h5",{attrs:{id:"验证码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证码"}},[t._v("#")]),t._v(" 验证码")]),t._v(" "),s("p",[t._v("CSRF 攻击往往是在用户不知情的情况下成功伪造请求。而验证码会强制用户必须与应用进行交互，才能完成最终请求，而且因为 CSRF 攻击无法获取到验证码，因此通常情况下，验证码能够很好地遏制 CSRF 攻击。")]),t._v(" "),s("h5",{attrs:{id:"同源检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源检测"}},[t._v("#")]),t._v(" 同源检测")]),t._v(" "),s("p",[t._v("在 HTTP 协议中，每一个异步请求都会携带两个 Header ，用于标记来源域名：")]),t._v(" "),s("ul",[s("li",[t._v("Origin Header --- 记录 HTTP 请求的域名地址")]),t._v(" "),s("li",[t._v("Referer Header --- 记录 HTTP 请求的来源地址")])]),t._v(" "),s("p",[t._v("这两个 Header 在浏览器发起请求时，大多数情况会自动带上，并且不能由前端自定义内容。 服务器可以通过解析这两个 Header 中的域名，确定请求的来源域")]),t._v(" "),s("p",[s("strong",[t._v("服务器策略优先判断 Origin")])]),t._v(" "),s("p",[t._v("缺陷：某些情况下没有 Origin 和 Referer")]),t._v(" "),s("h5",{attrs:{id:"cookie-的-samesite-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的-samesite-属性"}},[t._v("#")]),t._v(" Cookie 的 SameSite 属性")]),t._v(" "),s("p",[t._v("在 HTTP 响应头中，可以通过 set-cookie 字段设置 cookie 时带上 SameSite 属性")]),t._v(" "),s("p",[t._v("SameSite 可以设置为三个值："),s("strong",[t._v("Strict、Lax、None")])]),t._v(" "),s("ol",[s("li",[t._v("Strict 模式 --- 浏览器禁止第三方请求携带 Cookie，比如 example.com 以外的网站在向 example.com/api/login 发送请求时不会发送 Cookie。")]),t._v(" "),s("li",[t._v("Lax 模式 --- 相对宽松，只能在 "),s("code",[t._v("get 方法提交表单")]),t._v("或者"),s("code",[t._v("a 标签发送 get 请求")]),t._v("的情况下可以携带 Cookie，其他情况均不能")]),t._v(" "),s("li",[t._v("None 模式 --- 默认模式，请自动带上 Cookie。（chrome 80 后可能默认模式会改为Lax）")])]),t._v(" "),s("h5",{attrs:{id:"csrf-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-token"}},[t._v("#")]),t._v(" CSRF Token")]),t._v(" "),s("p",[t._v("关键在于在请求中放入攻击者所不能伪造的信息，并且该信息不存在于 Cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 Token，并在服务器端建立一个拦截器来验证这个 Token，如果请求中没有 Token 或者 Token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。")]),t._v(" "),s("p",[t._v("1、服务器将 Token 返回到前端")]),t._v(" "),s("p",[t._v("2、前端发请求时携带这个 Token，对于 GET 请求，Token 将附在请求地址之后，这样 URL 就变成 "),s("code",[t._v("http://url?token=tokenvalue")]),t._v("。 而对于 "),s("code",[t._v("form")]),t._v(" 标签发起的 POST 请求来说，要在 "),s("code",[t._v("form")]),t._v(" 的最后加上：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("”hidden”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("”token”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("”tokenvalue”/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("3、服务器验证 Token 是否正确")]),t._v(" "),s("h2",{attrs:{id:"iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iframe")]),t._v(" "),s("p",[t._v("有些时候我们的前端页面需要用到第三方提供的页面组件，通常会以 iframe 的方式引入。典型的例子是使用 iframe 在页面上添加第三方提供的广告、天气预报、社交分享插件等等。")]),t._v(" "),s("p",[t._v("iframe 在给我们的页面带来更多丰富的内容和能力的同时，也带来了不少的安全隐患。因为 iframe 中的内容是由第三方来提供的，默认情况下他们不受我们的控制，他们可以在 iframe 中运行 JavaScirpt 脚本、Flash 插件、弹出对话框等等，这可能会破坏前端用户体验。")]),t._v(" "),s("p",[t._v("iframe 中的域名因为过期而被恶意攻击者抢注，或者第三方被黑客攻破，iframe 中的内容被替换掉了，从而利用用户浏览器中的安全漏洞下载安装木马、恶意勒索软件等等。")]),t._v(" "),s("h3",{attrs:{id:"点击劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[t._v("#")]),t._v(" 点击劫持")]),t._v(" "),s("p",[t._v("我们自己的页面可能正在被不法分子放到他们精心构造的 iframe 或者 frame 当中，进行点击劫持攻击。")]),t._v(" "),s("p",[t._v("这是一种欺骗性比较强，同时也需要用户高度参与才能完成的一种攻击。通常的攻击步骤是这样的：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者精心构造一个诱导用户点击的内容，比如Web页面小游戏")]),t._v(" "),s("li",[t._v("将我们的页面放入到 iframe 当中")]),t._v(" "),s("li",[t._v("利用 z-index 等 CSS 样式将这个 iframe 叠加到小游戏的垂直方向的正上方")]),t._v(" "),s("li",[t._v("把 iframe 设置为 100% 透明度")]),t._v(" "),s("li",[t._v("受害者访问到这个页面后，肉眼看到的是一个小游戏，如果受到诱导进行了点击的话，实际上点击到的却是 iframe 中的我们的页面")])]),t._v(" "),s("h4",{attrs:{id:"防嵌套网页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防嵌套网页"}},[t._v("#")]),t._v(" 防嵌套网页")]),t._v(" "),s("p",[t._v("为了防止网站被钓鱼，可以使用 "),s("code",[t._v("window.top")]),t._v(" 来防止你的网页被 iframe，限定你的网页不能嵌套在任意网页内。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" correctURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h4",{attrs:{id:"x-frame-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x-frame-options"}},[t._v("#")]),t._v(" X-Frame-Options")]),t._v(" "),s("p",[t._v("X-Frame-Options 是一个响应头，主要是描述服务器的网页资源的 iframe 权限。在服务端设置。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("X-Frame-Options: DENY\n拒绝任何 iframe 的嵌套请求\n\nX-Frame-Options: SAMEORIGIN\niframe 页面的地址只能为同源域名下的页面\n\nX-Frame-Options: ALLOW-FROM http://www.example.com\n只允许指定网页的iframe请求，不过兼容性较差 Chrome 不支持\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h4",{attrs:{id:"csp之页面防护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csp之页面防护"}},[t._v("#")]),t._v(" CSP之页面防护")]),t._v(" "),s("p",[t._v("在服务端设置相应响应头。能够极大的防止你的页面被 XSS 攻击，而且可以制定 js、css、img 等相关资源的 origin，防止被恶意注入。但兼容性差。")]),t._v(" "),s("h3",{attrs:{id:"限制第三方-iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制第三方-iframe"}},[t._v("#")]),t._v(" 限制第三方 iframe")]),t._v(" "),s("p",[t._v("当 iframe 别人的页面时，我们需要对其进行安全设限")]),t._v(" "),s("h4",{attrs:{id:"sandbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sandbox"}},[t._v("#")]),t._v(" sandbox")]),t._v(" "),s("p",[t._v("sandbox 就是用来给指定 iframe 设置一个沙盒模型限制 iframe 的更多权限。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sandbox")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("启动后会对 iframe 页面进行一定限制：")]),t._v(" "),s("ol",[s("li",[t._v("script 脚本不能执行")]),t._v(" "),s("li",[t._v("不能发送 ajax 请求")]),t._v(" "),s("li",[t._v("不能使用本地存储，即 localStorage，cookie 等")]),t._v(" "),s("li",[t._v("不能创建新的弹窗和 window")]),t._v(" "),s("li",[t._v("不能发送表单")]),t._v(" "),s("li",[t._v("不能加载额外插件比如 flash 等")])]),t._v(" "),s("p",[t._v("当然还可以通过配置适当解除一些限制")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("配置")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("效果")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("allow-forms")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("允许进行提交表单")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("allow-scripts")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("运行执行脚本")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("allow-same-origin")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("允许同域请求,比如 ajax，storage")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("allow-top-navigation")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("允许 iframe 能够主导 window.top 进行页面跳转")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("allow-popups")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v('允许 iframe 中弹出新窗口（window.open，target="_blank"）')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("allow-pointer-lock")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("在 iframe 中可以锁定鼠标")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);