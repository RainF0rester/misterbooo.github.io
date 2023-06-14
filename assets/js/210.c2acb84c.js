(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{595:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"leetcode-33、搜索旋转排序数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-33、搜索旋转排序数组"}},[t._v("#")]),t._v(" LeetCode 33、搜索旋转排序数组")]),t._v(" "),a("h2",{attrs:{id:"一、题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),a("strong",[t._v("一、题目描述")])]),t._v(" "),a("p",[t._v("整数数组 "),a("code",[t._v("nums")]),t._v(" 按升序排列，数组中的值 "),a("strong",[t._v("互不相同")]),t._v(" 。")]),t._v(" "),a("p",[t._v("在传递给函数之前，"),a("code",[t._v("nums")]),t._v(" 在预先未知的某个下标 "),a("code",[t._v("k")]),t._v("（"),a("code",[t._v("0 <= k < nums.length")]),t._v("）上进行了 "),a("strong",[t._v("旋转")]),t._v("，使数组变为 "),a("code",[t._v("[nums[k], nums[k+1], ..., nums[n-1], nums[0],nums[1], ..., nums[k-1]]")]),t._v("（下标 从 0 开始 计数）。例如， "),a("code",[t._v("[0,1,2,4,5,6,7]")]),t._v(" 在下标 "),a("code",[t._v("3")]),t._v(" 处经旋转后可能变为 "),a("code",[t._v("[4,5,6,7,0,1,2]")]),t._v(" 。")]),t._v(" "),a("p",[t._v("给你 "),a("strong",[t._v("旋转后")]),t._v(" 的数组 "),a("code",[t._v("nums")]),t._v(" 和一个整数 "),a("code",[t._v("target")]),t._v(" ，如果 "),a("code",[t._v("nums")]),t._v(" 中存在这个目标值"),a("code",[t._v("target")]),t._v(" ，则返回它的下标，否则返回 "),a("code",[t._v("-1")]),t._v(" 。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1：")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("输入：nums = [4,5,6,7,0,1,2], target = 0\n输出：4\n")])])]),a("p",[a("strong",[t._v("示例 2：")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("输入：nums = [4,5,6,7,0,1,2], target = 3\n输出：-1\n")])])]),a("p",[a("strong",[t._v("示例 3：")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("输入：nums = [1], target = 0\n输出：-1\n")])])]),a("p",[a("strong",[t._v("提示")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("1 <= nums.length <= 5000`")]),t._v(" "),a("li",[a("code",[t._v("-10^4 <= nums[i] <= 10^4")])]),t._v(" "),a("li",[a("code",[t._v("nums")]),t._v(" 中的每个值都 "),a("strong",[t._v("独一无二")])]),t._v(" "),a("li",[t._v("题目数据保证 "),a("code",[t._v("nums")]),t._v(" 在预先未知的某个下标上进行了旋转")]),t._v(" "),a("li",[a("code",[t._v("-10^4 <= target <= 10^4")])])]),t._v(" "),a("p",[t._v("**进阶：**你可以设计一个时间复杂度为 "),a("code",[t._v("O(log n)")]),t._v(" 的解决方案吗？")]),t._v(" "),a("h2",{attrs:{id:"二、题目解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),a("strong",[t._v("二、题目解析")])]),t._v(" "),a("h2",{attrs:{id:"三、参考代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),a("strong",[t._v("三、参考代码")])]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// left 指向当前区间的最左边位置，所以初始化为 0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// right 指向当前区间的最右边位置，所以初始化为 nums.length - 1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环进行二分查找，直到左端点位置超过了右端点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者在循环过程中找到了 target")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算当前区间的中间位置，向下取整")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果中间位置数字 nums[mid] 等于目标值 target，那么说明找到了")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回当前的下标 mid")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则的话需要先确定 mid 的左边还是右边为有序区间")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果当前区间最左端的值 nums[left] 小于等于 nums[mid]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 说明从 left 到 mid 这段区间是递增的，为有序区间")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即 mid 的左侧为有序区间，右侧为无序区间")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                \n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先去判断 target 是否在左侧有序区间内")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果目标值 target 大于这段有序区间的最小值 nums[left] 同时小于这段有序区间的最大值 nums[mid]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么说明需要在这段有序区间去寻找 target ")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以缩小范围为 left 到 mid - 1")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前区间的左侧为 left，右侧 right = mid - 1")]),t._v("\n                    right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则说明需要在 mid 的右侧无序区间搜索")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以缩小范围为 mid + 1 到 right")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前区间的左侧为 left = mid + 1，右侧 right ")]),t._v("\n                    left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则说明当前区间最左端的值 nums[left] 大于 nums[mid]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 说明从 left 到 mid 这段区间是无序区间")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即 mid 的左侧为无序区间，右侧为有序区间 ")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先去判断 target 是否在右侧有序区间内")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果目标值 target 大于这段有序区间的最小值 nums[mid] 同时小于这段有序区间的最大值 nums[right]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么说明需要在这段有序区间去寻找 target ")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以缩小范围为 mid + 1 到 right")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前区间的左侧为 left = mid + 1，右侧 right ")]),t._v("\n                    left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则说明需要在 mid 的左侧无序区间搜索")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以缩小范围为 left 到 mid - 1")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前区间的左侧为 left，右侧 right = mid - 1")]),t._v("\n                    right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目标值不存在，返回 -1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);