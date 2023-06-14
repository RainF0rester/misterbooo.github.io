(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{542:function(t,a,s){"use strict";s.r(a);var n=s(54),o=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"leetcode-235、二叉搜索树的最近公共祖先"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-235、二叉搜索树的最近公共祖先"}},[t._v("#")]),t._v(" LeetCode 235、二叉搜索树的最近公共祖先")]),t._v(" "),s("h2",{attrs:{id:"一、题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),s("strong",[t._v("一、题目描述")])]),t._v(" "),s("p",[t._v("给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。")]),t._v(" "),s("h2",{attrs:{id:"二、题目解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),s("strong",[t._v("二、题目解析")])]),t._v(" "),s("h2",{attrs:{id:"三、参考代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),s("strong",[t._v("三、参考代码")])]),t._v(" "),s("h3",{attrs:{id:"_1、java-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),s("strong",[t._v("1、Java 代码")])]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二叉搜索树的最近公共祖先（ LeetCode 235 ）:https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lowestCommonAncestor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二叉搜索树的特点是，对于每一个节点 root 来说")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// root.left < root < root.right")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果说 root 是 p、q 的最近公共祖先，也就意味值 p、q 在 root 的两侧")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设 p 在 root 的左侧，q 在 root 的右侧")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么 p.val < root.val < q.val")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、root.val - p.val > 0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、root.val - q.val < 0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即 ( root.val - p.val ) * ( root.val - q.val ) < 0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，如果发现 ( root.val - p.val ) * ( root.val - q.val ) > 0 ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 说明 p、q 在 root 的同一侧，不是最近公共祖先")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要搜索 root 的左右子树")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于所有节点的值都是唯一的，当出现 ( root.val - p.val ) * ( root.val - q.val ) = 0 时")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 说明 p、q 中有一个节点是 root 节点，即 p 是 q 的祖先节点，或者 q 是 p 的祖先节点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("（"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当进入到这个循环的时候，说明 p、q 在 root 的同一侧")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 p.val < root.val，也说明 q.val < root.val，因为只有这样，乘积才能大于 0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接下来往左子树寻找")]),t._v("\n                root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 p.val > root.val，也说明 q.val > root.val，因为只有这样，乘积才能大于 0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接下来往右子树寻找")]),t._v("\n                root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳出循环，说明 (root.val - p.val) * (root.val - q.val) <= 0 ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，root 就是 p 、q 的最近公共祖先节点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2、c-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、c-代码"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2、C++ 代码")])]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二叉搜索树的最近公共祖先（ LeetCode 235 ）:https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/")]),t._v("\nclass Solution "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\npublic"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    TreeNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lowestCommonAncestor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TreeNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TreeNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TreeNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二叉搜索树的特点是，对于每一个节点 root 来说")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// root->left < root < root->right")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果说 root 是 p、q 的最近公共祖先，也就意味值 p、q 在 root 的两侧")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设 p 在 root 的左侧，q 在 root 的右侧")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么 p->val < root->val < q->val")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、root->val - p->val > 0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、root->val - q->val < 0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即 ( root->val - p->val ) * ( root->val - q->val ) < 0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以，如果发现 ( root->val - p->val ) * ( root->val - q->val ) > 0 ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 说明 p、q 在 root 的同一侧，不是最近公共祖先")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要搜索 root 的左右子树")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于所有节点的值都是唯一的，当出现 ( root->val - p->val ) * ( root->val - q->val ) = 0 时")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 说明 p、q 中有一个节点是 root 节点，即 p 是 q 的祖先节点，或者 q 是 p 的祖先节点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当进入到这个循环的时候，说明 p、q 在 root 的同一侧")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 p->val < root->val，也说明 q->val < root->val，因为只有这样，乘积才能大于 0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接下来往左子树寻找")]),t._v("\n                root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 p->val > root->val，也说明 q->val > root->val，因为只有这样，乘积才能大于 0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接下来往右子树寻找")]),t._v("\n                root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳出循环，说明 (root->val - p->val) * (root->val - q->val) <= 0 ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时，root 就是 p 、q 的最近公共祖先节点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3、python-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),s("strong",[t._v("3、Python 代码")])]),t._v(" "),s("div",{staticClass:"language-Python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("登录 AlgoMooc 官网获取更多算法图解\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://www.algomooc.com")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 作者：程序员吴师兄")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 二叉搜索树的最近公共祖先（ LeetCode 235 ）:https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lowestCommonAncestor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TreeNode'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TreeNode'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TreeNode'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TreeNode'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 二叉搜索树的特点是，对于每一个节点 root 来说")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# root.left < root < root.right")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果说 root 是 p、q 的最近公共祖先，也就意味值 p、q 在 root 的两侧")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设 p 在 root 的左侧，q 在 root 的右侧")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么 p.val < root.val < q.val")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、root.val - p.val > 0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、root.val - q.val < 0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 即 ( root.val - p.val ) * ( root.val - q.val ) < 0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以，如果发现 ( root.val - p.val ) * ( root.val - q.val ) > 0 ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明 p、q 在 root 的同一侧，不是最近公共祖先")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要搜索 root 的左右子树")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于所有节点的值都是唯一的，当出现 ( root.val - p.val ) * ( root.val - q.val ) = 0 时")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明 p、q 中有一个节点是 root 节点，即 p 是 q 的祖先节点，或者 q 是 p 的祖先节点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当进入到这个循环的时候，说明 p、q 在 root 的同一侧")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 p.val < root.val，也说明 q.val < root.val，因为只有这样，乘积才能大于 0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接下来往左子树寻找")]),t._v("\n                root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 p.val > root.val，也说明 q.val > root.val，因为只有这样，乘积才能大于 0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接下来往右子树寻找")]),t._v("\n                root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right\n\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跳出循环，说明 (root.val - p.val) * (root.val - q.val) <= 0 ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时，root 就是 p 、q 的最近公共祖先节点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root\n")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);