(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{625:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"剑指-offer-36-二叉搜索树与双向链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#剑指-offer-36-二叉搜索树与双向链表"}},[t._v("#")]),t._v(" 剑指 Offer 36. 二叉搜索树与双向链表")]),t._v(" "),a("p",[t._v("大家好，我是吴师兄。")]),t._v(" "),a("p",[t._v("今天继续来学习《剑指Offer》系列的一道经典题目，依旧给出了非常详细的题解和精美的配图与动画。")]),t._v(" "),a("h2",{attrs:{id:"一、题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" 一、题目描述")]),t._v(" "),a("p",[t._v("输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。")]),t._v(" "),a("p",[t._v("为了让您更好地理解问题，以下面的二叉搜索树为例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/9bsix.png",alt:""}})]),t._v(" "),a("p",[t._v("我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。")]),t._v(" "),a("p",[t._v("对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。")]),t._v(" "),a("p",[t._v("特别地，我们希望可以就地完成转换操作。")]),t._v(" "),a("p",[t._v("当转化完成以后，"),a("strong",[t._v("树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继")]),t._v("。")]),t._v(" "),a("p",[t._v("还需要返回链表中的第一个节点的指针。")]),t._v(" "),a("h2",{attrs:{id:"二、题目解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" 二、题目解析")]),t._v(" "),a("p",[t._v("这道题目首先得掌握以下基础概念：")]),t._v(" "),a("ul",[a("li",[t._v("1、二叉搜索树")]),t._v(" "),a("li",[t._v("2、中序遍历的递归写法")])]),t._v(" "),a("p",[t._v("二叉搜索树是一棵"),a("strong",[t._v("有序")]),t._v("的二叉树，它具有如下的性质：")]),t._v(" "),a("ul",[a("li",[t._v("1、若它的左子树不为空，那么左子树上的所有值均小于它的根节点")]),t._v(" "),a("li",[t._v("2、若它的右子树不为空，那么右子树上所有值均大于它的根节点")]),t._v(" "),a("li",[t._v("3、它的左子树和右子树也都是二叉搜索树")])]),t._v(" "),a("p",[t._v("而中序遍历的递归过程是 "),a("strong",[t._v("左 ---》根 ---》右")]),t._v(" 的顺序。")]),t._v(" "),a("p",[t._v("所以，如果对二叉搜索树采取中序遍历的方式，那么得到的序列是一个从小到大排列的序列。")]),t._v(" "),a("p",[t._v("而在题目中，最终得到的双向链表正是这种顺序。")]),t._v(" "),a("p",[t._v("因此，我们采取中序遍历的操作来将"),a("strong",[t._v("二叉搜索树")]),t._v("变成"),a("strong",[t._v("排序的循环双向链表。")])]),t._v(" "),a("p",[t._v("具体操作如下：")]),t._v(" "),a("p",[t._v("1、定义两个指针 "),a("code",[t._v("pre")]),t._v(" 和 "),a("code",[t._v("head")]),t._v(" ，"),a("code",[t._v("pre")]),t._v(" 表示中序遍历过程中访问"),a("strong",[t._v("当前节点时的前一个节点")]),t._v("，"),a("code",[t._v("head")]),t._v(" 表示双向链表的头节点。")]),t._v(" "),a("p",[t._v("2、开始中序遍历二叉树，用 "),a("code",[t._v("cur")]),t._v(" 表示当前正在访问的那个节点，由于中序遍历的递归过程是 "),a("strong",[t._v("左 ---》根 ---》右")]),t._v(" 的顺序，因此会"),a("strong",[t._v("先遍历二叉树的左子树")]),t._v("。")]),t._v(" "),a("p",[t._v("3、由于 "),a("code",[t._v("pre")]),t._v(" 表示中序遍历过程中访问"),a("strong",[t._v("当前节点 cur 时的前一个节点")]),t._v("，因此 "),a("code",[t._v("pre")]),t._v(" 是 "),a("code",[t._v("cur")]),t._v(" 的前驱节点，相应的 "),a("code",[t._v("cur")]),t._v(" 是 "),a("code",[t._v("pre")]),t._v(" 的后继节点。")]),t._v(" "),a("p",[t._v("4、根据题目要求，"),a("strong",[t._v("树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继")]),t._v("。")]),t._v(" "),a("p",[t._v("5、所以，如果  "),a("code",[t._v("pre")]),t._v(" 不为空，可以直接将  "),a("code",[t._v("pre")]),t._v(" 的右指针指向后继节点  "),a("code",[t._v("cur")]),t._v("，即 "),a("code",[t._v("pre->right = cur")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/zo7ar.png",alt:""}})]),t._v(" "),a("p",[t._v("6、而如果  "),a("code",[t._v("pre")]),t._v(" 为空，那么说明 "),a("code",[t._v("cur")]),t._v(" 是访问的第一个节点，即是双向链表的头节点，那么需要设置 "),a("code",[t._v("head = cur")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/cejfe.png",alt:""}})]),t._v(" "),a("p",[t._v("7、由于中序遍历的递归过程是 "),a("strong",[t._v("左 ---》根 ---》右")]),t._v(" 的顺序，因此处理当前节点 "),a("code",[t._v("cur")]),t._v(" 时，它的左子树必然已经遍历操作过，前驱节点 "),a("code",[t._v("pre")]),t._v(" 就在它的左子树中，因此设置 "),a("code",[t._v("cur->left = pre")]),t._v("。")]),t._v(" "),a("p",[t._v("8、这样，"),a("code",[t._v("pre")]),t._v(" 和 "),a("code",[t._v("cur")]),t._v(" 两个节点的双向指针都设置好了，接下来让前驱节点 "),a("code",[t._v("pre")]),t._v(" 移动到当前 "),a("code",[t._v("cur")]),t._v(" 节点的位置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/crkua.png",alt:""}})]),t._v(" "),a("p",[t._v("9、由于中序遍历的递归过程是 "),a("strong",[t._v("左 ---》根 ---》右")]),t._v(" 的顺序，因此在递归的遍历当前节点 "),a("code",[t._v("cur")]),t._v(" 的右子树。")]),t._v(" "),a("p",[t._v("10、经过中序遍历之后，除了头节点和尾节点，每个节点都已经设置好了双向指针。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/5a3u3.png",alt:""}})]),t._v(" "),a("p",[t._v("11、最后将链表的头节点和尾节点相连就完成了"),a("strong",[t._v("双向循环链表")]),t._v("的转换。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/051ux.png",alt:""}})]),t._v(" "),a("p",[t._v("为了帮助你更好的理解整个过程，我特意做了一组动画，"),a("strong",[t._v("点开可以查看")]),t._v("：")]),t._v(" "),a("video",{attrs:{id:"video",width:"700",height:"400",muted:"muted",controls:"controls",poster:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/3hdi5.jpeg"},domProps:{muted:!0}},[a("source",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/MP4/%E5%89%91%E6%8C%87%20Offer%2036.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%8E%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8.m4v",type:"video/mp4"}})]),t._v(" "),a("h2",{attrs:{id:"三、参考代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" 三、参考代码")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 剑指 Offer 36. 二叉搜索树与双向链表：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/ ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pre 表示当前访问节点的前驱节点，并且每次都会跟随当前节点向后移动")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，由于当前访问节点为空，所以 pre 也默认为空")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// head 表示指向链表中有最小元素的节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，由于当前访问节点为空，所以 head 也默认为空")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("treeToDoublyList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 边界处理，如果当前节点为空，直接返回空")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则递归的采取中序遍历的方式遍历二叉搜索树")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 经过中序遍历后，二叉搜索树已经安装从小到大的顺序进行了排序")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// head 表示指向链表中有最小元素的节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pre 表示当前访问节点的前驱节点，并且每次都会跟随当前节点向后移动")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳出 dfs 时，当前节点为 null，pre 指向了排序之后的最后一个节点")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、由于对于双向循环链表，第一个节点的前驱是最后一个节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、树中节点的左指针需要指向前驱")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此 head.left = pre")]),t._v("\n        head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、由于对于双向循环链表，最后一个节点的后继是第一个节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、树中节点的右指针需要指向后继")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此 pre.right = head")]),t._v("\n        pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后，返回链表中的第一个节点的指针即可")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归终止条件，即越过了叶子节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中序遍历的递归过程顺序是：左、根、右")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先递归的处理左子树")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在访问当前节点 cur ，即【根】节点的过程中开始构建双向链表")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pre 表示当前访问节点的前驱节点，并且每次都会跟随当前节点向后移动")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同时也意味着 cur 是 pre 的后继节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 pre 不为空，说明双向链表上已经有节点了")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 树中节点的右指针需要指向后继")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pre.right = cur")]),t._v("\n            pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 pre 为空，说明双向链表上还没有节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             \n             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// head 表示指向链表中有最小元素的节点")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，cur 就是最先访问的节点，即中序遍历过程中最小的元素")]),t._v("\n             head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 树中节点的左指针需要指向前驱")]),t._v("\n        cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，cur 这个节点的左指针已经设置完毕")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pre 来到 cur 这个节点的位置")]),t._v("\n        pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后再递归的处理右子树")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);