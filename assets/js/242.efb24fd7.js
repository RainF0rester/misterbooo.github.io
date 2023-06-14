(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{629:function(t,a,n){"use strict";n.r(a);var s=n(54),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"剑指-offer-41-数据流中的中位数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#剑指-offer-41-数据流中的中位数"}},[t._v("#")]),t._v(" 剑指 Offer 41. 数据流中的中位数")]),t._v(" "),n("p",[t._v("大家好，我是吴师兄。")]),t._v(" "),n("p",[t._v("今天继续来学习《剑指Offer》系列的一道经典题目，依旧给出了非常详细的题解和精美的配图与动画。")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" 一、题目描述")]),t._v(" "),n("p",[n("strong",[t._v("如何得到一个数据流中的中位数？")])]),t._v(" "),n("p",[t._v("如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。")]),t._v(" "),n("p",[t._v("如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。")]),t._v(" "),n("p",[t._v("例如，")]),t._v(" "),n("p",[t._v("[2,3,4] 的中位数是 3")]),t._v(" "),n("p",[t._v("[2,3] 的中位数是 (2 + 3) / 2 = 2.5")]),t._v(" "),n("p",[t._v("设计一个支持以下两种操作的数据结构：")]),t._v(" "),n("ul",[n("li",[t._v("void addNum(int num) - 从数据流中添加一个整数到数据结构中。")]),t._v(" "),n("li",[t._v("double findMedian() - 返回目前所有元素的中位数。")])]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n[[],[1],[2],[],[3],[]]\n输出：[null,null,null,1.50000,null,2.00000]\n')])])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：\n["MedianFinder","addNum","findMedian","addNum","findMedian"]\n[[],[2],[],[3],[]]\n输出：[null,null,2.00000,null,2.50000]\n')])])]),n("p",[n("strong",[t._v("限制：")])]),t._v(" "),n("ul",[n("li",[t._v("最多会对 "),n("code",[t._v("addNum、findMedian")]),t._v(" 进行 "),n("code",[t._v("50000")]),t._v(" 次调用。")])]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" 二、题目解析")]),t._v(" "),n("p",[t._v("这道题目得先了解以下几个基础概念：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("1、中位数指的是"),n("strong",[t._v("排序数组")]),t._v("的中间元素值，如果是奇数，那么直接就是中间的数值；如果是偶数，那么就是中间两个数的平均值。")])]),t._v(" "),n("li",[n("p",[t._v("2、数据流指的是数据的长度是动态变化的，就像流水一样，在不断的新增数据过来。")])])]),t._v(" "),n("p",[t._v("这意味着，"),n("strong",[t._v("数据流的中位数在不断的变化，不仅值在变化，求解方式也是在动态变化")]),t._v("。")]),t._v(" "),n("p",[t._v("并且，我们是需要不断的将数据流中的全部数字进行排序，那么这里就要借助堆的知识了。")]),t._v(" "),n("p",[t._v("设置两个堆，一个是大顶堆 maxHeap，一个是小顶堆 minHeap。")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("大顶堆 maxHeap")]),t._v("  来存储数据流中较小一半的值")]),t._v(" "),n("li",[n("strong",[t._v("小顶堆 minHeap")]),t._v(" 来存储数据流中较大一半的值")])]),t._v(" "),n("p",[t._v("由于大顶堆的堆顶为它的存储区间的最大值，小顶堆的堆顶为它的存储区间的最小值，那么如果用着两个堆来存储数据流的所有数据，我们可以组成一个"),n("strong",[t._v("递增有序")]),t._v("的数组。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/vioeo.png",alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("1、大顶堆从左到右递增")]),t._v(" "),n("li",[t._v("2、小顶堆从左到右递增")])]),t._v(" "),n("p",[t._v("在动态存储数据流的数据过程中，中位数也就是这两种情况：")]),t._v(" "),n("ul",[n("li",[t._v("1、数据流为奇数时，保证两个堆的长度相差 1，小顶堆的堆顶就是中位数。")]),t._v(" "),n("li",[t._v("2、数据流为偶数时，保证两个堆的长度相等，两个堆的堆顶相加除二就是中位数。")])]),t._v(" "),n("p",[t._v("那"),n("strong",[t._v("一个新来的数据")]),t._v("应该添加到哪个堆呢？")]),t._v(" "),n("ul",[n("li",[t._v("1、当两堆长度相等，即长度都为 n 时，新数据加入到"),n("strong",[t._v("小顶堆")]),t._v("中，使得小顶堆的长度为 n + 1，那么证两个堆的长度相差 1，小顶堆的堆顶就是中位数。")]),t._v(" "),n("li",[t._v("2、当两堆长度不相等，即小顶堆长度为 n，大顶堆长度为 n - 1，新数据加入到"),n("strong",[t._v("大顶堆")]),t._v("中，使得大顶堆的长度为 n ，那么两个堆的长度就相等，两个堆的堆顶相加除二就是中位数。")])]),t._v(" "),n("p",[t._v("但是，这样做会有一个问题。")]),t._v(" "),n("p",[t._v("比如下面这张图：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/rtvau.png",alt:""}})]),t._v(" "),n("p",[t._v("此时，两堆长度相等，即长度都为 n 时，如果直接把新数据加入到"),n("strong",[t._v("小顶堆")]),t._v("中，使得小顶堆的长度为 n + 1，那么从大顶堆到小顶堆，并非是一个"),n("strong",[t._v("递增有序的数组")]),t._v("了。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/j7j2n.png",alt:""}})]),t._v(" "),n("p",[t._v("为了让每次新增一个数据到两个堆之后，都能使得从大顶堆到小顶堆是一个递增有序的数组，我们可以采取如下的操作。")]),t._v(" "),n("p",[t._v("1）、如果两堆长度相等，即长度都为 n 时，新数据先加入到"),n("strong",[t._v("大顶堆")]),t._v("中，然后再把"),n("strong",[t._v("大顶堆")]),t._v("的堆顶元素取出，放入到"),n("strong",[t._v("小顶堆")]),t._v("中。")]),t._v(" "),n("p",[t._v("比如，大顶堆和小顶堆的长度均为 2，新增一个元素 1。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/o49dn.png",alt:""}})]),t._v(" "),n("p",[t._v("先把新数据 1 加入到"),n("strong",[t._v("大顶堆")]),t._v("中。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/q34l7.png",alt:"image-20220102185718239"}})]),t._v(" "),n("p",[t._v("然后再把"),n("strong",[t._v("大顶堆")]),t._v("的堆顶元素取出，放入到"),n("strong",[t._v("小顶堆")]),t._v("中。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/6csax.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/01elv.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/h2v9o.png",alt:""}})]),t._v(" "),n("p",[t._v("2）、当两堆长度不相等，即小顶堆长度为 n，大顶堆长度为 n - 1，新数据先加入到"),n("strong",[t._v("小顶堆")]),t._v("中，然后再把"),n("strong",[t._v("小顶堆")]),t._v("的堆顶元素取出，放入到"),n("strong",[t._v("大顶堆")]),t._v("中。")]),t._v(" "),n("p",[t._v("比如，大顶堆的长度 1 ，小顶堆的长度为 2，新增一个元素 2。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/s8p55.png",alt:""}})]),t._v(" "),n("p",[t._v("先把新数据 2 加入到"),n("strong",[t._v("小顶堆")]),t._v("中。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/wo6sk.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/y2vc2.png",alt:""}})]),t._v(" "),n("p",[t._v("然后再把"),n("strong",[t._v("小顶堆")]),t._v("的堆顶元素取出，放入到"),n("strong",[t._v("大顶堆")]),t._v("中。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/p2zr4.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/2nmww.png",alt:""}})]),t._v(" "),n("p",[t._v("为了帮助你更好的理解整个过程，我特意做了一组动画，"),n("strong",[t._v("点开可以查看")]),t._v("：")]),t._v(" "),n("video",{attrs:{id:"video",width:"700",height:"400",muted:"muted",controls:"controls",poster:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/3hdi5.jpeg"},domProps:{muted:!0}},[n("source",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/MP4/%E5%89%91%E6%8C%87%20Offer%2041.%20%E6%95%B0%E6%8D%AE%E6%B5%81%E4%B8%AD%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0.m4v",type:"video/mp4"}})]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" 三、参考代码")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 剑指 Offer 41. 数据流中的中位数:https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MedianFinder")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// PriorityQueue，优先队列")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优先队列的作用是能保证每次取出的元素都是队列中权值最小的（ Java 的优先队列每次取最小元素，C++的优先队列每次取最大元素）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 Java 的优先队列每次取最小元素，即默认函数是实现小顶堆")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 大顶堆的概念：每个节点的值大于等于左右孩子节点的值，堆顶为最大值")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此，大顶堆的初始化需要额外处理")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// maxHeap 存储数据流中较小一半的值")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" maxHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 小顶堆的概念：每个节点的值小于等于左右孩子节点的值，堆顶为最小值")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// minHeap 来存储数据流中较大一半的值")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" minHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MedianFinder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化操作")]),t._v("\n        maxHeap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        minHeap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据我们的设定，一直维护大顶堆、小顶堆的特性")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使得 maxHeap堆底 <= maxHeap堆顶 <= minHeap堆顶 <= minHeap堆底")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么，中位数就是在【大顶堆的堆顶】与【小顶堆的堆顶】中间的位置")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在添加元素的过程中，需要判断添加的元素应该添加到哪个堆中")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 小的值应该插入到 maxHeap，大的值应该插入到 minHeap")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据流的长度有奇数和偶数两种情况，并且是在动态变化的")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、【大顶堆】与【小顶堆】的长度不相等，由于两者的长度至多相差 1，那么数据流的总长度就是奇数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设 minHeap 的长度为 n，则 maxHeap 的长度为 n - 1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么 maxHeap 是应该需要加入一个【新的元素】的，这样就能使得 minHeap 和 maxHeap 的长度均为 n")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么加入新元素之后，中位数就是 （ minHeap 的堆顶 + maxHeap 的堆顶） / 2")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但如果直接把 num 加入到 maxHeap 中，如果 num 是一个很大的值")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 maxHeap 是存储数据流中较小一半的值，这样就会破坏我们维护的属性")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此，我们可以先把 num 加入到 minHeap 中，然后从 minHeap 挤出一个最小值来，重新加入到 maxHeap")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一来一回，minHeap 的长度依旧为 n，maxHeap 的长度变成了 n")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" minHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先将元素添加到小顶堆 minHeap 中")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 minHeap 添加了新的元素，PriorityQueue 会自动的将 minHeap 之前的元素和 num 进行操作")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使得 minHeap 的每个节点的值小于等于左右孩子节点的值，堆顶为最小值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个时候，minHeap 的长度变成了 n + 1")]),t._v("\n            minHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 minHeap 来存储数据流中较大一半的值，而新添加的元素 num 有可能是一个很小的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 理论上应该要加入到 maxHeap 才对")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，先去获取此时 minHeap 的堆顶元素（不一定值是 num），即最小值，把它抛出后加入到 maxHeap 中")]),t._v("\n            maxHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、【大顶堆】与【小顶堆】的长度相等，那么数据流的总长度就是偶数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设 minHeap 的长度为 n，则 maxHeap 的长度为 n ")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们把新的元素加入到 minHeap 中，使得 minHeap 的长度变成了 n + 1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么中位数就是 minHeap 的堆顶元素了")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但如果直接把 num 加入到 minHeap 中，如果 num 是一个很小的值")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 minHeap 是存储数据流中较大一半的值，这样就会破坏我们维护的属性")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此，我们可以先把 num 加入到 maxHeap 中，然后从 maxHeap 挤出一个最大值来，重新加入到 minHeap")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一来一回，maxHeap 的长度依旧为 n，mminHeap 的长度变成了 n + 1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先将元素添加到大顶堆 maxHeap 中")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 maxHeap 添加了新的元素，PriorityQueue 会自动的将 maxHeap 之前的元素和 num 进行操作")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使得 maxHeap 的每个节点的值大于等于左右孩子节点的值，堆顶为最大值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个时候，maxHeap 的长度变成了 n + 1")]),t._v("\n            maxHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 maxHeap 来存储数据流中较小一半的值，而新添加的元素 num 有可能是一个很大的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 理论上应该要加入到 minHeap 才对")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，先去获取此时 maxHeap 的堆顶元素（不一定值是 num），即最大值，把它抛出后加入到 minHeap 中")]),t._v("\n            minHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findMedian")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据流的长度有奇数和偶数两种情况，并且是在动态变化的")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、【大顶堆】与【小顶堆】的长度不相等，由于两者的长度至多相差 1，那么数据流的总长度就是奇数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设 minHeap 的长度为 n，则 maxHeap 的长度为 n - 1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么中位数出现在 minHeap 的堆顶位置")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" minHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" minHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、【大顶堆】与【小顶堆】的长度相等，那么数据流的总长度就是偶数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设 minHeap 的长度为 n，则 maxHeap 的长度为 n ")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么中位数就是 （ minHeap 的堆顶 + maxHeap 的堆顶） / 2")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" minHeap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);