"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[793],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),u=o,m=f["".concat(d,".").concat(u)]||f[u]||p[u]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={title:"Day 8"},i=void 0,l={unversionedId:"leetcode-grinding/leetcode-75/day-8",id:"leetcode-grinding/leetcode-75/day-8",title:"Day 8",description:"Finish Stack category",source:"@site/docs/leetcode-grinding/leetcode-75/day-8.md",sourceDirName:"leetcode-grinding/leetcode-75",slug:"/leetcode-grinding/leetcode-75/day-8",permalink:"/my-website/docs/leetcode-grinding/leetcode-75/day-8",draft:!1,tags:[],version:"current",frontMatter:{title:"Day 8"},sidebar:"tutorialSidebar",previous:{title:"Day 7",permalink:"/my-website/docs/leetcode-grinding/leetcode-75/day-7"},next:{title:"About My Projects",permalink:"/my-website/docs/intro"}},d={},s=[{value:"Finish Stack category",id:"finish-stack-category",level:2},{value:"Decode String",id:"decode-string",level:4},{value:"Maximum Depth of Binary Tree",id:"maximum-depth-of-binary-tree",level:3},{value:"Leaf Similar Tree",id:"leaf-similar-tree",level:3},{value:"Count Good Nodes",id:"count-good-nodes",level:3}],c={toc:s},f="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(f,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"finish-stack-category"},"Finish Stack category"),(0,o.kt)("h4",{id:"decode-string"},"Decode String"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution(object):\n    def decodeString(self, s):\n        nums = []\n        num = 0\n        strs = []\n        curr_str = ""\n        for c in s:\n            if c.isdigit():\n                num = num * 10 + int(c)\n            elif c == "[":\n                nums.append(num)\n                strs.append(curr_str)\n                num = 0\n                curr_str = ""\n            elif c == "]":\n                prev_str = strs.pop()\n                repeat = nums.pop()\n                curr_str = prev_str + repeat * curr_str\n            else:\n                curr_str += c\n        return curr_str\n\n\ndef main():\n    solution = Solution()\n    # print(solution.decodeString("3[a]2[b]"))\n    print(solution.decodeString("3[a2[c]]"))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,o.kt)("h1",{id:"binary-tree-dfs"},"Binary Tree (DFS)"),(0,o.kt)("h3",{id:"maximum-depth-of-binary-tree"},"Maximum Depth of Binary Tree"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef find_max_depth(root):\n    if not root:\n        return 0\n    left_depth = find_max_depth(root.left)\n    right_depth = find_max_depth(root.right)\n\n    return 1 + max(left_depth, right_depth)\n\n\ndef find_max_depth_iterative(root):\n    stack = [(root, 1)]\n    max_depth = 0\n    while stack:\n        node = stack.pop()\n        depth = node[1]\n        cur_node = node[0]\n        max_depth = max(max_depth, depth)\n        if cur_node.left:\n            stack.append((cur_node.left, depth + 1))\n        if cur_node.right:\n            stack.append((cur_node.right, depth + 1))\n    return max_depth\n\n\ndef main():\n    root = TreeNode(5)\n    root.left = TreeNode(3)\n    root.left.left = TreeNode(1)\n    root.left.left.left = TreeNode(7)\n    root.left.right = TreeNode(4)\n    root.right = TreeNode(6)\n    print(find_max_depth(root))\n    print(find_max_depth_iterative(root))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,o.kt)("h3",{id:"leaf-similar-tree"},"Leaf Similar Tree"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef leaf_similar(root1, root2):\n    leaves1 = dfs(root1, [])\n    leaves2 = dfs(root2, [])\n\n    return leaves1 == leaves2\n\n\ndef leaf_similar_iterative(root1, root2):\n    def get_leaves(node):\n        if not node:\n            return\n        stack = [node]\n        leaves = []\n        while stack:\n            cur_node = stack.pop()\n            if not cur_node.left and not cur_node.right:\n                leaves.append(cur_node.val)\n            if cur_node.left:\n                stack.append(cur_node.left)\n            if cur_node.right:\n                stack.append(cur_node.right)\n        return leaves\n    leaves1 = get_leaves(root1)\n    leaves2 = get_leaves(root2)\n\n    return leaves1 == leaves2\n\n\ndef dfs(node, leaves):\n    if not node:\n        return\n    if not node.left and not node.right:\n        leaves.append(node.val)\n    else:\n        dfs(node.left, leaves)\n        dfs(node.right, leaves)\n    return leaves\n\n\ndef main():\n    root1 = TreeNode(1)\n    root1.left = TreeNode(2)\n    root1.right = TreeNode(3)\n\n    root2 = TreeNode(1)\n    root2.left = TreeNode(3)\n    root2.right = TreeNode(2)\n\n    print(leaf_similar(root1, root2))\n    print(leaf_similar_iterative(root1, root2))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,o.kt)("h3",{id:"count-good-nodes"},"Count Good Nodes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef count_good_nodes(root):\n    def dfs(node, max_val):\n        if not node:\n            return 0\n        count = 0\n        if node.val >= max_val:\n            max_val = node.val\n            count += 1\n        count += dfs(node.left, max_val)\n        count += dfs(node.right, max_val)\n\n        return count\n    return dfs(root, float("-inf"))\n\n\ndef main():\n    root = TreeNode(3)\n    root.left = TreeNode(3)\n    root.left.left = TreeNode(4)\n    root.left.right = TreeNode(2)\n\n    print(count_good_nodes(root))\n\n\nif __name__ == "__main__":\n    main()\n\n')))}p.isMDXComponent=!0}}]);