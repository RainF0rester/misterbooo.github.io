(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{562:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-133、克隆图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-133、克隆图"}},[t._v("#")]),t._v(" LeetCode 133、克隆图")]),t._v(" "),n("h2",{attrs:{id:"一、题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、题目描述")])]),t._v(" "),n("p",[t._v("给你无向 "),n("a",{attrs:{href:"https://baike.baidu.com/item/%E8%BF%9E%E9%80%9A%E5%9B%BE/6460995?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("连通"),n("OutboundLink")],1),t._v(" 图中一个节点的引用，请你返回该图的 "),n("strong",[n("a",{attrs:{href:"https://baike.baidu.com/item/%E6%B7%B1%E6%8B%B7%E8%B4%9D/22785317?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("深拷贝"),n("OutboundLink")],1)]),t._v("（克隆）。")]),t._v(" "),n("p",[t._v("图中的每个节点都包含它的值 "),n("code",[t._v("val")]),t._v("（"),n("code",[t._v("int")]),t._v("） 和其邻居的列表（"),n("code",[t._v("list[Node]")]),t._v("）。")]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("class Node {\n    public int val;\n    public List<Node> neighbors;\n}\n")])])]),n("p",[n("strong",[t._v("测试用例格式：")])]),t._v(" "),n("p",[t._v("简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1（"),n("code",[t._v("val = 1")]),t._v("），第二个节点值为 2（"),n("code",[t._v("val = 2")]),t._v("），以此类推。该图在测试用例中使用邻接列表表示。")]),t._v(" "),n("p",[n("strong",[t._v("邻接列表")]),t._v(" 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。")]),t._v(" "),n("p",[t._v("给定节点将始终是图中的第一个节点（值为 1）。你必须将 "),n("strong",[t._v("给定节点的拷贝")]),t._v(" 作为对克隆图的引用返回。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306140910655.(null)",alt:"img"}})]),t._v(" "),n("p",[t._v("img")]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：adjList = [[2,4],[1,3],[2,4],[1,3]]\n输出：[[2,4],[1,3],[2,4],[1,3]]\n解释：\n图中有 4 个节点。\n节点 1 的值是 1，它有两个邻居：节点 2 和 4 。\n节点 2 的值是 2，它有两个邻居：节点 1 和 3 。\n节点 3 的值是 3，它有两个邻居：节点 2 和 4 。\n节点 4 的值是 4，它有两个邻居：节点 1 和 3 。\n")])])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306140910814.(null)",alt:"img"}})]),t._v(" "),n("p",[t._v("img")]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：adjList = [[]]\n输出：[[]]\n解释：输入包含一个空列表。该图仅仅只有一个值为 1 的节点，它没有任何邻居。\n")])])]),n("p",[n("strong",[t._v("示例 3：")])]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：adjList = []\n输出：[]\n解释：这个图是空的，它不含任何节点。\n")])])]),n("p",[n("strong",[t._v("示例 4：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306140910973.(null)",alt:"img"}})]),t._v(" "),n("p",[t._v("img")]),t._v(" "),n("div",{staticClass:"language-Plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("输入：adjList = [[2],[1]]\n输出：[[2],[1]]\n")])])]),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ol",[n("li",[t._v("节点数不超过 100 。")]),t._v(" "),n("li",[t._v("每个节点值 "),n("code",[t._v("Node.val")]),t._v(" 都是唯一的，"),n("code",[t._v("1 <= Node.val <= 100")]),t._v("。")]),t._v(" "),n("li",[t._v("无向图是一个"),n("a",{attrs:{href:"https://baike.baidu.com/item/%E7%AE%80%E5%8D%95%E5%9B%BE/1680528?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("简单图"),n("OutboundLink")],1),t._v("，这意味着图中没有重复的边，也没有自环。")]),t._v(" "),n("li",[t._v("由于图是无向的，如果节点 "),n("em",[t._v("p")]),t._v(" 是节点 "),n("em",[t._v("q")]),t._v(" 的邻居，那么节点 "),n("em",[t._v("q")]),t._v(" 也必须是节点 "),n("em",[t._v("p")]),t._v(" 的邻居。")]),t._v(" "),n("li",[t._v("图是连通图，你可以从给定节点访问到所有节点。")])]),t._v(" "),n("h2",{attrs:{id:"二、题目解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、题目解析")])]),t._v(" "),n("h2",{attrs:{id:"三、参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、参考代码")])]),t._v(" "),n("h3",{attrs:{id:"_1、java-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("1、Java 代码")])]),t._v(" "),n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录 AlgoMooc 官网获取更多算法图解")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.algomooc.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者：程序员吴师兄")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信：278166530")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码有看不懂的地方一定要私聊咨询吴师兄呀")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 133. 克隆图：https://leetcode.cn/problems/clone-graph/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用哈希表存储每个节点的信息")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" visited "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneGraph")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 边界处理")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果该节点已经被访问过了，则直接从哈希表中取出对应的克隆节点返回")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 克隆节点使用深拷贝")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" cloneNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用哈希表存储当前节点信息")]),t._v("\n        visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cloneNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历该节点的邻居")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" neighbor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("neighbors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 克隆当前节点的所有邻居节点")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" neighborNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneGraph")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("neighbor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把克隆成功之后的节点也都添加到克隆节点的邻居节点上")]),t._v("\n            cloneNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("neighbors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("neighborNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 完成克隆")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cloneNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2、-c-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、-c-代码"}},[t._v("#")]),t._v(" **2、**"),n("strong",[t._v("C++")]),t._v(" "),n("strong",[t._v("代码")])]),t._v(" "),n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Solution {\npublic:\n    unordered_map<Node*, Node*> visited;\n    Node* cloneGraph(Node* node) {\n        if (node == nullptr) {\n            return node;\n        }\n\n        // 如果该节点已经被访问过了，则直接从哈希表中取出对应的克隆节点返回\n        if (visited.find(node) != visited.end()) {\n            return visited[node];\n        }\n\n        // 克隆节点，注意到为了深拷贝我们不会克隆它的邻居的列表\n        Node* cloneNode = new Node(node->val);\n        // 哈希表存储\n        visited[node] = cloneNode;\n\n        // 遍历该节点的邻居并更新克隆节点的邻居列表\n        for (auto& neighbor: node->neighbors) {\n            cloneNode->neighbors.emplace_back(cloneGraph(neighbor));\n        }\n        return cloneNode;\n    }\n};\n")])])]),n("h3",{attrs:{id:"_3、python-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、python-代码"}},[t._v("#")]),t._v(" "),n("strong",[t._v("3、Python 代码")])]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visited "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneGraph")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type node: Node\n        :rtype: Node\n        """')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" node\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果该节点已经被访问过了，则直接从哈希表中取出对应的克隆节点返回")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" node "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆节点，注意到为了深拷贝我们不会克隆它的邻居的列表")]),t._v("\n        clone_node "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 哈希表存储")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" clone_node\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 遍历该节点的邻居并更新克隆节点的邻居列表")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("neighbors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            clone_node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("neighbors "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloneGraph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("neighbors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" clone_node\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);