(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{584:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-367、有效的完全平方数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-367、有效的完全平方数"}},[t._v("#")]),t._v(" LeetCode 367、有效的完全平方数")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("给定一个 "),n("strong",[t._v("正整数")]),t._v(" "),n("code",[t._v("num")]),t._v(" ，编写一个函数，如果 "),n("code",[t._v("num")]),t._v(" 是一个完全平方数，则返回 "),n("code",[t._v("true")]),t._v(" ，否则返回 "),n("code",[t._v("false")]),t._v(" 。")]),t._v(" "),n("p",[n("strong",[t._v("进阶：不要")]),t._v(" 使用任何内置的库函数，如  "),n("code",[t._v("sqrt")]),t._v(" 。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：num = 16\n输出：true\n")])])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：num = 14\n输出：false\n")])])]),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("1 <= num <= 2^31 - 1")])])]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有效的完全平方数（ LeetCode 367 ）:https://leetcode-cn.com/problems/valid-perfect-square")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPerfectSquare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// left 为当前区间最左侧的元素，可以获取到")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// right 为当前区间最右侧的元素，可以获取到")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在区间 [left , right] 这个左闭右闭的区间里面去查找")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找什么呢？")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找是否存在一个数 a，使得 a * a = num")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 while 循环里面，left 不断的向右移动，而 right 不断的向左移动")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当 [ left , right ] 这个区间不存在元素的时候，才跳出 while 循环，也就是当 left > right 时跳出循环")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即当 left = right + 1 时，搜索区间没有元素了")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 left 和 right 相遇的时候指向同一个元素，这个元素是存在于 [ left , right] 区间，这个区间就一个元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以此时 while 循环的判断可以使用等号")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// left + (right - left) / 2 和 (left + right) / 2 的结果相同")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是使用 left + (right - left) / 2 可以防止由于 left 、right 同时太大，导致相加的结果溢出的问题")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如数据 int 的最大值为 2,147,483,647")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，left 为 2,147,483,640")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，right 为 2,147,483,646")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 两者直接相加超过了 2,147,483,647，产生了溢出")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断中间元素的平方与 num 的大小")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 mid * mid < num")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mid * mid 的数值有可能超过 int 类型的最大数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 long ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" square "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中间元素的平方小于了目标值 num")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组为 [ 0 , n ]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、数组为有序数组，比如为递增数组")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、数组中不存在重复元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于该数组存在以上两个特点，所以 [ left , mid ] 这个区间中的所有元素的平方都小于目标值 num")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此，缩小查找区间为 [ mid + 1 , right]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("square "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也就是说缩小之后的区间最左侧位置为 mid + 1")]),t._v("\n                left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中间元素的平方大于了目标值 num")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组为 [ 0 , n ]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、数组为有序数组，比如为递增数组")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、数组中不存在重复元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于该数组存在以上两个特点，所以 [ mid , right ] 这个区间中的所有元素的平方都大于目标值 num")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此，缩小查找区间为 [ left , mid - 1]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" square "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也就是说缩小之后的区间最右侧位置为 mid - 1")]),t._v("\n                right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中间元素的平方等于了目标值 num")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" square "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接返回结果即可")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找完区间中的所有元素都没有找到，返回 false")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2、-c-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),n("strong",[t._v("C++")]),t._v(" "),n("strong",[t._v("代码")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 登录 AlgoMooc 官网获取更多算法图解\n// https://www.algomooc.com\n// 作者：程序员吴师兄\n// 代码有看不懂的地方一定要私聊咨询吴师兄呀\n// 有效的完全平方数（ LeetCode 367 ）:https://leetcode-cn.com/problems/valid-perfect-square\nclass Solution {\npublic:\n    bool isPerfectSquare(int num) {\n        // left 为当前区间最左侧的元素，可以获取到\n        int left = 0;\n\n        // right 为当前区间最右侧的元素，可以获取到\n        int right = num;\n\n        // 在区间 [left , right] 这个左闭右闭的区间里面去查找\n        // 查找什么呢？\n        // 查找是否存在一个数 a，使得 a * a = num\n\n        // 在 while 循环里面，left 不断的向右移动，而 right 不断的向左移动\n        // 当 [ left , right ] 这个区间不存在元素的时候，才跳出 while 循环，也就是当 left > right 时跳出循环\n        // 即当 left = right + 1 时，搜索区间没有元素了\n        // 由于 left 和 right 相遇的时候指向同一个元素，这个元素是存在于 [ left , right] 区间，这个区间就一个元素\n        // 所以此时 while 循环的判断可以使用等号\n        while (left <= right) {\n            \n            // left + (right - left) / 2 和 (left + right) / 2 的结果相同\n            // 但是使用 left + (right - left) / 2 可以防止由于 left 、right 同时太大，导致相加的结果溢出的问题\n            // 比如数据 int 的最大值为 2,147,483,647\n            // 此时，left 为 2,147,483,640\n            // 此时，right 为 2,147,483,646\n            // 两者直接相加超过了 2,147,483,647，产生了溢出\n            int mid = left + (right - left) / 2;\n\n            // 判断中间元素的平方与 num 的大小\n            // 如果 mid * mid < num\n            \n            // mid * mid 的数值有可能超过 int 类型的最大数\n            // 使用 long \n            long square = (long) mid * mid;\n            \n            // 中间元素的平方小于了目标值 num\n            // 数组为 [ 0 , n ]\n            // 1、数组为有序数组，比如为递增数组\n            // 2、数组中不存在重复元素\n            // 由于该数组存在以上两个特点，所以 [ left , mid ] 这个区间中的所有元素的平方都小于目标值 num\n            // 因此，缩小查找区间为 [ mid + 1 , right]\n            if (square < num){\n                // 也就是说缩小之后的区间最左侧位置为 mid + 1\n                left = mid + 1;\n            \n            // 中间元素的平方大于了目标值 num\n            // 数组为 [ 0 , n ]\n            // 1、数组为有序数组，比如为递增数组\n            // 2、数组中不存在重复元素\n            // 由于该数组存在以上两个特点，所以 [ mid , right ] 这个区间中的所有元素的平方都大于目标值 num\n            // 因此，缩小查找区间为 [ left , mid - 1]\n            }else if( square > num){\n                // 也就是说缩小之后的区间最右侧位置为 mid - 1\n                right = mid - 1 ;\n            \n            // 中间元素的平方等于了目标值 num\n            }else if( square == num){\n                // 直接返回结果即可\n                return true;\n            }\n        }\n\n        // 查找完区间中的所有元素都没有找到，返回 false\n        return false;\n    }\n};\n")])])]),n("h3",{attrs:{id:"_3、python-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("3、Python 代码")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("登录 AlgoMooc 官网获取更多算法图解\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有效的完全平方数（ LeetCode 367 ）:https://leetcode-cn.com/problems/valid-perfect-square")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPerfectSquare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# left 为当前区间最左侧的元素，可以获取到")]),t._v("\n        left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# right 为当前区间最右侧的元素，可以获取到")]),t._v("\n        right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在区间 [left , right] 这个左闭右闭的区间里面去查找")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找什么呢？")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找是否存在一个数 a，使得 a * a = num")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 while 循环里面，left 不断的向右移动，而 right 不断的向左移动")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当 [ left , right ] 这个区间不存在元素的时候，才跳出 while 循环，也就是当 left > right 时跳出循环")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 即当 left = right + 1 时，搜索区间没有元素了")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于 left 和 right 相遇的时候指向同一个元素，这个元素是存在于 [ left , right] 区间，这个区间就一个元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以此时 while 循环的判断可以使用等号")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v("  left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" right "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# left + (right - left) / 2 和 (left + right) / 2 的结果相同")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 但是使用 left + (right - left) / 2 可以防止由于 left 、right 同时太大，导致相加的结果溢出的问题")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如数据 的最大值为 2,147,483,647")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时，left 为 2,147,483,640")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时，right 为 2,147,483,646")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两者直接相加超过了 2,147,483,647，产生了溢出")]),t._v("\n            mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 判断中间元素的平方与 num 的大小")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 mid * mid < num")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mid * mid 的数值有可能超过 类型的最大数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 long ")]),t._v("\n            square "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" mid\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中间元素的平方小于了目标值 num")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数组为 [ 0 , n ]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、数组为有序数组，比如为递增数组")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、数组中不存在重复元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于该数组存在以上两个特点，所以 [ left , mid ] 这个区间中的所有元素的平方都小于目标值 num")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因此，缩小查找区间为 [ mid + 1 , right]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" square "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也就是说缩小之后的区间最左侧位置为 mid + 1")]),t._v("\n                left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中间元素的平方大于了目标值 num")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数组为 [ 0 , n ]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、数组为有序数组，比如为递增数组")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、数组中不存在重复元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于该数组存在以上两个特点，所以 [ mid , right ] 这个区间中的所有元素的平方都大于目标值 num")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因此，缩小查找区间为 [ left , mid - 1]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" square "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也就是说缩小之后的区间最右侧位置为 mid - 1")]),t._v("\n                right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中间元素的平方等于了目标值 num")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" square "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接返回结果即可")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n     \n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找完区间中的所有元素都没有找到，返回 False")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);