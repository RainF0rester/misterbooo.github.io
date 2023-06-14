(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{589:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"leetcode-643、子数组最大平均数-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-643、子数组最大平均数-i"}},[t._v("#")]),t._v(" LeetCode 643、子数组最大平均数 I")]),t._v(" "),a("h2",{attrs:{id:"一、题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" 一、题目描述")]),t._v(" "),a("p",[t._v("给你一个由 "),a("code",[t._v("n")]),t._v(" 个元素组成的整数数组 "),a("code",[t._v("nums")]),t._v(" 和一个整数 "),a("code",[t._v("k")]),t._v(" 。")]),t._v(" "),a("p",[t._v("请你找出平均数最大且 "),a("strong",[t._v("长度为")]),t._v(" "),a("strong",[a("code",[t._v("k")])]),t._v(" 的连续子数组，并输出该最大平均数。")]),t._v(" "),a("p",[t._v("任何误差小于 "),a("code",[t._v("10-5")]),t._v(" 的答案都将被视为正确答案。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1：")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("输入：nums = [1,12,-5,-6,50,3], k = 4\n输出：12.75\n解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75\n")])])]),a("p",[a("strong",[t._v("示例 2：")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("输入：nums = [5], k = 1\n输出：5.00000 \n")])])]),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("n == nums.length")])]),t._v(" "),a("li",[a("code",[t._v("1 <= k <= n <= 10^5")])]),t._v(" "),a("li",[a("code",[t._v("-10^4 <= nums[i] <= 10^4")])])]),t._v(" "),a("h2",{attrs:{id:"二、题目解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" 二、题目解析")]),t._v(" "),a("p",[t._v("很经典的"),a("strong",[t._v("滑动窗口")]),t._v("的题目。")]),t._v(" "),a("p",[t._v("具体操作如下：")]),t._v(" "),a("p",[t._v("1、定义需要维护的变量，即元素和、最大平均数。")]),t._v(" "),a("p",[t._v("2、定义窗口的首尾端 (start, end)， 然后滑动窗口。")]),t._v(" "),a("p",[t._v("3、窗口的右端位置从 0 开始，可以一直移动到尾部。")]),t._v(" "),a("p",[t._v("4、更新需要维护的变量，维护元素和的值，窗口右端新增一个元素进来，元素和发生变化。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://r07na4yqwor.feishu.cn/space/api/box/stream/download/asynccode/?code=ODA2NjM3NWQwZjJjZGZmZjdkOGFmYjI4YjM3NDE2NzdfczlPNGRCVFFkNVdGTFZ2ZXc4bmVUR2M2cU91RHR5Y1NfVG9rZW46UlUyemJ3S25rb0pEd3p4TGticGNwa3lObmZlXzE2ODY0NDczNzk6MTY4NjQ1MDk3OV9WNA",alt:"img"}})]),t._v(" "),a("p",[t._v("5、如果窗口的长度为 k，需要计算平均数。")]),t._v(" "),a("p",[t._v("6、如果题目的窗口长度固定：用一个 if 语句判断一下当前窗口长度是否达到了限定长度，如果达到了，窗口左指针前移一个单位，从而保证下一次右指针右移时，窗口长度保持不变。")]),t._v(" "),a("h2",{attrs:{id:"三、参考代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" 三、参考代码")]),t._v(" "),a("h3",{attrs:{id:"_1、java-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" 1、Java 代码")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子数组最大平均数 I（LeetCode 643）：https://leetcode.cn/problems/maximum-average-subarray-i/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findMaxAverage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 滑动窗口模板化解题，五步走策略")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【1、定义需要维护的变量】")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对于此题来说，需要维护当前滑动窗口的元素和、滑动过程中得出的最大平均数")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一开始，滑动窗口没有元素，元素和为 0 ")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于数组存在负数，所以 largest 设置为一个最小值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" largest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MIN_VALUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【2、定义窗口的首尾端 (start, end)， 然后滑动窗口】")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 窗口的左端位置从 0 开始")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 窗口的右端位置从 0 开始，可以一直移动到尾部")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【3、更新需要维护的变量, 有的变量需要一个 if 语句来维护 (比如最大最小长度)】")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 维护元素和的值，窗口右端新增一个元素进来，元素和发生变化")]),t._v("\n            sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if 语句")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果窗口的长度为 k，需要计算平均数")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 维护 largest 变量")]),t._v("\n                largest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" largest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【4、如果题目的窗口长度固定：用一个 if 语句判断一下当前窗口长度是否达到了限定长度 】")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.1、如果达到了，窗口左指针前移一个单位，从而保证下一次右指针右移时，窗口长度保持不变,")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.2、更新 (部分或所有) 维护变量 ")]),t._v("\n                sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                \n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.3、窗口左指针前移一个单位保证下一次右指针右移时窗口长度保持不变")]),t._v("\n                start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【5、返回所需要的答案】")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" largest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2、c-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、c-代码"}},[t._v("#")]),t._v(" 2、C++ 代码")]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("class Solution "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\npublic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findMaxAverage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 滑动窗口模板化解题，五步走策略")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【1、定义需要维护的变量】")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对于此题来说，需要维护当前滑动窗口的元素和、滑动过程中得出的最大平均数")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一开始，滑动窗口没有元素，元素和为 0 ")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于数组存在负数，所以 largest 设置为一个最小值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" largest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" INT_MIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【2、定义窗口的首尾端 (start, end)， 然后滑动窗口】")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 窗口的左端位置从 0 开始")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 窗口的右端位置从 0 开始，可以一直移动到尾部")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【3、更新需要维护的变量, 有的变量需要一个 if 语句来维护 (比如最大最小长度)】")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 维护元素和的值，窗口右端新增一个元素进来，元素和发生变化")]),t._v("\n            sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if 语句")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果窗口的长度为 k，需要计算平均数")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 维护 largest 变量")]),t._v("\n                largest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" largest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【4、如果题目的窗口长度固定：用一个 if 语句判断一下当前窗口长度是否达到了限定长度 】")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.1、如果达到了，窗口左指针前移一个单位，从而保证下一次右指针右移时，窗口长度保持不变,")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.2、更新 (部分或所有) 维护变量 ")]),t._v("\n                sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                \n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.3、窗口左指针前移一个单位保证下一次右指针右移时窗口长度保持不变")]),t._v("\n                start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【5、返回所需要的答案】")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" largest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3、python-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" 3、Python 代码")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findMaxAverage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 滑动窗口模板化解题，五步走策略")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 【1、定义需要维护的变量】")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对于此题来说，需要维护当前滑动窗口的元素和、滑动过程中得出的最大平均数")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一开始，滑动窗口没有元素，元素和为 0 ")]),t._v("\n        sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于数组存在负数，所以 largest 设置为一个最小值")]),t._v("\n        largest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-inf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 【2、定义窗口的首尾端 (start, end)， 然后滑动窗口】")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 窗口的左端位置从 0 开始")]),t._v("\n        start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 窗口的右端位置从 0 开始，可以一直移动到尾部")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 【3、更新需要维护的变量, 有的变量需要一个 if 语句来维护 (比如最大最小长度)】")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 维护元素和的值，窗口右端新增一个元素进来，元素和发生变化")]),t._v("\n            sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if 语句")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果窗口的长度为 k，需要计算平均数")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 维护 largest 变量")]),t._v("\n                largest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" largest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 【4、如果题目的窗口长度固定：用一个 if 语句判断一下当前窗口长度是否达到了限定长度 】")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4.1、如果达到了，窗口左指针前移一个单位，从而保证下一次右指针右移时，窗口长度保持不变,")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4.2、更新 (部分或所有) 维护变量 ")]),t._v("\n                sums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                \n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4.3、窗口左指针前移一个单位保证下一次右指针右移时窗口长度保持不变")]),t._v("\n                start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 【5、返回所需要的答案】")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" largest\n")])])]),a("h2",{attrs:{id:"四、复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、复杂度分析"}},[t._v("#")]),t._v(" 四、复杂度分析")]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：O(n)，其中 n 是数组 nums 的长度。遍历数组一次。")]),t._v(" "),a("li",[t._v("空间复杂度：O(1）。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);