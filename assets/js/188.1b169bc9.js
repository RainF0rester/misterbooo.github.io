(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{575:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-50、pow-x-n"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-50、pow-x-n"}},[t._v("#")]),t._v(" LeetCode 50、Pow(x,n)")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("实现 pow("),n("em",[t._v("x")]),t._v(", "),n("em",[t._v("n")]),t._v(") ，即计算 "),n("code",[t._v("x")]),t._v(" 的整数 "),n("code",[t._v("n")]),t._v(" 次幂函数（即，"),n("code",[t._v("x^n")]),t._v(" ）。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：x = 2.00000, n = 10\n输出：1024.00000\n")])])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：x = 2.10000, n = 3\n输出：9.26100\n")])])]),n("p",[n("strong",[t._v("示例 3：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：x = 2.00000, n = -2\n输出：0.25000\n解释：2-2 = 1/22 = 1/4 = 0.25\n")])])]),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("-100.0 < x < 100.0")])]),t._v(" "),n("li",[n("code",[t._v("-2^31 <= n <= 2^31-1")])]),t._v(" "),n("li",[n("code",[t._v("-10^4 <= xn <= 10^4")])])]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信：wzb_3377")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Pow(x,n)（LeetCode 50）：https://leetcode.cn/problems/powx-n/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("myPow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归终止条件")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 任何数的 0 次方的结果都是 1 ，由于题目要求返回 double 类型，因此返回 1.0")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断 n 是奇数还是偶数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、如果是偶数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么只需要先计算出 y = x * x 的结果")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 然后 y 的次幂就是 n / 2")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("myPow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、如果是奇数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如 n = 9 ，那么它就可以被划分为 4 + 4 + 1，即 x^4 * x^4 * x")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并且，这个时候还需要判断一下 n 是否为负数")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是正数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接抽离出一个 x 来，然后和 myPow(x * x, n / 2) 进行相乘")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("myPow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是负数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("测试"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// int a = -9;")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// int b = a / 2;")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// System.out.println(b); ")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出结果为 -4")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("结束测试"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如 n = -9")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无论正数还是负数，除 2 是向零取整。")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时 n / 2 = -4")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (x * x)^-4 = x ^ -8")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此 myPow(x * x, n / 2) 的结果还差一个 x ^ -1 才能还原原来的结果 x ^ -9")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于题目要求返回 double 类型，因此这里使用 1.0")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("myPow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2、-c-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),n("strong",[t._v("C++")]),t._v(" "),n("strong",[t._v("代码")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Solution {\npublic:\n    double myPow(double x, int n) {\n        // 递归终止条件\n        if (n == 0) {\n\n            // 任何数的 0 次方的结果都是 1 ，由于题目要求返回 double 类型，因此返回 1.0\n            return 1.0;\n        \n        // 判断 n 是奇数还是偶数\n        // 1、如果是偶数\n        } else if ((n & 1) == 0) {\n            // 那么只需要先计算出 y = x * x 的结果\n            // 然后 y 的次幂就是 n / 2\n            return myPow(x * x, n / 2);\n\n        // 2、如果是奇数\n        } else {\n\n            // 比如 n = 9 ，那么它就可以被划分为 4 + 4 + 1，即 x^4 * x^4 * x\n            // 并且，这个时候还需要判断一下 n 是否为负数\n\n            // 如果是正数\n            if( n > 0 ){\n\n                // 直接抽离出一个 x 来，然后和 myPow(x * x, n / 2) 进行相乘\n                return x * myPow(x * x, n / 2);\n\n            // 如果是负数\n            }else{\n                // 比如 n = -9\n                // 无论正数还是负数，除 2 是向零取整。\n                // 此时 n / 2 = -4\n                // (x * x)^-4 = x ^ -8\n                // 因此 myPow(x * x, n / 2) 的结果还差一个 x ^ -1 才能还原原来的结果 x ^ -9\n                // 由于题目要求返回 double 类型，因此这里使用 1.0\n                return myPow(x * x, n / 2) * (1.0 / x) ; \n            }   \n        }\n    }\n};\n")])])]),n("h3",{attrs:{id:"_3、python-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("3、Python 代码")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("myPow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 递归终止条件")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("    \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任何数的 0 次方的结果都是 1 ，由于题目要求返回 double 类型，因此返回 1.0")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 判断 n 是奇数还是偶数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、如果是偶数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么只需要先计算出 y = x * x 的结果")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后 y 的次幂就是 n / 2")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myPow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、如果是奇数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如 n = 9 ，那么它就可以被划分为 4 + 4 + 1，即 x^4 * x^4 * x")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 并且，这个时候还需要判断一下 n 是否为负数")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是正数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接抽离出一个 x 来，然后和 myPow(x * x, n / 2) 进行相乘")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myPow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是负数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如 n = -9")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Python 比较特殊，正数负数除以 2 取整有区别")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a = -9")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# b = a // 2")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print(b) 输出为 -5")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时 n / 2 = -5")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (x * x)^-5 = x ^ -10")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因此 myPow(x * x, n / 2) 的结果还差一个 x ^ 1 才能还原原来的结果 x ^ -9")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于题目要求返回 double 类型，因此这里使用 1.0")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myPow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);