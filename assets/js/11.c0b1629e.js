(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{399:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"leetcode-84、柱状图中的最大矩形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-84、柱状图中的最大矩形"}},[t._v("#")]),t._v(" LeetCode 84、柱状图中的最大矩形")]),t._v(" "),a("h2",{attrs:{id:"一、题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),a("strong",[t._v("一、题目描述")])]),t._v(" "),a("p",[t._v("给定 "),a("em",[t._v("n")]),t._v(" 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。")]),t._v(" "),a("p",[t._v("求在该柱状图中，能够勾勒出来的矩形的最大面积。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136980.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 "),a("code",[t._v("[2,1,5,6,2,3]")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136445.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("图中阴影部分为所能勾勒出的最大矩形面积，其面积为 "),a("code",[t._v("10")]),t._v(" 个单位。")]),t._v(" "),a("p",[a("strong",[t._v("示例:")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("输入: [2,1,5,6,2,3]\n输出: 10\n")])])]),a("h2",{attrs:{id:"二、题目解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),a("strong",[t._v("二、题目解析")])]),t._v(" "),a("p",[t._v("我们依旧用 "),a("strong",[t._v("四步分析法")]),t._v(" 来分析一下这道题目。")]),t._v(" "),a("ul",[a("li",[t._v("模拟：模拟题目的运行。")]),t._v(" "),a("li",[t._v("规律：尝试总结出题目的一般规律和特点。")]),t._v(" "),a("li",[t._v("匹配：找到符合这些特点的数据结构与算法。")]),t._v(" "),a("li",[t._v("边界：考虑特殊情况。")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("“")])]),t._v(" "),a("p",[t._v("以下的整体设计思路参考于 liweiwei 的题解，liweiwei 是 LeetCode 大佬，欢迎前往关注：https://leetcode-cn.com/u/liweiwei1419/")]),t._v(" "),a("p",[a("strong",[t._v("”")])])]),t._v(" "),a("h4",{attrs:{id:"模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟"}},[t._v("#")]),t._v(" "),a("strong",[t._v("模拟")])]),t._v(" "),a("p",[t._v("相当于给我们这样一块木板，怎么样去切才能得到一个面积最大的矩形。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136876.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("矩形的面积由 "),a("strong",[t._v("高")]),t._v(" 和 "),a("strong",[t._v("宽")]),t._v(" 决定的，高确定的情况下，"),a("strong",[t._v("宽")]),t._v(" 的数值越大，矩形面积越大；同样的，宽确定的情况下，"),a("strong",[t._v("高")]),t._v(" 的数值越大，矩形面积越大。")]),t._v(" "),a("p",[t._v("所以，一个可执行的思路就是"),a("strong",[t._v("依次遍历柱形的高度")]),t._v("，求出每个高度下能切出的最大矩形时的宽度是多少。")]),t._v(" "),a("p",[t._v("以本题为例，有 6 种情况，高度是 2、1、5、6、2、3。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136469.(null)",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136133.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("84图片版.006")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136924.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("84图片版.007")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136661.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("84图片版.008")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136470.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("84图片版.009")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136289.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("84图片版.010")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136191.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("84图片版.011")]),t._v(" "),a("h4",{attrs:{id:"规律"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规律"}},[t._v("#")]),t._v(" "),a("strong",[t._v("规律")])]),t._v(" "),a("p",[t._v("也就是说，在高度确定的情况下，我们要尽可能的去扩充宽度，怎么扩充呢？")]),t._v(" "),a("p",[a("strong",[t._v("向左和向右延伸，直到碰壁")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136430.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("按照这样的思路，需要循环嵌套两次去遍历，再对比得出最大的矩形面积，这样的代码很好写，时间复杂度来到了 O(N(2))。")]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("for （遍历高）{\n while(遍历宽){\n }\n}\n")])])]),a("p",[a("strong",[t._v("需要优化")]),t._v("。")]),t._v(" "),a("p",[t._v("再重复一次，矩形的面积是由 "),a("strong",[t._v("高")]),t._v(" 和 "),a("strong",[t._v("宽")]),t._v(" 共同决定的，遍历高这个操作无法省略，优化的方向在于能不能在 O(1) 的时间里获取到它的最大宽度。")]),t._v(" "),a("p",[t._v("宽度是由什么决定的？")]),t._v(" "),a("p",[a("strong",[t._v("左边第一个比当前柱体小的柱体和右边第一个比当前柱体小的柱体")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136220.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("所以，我们重新来 "),a("strong",[t._v("模拟")]),t._v(" 一下整个过程。")]),t._v(" "),a("h4",{attrs:{id:"模拟-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟-2"}},[t._v("#")]),t._v(" "),a("strong",[t._v("模拟 2")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136018.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("请看上图，当遍历到高度为 2 时，左边界是确定了的，但"),a("strong",[t._v("右边是什么情况一无所知")]),t._v("，被阴影笼罩，无法确定右边界，宽度也就无法确定，那先不管，"),a("strong",[t._v("继续前行")]),t._v("，让阴影的面积变小。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136993.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("也就是说，当出现了第一个比"),a("strong",[t._v("当前柱体")]),t._v("高度还小的柱体时，可以确定"),a("strong",[t._v("当前柱体")]),t._v("的右边界，以上图为例，左边界和右边界确定下来的宽度为 1，此时，高度为 2 的最大矩形面积是 1 * 2 = 2。")]),t._v(" "),a("p",[t._v("我们以上帝视角来看待这个不规则的矩形，高度为 2 的矩形有很多种。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136719.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("为了方便区分，我们用"),a("strong",[t._v("下标")]),t._v("来表示，即下标为 0 的最大矩形面积为 "),a("code",[t._v("1 * 2 = 2")]),t._v("。")]),t._v(" "),a("p",[t._v("继续往下分析，下标为 1 的最大矩形面积是多少呢？")]),t._v(" "),a("p",[t._v("再次重复一下，矩形的面积是由 "),a("strong",[t._v("高")]),t._v(" 和 "),a("strong",[t._v("宽")]),t._v(" 来决定的，高确定了，需要去确定 "),a("strong",[t._v("宽")]),t._v("，而"),a("strong",[t._v("宽是由左边界与右边界共同确定的")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136086.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("此时，下标为 1 的矩形左边界是可以确定下来的，但"),a("strong",[t._v("右边是什么情况一无所知")]),t._v("，被阴影笼罩，无法确定右边界，宽度也就无法确定，那先不管，"),a("strong",[t._v("继续前行")]),t._v("，让阴影的面积变小。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136997.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("当来到下标为 2 的位置时，我们先来确定下标 2 位置的左边界，有三个选择，分别是 a、b、c，而我们要选择的边界必须满足"),a("strong",[t._v("左边第一个比当前柱体小的柱体")]),t._v("，即 c 的位置，否则如果你选 a 、b 都会使得下标 2 位置的矩形高度变小。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136050.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("image-20210321150021475")]),t._v(" "),a("p",[t._v("此时，下标为 2 的矩形左边界是可以确定下来的，但"),a("strong",[t._v("右边是什么情况一无所知")]),t._v("，被阴影笼罩，无法确定右边界，宽度也就无法确定，那先不管，"),a("strong",[t._v("继续前行")]),t._v("，让阴影的面积变小。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136319.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("同样的，下标 3 位置的左边界确定了，右边界还无法确定，继续前行，让阴影的面积变小。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136290.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("当来到下标 4 的位置时，它的左边界确定了，右边界还无法确定。")]),t._v(" "),a("p",[t._v("不过，下标 3 的右边界可以确定了，是右边下标为 4 位置的边界，此时，它的高度是 "),a("code",[t._v("6")]),t._v("，宽度是 "),a("code",[t._v("1")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136171.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("同样的，下标 2 的右边界可以确定了，是右边下标为 4 位置的边界，此时，它的高度是 "),a("code",[t._v("5")]),t._v("，宽度是 "),a("code",[t._v("2")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136641.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("现在，剩下下标为 1、4、5 的边界还没有确定下来，继续前行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136372.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("当来到下标为 5 位置的时候，它的左边界和右边界可以确定下来了，此时，它的高度是 "),a("code",[t._v("3")]),t._v("，宽度是 "),a("code",[t._v("1")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136825.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("下标为 4 的右边界也可以确定下来，此时，它的高度是 "),a("code",[t._v("2")]),t._v("，宽度是 "),a("code",[t._v("4")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136304.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("最后，下标为 1 的右边界也确定下来，此时，它的高度是 "),a("code",[t._v("1")]),t._v("，宽度是 "),a("code",[t._v("6")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091136676.(null)",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配"}},[t._v("#")]),t._v(" "),a("strong",[t._v("匹配")])]),t._v(" "),a("p",[t._v("我们遍历的方式是"),a("strong",[t._v("从左到右")]),t._v("进行遍历的，而对于右边界的确定分为两种情况，一种是"),a("strong",[t._v("马上就确定")]),t._v("了，比如下标为 0 和下标为 5 的位置，另外一种是无法立马确定时先"),a("strong",[t._v("存储")]),t._v("下来，遍历到后面才回过头来确定，比如下标 1、2、3、4 的位置，并且只要是遇到了当前柱形的高度比它上一个柱形的高度严格小的时候，一定可以确定它之前的某些柱形的最大宽度，并且确定的柱形宽度的顺序是"),a("strong",[t._v("从右边向左边")]),t._v("，比如先确定好下标 3 的右边界才后，才再确定下标 2 的右边界。")]),t._v(" "),a("p",[t._v("很显然，"),a("strong",[t._v("栈")]),t._v(" 这种数据结构符合要求。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("“")])]),t._v(" "),a("p",[t._v("栈：先进后出，后进先出")]),t._v(" "),a("p",[a("strong",[t._v("”")])])]),t._v(" "),a("h4",{attrs:{id:"边界"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边界"}},[t._v("#")]),t._v(" "),a("strong",[t._v("边界")])]),t._v(" "),a("ul",[a("li",[t._v("矩形不存在")]),t._v(" "),a("li",[t._v("矩形长度为 1")])]),t._v(" "),a("h2",{attrs:{id:"三、参考代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),a("strong",[t._v("三、参考代码")])]),t._v(" "),a("h3",{attrs:{id:"_1、java-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),a("strong",[t._v("1、Java 代码")])]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 柱状图中最大的矩形（LeetCode 84）：https://leetcode.cn/problems/largest-rectangle-in-histogram/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("largestRectangleArea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" heights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化最终结果为0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用单调栈")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" stack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将给定的原数组左右各添加一个元素0，方便处理")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" newHeights "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("heights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 左边界为 0 ")]),t._v("\n        newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 右边界边界为 0 ")]),t._v("\n        newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其余不变")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" heights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" heights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 整体思路：")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对于一个高度，如果能得到向左和向右的边界")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么就能对每个高度求一次面积")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历所有高度，即可得出最大面积")]),t._v("\n      \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始遍历")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果栈不为空且当前考察的元素值小于栈顶元素值，")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 则表示以栈顶元素值为高的矩形面积可以确定")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 弹出栈顶元素")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取栈顶元素对应的高")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" curHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 栈顶元素弹出后，新的栈顶元素就是其左侧边界")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" leftIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 右侧边界是当前考察的索引")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" rightIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算矩形宽度")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" curWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rightIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" leftIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算面积")]),t._v("\n                res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" curWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" curHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前考察索引入栈")]),t._v("\n            stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回结果")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2、-c-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),a("strong",[t._v("C++")]),t._v(" "),a("strong",[t._v("代码")])]),t._v(" "),a("div",{staticClass:"language-C++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        // 初始化最终结果为0\n        int res = 0;\n\n        // 使用单调栈\n        stack<int> stk;\n\n        // 将给定的原数组左右各添加一个元素0，方便处理\n        vector<int> newHeigths(heights.size() +  2);\n        // 左边界为 0 \n        newHeigths[0] = 0 ;\n\n        // 右边界边界为 0 \n        newHeigths[heights.size() - 1] = 0;\n\n        // 其余不变\n        for ( int i = 1 ; i < heights.size() + 1 ; i++) {\n            newHeigths[i] = heights[i - 1];\n        }\n    \n       // 整体思路：\n       // 对于一个高度，如果能得到向左和向右的边界\n       // 那么就能对每个高度求一次面积\n       // 遍历所有高度，即可得出最大面积\n      \n        // 开始遍历\n        for (int i = 0 ; i < newHeigths.size() ; i++) {\n            // 如果栈不为空且当前考察的元素值小于栈顶元素值，\n            // 则表示以栈顶元素值为高的矩形面积可以确定\n            while (!stk.empty() && newHeigths[i] < newHeigths[stk.top()]) {\n                // 弹出栈顶元素\n                int cur = stk.top();\n\n                stk.pop();\n\n                // 获取栈顶元素对应的高\n                int curHeight =  newHeigths[cur];\n\n                // 栈顶元素弹出后，新的栈顶元素就是其左侧边界\n                int leftIndex =  stk.top();\n\n                \n                // 右侧边界是当前考察的索引\n\n                int rightIndex = i;\n                \n                // 计算矩形宽度\n                int curWidth =   rightIndex - leftIndex - 1;\n               \n                // 计算面积\n                res = max(res, curHeight * curWidth);\n               \n            }\n            \n            // 当前考察索引入栈\n            stk.push(i);\n        }\n\n        // 返回结果\n        return res;\n    }\n};\n")])])]),a("h3",{attrs:{id:"_3、python-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),a("strong",[t._v("3、Python 代码")])]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("largestRectangleArea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" heights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化最终结果为0")]),t._v("\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用单调栈")]),t._v("\n        stack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将给定的原数组左右各添加一个元素0，方便处理")]),t._v("\n        newHeights "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("heights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 左边界为 0 ")]),t._v("\n        newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 右边界边界为 0 ")]),t._v("\n        newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其余不变")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("heights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n            newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" heights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n                \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 整体思路：")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对于一个高度，如果能得到向左和向右的边界")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么就能对每个高度求一次面积")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 遍历所有高度，即可得出最大面积")]),t._v("\n      \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始遍历")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果栈不为空且当前考察的元素值小于栈顶元素值，")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 则表示以栈顶元素值为高的矩形面积可以确定")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" stack  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 弹出栈顶元素")]),t._v("\n                cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n                stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取栈顶元素对应的高")]),t._v("\n                curHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 栈顶元素弹出后，新的栈顶元素就是其左侧边界")]),t._v("\n                leftIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 右侧边界是当前考察的索引")]),t._v("\n                rightIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算矩形宽度")]),t._v("\n                curWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rightIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" leftIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算面积")]),t._v("\n                res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" curWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" curHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            \n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前考察索引入栈")]),t._v("\n            stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回结果")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);