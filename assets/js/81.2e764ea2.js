(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{467:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-122-、买卖股票的最佳时机-ii-贪心解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-122-、买卖股票的最佳时机-ii-贪心解法"}},[t._v("#")]),t._v(" LeetCode 122 、买卖股票的最佳时机 II（贪心解法）")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("给你一个整数数组 "),n("code",[t._v("prices")]),t._v(" ，其中 "),n("code",[t._v("prices[i]")]),t._v(" 表示某支股票第 "),n("code",[t._v("i")]),t._v(" 天的价格。")]),t._v(" "),n("p",[t._v("在每一天，你可以决定是否购买和/或出售股票。你在任何时候 "),n("strong",[t._v("最多")]),t._v(" 只能持有 "),n("strong",[t._v("一股")]),t._v(" 股票。你也可以先购买，然后在 "),n("strong",[t._v("同一天")]),t._v(" 出售。")]),t._v(" "),n("p",[t._v("返回 "),n("em",[t._v("你能获得的")]),t._v(" "),n("em",[n("strong",[t._v("最大")])]),t._v(" "),n("em",[t._v("利润")]),t._v(" 。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("p",[t._v("输入：prices = [7,1,5,3,6,4] 输出：7 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。     总利润为 4 + 3 = 7 。")]),t._v(" "),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("p",[t._v("输入：prices = [1,2,3,4,5] 输出：4 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。     总利润为 4 。")]),t._v(" "),n("p",[n("strong",[t._v("示例 3：")])]),t._v(" "),n("p",[t._v("输入：prices = [7,6,4,3,1] 输出：0 解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0 。")]),t._v(" "),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("1 <= prices.length <= 3 * 10^4")])]),t._v(" "),n("li",[n("code",[t._v("0 <= prices[i] <= 10^4")])])]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加微信 278166530 获取最新课程")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 买卖股票的最佳时机 II（LeetCode 122）（贪心解法）：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxProfit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最大利润初始为 0 ")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" profit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从第 2 天开始（索引为 1 ）")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 去查看当天是否需要采取【卖出】的操作")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算当天的股票价格与昨天的股票价格的差值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果发现当天的股票价格大于了昨天的股票价格")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么在当天采取【卖出】操作可以带来正向收益，即产生利润")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 于是完全可以卖出")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 而这个利润就可以进行累加起来")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" profit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果发现当天的股票价格小于了昨天的股票价格")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么不能采取【卖出】操作，因为这会带来负向收益，即产生亏损")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导致总的利润值变小")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" profit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2、-c-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),n("strong",[t._v("C++")]),t._v(" "),n("strong",[t._v("代码")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n\n        // 最大利润初始为 0 \n        int profit = 0;\n\n        // 从第 2 天开始（索引为 1 ）\n        // 去查看当天是否需要采取【卖出】的操作\n        for (int i = 1; i < prices.size(); i++) {\n\n            // 计算当天的股票价格与昨天的股票价格的差值\n            int tmp = prices[i] - prices[i - 1];\n\n            // 如果发现当天的股票价格大于了昨天的股票价格\n            // 那么在当天采取【卖出】操作可以带来正向收益，即产生利润\n            // 于是完全可以卖出\n            // 而这个利润就可以进行累加起来\n            if (tmp > 0) profit += tmp;\n\n            // 如果发现当天的股票价格小于了昨天的股票价格\n            // 那么不能采取【卖出】操作，因为这会带来负向收益，即产生亏损\n            // 导致总的利润值变小\n        }\n\n        // 返回结果\n        return profit;\n\n    }\n};\n")])])]),n("h3",{attrs:{id:"_3、python-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("3、Python 代码")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加微信 278166530 获取最新课程")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxProfit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大利润初始为 0 ")]),t._v("\n        profit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从第 2 天开始（索引为 1 ）")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 去查看当天是否需要采取【卖出】的操作")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算当天的股票价格与昨天的股票价格的差值")]),t._v("\n            tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发现当天的股票价格大于了昨天的股票价格")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么在当天采取【卖出】操作可以带来正向收益，即产生利润")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 于是完全可以卖出")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 而这个利润就可以进行累加起来")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" profit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" tmp\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发现当天的股票价格小于了昨天的股票价格")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么不能采取【卖出】操作，因为这会带来负向收益，即产生亏损")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导致总的利润值变小")]),t._v("\n        \n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" profit\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);