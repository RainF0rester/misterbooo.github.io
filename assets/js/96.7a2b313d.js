(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{490:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"leetcode-125、验证回文串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-125、验证回文串"}},[t._v("#")]),t._v(" LeetCode 125、验证回文串")]),t._v(" "),a("h2",{attrs:{id:"一、题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" 一、题目描述")]),t._v(" "),a("p",[t._v("给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。")]),t._v(" "),a("p",[t._v("**说明：**本题中，我们将空字符串定义为有效的回文串。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1:")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v('输入: "A man, a plan, a canal: Panama"\n输出: true\n解释："amanaplanacanalpanama" 是回文串\n')])])]),a("p",[a("strong",[t._v("示例 2:")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v('输入: "race a car"\n输出: false\n解释："raceacar" 不是回文串\n')])])]),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1 <= s.length <= 2 * 105")])]),t._v(" "),a("li",[t._v("字符串 "),a("code",[t._v("s")]),t._v(" 由 ASCII 字符组成")])]),t._v(" "),a("h2",{attrs:{id:"二、题目解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" 二、题目解析")]),t._v(" "),a("p",[t._v("具体操作如下：")]),t._v(" "),a("p",[t._v("1、 设置左右两个指针，分别指向字符串的开头位置和结束位置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306101101081.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("2、移动和观察者两个指针所指向元素之间的关系。")]),t._v(" "),a("p",[t._v("3、如果 left 指向的元素不是字母、也不是数字，那么可以忽略掉这个元素，即让 left 向右移动。")]),t._v(" "),a("p",[t._v("4、如果 right 指向的元素不是字母、也不是数字，那么可以忽略掉这个元素，即让 right 向左移动。")]),t._v(" "),a("p",[t._v("5、进过 3、4 操作后，要么 left 和 right 相遇了，跳出循环；要么 left 和 right 还没有相遇，并且它们都是指向字母或者数字。")]),t._v(" "),a("p",[t._v("6、只需要判断一下 left 和 right 指向的元素值是否相同就行，如果不相同，直接返回 false。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306101101418.(null)",alt:"img"}})]),t._v(" "),a("p",[t._v("7、否则，继续让两个指针向内移动，left 向右移动，right 向左移动。")]),t._v(" "),a("p",[t._v("8、最后，没有得到 false 的答案就说明是回文串，返回 true")]),t._v(" "),a("h2",{attrs:{id:"三、参考代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" 三、参考代码")]),t._v(" "),a("h3",{attrs:{id:"_1、java-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" 1、Java 代码")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信：wzb_3377")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 验证回文串（LeetCode 125）：https://leetcode.cn/problems/valid-palindrome/submissions/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPalindrome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置左右两个指针")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移动和观察者两个指针所指向元素之间的关系")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里的逻辑有点像快速排序的代码")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 left 指向的元素不是字母、也不是数字")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么可以忽略掉这个元素，即让 left 向右移动")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isLetterOrDigit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// left 向右移动")]),t._v("\n                left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 right 指向的元素不是字母、也不是数字")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么可以忽略掉这个元素，即让 right 向左移动")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isLetterOrDigit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// right 向左移动")]),t._v("\n                right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 来到这里时")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要么 left 和 right 相遇了，跳出循环")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要么 left 和 right 还没有相遇，并且它们都是指向字母或者数字")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只需要判断一下 left 和 right 指向的元素值是否相同就行")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 题目说明 可以忽略字母的大小写")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不相同就直接说明不是回文串")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则，继续让两个指针向内移动")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// left 向右移动")]),t._v("\n                left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// right 向左移动")]),t._v("\n                right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后，没有得到 false 的答案就说明是回文串，返回 true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2、c-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、c-代码"}},[t._v("#")]),t._v(" 2、C++ 代码")]),t._v(" "),a("div",{staticClass:"language-C++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Solution {\npublic:\n    bool isPalindrome(string s) {\n        // 设置左右两个指针\n        int left = 0 ;\n        \n        int right = s.size() - 1 ;\n\n\n        // 移动和观察者两个指针所指向元素之间的关系\n        while (left < right) {\n            \n            // 这里的逻辑有点像快速排序的代码\n\n            // 如果 left 指向的元素不是字母、也不是数字\n            // 那么可以忽略掉这个元素，即让 left 向右移动\n            while (left < right && !isalnum(s[left])) {\n                // left 向右移动\n                left++;\n\n            }\n\n            // 如果 right 指向的元素不是字母、也不是数字\n            // 那么可以忽略掉这个元素，即让 right 向左移动\n            while (left < right && !isalnum(s[right])) {\n                // right 向左移动\n                right--;\n\n            }\n\n            // 来到这里时\n            // 要么 left 和 right 相遇了，跳出循环\n            // 要么 left 和 right 还没有相遇，并且它们都是指向字母或者数字\n            if (left < right) {\n\n                // 只需要判断一下 left 和 right 指向的元素值是否相同就行\n                // 题目说明 可以忽略字母的大小写\n                if (tolower(s[left]) != tolower(s[right])) {\n                    // 不相同就直接说明不是回文串\n                    return false;\n                }\n\n                // 否则，继续让两个指针向内移动\n\n                // left 向右移动\n                left++;\n\n                // right 向左移动\n                right--;\n            }\n        }\n\n        // 最后，没有得到 false 的答案就说明是回文串，返回 true\n        return true;\n\n    }\n};\n")])])]),a("h3",{attrs:{id:"_3、python-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" 3、Python 代码")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPalindrome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置左右两个指针")]),t._v("\n        left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" \n        \n        right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移动和观察者两个指针所指向元素之间的关系")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里的逻辑有点像快速排序的代码")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 left 指向的元素不是字母、也不是数字")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么可以忽略掉这个元素，即让 left 向右移动")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v("  left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isalnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# left 向右移动")]),t._v("\n                left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n            \n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 right 指向的元素不是字母、也不是数字")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么可以忽略掉这个元素，即让 right 向左移动")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isalnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# right 向左移动")]),t._v("\n                right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n        \n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 来到这里时")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要么 left 和 right 相遇了，跳出循环")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要么 left 和 right 还没有相遇，并且它们都是指向字母或者数字")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只需要判断一下 left 和 right 指向的元素值是否相同就行")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 题目说明 可以忽略字母的大小写")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lower"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lower"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不相同就直接说明不是回文串")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n                \n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 否则，继续让两个指针向内移动")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# left 向右移动")]),t._v("\n                left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# right 向左移动")]),t._v("\n                right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最后，没有得到 false 的答案就说明是回文串，返回 true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPalindrome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# isalnum() 方法检测字符串是否由字母和数字组成")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转换为字符串数组的形式")]),t._v("\n        xArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lower"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isalnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 左边索引的位置在 0 ")]),t._v("\n        left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 右边索引的位置在 len(xArray) - 1")]),t._v("\n        right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两个索引向内移动")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# left 向右移动")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# right 向左移动")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 判断这两个元素值是否相同")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" xArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" xArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果不同，直接返回 False")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 否则，left 向右移动")]),t._v("\n            left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# right 向左移动")]),t._v("\n            right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])])]),a("h2",{attrs:{id:"四、复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、复杂度分析"}},[t._v("#")]),t._v(" 四、复杂度分析")]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：O(|s|)，其中 |s| 是字符串 s 的长度。")]),t._v(" "),a("li",[t._v("空间复杂度：O(1)。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);