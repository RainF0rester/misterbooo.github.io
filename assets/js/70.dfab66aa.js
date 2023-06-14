(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{456:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-334、递增的三元组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-334、递增的三元组"}},[t._v("#")]),t._v(" LeetCode 334、递增的三元组")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("给你一个整数数组 "),n("code",[t._v("nums")]),t._v(" ，判断这个数组中是否存在长度为 "),n("code",[t._v("3")]),t._v(" 的递增子序列。")]),t._v(" "),n("p",[t._v("如果存在这样的三元组下标 "),n("code",[t._v("(i, j, k)")]),t._v(" 且满足 "),n("code",[t._v("i < j < k")]),t._v(" ，使得 "),n("code",[t._v("nums[i] < nums[j] < nums[k]")]),t._v(" ，返回 "),n("code",[t._v("true")]),t._v(" ；否则，返回 "),n("code",[t._v("false")]),t._v(" 。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("p",[t._v("输入：nums = [1,2,3,4,5] 输出：true 解释：任何 i < j < k 的三元组都满足题意")]),t._v(" "),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("p",[t._v("输入：nums = [5,4,3,2,1] 输出：false 解释：不存在满足题意的三元组")]),t._v(" "),n("p",[n("strong",[t._v("示例 3：")])]),t._v(" "),n("p",[t._v("输入：nums = [2,1,5,0,4,6] 输出：true 解释：三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6")]),t._v(" "),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("1 <= nums.length <= 5 * 10^5")])]),t._v(" "),n("li",[n("code",[t._v("-2^31 <= nums[i] <= 2^31 - 1")])])]),t._v(" "),n("p",[t._v("**进阶：**你能实现时间复杂度为 "),n("code",[t._v("O(n)")]),t._v(" ，空间复杂度为 "),n("code",[t._v("O(1)")]),t._v(" 的解决方案吗？")]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 超时代码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("increasingTriplet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置数组 dp，用来存储 nums 中以每个元素结尾的最长递增序列的程度")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dp[0] 表示以 nums[0] 结尾的最长递增序列的长度")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dp[1] 表示以 nums[1] 结尾的最长递增序列的长度")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dp[i] 表示以 nums[i] 结尾的最长递增序列的长度")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首先将数组 dp 里面的值都初始化为 1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 表示以当前元素结尾的最长递增序列的长度为 1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即最长递增序列就是当前元素本身")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置一个变量用来存储最长递增序列的结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" maxLength "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从 1 开始，直到 dp.length ，往 dp 里面填充结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对于 dp[i] 来说，在 nums 中从 0 到 i - 1 都是在 i 的前面的")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如 nums 为 [1,5,2,5,3,7,2]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时 i 为 3，那么 1,5,2 这些数字都在索引位置为 3 的前面")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从 0 遍历到 i - 1，就可以从这些数字中选出小于 i 的数字")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               \n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 索引      0  1  2  3  4  5  6")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nums 为 [ 1, 5, 2, 5, 3, 7, 2 ]")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时 i 为 3，那么 1,5,2 这些数字都在索引位置为 3 的前面")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、从这些数字中选出小于 nums[i] 的数字")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、小于 nums[i] 的那些数字是 1 , 2 ，在之前都已经计算过以 1 或者 2 结尾的最长递增序列的长度")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并且这个结果存放在 dp[j] 中")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果数字为 1，那么此时 j 为 0，dp[0] 存放了以 1  结尾的最长递增序列的长度")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果数字为 2，那么此时 j 为 2，dp[2] 存放了以 2  结尾的最长递增序列的长度")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3、如果发现此时 dp[i] 小于了 dp[j] + 1")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4、说明此时 dp[i] 中的值就不是以 nums[i] 结尾的最长递增序列的长度")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要更新 dp[i]")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4、更新 dp[i]")]),t._v("\n                    dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在更新 dp[i] 的过程中，发现了一个更长的子序列")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxLength "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么把更长的子序列的长度赋值给 maxLength")]),t._v("\n                maxLength "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" maxLength "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后返回 maxLength 就行")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Python")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("increasingTriplet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 三元组里面最小的数")]),t._v("\n        first "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inf'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 三元组里面中间的那个数")]),t._v("\n        second "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inf'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始寻找第三个数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" third "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、第三个数 大于 了之前确定好的 第二个数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明找到了满足条件的三元组")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" third "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、第三个数 小于 了之前确定好的 第一个数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为了能让后续 第二个数 的可选范围更大")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一个数总是应该越小越好")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这样 第二个数 的可选范围更大")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导致 第三个数 的可选范围也更大")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更能找到满足条件的三元组")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" third "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" first"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" first "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" third\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3、第三个数的值介于 first 和 second 中间")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新 second 的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二个数小一些")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导致 第三个数 的可选范围也更大")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更能找到满足条件的三元组")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" second "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" third\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);