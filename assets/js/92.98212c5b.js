(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{478:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-88、合并两个有序数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-88、合并两个有序数组"}},[t._v("#")]),t._v(" LeetCode 88、合并两个有序数组")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("给你两个有序整数数组 "),n("code",[t._v("nums1")]),t._v(" 和 "),n("code",[t._v("nums2")]),t._v("，请你将 "),n("code",[t._v("nums2")]),t._v(" 合并到 "),n("code",[t._v("nums1")]),t._v(" 中，使 "),n("code",[t._v("nums1")]),t._v(" 成为一个"),n("strong",[t._v("有序数组")]),t._v("。")]),t._v(" "),n("p",[t._v("初始化 "),n("code",[t._v("nums1")]),t._v(" 和 "),n("code",[t._v("nums2")]),t._v(" 的元素数量分别为 m 和 n 。")]),t._v(" "),n("p",[t._v("你可以假设 "),n("code",[t._v("nums1")]),t._v(" 的空间大小等于 m + n，这样它就有足够的空间保存来自 "),n("code",[t._v("nums2")]),t._v(" 的元素。")]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("p",[t._v("设置两个索引 "),n("code",[t._v("i")]),t._v(" 和 "),n("code",[t._v("j")]),t._v(" 分别指向 nums1 和 nums2 的有效元素的尾部，从它们的尾部开始向前遍历，同时设置索引 "),n("code",[t._v("cur")]),t._v(" 指向 "),n("code",[t._v("nums1")]),t._v(" 的"),n("strong",[t._v("最末尾")]),t._v("，在每次遍历过程中，比较 "),n("code",[t._v("i")]),t._v(" 和 "),n("code",[t._v("j")]),t._v(" 指向的元素值大小，把大的元素填充到 "),n("code",[t._v("cur")]),t._v(" 的位置，填充完毕说明那个元素已经放置在它应该放置的位置，不需要在管它了，把 "),n("code",[t._v("cur")]),t._v(" 向前移动，同时把 "),n("code",[t._v("i")]),t._v(" 或者 "),n("code",[t._v("j")]),t._v(" 向前移动，继续比较 "),n("code",[t._v("i")]),t._v(" 和 "),n("code",[t._v("j")]),t._v(" 指向的元素值大小，把大的元素填充到 "),n("code",[t._v("cur")]),t._v(" 的位置。")]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com/555.html")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合并两个有序数组( LeetCode 88 ):https://leetcode-cn.com/problems/merge-sorted-array/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 索引从有序数组 nums1 有效元素的末端开始")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组的下标索引从零开始计数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 索引   0    1     2")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组 [ 1 ,  2  ,  3 ]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 索引从有序数组 nums2 的末端开始")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从有序数组 nums1 最末端的位置开始保存元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过循环把 num2 的元素都移动到 num1 中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比较 num1 和 num2 中当前的元素大小")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 num1 中的索引位置为 i 的元素大于 num2 中索引位置为 j 的元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为了防止越界 i 必须是大于等于 0 ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nums2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 num1 中的索引位置为 i 的元素复制到索引为 cur 的位置")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时 cur 的元素已经确定下来")]),t._v("\n             nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接下来去确定 cur 前面一个元素应该放什么数字")]),t._v("\n             cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，索引 i 需要向前移动")]),t._v("\n             i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则，如果 num1 中的索引位置为 i 的元素小于或者等于 num2 中索引位置为 j 的元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             \n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 num2 中的索引位置为 j 的元素复制到索引为 cur 的位置")]),t._v("\n             nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接下来去确定 cur 前面一个元素应该放什么数字")]),t._v("\n             cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，索引 j 需要向前移动")]),t._v("\n             j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2、-c-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),n("strong",[t._v("C++")]),t._v(" "),n("strong",[t._v("代码")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 登录 AlgoMooc 官网获取更多算法图解\n// https://www.algomooc.com/555.html\n// 作者：程序员吴师兄\n// 代码有看不懂的地方一定要私聊咨询吴师兄呀\n// 合并两个有序数组( LeetCode 88 ):https://leetcode-cn.com/problems/merge-sorted-array/\nclass Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // 索引从有序数组 nums1 有效元素的末端开始\n        // 数组的下标索引从零开始计数\n        // 索引   0    1     2\n        // 数组 [ 1 ,  2  ,  3 ]\n        int i = m - 1;\n\n        // 索引从有序数组 nums2 的末端开始\n        int j = n - 1;\n\n        // 从有序数组 nums1 最末端的位置开始保存元素\n        int cur = nums1.size() - 1;\n\n        // 通过循环把 num2 的元素都移动到 num1 中\n        while( j >= 0  ){\n\n            // 比较 num1 和 num2 中当前的元素大小\n\n            // 如果 num1 中的索引位置为 i 的元素大于 num2 中索引位置为 j 的元素\n            // 为了防止越界 i 必须是大于等于 0 \n            if( i >=0 && nums1[i] > nums2[j] ){\n\n             // 把 num1 中的索引位置为 i 的元素复制到索引为 cur 的位置\n             // 此时 cur 的元素已经确定下来\n             nums1[cur] = nums1[i];\n            \n             // 接下来去确定 cur 前面一个元素应该放什么数字\n             cur--;\n             // 此时，索引 i 需要向前移动\n             i--;\n             // 否则，如果 num1 中的索引位置为 i 的元素小于或者等于 num2 中索引位置为 j 的元素\n            }else{\n             \n             // 把 num2 中的索引位置为 j 的元素复制到索引为 cur 的位置\n             nums1[cur] = nums2[j];\n             // 接下来去确定 cur 前面一个元素应该放什么数字\n             cur--;\n             // 此时，索引 j 需要向前移动\n             j--;\n            }\n        }\n    }\n};\n")])])]),n("h3",{attrs:{id:"_3、python-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("3、Python 代码")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https:#www.algomooc.com/555.html")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并两个有序数组( LeetCode 88 ):https:#leetcode-cn.com/problems/merge-sorted-array/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 索引从有序数组 nums1 有效元素的末端开始")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数组的下标索引从零开始计数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 索引   0    1     2")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数组 [ 1 ,  2  ,  3 ]")]),t._v("\n        i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 索引从有序数组 nums2 的末端开始")]),t._v("\n        j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从有序数组 nums1 最末端的位置开始保存元素")]),t._v("\n        cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过循环把 num2 的元素都移动到 num1 中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比较 num1 和 num2 中当前的元素大小")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 num1 中的索引位置为 i 的元素大于 num2 中索引位置为 j 的元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为了防止越界 i 必须是大于等于 0 ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v("  i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nums2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把 num1 中的索引位置为 i 的元素复制到索引为 cur 的位置")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时 cur 的元素已经确定下来")]),t._v("\n             nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            \n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接下来去确定 cur 前面一个元素应该放什么数字")]),t._v("\n             cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时，索引 i 需要向前移动")]),t._v("\n             i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 否则，如果 num1 中的索引位置为 i 的元素小于或者等于 num2 中索引位置为 j 的元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             \n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把 num2 中的索引位置为 j 的元素复制到索引为 cur 的位置")]),t._v("\n             nums1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接下来去确定 cur 前面一个元素应该放什么数字")]),t._v("\n             cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时，索引 j 需要向前移动")]),t._v("\n             j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),n("h2",{attrs:{id:"四、复杂度分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、复杂度分析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("四、复杂度分析")])]),t._v(" "),n("p",[t._v("时间复杂度：O(m+n)。指针移动单调递增，最多移动 m+n 次，因此时间复杂度为 O(m+n)。")]),t._v(" "),n("p",[t._v("空间复杂度：O(m+n)。")])])}),[],!1,null,null,null);s.default=e.exports}}]);