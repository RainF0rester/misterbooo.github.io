(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{451:function(n,t,s){"use strict";s.r(t);var a=s(54),e=Object(a.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"leetcode-279、完全平方数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-279、完全平方数"}},[n._v("#")]),n._v(" LeetCode 279、完全平方数")]),n._v(" "),s("h2",{attrs:{id:"一、题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[n._v("#")]),n._v(" "),s("strong",[n._v("一、题目描述")])]),n._v(" "),s("p",[n._v("给定正整数 "),s("em",[n._v("n")]),n._v("，找到若干个完全平方数（比如 1, 4, 9, 16, …）使得它们的和等于 "),s("em",[n._v("n")]),n._v("。你需要让组成和的完全平方数的个数最少。")]),n._v(" "),s("p",[n._v("给你一个整数 n ，返回和为 n 的完全平方数的 "),s("strong",[n._v("最少数量")]),n._v(" 。")]),n._v(" "),s("h2",{attrs:{id:"二、题目解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[n._v("#")]),n._v(" "),s("strong",[n._v("二、题目解析")])]),n._v(" "),s("h2",{attrs:{id:"三、参考代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[n._v("#")]),n._v(" "),s("strong",[n._v("三、参考代码")])]),n._v(" "),s("h3",{attrs:{id:"_1、java-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[n._v("#")]),n._v(" "),s("strong",[n._v("1、Java 代码")])]),n._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("class Solution {\n    public int numSquares(int n) {\n\n\n        // 设置一个数组，用来存储小于 n 的那些完全平方数\n        List<Integer> square = new ArrayList<>();\n\n        // 通过一个下标来计算\n        int idx = 1;\n\n        // 直到 idx * idx 超过了 n 为止\n        while (idx * idx <= n) {\n            // square 存储小于 n 的那些完全平方数\n            square.add(idx * idx);\n\n            // idx 累加\n            idx++;\n        }\n\n        // dp[0] 表示数字 0  需要完全平方数的最少数量\n        // dp[1] 表示数字 0  需要完全平方数的最少数量\n        // dp[i] 表示数字 i  需要完全平方数的最少数量\n        int[] dp = new int[ n + 1 ];\n\n        // 先让 dp 初始化为 -1，代表 dp[i] 还没有计算\n        Arrays.fill(dp,-1);\n\n        // dp[0] 表示数字 0  需要完全平方数的最少数量\n        dp[0] = 0;\n        \n        // 开始填充 dp[]\n        for(int i = 1 ; i <= n ;i++){\n            \n            // 在每次填充的过程中，都去遍历 square 数组\n            for(int j = 0 ;j < square.size();j++){\n                // 如果发现此时 square 的元素值大于了 i\n                // 那么 square 后面的那些元素没有必要参与进来计算 i 了\n                // 直接退出当前的 j 的循环判断，让 i++\n                if(square.get(j) > i){\n                    break;\n                }\n\n                // 否则，如果 dp[i] 还没有找到数字 i 需要完全平方数的最少数量\n                // 或者此时计算的新值更小，那么更新 dp[i]\n                if(dp[i] == -1 || dp[i] > dp[i-square.get(j)] + 1){\n\n                    // 更新 dp[i]\n                    // dp[i] 表示数字 i  需要完全平方数的最少数量\n                    // 这个时候 dp[i] 为获取数字为 square.get(j) 的那 1 个完全平方数\n                    // 加上获取数字为 i-square.get(j) 最少需要 dp[i-square.get(j)] 个数\n                    dp[i] = dp[i-square.get(j)] + 1;\n                }\n            }\n        }\n\n        // dp[n] 表示数字 n 需要完全平方数的最少数量\n        // 返回这个结果就行\n        return dp[n];\n\n    }\n}\n")])])]),s("h3",{attrs:{id:"_2、-c-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[n._v("#")]),n._v(" **2、**"),s("strong",[n._v("C++")]),n._v(" "),s("strong",[n._v("代码")])]),n._v(" "),s("div",{staticClass:"language-C++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("class Solution {\npublic:\n    int numSquares(int n) {\n        // 设置一个数组，用来存储小于 n 的那些完全平方数\n        vector<int> square;\n\n        // 通过一个下标来计算\n        int idx = 1;\n\n        // 直到 idx * idx 超过了 n 为止\n        while (idx * idx <= n) {\n            // square 存储小于 n 的那些完全平方数\n            square.push_back(idx * idx);\n\n            // idx 累加\n            idx++;\n        }\n\n        // dp[0] 表示数字 0  需要完全平方数的最少数量\n        // dp[1] 表示数字 0  需要完全平方数的最少数量\n        // dp[i] 表示数字 i  需要完全平方数的最少数量\n        // 先让 dp 初始化为 -1，代表 dp[i] 还没有计算\n        vector<int> dp(n + 1,-1);\n\n        // dp[0] 表示数字 0  需要完全平方数的最少数量\n        dp[0] = 0;\n        \n        // 开始填充 dp[]\n        for(int i = 1 ; i <= n ;i++){\n            \n            // 在每次填充的过程中，都去遍历 square 数组\n            for(int j = 0 ;j < square.size();j++){\n                // 如果发现此时 square 的元素值大于了 i\n                // 那么 square 后面的那些元素没有必要参与进来计算 i 了\n                // 直接退出当前的 j 的循环判断，让 i++\n                if(square[j] > i){\n                    break;\n                }\n\n                // 否则，如果 dp[i] 还没有找到数字 i 需要完全平方数的最少数量\n                // 或者此时计算的新值更小，那么更新 dp[i]\n                if(dp[i] == -1 || dp[i] > dp[i-square[j]] + 1){\n\n                    // 更新 dp[i]\n                    // dp[i] 表示数字 i  需要完全平方数的最少数量\n                    // 这个时候 dp[i] 为获取数字为 square.get(j) 的那 1 个完全平方数\n                    // 加上获取数字为 i-square.get(j) 最少需要 dp[i-square.get(j)] 个数\n                    dp[i] = dp[i-square[j]] + 1;\n                }\n            }\n        }\n\n        // dp[n] 表示数字 n 需要完全平方数的最少数量\n        // 返回这个结果就行\n        return dp[n];\n    }\n};\n")])])]),s("h3",{attrs:{id:"_3、python-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[n._v("#")]),n._v(" "),s("strong",[n._v("3、Python 代码")])]),n._v(" "),s("div",{staticClass:"language-Python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Solution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("def")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("numSquares")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 设置一个数组，用来存储小于 n 的那些完全平方数")]),n._v("\n        square "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 通过一个下标来计算")]),n._v("\n        idx "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 直到 idx * idx 超过了 n 为止")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("while")]),n._v(" idx "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("*")]),n._v(" idx "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<=")]),n._v(" n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" \n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# square 存储小于 n 的那些完全平方数")]),n._v("\n            square"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("idx "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("*")]),n._v(" idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# idx 累加")]),n._v("\n            idx"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v("\n    \n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# dp[0] 表示数字 0  需要完全平方数的最少数量")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# dp[1] 表示数字 0  需要完全平方数的最少数量")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# dp[i] 表示数字 i  需要完全平方数的最少数量")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 先让 dp 初始化为 -1，代表 dp[i] 还没有计算")]),n._v("\n        dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("for")]),n._v(" _ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("in")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# dp[0] 表示数字 0  需要完全平方数的最少数量")]),n._v("\n        dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),n._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 开始填充 dp[]")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("for")]),n._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("in")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" \n            \n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 在每次填充的过程中，都去遍历 square 数组")]),n._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("for")]),n._v(" j "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("in")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("square"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v("  \n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 如果发现此时 square 的元素值大于了 i")]),n._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 那么 square 后面的那些元素没有必要参与进来计算 i 了")]),n._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 直接退出当前的 j 的循环判断，让 i++")]),n._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" square"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" \n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("break")]),n._v("\n                \n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 否则，如果 dp[i] 还没有找到数字 i 需要完全平方数的最少数量")]),n._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 或者此时计算的新值更小，那么更新 dp[i]")]),n._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("==")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("or")]),n._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("square"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" \n\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 更新 dp[i]")]),n._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# dp[i] 表示数字 i  需要完全平方数的最少数量")]),n._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 这个时候 dp[i] 为获取数字为 square.get(j) 的那 1 个完全平方数")]),n._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 加上获取数字为 i-square.get(j) 最少需要 dp[i-square.get(j)] 个数")]),n._v("\n                    dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("square"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v("\n      \n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# dp[n] 表示数字 n 需要完全平方数的最少数量")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 返回这个结果就行")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("return")]),n._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);