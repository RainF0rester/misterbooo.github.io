(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{421:function(t,s,n){"use strict";n.r(s);var e=n(54),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-92-、反转链表-ii"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-92-、反转链表-ii"}},[t._v("#")]),t._v(" LeetCode 92 、反转链表 II")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 "),n("strong",[t._v("反转后的链表")]),t._v(" 。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091116023.(null)",alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("p",[t._v("1、构建一个虚拟节点，让它指向原链表的头节点。")]),t._v(" "),n("p",[t._v("2、设置两个指针，pre 指针指向以虚拟头节点为链表的头部位置，cur 指针指向原链表的头部位置。")]),t._v(" "),n("p",[t._v("3、让着两个指针向前移动，直到 pre 指向了第一个要反转的节点的前面那个节点，而 cur 指向了第一个要反转的节点。")]),t._v(" "),n("p",[t._v("4、开始指向翻转操作")]),t._v(" "),n("ul",[n("li",[t._v("1）、设置临时变量 temp，temp 是 cur 的 next 位置，保存当前需要翻转节点的后面的节点，我们需要交换 temp 和 cur")]),t._v(" "),n("li",[t._v("2）、让 cur 的 next 位置变成 temp 的下一个节点")]),t._v(" "),n("li",[t._v("3）、让 temp 的 next 位置变成 cur")]),t._v(" "),n("li",[t._v("4）、让 pre 的 next 位置变成 temp")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 反转链表 II （ LeetCode 92 ）：https://leetcode-cn.com/problems/reverse-linked-list-ii")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseBetween")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一开始设置一个虚拟节点，它的值为 -1，它的值可以设置为任何的数，因为我们根本不需要使用它的值")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置虚拟节点的目的是为了让原链表中所有节点就都可以按照统一的方式进行翻转")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如如果翻转的区间包含了原链表中的第一个位置，那么如果不设置 dummy")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在翻转的过程中需要设置其它的临时变量来保持第一位置节点的指针")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体可以通过动画来理解")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" dummy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让虚拟节点指向原链表的头部")]),t._v("\n        dummy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置一个指针，指向以虚拟头节点为链表的头部位置")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置一个指针，指向原链表的头部位置")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从虚拟头节点出发，pre 走 left - 1 步找到需要翻转的左区间")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for 循环结束后，pre 的右节点是需要翻转的节点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for 循环结束后，cur 指向的就是需要翻转的节点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           \n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pre 不断的向右移动，直到走到翻转的左区间为止")]),t._v("\n            pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cur 不断的向右移动，找到了需要翻转的第一个节点")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始翻转这些节点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置临时变量，保存当前需要翻转节点的后面的节点")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个时候，让 temp 和 cur 两个节点翻转一下")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如，一开始 i = 0 的时候 cur 为 2， temp 为 3")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行完下面的代码，如果原链表是")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 --\x3e 2 --\x3e 3 --\x3e 4 --\x3e 5")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变成了")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 --\x3e 3 --\x3e 2 --\x3e 4 --\x3e 5")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cur 的下一节点是等号右侧的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i = 0 的时候， cur 为 2，cur.next.next 的值是 4")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，这行代码让 cur 的下一节点不是 3 ，而是 4 ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 --\x3e 4")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于 cur.next = temp.next")]),t._v("\n            cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// temp 的下一节点是等号右侧的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i = 0 的时候， temp 为 3，pre 为 1，pre 下一节点的值是 2")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，这行代码让 temp 的下一节点不是 4 ，而是 2 ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3 --\x3e 2")]),t._v("\n            temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pre 的下一节点是等号右侧的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i = 0 的时候， pre 为 1，temp 的值是 3")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，这行代码让 pre 的下一节点为 3")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 --\x3e 3")]),t._v("\n          \n            pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i = 0 结束之后，链表变成了")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 --\x3e 3 --\x3e 2 --\x3e 4 --\x3e 5")]),t._v("\n           \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后返回虚拟头节点的下一个节点，因为虚拟节点不在链表中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2、-c-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),n("strong",[t._v("C++")]),t._v(" "),n("strong",[t._v("代码")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 登录 AlgoMooc 官网获取更多算法图解\n// https://www.algomooc.com\n// 作者：程序员吴师兄\n// 代码有看不懂的地方一定要私聊咨询吴师兄呀\n// 反转链表 II （ LeetCode 92 ）：https://leetcode-cn.com/problems/reverse-linked-list-ii\nclass Solution {\npublic:\n    ListNode* reverseBetween(ListNode* head, int left, int right) {\n        // 一开始设置一个虚拟节点，它的值为 -1，它的值可以设置为任何的数，因为我们根本不需要使用它的值\n        // 设置虚拟节点的目的是为了让原链表中所有节点就都可以按照统一的方式进行翻转\n        // 比如如果翻转的区间包含了原链表中的第一个位置，那么如果不设置 dummy\n        // 在翻转的过程中需要设置其它的临时变量来保持第一位置节点的指针\n        // 具体可以通过动画来理解\n        ListNode *dummy = new ListNode(-1);\n\n        // 让虚拟节点指向原链表的头部\n        dummy->next = head;\n        \n        // 设置一个指针，指向以虚拟头节点为链表的头部位置\n        ListNode *pre = dummy;\n\n        // 设置一个指针，指向原链表的头部位置\n        ListNode *cur = head;\n\n\n        // 从虚拟头节点出发，pre 走 left - 1 步找到需要翻转的左区间\n        // for 循环结束后，pre 的右节点是需要翻转的节点\n        // for 循环结束后，cur 指向的就是需要翻转的节点\n        for (int i = 0; i < left - 1; i++) {\n           \n            // pre 不断的向右移动，直到走到翻转的左区间为止\n            pre = pre->next;\n            // cur 不断的向右移动，找到了需要翻转的第一个节点\n            cur = cur->next;\n        }\n\n        // 开始翻转这些节点\n        for (int i = 0; i < right - left; i++) {\n            \n            // 设置临时变量，保存当前需要翻转节点的后面的节点\n            ListNode *temp = cur->next;\n\n            // 这个时候，让 temp 和 cur 两个节点翻转一下\n            // 比如，一开始 i = 0 的时候 cur 为 2， temp 为 3\n            // 执行完下面的代码，如果原链表是\n            // 1 --\x3e 2 --\x3e 3 --\x3e 4 --\x3e 5\n            // 变成了\n            // 1 --\x3e 3 --\x3e 2 --\x3e 4 --\x3e 5\n            \n            // cur 的下一节点是等号右侧的值\n            // i = 0 的时候， cur 为 2，cur->next->next 的值是 4\n            // 所以，这行代码让 cur 的下一节点不是 3 ，而是 4 \n            // 2 --\x3e 4\n            // 等价于 cur->next = temp->next\n            cur->next = cur->next->next;\n\n            // temp 的下一节点是等号右侧的值\n            // i = 0 的时候， temp 为 3，pre 为 1，pre 下一节点的值是 2\n            // 所以，这行代码让 temp 的下一节点不是 4 ，而是 2 \n            // 3 --\x3e 2\n            temp->next = pre->next;\n\n            // pre 的下一节点是等号右侧的值\n            // i = 0 的时候， pre 为 1，temp 的值是 3\n            // 所以，这行代码让 pre 的下一节点为 3\n            // 1 --\x3e 3\n          \n            pre->next = temp;\n\n            // i = 0 结束之后，链表变成了\n            // 1 --\x3e 3 --\x3e 2 --\x3e 4 --\x3e 5\n           \n        }\n\n        // 最后返回虚拟头节点的下一个节点，因为虚拟节点不在链表中\n        return dummy->next;\n    }\n};\n")])])]),n("h3",{attrs:{id:"_3、python-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("3、Python 代码")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反转链表 II （ LeetCode 92 ）：https://leetcode-cn.com/problems/reverse-linked-list-ii")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseBetween")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一开始设置一个虚拟节点，它的值为 -1，它的值可以设置为任何的数，因为我们根本不需要使用它的值")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置虚拟节点的目的是为了让原链表中所有节点就都可以按照统一的方式进行翻转")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如如果翻转的区间包含了原链表中的第一个位置，那么如果不设置 dummy")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在翻转的过程中需要设置其它的临时变量来保持第一位置节点的指针")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 具体可以通过动画来理解")]),t._v("\n        dummy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 让虚拟节点指向原链表的头部")]),t._v("\n        dummy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置一个指针，指向以虚拟头节点为链表的头部位置")]),t._v("\n        pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置一个指针，指向原链表的头部位置")]),t._v("\n        cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从虚拟头节点出发，pre 走 left - 1 步找到需要翻转的左区间")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for 循环结束后，pre 的右节点是需要翻转的节点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for 循环结束后，cur 指向的就是需要翻转的节点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" _ "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pre 不断的向右移动，直到走到翻转的左区间为止")]),t._v("\n            pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cur 不断的向右移动，找到了需要翻转的第一个节点")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始翻转这些节点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" _ "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置临时变量，保存当前需要翻转节点的后面的节点")]),t._v("\n            temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个时候，让 temp 和 cur 两个节点翻转一下")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如，一开始 i = 0 的时候 cur 为 2， temp 为 3")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行完下面的代码，如果原链表是")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 --\x3e 2 --\x3e 3 --\x3e 4 --\x3e 5")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 变成了")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 --\x3e 3 --\x3e 2 --\x3e 4 --\x3e 5")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cur 的下一节点是等号右侧的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i = 0 的时候， cur 为 2，cur.next.next 的值是 4")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以，这行代码让 cur 的下一节点不是 3 ，而是 4 ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2 --\x3e 4")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等价于 cur.next = temp.next")]),t._v("\n            cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# temp 的下一节点是等号右侧的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i = 0 的时候， temp 为 3，pre 为 1，pre 下一节点的值是 2")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以，这行代码让 temp 的下一节点不是 4 ，而是 2 ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3 --\x3e 2")]),t._v("\n            temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pre 的下一节点是等号右侧的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i = 0 的时候， pre 为 1，temp 的值是 3")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以，这行代码让 pre 的下一节点为 3")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 --\x3e 3")]),t._v("\n          \n            pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i = 0 结束之后，链表变成了")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 --\x3e 3 --\x3e 2 --\x3e 4 --\x3e 5")]),t._v("\n           \n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最后返回虚拟头节点的下一个节点，因为虚拟节点不在链表中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n")])])]),n("h2",{attrs:{id:"四、复杂度分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、复杂度分析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("四、复杂度分析")])]),t._v(" "),n("p",[t._v("时间复杂度：O(n)，其中 n 是链表总节点数，最多只遍历了链表一次，就完成了反转。")]),t._v(" "),n("p",[t._v("空间复杂度：O(1)，只使用到常数个变量。")])])}),[],!1,null,null,null);s.default=a.exports}}]);