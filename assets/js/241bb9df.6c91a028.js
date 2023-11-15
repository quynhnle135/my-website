"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[847],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=p(t),c=o,m=s["".concat(d,".").concat(c)]||s[c]||u[c]||a;return t?r.createElement(m,l(l({ref:n},f),{},{components:t})):r.createElement(m,l({ref:n},f))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={title:"Oct 4"},l=void 0,i={unversionedId:"learning-journal/2023/October/oct_04_23",id:"learning-journal/2023/October/oct_04_23",title:"Oct 4",description:"Tree BFS review",source:"@site/docs/learning-journal/2023/October/oct_04_23.md",sourceDirName:"learning-journal/2023/October",slug:"/learning-journal/2023/October/oct_04_23",permalink:"/my-website/docs/learning-journal/2023/October/oct_04_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Oct 4"},sidebar:"tutorialSidebar",previous:{title:"Oct 3",permalink:"/my-website/docs/learning-journal/2023/October/oct_03_23"},next:{title:"Oct 5",permalink:"/my-website/docs/learning-journal/2023/October/oct_05_23"}},d={},p=[{value:"Tree BFS review",id:"tree-bfs-review",level:3},{value:"Tree DFS review",id:"tree-dfs-review",level:3},{value:"Tree Level Order Traversal (applied BFS)",id:"tree-level-order-traversal-applied-bfs",level:2},{value:"Binary tree path (applied DFS)",id:"binary-tree-path-applied-dfs",level:3},{value:"Maximum depth of a binary tree (applied DFS)",id:"maximum-depth-of-a-binary-tree-applied-dfs",level:3},{value:"Leetcode",id:"leetcode",level:3},{value:"Design Hashmap (Daily challenge)",id:"design-hashmap-daily-challenge",level:4},{value:"Number of good pairs",id:"number-of-good-pairs",level:4}],f={toc:p},s="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"tree-bfs-review"},"Tree BFS review"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef bfs(root):\n    queue = [root]\n    visited = []\n    traversal = []\n    while queue:\n        node = queue.pop(0)\n        traversal.append(node.val)\n        if node.left:\n            queue.append(node.left)\n        if node.right:\n            queue.append(node.right)\n    return traversal\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(bfs(root))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,o.kt)("h3",{id:"tree-dfs-review"},"Tree DFS review"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef dfs(root):\n    stack = [root]\n    traversal = []\n    while stack:\n        node = stack.pop()\n        traversal.append(node.val)\n        if node.left:\n            stack.append(node.left)\n        if node.right:\n            stack.append(node.right)\n    return traversal\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(dfs(root))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h2",{id:"tree-level-order-traversal-applied-bfs"},"Tree Level Order Traversal (applied BFS)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef tree_level_traversal(root):\n    queue = []\n    result = []\n    if not root:\n        return result\n    queue.append(root)\n    while queue:\n        level = len(queue)\n        level_list = []\n        for i in range(level):\n            node = queue.pop(0)\n            level_list.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        result.append(level_list)\n    return result\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(tree_level_traversal(root))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,o.kt)("h3",{id:"binary-tree-path-applied-dfs"},"Binary tree path (applied DFS)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef binary_tree_path(root):\n    if not root:\n        return []\n    paths = []\n    dfs(root, "", paths)\n    return paths\n\n\ndef dfs(node, current_path, paths):\n    if not node:\n        return\n    current_path += str(node.val)\n    if not node.left and not node.right:\n        paths.append(current_path)\n    current_path += str("->")\n    dfs(node.left, current_path, paths)\n    dfs(node.right, current_path, paths)\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(binary_tree_path(root))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h3",{id:"maximum-depth-of-a-binary-tree-applied-dfs"},"Maximum depth of a binary tree (applied DFS)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef find_max_depth(root):\n    if not root:\n        return 0\n    leftDepth = find_max_depth(root.left)\n    rightDepth = find_max_depth(root.right)\n\n    return 1 + max(leftDepth, rightDepth)\n\n\ndef findMaxDepth(root):\n    stack = [(root, 1)]\n    max_depth = 0\n    while stack:\n        node, depth = stack.pop()\n        max_depth = max(max_depth, depth)\n        if node.left:\n            stack.append((node.left, depth + 1))\n        if node.right:\n            stack.append((node.right, depth + 1))\n    return max_depth\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    root.left.right.left = Node(6)\n    print(find_max_depth(root))\n    print(findMaxDepth(root))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h3",{id:"leetcode"},"Leetcode"),(0,o.kt)("h4",{id:"design-hashmap-daily-challenge"},"Design Hashmap (Daily challenge)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class MyHashMap(object):\n\n    def __init__(self):\n        self.map = []\n\n    def put(self, key, value):\n        """\n        :type key: int\n        :type value: int\n        :rtype: None\n        """\n        for k in self.map:\n            if k[0] == key:\n                k[1] = value\n                return\n        self.map.append([key, value])\n        \n\n    def get(self, key):\n        """\n        :type key: int\n        :rtype: int\n        """\n        for k in self.map:\n            if k[0] == key:\n                return k[1]\n        return -1\n        \n\n    def remove(self, key):\n        """\n        :type key: int\n        :rtype: None\n        """\n        for k in self.map:\n            if k[0] == key:\n                self.map.remove([k[0], k[1]])\n                return\n        \n\n\n# Your MyHashMap object will be instantiated and called as such:\n# obj = MyHashMap()\n# obj.put(key,value)\n# param_2 = obj.get(key)\n# obj.remove(key)\n')),(0,o.kt)("h4",{id:"number-of-good-pairs"},"Number of good pairs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution(object):\n    def numIdenticalPairs(self, nums):\n        """\n        :type nums: List[int]\n        :rtype: int\n        """\n        count = 0\n        num_dict = {}\n        for number in nums:\n            if number in num_dict:\n                count += num_dict[number]\n                num_dict[number] += 1\n            else:\n                num_dict[number] = 1\n        return count\n')))}u.isMDXComponent=!0}}]);