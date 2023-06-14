(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{413:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-2、两数相加"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-2、两数相加"}},[t._v("#")]),t._v(" LeetCode 2、两数相加")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("给你两个 "),n("strong",[t._v("非空")]),t._v(" 的链表，表示两个非负的整数。它们每位数字都是按照 "),n("strong",[t._v("逆序")]),t._v(" 的方式存储的，并且每个节点只能存储 "),n("strong",[t._v("一位")]),t._v(" 数字。")]),t._v(" "),n("p",[t._v("请你将两个数相加，并以相同形式返回一个表示和的链表。")]),t._v(" "),n("p",[t._v("你可以假设除了数字 0 之外，这两个数都不会以 0 开头。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306091130479.(null)",alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"java"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" "),n("strong",[t._v("Java")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTwoNumbers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构建一个链表用来存放 l1 和 l2 两个链表相加的结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其中 dummy 这个节点为虚拟头结点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" dummy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置一个进位，初始化为 0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 两个个位数相加，进位只能是 1 或者 0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如 7 + 8 = 15，进位是 1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如 2 + 3 = 6，没有进位，或者说进位是 0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" carryBit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// l1 和 l2 有可能为空，所以先默认结果链表从虚拟头结点位置开始")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同时遍历 l1 和 l2")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只要此时 l1 和 l2 两个链表中的任意链表中节点有值，就一直加下去")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直到两个链表中的所有节点都遍历完毕为止")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" l2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取 l1 链表中节点的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 观察此时 l1 中的节点是否有值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果节点不存在，那么就用 0 来占位")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用 0 来占位")]),t._v("\n                x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则，将 l1 的节点值赋值给 x")]),t._v("\n                x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取 l2 链表中节点的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 观察此时 l2 中的节点是否有值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果节点不存在，那么就用 0 来占位")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" l2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用 0 来占位")]),t._v("\n                y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则，将 l2 的节点值赋值给 y")]),t._v("\n                y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每一位计算的同时需要考虑上一位的进位情况")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" carryBit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前计算结果的十位数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如 7 + 8 = 15")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么 sum / 10 = 1，进位为 1")]),t._v("\n            carryBit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前计算结果的个位数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如 7 + 8 = 15")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么 sum % 10 = 5")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" digit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构建一个节点用来存放这个个位数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" digitNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把这个节点加入到结果链表中")]),t._v("\n            cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" digitNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移动 cur 的位置，观察后面应该存放什么节点")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// l1 链表中还有节点未遍历完毕就继续遍历下去")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// l2 链表中还有节点未遍历完毕就继续遍历下去")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" l2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 两个链表的尾节点相加之后，有可能产生进位的情况")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，需要构建一个新的节点用来存放这个进位的结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("carryBit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构建一个节点用来存放这个进位")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" carryBitNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("carryBit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把这个节点加入到结果链表中")]),t._v("\n            cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" carryBitNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后返回结果链表的头节点就行，即虚拟头结点的下一个节点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"c"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c"}},[t._v("#")]),t._v(" "),n("strong",[t._v("C++")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n\n        // 构建一个链表用来存放 l1 和 l2 两个链表相加的结果\n        // 其中 dummy 这个节点为虚拟头结点\n        ListNode *dummy = new ListNode(-1);\n\n        // 设置一个进位，初始化为 0\n        // 两个个位数相加，进位只能是 1 或者 0\n        // 比如 7 + 8 = 15，进位是 1\n        // 比如 2 + 3 = 6，没有进位，或者说进位是 0\n        int carryBit = 0;\n\n        // l1 和 l2 有可能为空，所以先默认结果链表从虚拟头结点位置开始\n        ListNode *cur = dummy;\n\n        // 同时遍历 l1 和 l2\n        // 只要此时 l1 和 l2 两个链表中的任意链表中节点有值，就一直加下去\n        // 直到两个链表中的所有节点都遍历完毕为止\n        while(l1 != NULL || l2 != NULL) {\n            // 获取 l1 链表中节点的值\n            int x;\n\n            // 观察此时 l1 中的节点是否有值\n            // 如果节点不存在，那么就用 0 来占位\n            if( l1 == NULL){\n                // 用 0 来占位\n                x = 0;\n            }else{\n                // 否则，将 l1 的节点值赋值给 x\n                x = l1->val;\n            }\n\n            // 获取 l2 链表中节点的值\n            int y;\n\n            // 观察此时 l2 中的节点是否有值\n            // 如果节点不存在，那么就用 0 来占位\n            if( l2 == NULL){\n                // 用 0 来占位\n                y = 0;\n            }else{\n                // 否则，将 l2 的节点值赋值给 y\n                y = l2->val;\n            }\n   \n            // 每一位计算的同时需要考虑上一位的进位情况\n            int sum = x + y + carryBit;\n            \n            // 获取当前计算结果的十位数\n            // 比如 7 + 8 = 15\n            // 那么 sum / 10 = 1，进位为 1\n            carryBit = sum / 10;\n\n            // 获取当前计算结果的个位数\n            // 比如 7 + 8 = 15\n            // 那么 sum % 10 = 5\n            int digit = sum % 10;\n\n            // 构建一个节点用来存放这个个位数\n            ListNode *digitNode = new ListNode(digit);\n\n            // 把这个节点加入到结果链表中\n            cur->next = digitNode;\n\n            // 移动 cur 的位置，观察后面应该存放什么节点\n            cur = cur->next;\n            \n            // l1 链表中还有节点未遍历完毕就继续遍历下去\n            if(l1 != NULL) l1 = l1->next;\n\n            // l2 链表中还有节点未遍历完毕就继续遍历下去\n            if(l2 != NULL) l2 = l2->next;\n        }\n\n        // 两个链表的尾节点相加之后，有可能产生进位的情况\n        // 所以，需要构建一个新的节点用来存放这个进位的结果\n        if(carryBit == 1) {\n            // 构建一个节点用来存放这个进位\n            ListNode *carryBitNode = new ListNode(carryBit);\n\n            // 把这个节点加入到结果链表中\n            cur->next = carryBitNode;\n        }\n\n        // 最后返回结果链表的头节点就行，即虚拟头结点的下一个节点\n        return dummy->next;\n\n    }\n};\n")])])]),n("h3",{attrs:{id:"python"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" "),n("strong",[t._v("Python")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTwoNumbers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建一个链表用来存放 l1 和 l2 两个链表相加的结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其中 dummy 这个节点为虚拟头结点")]),t._v("\n        dummy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置一个进位，初始化为 0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两个个位数相加，进位只能是 1 或者 0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如 7 + 8 = 15，进位是 1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如 2 + 3 = 6，没有进位，或者说进位是 0")]),t._v("\n        carryBit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# l1 和 l2 有可能为空，所以先默认结果链表从虚拟头结点位置开始")]),t._v("\n        cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同时遍历 l1 和 l2")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只要此时 l1 和 l2 两个链表中的任意链表中节点有值，就一直加下去")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直到两个链表中的所有节点都遍历完毕为止")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" l1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" l2 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取 l1 链表中节点的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 观察此时 l1 中的节点是否有值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果节点不存在，那么就用 0 来占位")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 否则，将 l1 的节点值赋值给 x")]),t._v("\n            x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取 l2 链表中节点的值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 观察此时 l2 中的节点是否有值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果节点不存在，那么就用 0 来占位")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 否则，将 l2 的节点值赋值给 y")]),t._v("\n            y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l2 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n   \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每一位计算的同时需要考虑上一位的进位情况")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" carryBit\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取当前计算结果的十位数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如 7 + 8 = 15")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么 sum / 10 = 1，进位为 1")]),t._v("\n            carryBit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取当前计算结果的个位数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如 7 + 8 = 15")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么 sum % 10 = 5")]),t._v("\n            digit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建一个节点用来存放这个个位数")]),t._v("\n            digitNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把这个节点加入到结果链表中")]),t._v("\n            cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" digitNode\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移动 cur 的位置，观察后面应该存放什么节点")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# l1 链表中还有节点未遍历完毕就继续遍历下去")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n               l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# l2 链表中还有节点未遍历完毕就继续遍历下去")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l2 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n               l2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两个链表的尾节点相加之后，有可能产生进位的情况")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以，需要构建一个新的节点用来存放这个进位的结果")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" carryBit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建一个节点用来存放这个进位")]),t._v("\n            carryBitNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("carryBit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把这个节点加入到结果链表中")]),t._v("\n            cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" carryBitNode\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最后返回结果链表的头节点就行，即虚拟头结点的下一个节点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n")])])]),n("h2",{attrs:{id:"四、复杂度分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、复杂度分析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("四、复杂度分析")])]),t._v(" "),n("p",[t._v("时间复杂度：O(max(m,n))，其中 m 和 n 分别为两个链表的长度。我们要遍历两个链表的全部位置，而处理每个位置只需要 O(1) 的时间。")]),t._v(" "),n("p",[t._v("空间复杂度：O(1)。注意返回值不计入空间复杂度。")])])}),[],!1,null,null,null);s.default=e.exports}}]);