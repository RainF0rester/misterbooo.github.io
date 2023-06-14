(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{600:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-154、寻找旋转排序数组中的最小值-ii"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-154、寻找旋转排序数组中的最小值-ii"}},[t._v("#")]),t._v(" LeetCode 154、寻找旋转排序数组中的最小值 II")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("已知一个长度为 "),n("code",[t._v("n")]),t._v(" 的数组，预先按照升序排列，经由 "),n("code",[t._v("1")]),t._v(" 到 "),n("code",[t._v("n")]),t._v(" 次 "),n("strong",[t._v("旋转")]),t._v(" 后，得到输入数组。例如，原数组 "),n("code",[t._v("nums = [0,1,4,4,5,6,7]")]),t._v(" 在变化后可能得到：")]),t._v(" "),n("ul",[n("li",[t._v("若旋转 "),n("code",[t._v("4")]),t._v(" 次，则可以得到 "),n("code",[t._v("[4,5,6,7,0,1,4]")])]),t._v(" "),n("li",[t._v("若旋转 "),n("code",[t._v("7")]),t._v(" 次，则可以得到 "),n("code",[t._v("[0,1,4,4,5,6,7]")])])]),t._v(" "),n("p",[t._v("注意，数组 "),n("code",[t._v("[a[0], a[1], a[2], ..., a[n-1]]")]),t._v(" "),n("strong",[t._v("旋转一次")]),t._v(" 的结果为数组 "),n("code",[t._v("[a[n-1], a[0], a[1], a[2], ..., a[n-2]]")]),t._v(" 。")]),t._v(" "),n("p",[t._v("给你一个可能存在 "),n("strong",[t._v("重复")]),t._v(" 元素值的数组 "),n("code",[t._v("nums")]),t._v(" ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 "),n("strong",[t._v("最小元素")]),t._v(" 。")]),t._v(" "),n("p",[t._v("你必须尽可能减少整个过程的操作步骤。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("p",[t._v("输入：nums = [1,3,5] 输出：1")]),t._v(" "),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("p",[t._v("输入：nums = [2,2,2,0,1] 输出：0")]),t._v(" "),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("n == nums.length")])]),t._v(" "),n("li",[n("code",[t._v("1 <= n <= 5000")])]),t._v(" "),n("li",[n("code",[t._v("-5000 <= nums[i] <= 5000")])]),t._v(" "),n("li",[n("code",[t._v("nums")]),t._v(" 原来是一个升序排序的数组，并进行了 "),n("code",[t._v("1")]),t._v(" 至 "),n("code",[t._v("n")]),t._v(" 次旋转")])]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信：wzb_3377")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 寻找旋转排序数组中的最小值 II（LeetCode 154）：https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array-ii/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findMin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 搜索区间的左边界")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 搜索区间的右边界")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在搜索区间 [ left , right ] 中去搜索")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 while 里面就可以获取到结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先去获取搜索区间的中间位置元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n         \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 nums[mid] < nums[right]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最小值一定在 mid 左侧区间或者就是 nums[mid]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                \n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// right 移到 mid 的位置。")]),t._v("\n                right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 nums 里面的元素存在相同的情况")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，如果 nums[mid] > nums[right]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最小值一定在 mid 右侧侧区间")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// left 移到 mid + 1 的位置。")]),t._v("\n                left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 nums[mid] = nums[right]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// right 按顺序遍历一样，一个个向左移动 ")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为什么不能让 right = mid 呢？")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给一个测试用例 [3,3,1,3]")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nums[left] = 3  、 nums[right] = 3 、 nums[mid] = 3")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果让  right = mid，跳过了 1")]),t._v("\n                right"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);