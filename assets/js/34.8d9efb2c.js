(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{422:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"leetcode-876、链表的中间结点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-876、链表的中间结点"}},[t._v("#")]),t._v(" LeetCode 876、链表的中间结点")]),t._v(" "),a("h2",{attrs:{id:"一、题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),a("strong",[t._v("一、题目描述")])]),t._v(" "),a("p",[t._v("给定一个头结点为 "),a("code",[t._v("head")]),t._v(" 的非空单链表，返回链表的中间结点。")]),t._v(" "),a("p",[t._v("如果有两个中间结点，则返回第二个中间结点。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1：")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("输入：[1,2,3,4,5]\n输出：此列表中的结点 3 (序列化形式：[3,4,5])\n返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。\n注意，我们返回了一个 ListNode 类型的对象 ans，这样：\nans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.\n")])])]),a("p",[a("strong",[t._v("示例 2：")])]),t._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("输入：[1,2,3,4,5,6]\n输出：此列表中的结点 4 (序列化形式：[4,5,6])\n由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。\n")])])]),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[t._v("给定链表的结点数介于 "),a("code",[t._v("1")]),t._v(" 和 "),a("code",[t._v("100")]),t._v(" 之间。")])]),t._v(" "),a("h2",{attrs:{id:"二、题目解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),a("strong",[t._v("二、题目解析")])]),t._v(" "),a("h2",{attrs:{id:"三、参考代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),a("strong",[t._v("三、参考代码")])]),t._v(" "),a("h3",{attrs:{id:"_1、java-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),a("strong",[t._v("1、Java 代码")])]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信：wzb_3377")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链表的中间结点（LeetCode 876）：https://leetcode.cn/problems/middle-of-the-linked-list/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置两个指针，一开始都指向链表的头节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接下来，让这两个指针向前移动")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果可以移动，那么就会让快指针每次移动两步，慢指针每次移动一步")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 而快指针可以移动两步的前提就是当前节点不为空，同时下一节点也不为空")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样才能保证 fast.next 有值、fast.next.next 有值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 慢指针每次移动一步")]),t._v("\n            slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 快指针每次移动两步")]),t._v("\n            fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后，slow 指向的就是中间节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2、-c-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),a("strong",[t._v("C++")]),t._v(" "),a("strong",[t._v("代码")])]),t._v(" "),a("div",{staticClass:"language-C++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Solution {\npublic:\n    ListNode* middleNode(ListNode* head) {\n\n        // 设置两个指针，一开始都指向链表的头节点\n        ListNode* slow = head;\n\n        ListNode* fast = head;\n\n        // 接下来，让这两个指针向前移动\n        // 如果可以移动，那么就会让快指针每次移动两步，慢指针每次移动一步\n        // 而快指针可以移动两步的前提就是当前节点不为空，同时下一节点也不为空\n        // 这样才能保证 fast.next 有值、fast.next.next 有值\n        while(fast != NULL && fast->next != NULL){\n\n            // 慢指针每次移动一步\n            slow = slow->next;\n\n            // 快指针每次移动两步\n            fast = fast->next->next;\n        }\n\n        // 最后，slow 指向的就是中间节点\n        return slow;\n\n    }\n};\n")])])]),a("h3",{attrs:{id:"_3、python-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),a("strong",[t._v("3、Python 代码")])]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ListNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置两个指针，一开始都指向链表的头节点")]),t._v("\n        slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n\n        fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接下来，让这两个指针向前移动")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果可以移动，那么就会让快指针每次移动两步，慢指针每次移动一步")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 而快指针可以移动两步的前提就是当前节点不为空，同时下一节点也不为空")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这样才能保证 fast.next 有值、fast.next.next 有值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" fast "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 慢指针每次移动一步")]),t._v("\n            slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 快指针每次移动两步")]),t._v("\n            fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n    \n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最后，slow 指向的就是中间节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" slow\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);