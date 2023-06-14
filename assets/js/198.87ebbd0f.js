(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{585:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-69、x-的平方根"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-69、x-的平方根"}},[t._v("#")]),t._v(" LeetCode 69、x 的平方根")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("给你一个非负整数 "),n("code",[t._v("x")]),t._v(" ，计算并返回 "),n("code",[t._v("x")]),t._v(" 的 "),n("strong",[t._v("算术平方根")]),t._v(" 。")]),t._v(" "),n("p",[t._v("由于返回类型是整数，结果只保留 "),n("strong",[t._v("整数部分")]),t._v(" ，小数部分将被 "),n("strong",[t._v("舍去 。")])]),t._v(" "),n("p",[t._v("**注意：**不允许使用任何内置指数函数和算符，例如 "),n("code",[t._v("pow(x, 0.5)")]),t._v(" 或者 "),n("code",[t._v("x ** 0.5")]),t._v(" 。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：x = 4\n输出：2\n")])])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：x = 8\n输出：2\n解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。 \n")])])]),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("0 <= x <= 2^31 - 1")])])]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信：wzb_3377")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x 的平方根（LeetCode 69）：https://leetcode.cn/problems/sqrtx/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mySqrt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要寻找出一个数 ans ，使得 ans * ans <= x ，并且 ans 总是尽可能更大")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 于是，开始在 [ 0  , x ] 这个区间中去查找")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在查找过程中，不断的去缩小区间")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 左区间开始位置为 0 ")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 右区间开始位置为 x")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 算法平方根的结果，一开始为一个不可能的数 -1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始在区间中查找")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先定位中间元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 x 的范围能到达 int 的最大值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以 mid 也有可能很大，导致 mid * mid 超过 int 的范围")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此使用 long")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断 mid 是否符合要求")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、如果发现不够")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保留结果")]),t._v("\n                ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同时，可以舍去 left 左边的所有元素")]),t._v("\n                left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、如果发现超过")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同时，可以舍去 right 右边的所有元素")]),t._v("\n                right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2、-c-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),n("strong",[t._v("C++")]),t._v(" "),n("strong",[t._v("代码")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Solution {\npublic:\n    int mySqrt(int x) {\n        // 需要寻找出一个数 ans ，使得 ans * ans <= x ，并且 ans 总是尽可能更大\n        // 于是，开始在 [ 0  , x ] 这个区间中去查找\n        // 在查找过程中，不断的去缩小区间\n        \n        // 左区间开始位置为 0 \n        int left = 0 ;\n        \n        // 右区间开始位置为 x\n        int right = x ;\n        \n        // 算法平方根的结果，一开始为一个不可能的数 -1\n        int ans = -1;\n\n        // 开始在区间中查找\n        while (left <= right) {\n\n            // 先定位中间元素\n            int mid = left + (right - left) / 2;\n\n            // 由于 x 的范围能到达 int 的最大值\n            // 所以 mid 也有可能很大，导致 mid * mid 超过 int 的范围\n            // 因此使用 long\n            // 判断 mid 是否符合要求\n            // 1、如果发现不够\n            if ((long) mid * mid <= x) {\n\n                // 保留结果\n                ans = mid;\n\n                // 同时，可以舍去 left 左边的所有元素\n                left = mid + 1;\n            \n            // 2、如果发现超过\n            } else {\n\n                // 同时，可以舍去 right 右边的所有元素\n                right = mid - 1;\n            }\n        }\n\n        // 返回结果\n        return ans;\n\n    }\n};\n")])])]),n("h3",{attrs:{id:"_3、python-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("3、Python 代码")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mySqrt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要寻找出一个数 ans ，使得 ans * ans <= x ，并且 ans 总是尽可能更大")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 于是，开始在 [ 0  , x ] 这个区间中去查找")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在查找过程中，不断的去缩小区间")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 左区间开始位置为 0 ")]),t._v("\n        left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" \n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 右区间开始位置为 x")]),t._v("\n        right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x \n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 算法平方根的结果，一开始为一个不可能的数 -1")]),t._v("\n        ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始在区间中查找")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" right "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先定位中间元素")]),t._v("\n            mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于 x 的范围能到达 的最大值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以 mid 也有可能很大，导致 mid * mid 超过 的范围")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因此使用 long")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 判断 mid 是否符合要求")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、如果发现不够")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v("  mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保留结果")]),t._v("\n                ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同时，可以舍去 left 左边的所有元素")]),t._v("\n                left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、如果发现超过")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同时，可以舍去 right 右边的所有元素")]),t._v("\n                right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans\n")])])]),n("h2",{attrs:{id:"四、复杂度分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、复杂度分析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("四、复杂度分析")])]),t._v(" "),n("ul",[n("li",[t._v("时间复杂度：O*(log*x)，即为二分查找需要的次数。")]),t._v(" "),n("li",[t._v("空间复杂度：O(1)。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);