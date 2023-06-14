(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{494:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-232、用栈实现队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-232、用栈实现队列"}},[t._v("#")]),t._v(" LeetCode 232、用栈实现队列")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("请你仅使用两个栈实现先入先出队列。")]),t._v(" "),n("p",[t._v("队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：")]),t._v(" "),n("p",[t._v("实现 "),n("code",[t._v("MyQueue")]),t._v(" 类：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("void push(int x)")]),t._v("将元素 x 推到队列的末尾")]),t._v(" "),n("li",[n("code",[t._v("int pop()")]),t._v(" 从队列的开头移除并返回元素")]),t._v(" "),n("li",[n("code",[t._v("int peek()")]),t._v(" 返回队列开头的元素")]),t._v(" "),n("li",[n("code",[t._v("boolean empty()")]),t._v("如果队列为空，返回 "),n("code",[t._v("True")]),t._v(" ；否则，返回 "),n("code",[t._v("False")])])]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("h4",{attrs:{id:"入队操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#入队操作"}},[t._v("#")]),t._v(" "),n("strong",[t._v("入队操作")])]),t._v(" "),n("p",[t._v("如果是栈的插入操作，那我们可以把元素都先插入到 "),n("code",[t._v("stackIn")]),t._v(" 中，也就实现了队列的 "),n("strong",[t._v("入队操作")]),t._v(" 。")]),t._v(" "),n("h4",{attrs:{id:"出队操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#出队操作"}},[t._v("#")]),t._v(" "),n("strong",[t._v("出队操作")])]),t._v(" "),n("ul",[n("li",[t._v("当 "),n("code",[t._v("stackOut")]),t._v(" 中不为空时，直接操作，此时在 "),n("code",[t._v("stackOut")]),t._v(" 中的栈顶元素是最先进入队列的元素，返回该元素即可；")]),t._v(" "),n("li",[t._v("如果 "),n("code",[t._v("stackOut")]),t._v(" 为空且 "),n("code",[t._v("stackIn")]),t._v(" 不为空，首先需要把 "),n("code",[t._v("stackIn")]),t._v(" 中的元素逐个弹出并压入到 "),n("code",[t._v("stackOut")]),t._v(" 中，然后返回  "),n("code",[t._v("stackOut")]),t._v(" 的栈顶元素即可。")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用栈实现队列 （ LeetCode 232 ）:https://leetcode-cn.com/problems/implement-queue-using-stacks/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyQueue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首先定义好两个栈")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个栈叫做 stackIn，负责进栈操作，相当于队列 queue 中的入队操作")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个栈叫做 stackOut，负责出栈操作，相当于队列 queue 中的出队操作")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyQueue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这个函数中初始化两个栈，传入的参数为空，返回也为空")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化 stackIn")]),t._v("\n        stackIn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化 stackOut")]),t._v("\n        stackOut "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新添加的元素添加到 stackIn 中")]),t._v("\n        stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 stackOut 为空，首先需要将 stackIn 中的所有元素添加到 stackOut 中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意 stackIn 是栈，栈的性质是先进后出，后进先出，所以是不断的将 stackIn 中的栈顶元素添加进 stackOut 中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过 while 循环将 stackIn 中的所有元素都取出")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stackOut 不断的添加 stackIn 的栈顶元素")]),t._v("\n                stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，stackIn 已经为空，直接「移除」 stackOut 的栈顶元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// peek 和 pop 的区别在于是返回栈顶元素而非删除栈顶元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 stackOut 为空，首先需要将 stackIn 中的所有元素添加到 stackOut 中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意 stackIn 是栈，栈的性质是先进后出，后进先出，所以是不断的将 stackIn 中的栈顶元素添加进 stackOut 中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过 while 循环将 stackIn 中的所有元素都取出")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stackOut 不断的添加 stackIn 的栈顶元素")]),t._v("\n                stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// peek 和 pop 的区别在于是返回栈顶元素而非删除栈顶元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，stackIn 已经为空，直接「返回」 stackOut 的栈顶元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队列是否为空，判断 stackIn 和 stackOut 是否同时不存在元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2、-c-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),n("strong",[t._v("C++")]),t._v(" "),n("strong",[t._v("代码")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 登录 AlgoMooc 官网获取更多算法图解\n// https://www.algomooc.com\n// 作者：程序员吴师兄\n// 代码有看不懂的地方一定要私聊咨询吴师兄呀\n// 用栈实现队列 （ LeetCode 232 ）:https://leetcode-cn.com/problems/implement-queue-using-stacks/\nclass MyQueue {\npublic:\n // 首先定义好两个栈\n\n    // 一个栈叫做 stackIn，负责进栈操作，相当于队列 queue 中的入队操作\n    stack<int> stackIn;\n    // 一个栈叫做 stackOut，负责出栈操作，相当于队列 queue 中的出队操作\n    stack<int> stackOut;\n    \n    MyQueue() {\n \n    }\n    \n    \n    void push(int x) {\n        // 新添加的元素添加到 stackIn 中\n        stackIn.push(x);\n    }\n    \n    int pop() {\n\n        // 如果 stackOut 为空，首先需要将 stackIn 中的所有元素添加到 stackOut 中\n        // 注意 stackIn 是栈，栈的性质是先进后出，后进先出，所以是不断的将 stackIn 中的栈顶元素添加进 stackOut 中\n        if (stackOut.empty()){\n            // 通过 while 循环将 stackIn 中的所有元素都取出\n            while (!stackIn.empty()) {\n                // stackOut 不断的添加 stackIn 的栈顶元素\n                int pop = stackIn.top();\n\n                stackIn.pop();\n\n                stackOut.push(pop);\n            }\n        }\n        // 此时，stackIn 已经为空，直接「移除」 stackOut 的栈顶元素\n\n        int pop = stackOut.top();\n\n        stackOut.pop();\n\n        return pop;\n    }\n    \n    \n    int peek() {\n\n        // peek 和 pop 的区别在于是返回栈顶元素而非删除栈顶元素\n        // 如果 stackOut 为空，首先需要将 stackIn 中的所有元素添加到 stackOut 中\n        // 注意 stackIn 是栈，栈的性质是先进后出，后进先出，所以是不断的将 stackIn 中的栈顶元素添加进 stackOut 中\n        if (stackOut.empty()) {\n            // 通过 while 循环将 stackIn 中的所有元素都取出\n            while (!stackIn.empty()) {\n                // stackOut 不断的添加 stackIn 的栈顶元素\n                int pop = stackIn.top();\n\n                stackIn.pop();\n\n                stackOut.push(pop);\n            }\n        }\n\n        // peek 和 pop 的区别在于是返回栈顶元素而非删除栈顶元素\n        // 此时，stackIn 已经为空，直接「返回」 stackOut 的栈顶元素\n        return stackOut.top();\n    \n    }\n    \n    bool empty() {\n        // 队列是否为空，判断 stackIn 和 stackOut 是否同时不存在元素\n        return stackIn.empty() && stackOut.empty();\n    }\n};\n")])])]),n("h3",{attrs:{id:"_3、python-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("3、Python 代码")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用栈实现队列 （ LeetCode 232 ）:https://leetcode-cn.com/problems/implement-queue-using-stacks/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyQueue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一个栈叫做 stackIn，负责进栈操作，相当于队列 queue 中的入队操作")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackIn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一个栈叫做 stackOut，负责出栈操作，相当于队列 queue 中的出队操作")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackOut "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新添加的元素添加到 stackIn 中")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 stackOut 为空，首先需要将 stackIn 中的所有元素添加到 stackOut 中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注意 stackIn 是栈，栈的性质是先进后出，后进先出，所以是不断的将 stackIn 中的栈顶元素添加进 stackOut 中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过 while 循环将 stackIn 中的所有元素都取出")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stackOut 不断的添加 stackIn 的栈顶元素")]),t._v("\n                self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时，stackIn 已经为空，直接「移除」 stackOut 的栈顶元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# peek 和 pop 的区别在于是返回栈顶元素而非删除栈顶元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 stackOut 为空，首先需要将 stackIn 中的所有元素添加到 stackOut 中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意 stackIn 是栈，栈的性质是先进后出，后进先出，所以是不断的将 stackIn 中的栈顶元素添加进 stackOut 中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过 while 循环将 stackIn 中的所有元素都取出")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stackOut 不断的添加 stackIn 的栈顶元素")]),t._v("\n                self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# peek 和 pop 的区别在于是返回栈顶元素而非删除栈顶元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时，stackIn 已经为空，直接「返回」 stackOut 的栈顶元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 队列是否为空，判断 stackIn 和 stackOut 是否同时不存在元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackIn "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackOut\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);