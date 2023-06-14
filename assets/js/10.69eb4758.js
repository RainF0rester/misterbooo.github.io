(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{397:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-739、每日温度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-739、每日温度"}},[t._v("#")]),t._v(" LeetCode 739、每日温度")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("根据每日 "),n("code",[t._v("气温")]),t._v(" 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 "),n("code",[t._v("0")]),t._v(" 来代替。")]),t._v(" "),n("p",[t._v("例如，给定一个列表 "),n("code",[t._v("temperatures = [73, 74, 75, 71, 69, 72, 76, 73]")]),t._v("，你的输出应该是 "),n("code",[t._v("[1, 1, 4, 2, 1, 1, 0, 0]")]),t._v("。")]),t._v(" "),n("p",[t._v("提示："),n("code",[t._v("气温")]),t._v(" 列表长度的范围是 "),n("code",[t._v("[1, 30000]")]),t._v("。每个气温的值的均为华氏度，都是在 "),n("code",[t._v("[30, 100]")]),t._v(" 范围内的整数。")]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("p",[t._v("这道题目最 “难” 的一个点是题目的理解。")]),t._v(" "),n("p",[t._v("给定列表 "),n("code",[t._v("temperatures = [73, 74, 75, 71, 69, 72, 76, 73]")]),t._v("，为啥输出就是 "),n("code",[t._v("[1, 1, 4, 2, 1, 1, 0, 0]")]),t._v(" ？")]),t._v(" "),n("p",[t._v("下面来一个个进行解释。")]),t._v(" "),n("p",[t._v("对于输入 73，它需要 "),n("strong",[t._v("经过一天")]),t._v(" 才能等到温度的升高，也就是在第二天的时候，温度升高到 74 ，所以对应的结果是 1。")]),t._v(" "),n("p",[t._v("对于输入 74，它需要 "),n("strong",[t._v("经过一天")]),t._v(" 才能等到温度的升高，也就是在第三天的时候，温度升高到 75 ，所以对应的结果是 1。")]),t._v(" "),n("p",[t._v("对于输入 75，它经过 1 天后发现温度是 71，没有超过它，继续等，一直 "),n("strong",[t._v("等了四天")]),t._v("，在第七天才等到温度的升高，温度升高到 76 ，所以对应的结果是 4 。")]),t._v(" "),n("p",[t._v("对于输入 71，它经过 1 天后发现温度是 69，没有超过它，继续等，一直 "),n("strong",[t._v("等了两天")]),t._v("，在第六天才等到温度的升高，温度升高到 72 ，所以对应的结果是 2 。")]),t._v(" "),n("p",[t._v("对于输入 69，它 "),n("strong",[t._v("经过一天")]),t._v(" 后发现温度是 72，已经超过它，所以对应的结果是 1 。")]),t._v(" "),n("p",[t._v("对于输入 72，它 "),n("strong",[t._v("经过一天")]),t._v(" 后发现温度是 76，已经超过它，所以对应的结果是 1 。")]),t._v(" "),n("p",[t._v("对于输入 76，后续 "),n("strong",[t._v("没有温度")]),t._v(" 可以超过它，所以对应的结果是 0 。")]),t._v(" "),n("p",[t._v("对于输入 73，后续 "),n("strong",[t._v("没有温度")]),t._v(" 可以超过它，所以对应的结果是 0 。")]),t._v(" "),n("p",[t._v("也就是说，这道题目就是"),n("strong",[t._v("给你一个值，让你找到右边第一个比它大的数，它们两则的下标差就是输出结果")]),t._v("。")]),t._v(" "),n("p",[t._v("好了，理解了题意我们来思考如何求解：借助"),n("strong",[t._v("单独递增栈")]),t._v("来处理。")]),t._v(" "),n("p",[t._v("具体操作如下：")]),t._v(" "),n("p",[t._v("遍历整个数组，如果栈不空，且"),n("strong",[t._v("当前数字大于栈顶元素")]),t._v("，那么如果直接入栈的话就不是 "),n("strong",[t._v("递增栈")]),t._v(" ，所以需要取出栈顶元素，由于当前数字大于栈顶元素的数字，而且一定是第一个大于栈顶元素的数，直接求出下标差就是二者的距离。")]),t._v(" "),n("p",[t._v("继续看新的栈顶元素，直到当前数字小于等于栈顶元素停止，再将数字入栈，这样就可以一直保持递增栈，且每个数字和第一个大于它的数的距离也可以算出来。")]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每日温度（ LeetCode 739 ）：https://leetcode-cn.com/problems/daily-temperatures")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 维护一个单调递增栈，栈内元素从栈底到栈顶依次减小\n     * 入栈的元素要和当前栈内栈首元素进行比较\n     * 如果大于栈首元素，说明温度比之前更高，那么它们的下标差就是栈首元素等了多少天等到的更高温度的结果\n     * 如果小于栈首元素，说明温度比之前更低，说明还没有等到更高的温度，直接放入到栈中\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dailyTemperatures")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" temperatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构建一个栈,用来存放每日温度的下标")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" stack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构建一个数组，用来保存输出结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("temperatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从头开始遍历每天的温度")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" temperatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿到当天的温度，需要和栈首元素进行比较")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果此时栈不为空并且当天的温度大于栈首元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" temperatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" temperatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                \n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首先获取栈首元素的值，并将元素从栈中移除")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" preIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 它们的下标差就是栈首元素等了多少天等到的更高温度的结果，保存到输出数组 res 中")]),t._v("\n                res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("preIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" preIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n           \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 再把当天的温度的下标值存放到栈中")]),t._v("\n            stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后输出 res 数组即可")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2、-c-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),n("strong",[t._v("C++")]),t._v(" "),n("strong",[t._v("代码")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 登录 AlgoMooc 官网获取更多算法图解\n// https://www.algomooc.com\n// 作者：程序员吴师兄\n// 代码有看不懂的地方一定要私聊咨询吴师兄呀\n// 每日温度（ LeetCode 739 ）：https://leetcode-cn.com/problems/daily-temperatures\n/**\n* 维护一个单调递增栈，栈内元素从栈底到栈顶依次减小\n* 入栈的元素要和当前栈内栈首元素进行比较\n* 如果大于栈首元素，说明温度比之前更高，那么它们的下标差就是栈首元素等了多少天等到的更高温度的结果\n* 如果小于栈首元素，说明温度比之前更低，说明还没有等到更高的温度，直接放入到栈中\n*/\nclass Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& T) {\n  // 构建一个栈,用来存放每日温度的下标\n        stack<int> stk;\n\n        // 构建一个数组，用来保存输出结果\n        vector<int> res(T.size());\n\n        // 从头开始遍历每天的温度\n        for (int i = 0; i < T.size(); i++) {\n\n            // 拿到当天的温度，需要和栈首元素进行比较\n            // 如果此时栈不为空并且当天的温度大于栈首元素\n            while (!stk.empty() && T[i] > T[stk.top()]) {\n                \n                // 首先获取栈首元素的值，并将元素从栈中移除\n                int preIndex = stk.top();\n\n                stk.pop();\n\n                // 它们的下标差就是栈首元素等了多少天等到的更高温度的结果，保存到输出数组 res 中\n                res[preIndex] = i - preIndex;\n            }\n           \n            // 再把当天的温度的下标值存放到栈中\n            stk.push(i);\n        }\n        // 最后输出 res 数组即可\n        return res;\n    }\n};\n")])])]),n("h3",{attrs:{id:"_3、python-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("3、Python 代码")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每日温度（ LeetCode 739 ）：https://leetcode-cn.com/problems/daily-temperatures")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dailyTemperatures")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建一个栈,用来存放每日温度的下标")]),t._v("\n        stack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取数组长度")]),t._v("\n        length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temperatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建一个数组，用来保存输出结果")]),t._v("\n        res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" length\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从头开始遍历每天的温度")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  拿到当天的温度，不断的和栈顶元素进行比较")]),t._v("\n            temperature "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temperatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果栈顶元素存在并且当天的温度大于栈顶元素")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 意味着栈顶元素等到了第一个温度比它更高的那一天")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 它们的下标差就是栈顶元素等了多少天等到的更高温度的结果")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" stack "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" temperature "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" temperatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先获取栈顶元素的值，也就是每日温度的下标值")]),t._v("\n                preIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 它们的下标差就是栈顶元素等了多少天等到的更高温度的结果，保存到输出数组 res 中")]),t._v("\n                res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("preIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" preIndex\n\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再把当天的温度的下标值存放到栈中")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意：是下标索引值")]),t._v("\n            stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最后输出 res 数组即可")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n")])])]),n("h2",{attrs:{id:"四、复杂度分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、复杂度分析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("四、复杂度分析")])]),t._v(" "),n("p",[t._v("时间复杂度：O(n)，其中 n 是温度列表的长度。正向遍历温度列表一遍，对于温度列表中的每个下标，最多有一次进栈和出栈的操作。")]),t._v(" "),n("p",[t._v("空间复杂度：O(n)，其中 n 是温度列表的长度。需要维护一个单调栈存储温度列表中的下标。")])])}),[],!1,null,null,null);s.default=e.exports}}]);