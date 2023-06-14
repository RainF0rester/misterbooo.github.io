(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{487:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-1、两数之和"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-1、两数之和"}},[t._v("#")]),t._v(" LeetCode 1、两数之和")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 "),n("strong",[t._v("和为目标值")]),t._v(" "),n("em",[t._v("target")]),t._v("  的那 "),n("strong",[t._v("两个")]),t._v(" 整数，并返回它们的数组下标。")]),t._v(" "),n("p",[t._v("你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。")]),t._v(" "),n("p",[t._v("你可以按任意顺序返回答案。")]),t._v(" "),n("p",[n("strong",[t._v("例 1：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：nums = [2,7,11,15], target = 9\n输出：[0,1]\n解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。\n")])])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：nums = [3,2,4], target = 6\n输出：[1,2]\n")])])]),n("p",[n("strong",[t._v("示例 3：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：nums = [3,3], target = 6\n输出：[0,1]\n")])])]),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 两数之和（LeetCode 1）:https://leetcode-cn.com/problems/two-sum/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("twoSum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首先构建一个哈希表，用来存放数组的元素值以及索引值")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其中 key 是数组中的元素值")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value 为数组中元素值的索引")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" map "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接下来，遍历整个数组")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目标值为 target，将 target 与 nums[i] 求差")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取与 nums[i] 配对的那个数 anotherNum")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" anotherNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断哈希表中是否存在那个与 nums[i] 配对的数 anotherNum")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("anotherNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于哈希表中所有 key 都是来自于数组中，")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，如果发现哈希表存在那个与 nums[i] 配对的数 anotherNum")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也就说明数组中存在一个数，可以和 nums[i] 相加为 target")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时， anotherNum 这个 key 对应的 value 为这个数在数组中的索引")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，返回 map.get(anotherNum) 和 i 就是这两个值的下标")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("anotherNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果发现哈希表中目前不存在那个与 nums[i] 配对的数 anotherNum")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么就把此时观察的数 nums[i] 和它的索引存放到哈希表中")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待后面的数能和它配对为 target")]),t._v("\n               map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果遍历完整个数组都找不到和为 target 的两个数，返回 0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2、-c-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),n("strong",[t._v("C++")]),t._v(" "),n("strong",[t._v("代码")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 登录 AlgoMooc 官网获取更多算法图解\n// https://www.algomooc.com\n// 作者：程序员吴师兄\n// 代码有看不懂的地方一定要私聊咨询吴师兄呀\n// 两数之和（LeetCode 1）:https://leetcode-cn.com/problems/two-sum/\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // 首先构建一个哈希表，用来存放数组的元素值以及索引值\n        // 其中 key 是数组中的元素值\n        // value 为数组中元素值的索引\n        unordered_map< int , int > map;\n\n        // 接下来，遍历整个数组\n        for(int i = 0; i < nums.size(); i++) {\n\n            // 目标值为 target，将 target 与 nums[i] 求差\n            // 获取与 nums[i] 配对的那个数 anotherNum\n            int anotherNum = target - nums[i];\n\n            // 判断哈希表中是否存在那个与 nums[i] 配对的数 anotherNum\n            auto it = map.find(anotherNum);\n            if (it != map.end()) {\n                // 由于哈希表中所有 key 都是来自于数组中，\n                // 所以，如果发现哈希表存在那个与 nums[i] 配对的数 anotherNum\n                // 也就说明数组中存在一个数，可以和 nums[i] 相加为 target\n                // 此时， anotherNum 这个 key 对应的 value 为这个数在数组中的索引\n                // 所以，返回 map.get(anotherNum) 和 i 就是这两个值的下标\n                return {map[anotherNum], i};\n            }else{\n               // 如果发现哈希表中目前不存在那个与 nums[i] 配对的数 anotherNum\n               // 那么就把此时观察的数 nums[i] 和它的索引存放到哈希表中\n               // 等待后面的数能和它配对为 target\n               map[nums[i]] =  i;\n            }\n\n        }\n\n        // 如果遍历完整个数组都找不到和为 target 的两个数，返回 0\n        return {};\n    }\n};\n")])])]),n("h3",{attrs:{id:"_3、python-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("3、Python 代码")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两数之和（LeetCode 1）:https://leetcode-cn.com/problems/two-sum/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("twoSum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先构建一个哈希表，用来存放数组的元素值以及索引值")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其中 key 是数组中的元素值")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# value 为数组中元素值的索引")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接下来，遍历整个数组")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目标值为 target，将 target 与 nums[i] 求差")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取与 nums[i] 配对的那个数 anotherNum")]),t._v("\n           anotherNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" num\n\n           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 判断哈希表中是否存在那个与 nums[i] 配对的数 anotherNum")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" anotherNum "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于哈希表中所有 key 都是来自于数组中，")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以，如果发现哈希表存在那个与 nums[i] 配对的数 anotherNum")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也就说明数组中存在一个数，可以和 nums[i] 相加为 target")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时， anotherNum 这个 key 对应的 value 为这个数在数组中的索引")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以，返回 map.get(anotherNum) 和 i 就是这两个值的下标")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发现哈希表中目前不存在那个与 nums[i] 配对的数 anotherNum")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么就把此时观察的数 nums[i] 和它的索引存放到哈希表中")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等待后面的数能和它配对为 target")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果遍历完整个数组都找不到和为 target 的两个数，返回 0")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("h2",{attrs:{id:"四、复杂度分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、复杂度分析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("四、复杂度分析")])]),t._v(" "),n("p",[t._v("时间复杂度：O(N)，其中 N 是数组中的元素数量。对于每一个元素 x，我们可以 O(1) 地寻找 target - x。")]),t._v(" "),n("p",[t._v("空间复杂度：O(N)，其中 N 是数组中的元素数量。主要为哈希表的开销。")])])}),[],!1,null,null,null);s.default=e.exports}}]);