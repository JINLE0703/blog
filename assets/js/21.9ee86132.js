(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{376:function(v,_,t){"use strict";t.r(_);var a=t(25),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"相关概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关概念"}},[v._v("#")]),v._v(" 相关概念")]),v._v(" "),t("h3",{attrs:{id:"并发性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发性"}},[v._v("#")]),v._v(" 并发性")]),v._v(" "),t("p",[v._v("并发是指两个或多个事件可以在 **同一个时间间隔（一段时间内）**发生")]),v._v(" "),t("p",[v._v("并行是指两个或多个事件可以在 "),t("strong",[v._v("同一个时刻")]),v._v(" 发生")]),v._v(" "),t("h3",{attrs:{id:"共享性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共享性"}},[v._v("#")]),v._v(" 共享性")]),v._v(" "),t("p",[v._v("操作系统中的资源可供多个并发的程序共同使用，这种形式称为 "),t("strong",[v._v("资源共享")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("互斥共享 --- 当资源被程序 A 占用时，其他想使用的话只能等待，只有进程 A 使用完以后，其他进程才可以使用该资源（如：打印机）")])]),v._v(" "),t("li",[t("p",[v._v("同时访问 --- 某种资源在一段时间内 "),t("strong",[v._v("并发地")]),v._v(" 被多个程序访问")])])]),v._v(" "),t("h3",{attrs:{id:"虚拟性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟性"}},[v._v("#")]),v._v(" 虚拟性")]),v._v(" "),t("p",[v._v("把一个 "),t("strong",[v._v("物理实体")]),v._v(" 转变为若干个 "),t("strong",[v._v("逻辑实体")])]),v._v(" "),t("ul",[t("li",[v._v("时分复用技术 --- 资源在时间上进行复用，不同程序并发使用")]),v._v(" "),t("li",[v._v("空分复用技术 --- 空分复用技术用来实现虚拟磁盘、虚拟内存等")])]),v._v(" "),t("h3",{attrs:{id:"异步性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步性"}},[v._v("#")]),v._v(" 异步性")]),v._v(" "),t("p",[v._v("在多道程序环境下，允许多个进程并发执行")]),v._v(" "),t("h2",{attrs:{id:"进程管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程管理"}},[v._v("#")]),v._v(" 进程管理")]),v._v(" "),t("h3",{attrs:{id:"进程与线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[v._v("#")]),v._v(" 进程与线程")]),v._v(" "),t("p",[v._v("进程 --- 系统进行 "),t("strong",[v._v("资源分配和调度")]),v._v(" 的 "),t("strong",[v._v("基本")]),v._v(" 单位，作为程序独立运行的载体保障程序正常执行，使得操作系统资源的利用率大幅提升。"),t("strong",[v._v("一个进程就是一个程序的运行实例")]),v._v("。")]),v._v(" "),t("p",[v._v("线程 --- 系统进行 "),t("strong",[v._v("运行调度")]),v._v(" 的 "),t("strong",[v._v("最小")]),v._v(" 单位，包含在进程之中，是进程中实际运行工作的单位。")]),v._v(" "),t("p",[t("strong",[v._v("一个进程可以有多个线程")])]),v._v(" "),t("p",[t("strong",[v._v("操作系统对进程的调度实际上是进程对线程的调度")])]),v._v(" "),t("p",[t("strong",[v._v("线程是依附于进程的，而进程中使用多线程并行处理能提升运算效率")])]),v._v(" "),t("h4",{attrs:{id:"关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关系"}},[v._v("#")]),v._v(" 关系")]),v._v(" "),t("ol",[t("li",[v._v("进程中的任意一线程执行出错，都会导致整个进程的崩溃")]),v._v(" "),t("li",[v._v("线程之间共享进程中的数据")]),v._v(" "),t("li",[v._v("当一个进程关闭之后，操作系统会回收进程所占用的内存")]),v._v(" "),t("li",[v._v("进程之间的内容相互隔离")])]),v._v(" "),t("h3",{attrs:{id:"进程同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程同步"}},[v._v("#")]),v._v(" 进程同步")]),v._v(" "),t("p",[v._v("对竞争资源在多进程间进行使用次序的协调，使得并发执行的多个进程之间可以有效使用资源和相互合作")]),v._v(" "),t("ul",[t("li",[v._v("空闲让进：资源无占用，允许使用")]),v._v(" "),t("li",[v._v("忙则等待：资源有占用，请求进程等待")]),v._v(" "),t("li",[v._v("有限等待：保证有限等待时间能够使用资源")]),v._v(" "),t("li",[v._v("让权等待：等待时，进程需要让出 CPU")])]),v._v(" "),t("p",[t("strong",[v._v("进程内多线程也需要同步")])]),v._v(" "),t("h2",{attrs:{id:"作业管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作业管理"}},[v._v("#")]),v._v(" 作业管理")]),v._v(" "),t("h3",{attrs:{id:"进程调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程调度"}},[v._v("#")]),v._v(" 进程调度")]),v._v(" "),t("p",[v._v("指计算机通过决策决定哪个就绪进程可以获得 CPU 使用权")]),v._v(" "),t("ol",[t("li",[v._v("保留旧进程的运行信息，请出旧进程（收拾包袱）")]),v._v(" "),t("li",[v._v("选择新进程，准备运行环境并分配 CPU（新进驻）")])]),v._v(" "),t("h4",{attrs:{id:"机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#机制"}},[v._v("#")]),v._v(" 机制")]),v._v(" "),t("p",[t("strong",[v._v("就绪队列的排队机制")]),v._v(" --- 将就绪进程按照一定的方式排成队列，以便调度程序可以最快找到就绪进程")]),v._v(" "),t("p",[t("strong",[v._v("选择运行进程的委派机制")]),v._v(" --- 调度程序以一定的策略选择就绪进程，将 CPU 资源分配给它")]),v._v(" "),t("p",[t("strong",[v._v("新老进程的上下文切换机制")]),v._v(" --- 保存当前进程的上下文信息，装入被委派执行进程的运行上下文")]),v._v(" "),t("h4",{attrs:{id:"非抢占式调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非抢占式调度"}},[v._v("#")]),v._v(" 非抢占式调度")]),v._v(" "),t("p",[v._v("处理器一旦分配给某个进程，就让该进程一直使用下去")]),v._v(" "),t("p",[v._v("调度程序不以任何原因抢占正在被使用的处理器")]),v._v(" "),t("p",[v._v("直到进程完成工作或因为 IO 阻塞才会让出处理器")]),v._v(" "),t("h4",{attrs:{id:"抢占式调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抢占式调度"}},[v._v("#")]),v._v(" 抢占式调度")]),v._v(" "),t("p",[v._v("允许调度程序以一定的策略暂停当前运行的进程")]),v._v(" "),t("p",[v._v("保存好旧进程的上下文信息，分配处理器给新进程")]),v._v(" "),t("h4",{attrs:{id:"相关算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关算法"}},[v._v("#")]),v._v(" 相关算法")]),v._v(" "),t("p",[t("strong",[v._v("先来先服务调度算法")])]),v._v(" "),t("p",[t("strong",[v._v("短进程优先调度算法")]),v._v(" --- 调度程序优先选择就绪队列中估计运行时间最短的进程")]),v._v(" "),t("p",[t("strong",[v._v("高优先权优先调度算法")]),v._v(" --- 进程附带优先权，调度程序优先选择权重高的进程")]),v._v(" "),t("p",[t("strong",[v._v("时间片轮转调度算法")]),v._v(" --- 每次从队列头部取出待执行进程，分配一个时间片执行，时间执行完进程进入就绪进程尾部")]),v._v(" "),t("h3",{attrs:{id:"死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[v._v("#")]),v._v(" 死锁")]),v._v(" "),t("p",[v._v("死锁是指两个或两个以上的进程在执行过程中，由于竞争资源或者由于彼此通信而造成的一种阻塞的现象，若无外力作用，它们都将无法推进下去。")]),v._v(" "),t("p",[v._v("此时称系统处于死锁状态或系统产生了死锁，这些永远在互相等待的进程称为死锁进程。")]),v._v(" "),t("h4",{attrs:{id:"预防"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预防"}},[v._v("#")]),v._v(" 预防")]),v._v(" "),t("ol",[t("li",[v._v("系统规定进程运行之前，一次性申请所有需要的资源，进程在运行期间不会提出资源请求，从而摒弃请求保持条件")]),v._v(" "),t("li",[v._v("当一个进程请求新的资源得不到满足时，必须释放占有的资源，进程运行时占有的资源可以被释放，从而摈弃不可剥夺条件")]),v._v(" "),t("li",[v._v("可用资源线性排序，申请必须按照需要递增申请，线性申请不再形成环路，从而摒弃环路等待条件")]),v._v(" "),t("li",[v._v("银行家算法")])])])}),[],!1,null,null,null);_.default=s.exports}}]);