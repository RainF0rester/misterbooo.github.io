(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{522:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"leetcode-40、组合总和ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-40、组合总和ii"}},[t._v("#")]),t._v(" LeetCode 40、组合总和II")]),t._v(" "),a("h2",{attrs:{id:"一、题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),a("strong",[t._v("一、题目描述")])]),t._v(" "),a("p",[t._v("给定一个候选人编号的集合 "),a("code",[t._v("candidates")]),t._v(" 和一个目标数 "),a("code",[t._v("target")]),t._v(" ，找出 "),a("code",[t._v("candidates")]),t._v(" 中所有可以使数字和为 "),a("code",[t._v("target")]),t._v(" 的组合。")]),t._v(" "),a("p",[a("code",[t._v("candidates")]),t._v(" 中的每个数字在每个组合中只能使用 "),a("strong",[t._v("一次")]),t._v(" 。")]),t._v(" "),a("p",[t._v("**注意：**解集不能包含重复的组合。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1:")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("输入: candidates = [10,1,2,7,6,1,5], target = 8,\n输出:\n[\n[1,1,6],\n[1,2,5],\n[1,7],\n[2,6]\n]\n")])])]),a("p",[a("strong",[t._v("示例 2:")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("输入: candidates = [2,5,2,1,2], target = 5,\n输出:\n[\n[1,2,2],\n[5]\n] \n")])])]),a("p",[a("strong",[t._v("提示:")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1 <= candidates.length <= 100")])]),t._v(" "),a("li",[a("code",[t._v("1 <= candidates[i] <= 50")])]),t._v(" "),a("li",[a("code",[t._v("1 <= target <= 30")])])]),t._v(" "),a("h2",{attrs:{id:"二、题目解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),a("strong",[t._v("二、题目解析")])]),t._v(" "),a("h2",{attrs:{id:"三、参考代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),a("strong",[t._v("三、参考代码")])]),t._v(" "),a("h3",{attrs:{id:"_1、java-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),a("strong",[t._v("1、Java 代码")])]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("combinationSum2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" candidates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先排序，方便把相同的元素集中到一起")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("candidates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" candidates "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、画出递归树，找到状态变量(回溯函数的参数)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// start 表示递归时正在访问的数组元素下标")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nums 表示当前集合中的元素")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// target 表示想在当前区间拼凑出的目标值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// path 表示选择的路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、寻找结束条件，由于回溯算法是借助递归实现，所以也就是去寻找递归终止条件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些逻辑操作（可有可无，视情况而定）")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如，在 N 皇后问题中，在这一步把数据加入到了结果里面")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到一个组合了")]),t._v("\n            res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3、确定选择列表，即需要把什么数据存储到结果里面")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for 循环就是一个选择的过程")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i 等于 start 表示，后续可以选的元素一开始只能从 start 开始")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如 nums = [2,3,6,7]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i = 1，指向了元素 3 ，表示当前后续选择的过程中，只能从 3 开始选，可以重复选 3 ，但无法选 2 了")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i = 2，指向了元素 6 ，表示当前后续选择的过程中，只能从 6 开始选，可以重复选 6 ，但无法选 2、3 了")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 剪枝操作：同一层相同数值的结点，从第 2 个开始，结果一定发生重复，因此跳过，用 continue")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前路径上可以把 nums[i] 加上")]),t._v("\n            path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些逻辑操作（可有可无，视情况而定）")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4、判断是否需要剪枝，去判断此时存储的数据是否之前已经被存储过")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要剪枝")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，目标值 target，已经从 target 变成了 target - nums[i]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接下来需要去【某个区间中】拼凑 target - nums[i]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于每个数字在每个组合中只能使用 一次 ")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前正在使用 nums[i]，那么为了拼凑 target - nums[i]，需要从使用 nums[i+1] 开始")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 而 i 前面的元素，比如 num[i]、 num[i-1]无法继续使用，实现了剪枝操作")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" nowposition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5、做出选择，递归调用该函数，进入下一层继续搜索")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nowposition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些逻辑操作（可有可无，视情况而定）")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6、撤销选择，回到上一层的状态")]),t._v("\n            path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Python")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("combinationSum2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" candidates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先排序，方便把相同的元素集中到一起")]),t._v("\n        candidates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backtrack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("candidates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、画出递归树，找到状态变量(回溯函数的参数)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start 表示递归时正在访问的数组元素下标")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nums 表示当前集合中的元素")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# target 表示想在当前区间拼凑出的目标值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# path 表示选择的路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、寻找结束条件，由于回溯算法是借助递归实现，所以也就是去寻找递归终止条件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一些逻辑操作（可有可无，视情况而定）")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如，在 N 皇后问题中，在这一步把数据加入到了结果里面")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 找到一个组合了")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3、确定选择列表，即需要把什么数据存储到结果里面")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for 循环就是一个选择的过程")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i 等于 start 表示，后续可以选的元素一开始只能从 start 开始")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如 nums = [2,3,6,7]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i = 1，指向了元素 3 ，表示当前后续选择的过程中，只能从 3 开始选，可以重复选 3 ，但无法选 2 了")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i = 2，指向了元素 6 ，表示当前后续选择的过程中，只能从 6 开始选，可以重复选 6 ，但无法选 2、3 了")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 剪枝操作：同一层相同数值的结点，从第 2 个开始，结果一定发生重复，因此跳过，用 continue")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前路径上可以把 nums[i] 加上")]),t._v("\n            path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一些逻辑操作（可有可无，视情况而定）")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4、判断是否需要剪枝，去判断此时存储的数据是否之前已经被存储过")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要剪枝")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时，目标值 target，已经从 target 变成了 target - nums[i]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接下来需要去【某个区间中】拼凑 target - nums[i]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于 同一个 数字可以 无限制重复被选取")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前正在使用 nums[i]，那么为了拼凑 target - nums[i]，依旧可以继续从使用 nums[i] 开始")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 而 i 前面的元素，比如 num[i-1]、 num[i-2]无法继续使用，实现了剪枝操作")]),t._v("\n            now_position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5、做出选择，递归调用该函数，进入下一层继续搜索")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 递归")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backtrack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" now_position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一些逻辑操作（可有可无，视情况而定）")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6、撤销选择，回到上一层的状态")]),t._v("\n            path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);