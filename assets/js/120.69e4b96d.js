(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{505:function(n,t,v){"use strict";v.r(t);var _=v(54),r=Object(_.a)({},(function(){var n=this,t=n.$createElement,v=n._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[v("h1",{attrs:{id:"剑指-offer-66-构建乘积数组"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#剑指-offer-66-构建乘积数组"}},[n._v("#")]),n._v(" 剑指 Offer 66. 构建乘积数组")]),n._v(" "),v("h2",{attrs:{id:"一、题目描述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[n._v("#")]),n._v(" "),v("strong",[n._v("一、题目描述")])]),n._v(" "),v("p",[n._v("给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。")]),n._v(" "),v("p",[v("strong",[n._v("不能使用除法。")])]),n._v(" "),v("p",[v("strong",[n._v("示例:")])]),n._v(" "),v("p",[n._v("输入: [1,2,3,4,5] 输出: [120,60,40,30,24]")]),n._v(" "),v("p",[v("strong",[n._v("提示：")])]),n._v(" "),v("ul",[v("li",[n._v("所有元素乘积之和不会溢出 32 位整数")]),n._v(" "),v("li",[v("code",[n._v("a.length <= 100000")])])]),n._v(" "),v("h2",{attrs:{id:"二、题目解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、题目解析"}},[n._v("#")]),n._v(" "),v("strong",[n._v("二、题目解析")])]),n._v(" "),v("p",[n._v("按照正常的思路，既然 "),v("strong",[n._v("B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]")]),n._v("，那么想要计算出 B[i] 来那每次都去遍历数组 A，把这些数字相乘就行了。")]),n._v(" "),v("p",[n._v("而数组 B 的长度为 n，并且计算数组 B 中的每个元素时都需要完整的遍历一遍数组 A，而数组 A 的长度为 n，那么整体的时间复杂度就达到了 O(N(2)) 级别，按照这个逻辑写出的代码提交会超时。")]),n._v(" "),v("p",[n._v("那么哪里可以优化呢？")]),n._v(" "),v("p",[v("strong",[n._v("上面的暴力解法中充斥着大量重复的计算")]),n._v("！")]),n._v(" "),v("p",[n._v("比如数组 A 为  [1,2,3,4,5] 。")]),n._v(" "),v("p",[n._v("1、想要计算除了 2 以外的结果时，需要计算 1 * 3 * "),v("strong",[n._v("4 * 5")]),n._v("。")]),n._v(" "),v("p",[n._v("2、想要计算除了 3 以外的结果时，需要计算 1 * 2 * "),v("strong",[n._v("4 * 5")]),n._v("。")]),n._v(" "),v("p",[n._v("注意到，这两个计算过程都计算了 "),v("strong",[n._v("1")]),n._v(" 和 "),v("strong",[n._v("4 * 5")]),n._v(" 。")]),n._v(" "),v("p",[n._v("所以，我们优化的方向就是去保存好计算的结果，避免重复计算。")]),n._v(" "),v("p",[v("strong",[n._v("1")]),n._v(" 出现在 2 和 3 的左侧，"),v("strong",[n._v("4 * 5")]),n._v(" 出现在 2 和 3 的右侧，它们分别可以使用数组提前计算保存下来。")]),n._v(" "),v("p",[n._v("在公式  "),v("strong",[n._v("B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]")]),n._v(" 中，实际上可以划分为两个部分，从 0 到 i - 1 和从 i + 1 到 n - 1，因此，想要构建乘积数组后某下标对应元素的值，只需要求出该下标对应"),v("strong",[n._v("原数组中其左边的元素的乘积和其右边的元素的乘积")]),n._v("，最后"),v("strong",[n._v("将两个乘积再相乘")]),n._v("即可。")]),n._v(" "),v("p",[n._v("具体操作如下：")]),n._v(" "),v("p",[n._v("数组 A 为  [1,2,3,4,5] 。")]),n._v(" "),v("p",[n._v("1、数组 left[i] 表示在数组 A 中下标为 i 的"),v("strong",[n._v("所有左边元素的乘积")]),n._v("，如果左边没有元素，默认为 1。")]),n._v(" "),v("p",[n._v("2、数组 right[i] 表示在数组 A 中下标为 i 的"),v("strong",[n._v("所有右边元素的乘积")]),n._v("，如果右边没有元素，默认为 1。")]),n._v(" "),v("p",[n._v("3、B[i] =  left[i] *  right[i] 。")]),n._v(" "),v("p",[v("img",{attrs:{src:"https://superblog-1257126549.cos.ap-guangzhou.myqcloud.com/202306100949768.(null)",alt:"img"}})]),n._v(" "),v("p",[v("img",{attrs:{src:"https://r07na4yqwor.feishu.cn/space/api/box/stream/download/asynccode/?code=YzZiZGIwZTZhNDNiZGYyYzk3Yzg3OTQxMjE5MGEyYjFfeHdHWlBSdUpPbTllc3d0amRDdHJwZVVISHZYTnpkdE9fVG9rZW46RE5SN2JIaUpsb2syR3F4cWx0SGNwVUdHbndVXzE2ODYzNjE3NjI6MTY4NjM2NTM2Ml9WNA",alt:"img"}})]),n._v(" "),v("h2",{attrs:{id:"三、参考代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、参考代码"}},[n._v("#")]),n._v(" "),v("strong",[n._v("三、参考代码")])]),n._v(" "),v("div",{staticClass:"language-C++ extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[n._v("// 登录 AlgoMooc 官网获取更多算法图解\n// https://www.algomooc.com\n// 作者：程序员吴师兄\n// 代码有看不懂的地方一定要私聊咨询吴师兄呀\n// 剑指 Offer 66. 构建乘积数组:https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/\nclass Solution {\n    public int[] constructArr(int[] a) {\n\n        // 边界判断\n        if( a == null || a.length == 0 ) return a;\n\n        // 获取数组 a 的长度\n        int length = a.length;\n\n        // 数组 leftA 表示数组 a 中每个元素左边所有元素的乘积\n        // 比如 left[5] 表示数组 a 中下标为 5 的元素的左边所有元素的乘积\n        // 即 left[5] = a[0] * a[1] * a[2] * a[3] * a[4]\n        int[] leftA = new int[length];\n\n        // 数组 rightA 表示数组 a 中每个元素右边边所有元素的乘积\n        // 比如 rightA[3] 表示数组 a 中下标为 3 的元素的右边边所有元素的乘积\n        // 即 rightA[3] =  a[4] * a[5]\n        int[] rightA = new int[length];\n\n        // 由于任何数与 1 相乘都是它本身，因此，如果发现元素左边没有元素时，默认值为 1\n        // 这样就不会影响到后面的计算\n        leftA[0] = 1;\n        \n        // 由于任何数与 1 相乘都是它本身，因此，如果发现元素右边没有元素时，默认值为 1\n        // 这样就不会影响到后面的计算\n        rightA[length - 1] = 1;\n\n        // 开始不断填充 leftA\n        for( int i = 1 ; i < length ; i++ ){\n            leftA[i] = leftA[ i - 1 ] * a[ i - 1 ];\n        }\n\n        // 开始不断填充 rightA\n        for( int j = length - 2 ; j >= 0 ; j-- ){\n            rightA[j] = rightA[ j + 1 ] * a[ j + 1 ];\n        }\n\n        // 数组 B 存放结果\n        int[] B = new int[length];\n\n        // 只求出该下标对应原数组中其左边的元素的乘积和其右边的元素的乘积\n        // 最后将两个乘积再相乘即可\n        for( int k = 0 ; k < length ; k++){\n            B[k] = leftA[k] * rightA[k];\n        }\n\n        // 返回数组 B\n        return B;\n\n    }\n}\n")])])]),v("h2",{attrs:{id:"四、时间复杂度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、时间复杂度"}},[n._v("#")]),n._v(" "),v("strong",[n._v("四、时间复杂度")])]),n._v(" "),v("p",[n._v("1、时间复杂度 O(N) ： 其中 N 为数组长度，三轮遍历数组 a ，使用 O(N) 时间。")]),n._v(" "),v("p",[n._v("2、空间复杂度 O(N) ： 额外创建了两个数组")])])}),[],!1,null,null,null);t.default=r.exports}}]);