(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{616:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"剑指-offer-26-树的子结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#剑指-offer-26-树的子结构"}},[s._v("#")]),s._v(" 剑指 Offer 26. 树的子结构")]),s._v(" "),a("p",[s._v("大家好，我是吴师兄。")]),s._v(" "),a("p",[s._v("今天继续来学习《剑指Offer》系列的一道经典题目，依旧给出了非常详细的题解和精美的配图与动画。")]),s._v(" "),a("h2",{attrs:{id:"一、题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[s._v("#")]),s._v(" 一、题目描述")]),s._v(" "),a("p",[s._v("输入两棵二叉树 A 和 B ，判断 B 是不是 A 的子结构。(约定空树不是任意一个树的子结构)")]),s._v(" "),a("p",[s._v("B 是 A 的子结构， 即 A 中有出现和B相同的结构和节点值。")]),s._v(" "),a("h2",{attrs:{id:"二、题目解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[s._v("#")]),s._v(" 二、题目解析")]),s._v(" "),a("p",[s._v("要判断 B 是否是 A 的子结构，那么一开始先从 A 和 B 的 "),a("strong",[s._v("根节点")]),s._v(" 开始。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/iluah.png",alt:""}})]),s._v(" "),a("p",[s._v("3 和 4 不相同，说明此时 B 不是 A "),a("strong",[s._v("根节点")]),s._v("的子结构，接下来需要判断 B 是否是 A 的左子树或者右子树的子结构。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/0iyii.png",alt:""}})]),s._v(" "),a("p",[s._v("A 的左子树的节点值为 4，与 B 的根节点值 4 相同，此时 B 有可能是 A 左子树的子结构，去判断它们各自的左右子节点是否相同。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/zurut.png",alt:""}})]),s._v(" "),a("p",[s._v("匹配结果是 B 与 A 的一个子树拥有相同的结构和节点值。")]),s._v(" "),a("p",[s._v("为了帮助你更好的理解整个过程，我特意做了一组动画，"),a("strong",[s._v("点开可以查看")]),s._v("：")]),s._v(" "),a("video",{attrs:{id:"video",width:"700",height:"400",muted:"muted",controls:"controls",poster:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/blog/3hdi5.jpeg"},domProps:{muted:!0}},[a("source",{attrs:{src:"https://article-1257126549.cos.ap-guangzhou.myqcloud.com/MP4/%E5%89%91%E6%8C%87%20Offer%2026.%20%E6%A0%91%E7%9A%84%E5%AD%90%E7%BB%93%E6%9E%84.m4v",type:"video/mp4"}})]),s._v(" "),a("h2",{attrs:{id:"三、参考代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[s._v("#")]),s._v(" 三、参考代码")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 登录 AlgoMooc 官网获取更多算法图解")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https://www.algomooc.com")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isSubStructure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一开始如果 A 或者 B 为空，直接返回 false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 因为题目约定空树不是任意一个树的子结构")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接下来去以下几种情况")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// A 的根节点 VS B 的根节点（ A 的左右子树的节点 VS B 的根节点）")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1、A 的根节点和 B 的根节点相同情况，依次比较它们的子节点")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2、A 的根节点和 B 的根节点不相同情况， A 的左子树 VS B 的根节点")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3、A 的根节点和 B 的根节点不相同情况， A 的右子树 VS B 的根节点")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isSub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isSubStructure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isSubStructure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isSub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// A 和 B 不匹配的情况有很多，我们需要一开始去找它们完全匹配的情况")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 即遍历完 B ，直到为 null，说明 B 的全部节点都和 A 的子结构匹配上")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// A 中的节点为空，但 B 中的节点不为空，说明不匹配")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// A 和 B 都不为空 ，但数值不同，说明不匹配")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时，当前这个点是匹配的，继续递归判断左子树和右子树是否「分别匹配」")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isSub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isSub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);