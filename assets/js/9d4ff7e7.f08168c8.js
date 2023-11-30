"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9742],{3545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(5893),o=t(1151);const l={title:"Oct 04, 2023"},a="Coding Journal: Oct 04, 2023",i={id:"learning-journal/October/20231004",title:"Oct 04, 2023",description:"Tree BFS review",source:"@site/docs/learning-journal/October/20231004.md",sourceDirName:"learning-journal/October",slug:"/learning-journal/October/20231004",permalink:"/my-website/docs/learning-journal/October/20231004",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Oct 04, 2023"},sidebar:"tutorialSidebar",previous:{title:"Oct 03, 2023",permalink:"/my-website/docs/learning-journal/October/20231003"},next:{title:"Oct 05, 2023",permalink:"/my-website/docs/learning-journal/October/20231005"}},d={},s=[{value:"Tree BFS review",id:"tree-bfs-review",level:3},{value:"Tree DFS review",id:"tree-dfs-review",level:3},{value:"Tree Level Order Traversal (applied BFS)",id:"tree-level-order-traversal-applied-bfs",level:3},{value:"Binary tree path (applied DFS)",id:"binary-tree-path-applied-dfs",level:3},{value:"Maximum depth of a binary tree (applied DFS)",id:"maximum-depth-of-a-binary-tree-applied-dfs",level:3},{value:"Leetcode",id:"leetcode",level:3},{value:"Design Hashmap (Daily challenge)",id:"design-hashmap-daily-challenge",level:4},{value:"Number of good pairs",id:"number-of-good-pairs",level:4}];function f(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"coding-journal-oct-04-2023",children:"Coding Journal: Oct 04, 2023"}),"\n",(0,r.jsx)(n.h3,{id:"tree-bfs-review",children:"Tree BFS review"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef bfs(root):\n    queue = [root]\n    visited = []\n    traversal = []\n    while queue:\n        node = queue.pop(0)\n        traversal.append(node.val)\n        if node.left:\n            queue.append(node.left)\n        if node.right:\n            queue.append(node.right)\n    return traversal\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(bfs(root))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tree-dfs-review",children:"Tree DFS review"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef dfs(root):\n    stack = [root]\n    traversal = []\n    while stack:\n        node = stack.pop()\n        traversal.append(node.val)\n        if node.left:\n            stack.append(node.left)\n        if node.right:\n            stack.append(node.right)\n    return traversal\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(dfs(root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tree-level-order-traversal-applied-bfs",children:"Tree Level Order Traversal (applied BFS)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef tree_level_traversal(root):\n    queue = []\n    result = []\n    if not root:\n        return result\n    queue.append(root)\n    while queue:\n        level = len(queue)\n        level_list = []\n        for i in range(level):\n            node = queue.pop(0)\n            level_list.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        result.append(level_list)\n    return result\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(tree_level_traversal(root))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"binary-tree-path-applied-dfs",children:"Binary tree path (applied DFS)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef binary_tree_path(root):\n    if not root:\n        return []\n    paths = []\n    dfs(root, "", paths)\n    return paths\n\n\ndef dfs(node, current_path, paths):\n    if not node:\n        return\n    current_path += str(node.val)\n    if not node.left and not node.right:\n        paths.append(current_path)\n    current_path += str("->")\n    dfs(node.left, current_path, paths)\n    dfs(node.right, current_path, paths)\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(binary_tree_path(root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"maximum-depth-of-a-binary-tree-applied-dfs",children:"Maximum depth of a binary tree (applied DFS)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef find_max_depth(root):\n    if not root:\n        return 0\n    leftDepth = find_max_depth(root.left)\n    rightDepth = find_max_depth(root.right)\n\n    return 1 + max(leftDepth, rightDepth)\n\n\ndef findMaxDepth(root):\n    stack = [(root, 1)]\n    max_depth = 0\n    while stack:\n        node, depth = stack.pop()\n        max_depth = max(max_depth, depth)\n        if node.left:\n            stack.append((node.left, depth + 1))\n        if node.right:\n            stack.append((node.right, depth + 1))\n    return max_depth\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    root.left.right.left = Node(6)\n    print(find_max_depth(root))\n    print(findMaxDepth(root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"leetcode",children:"Leetcode"}),"\n",(0,r.jsx)(n.h4,{id:"design-hashmap-daily-challenge",children:"Design Hashmap (Daily challenge)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class MyHashMap(object):\n\n    def __init__(self):\n        self.map = []\n\n    def put(self, key, value):\n        """\n        :type key: int\n        :type value: int\n        :rtype: None\n        """\n        for k in self.map:\n            if k[0] == key:\n                k[1] = value\n                return\n        self.map.append([key, value])\n        \n\n    def get(self, key):\n        """\n        :type key: int\n        :rtype: int\n        """\n        for k in self.map:\n            if k[0] == key:\n                return k[1]\n        return -1\n        \n\n    def remove(self, key):\n        """\n        :type key: int\n        :rtype: None\n        """\n        for k in self.map:\n            if k[0] == key:\n                self.map.remove([k[0], k[1]])\n                return\n        \n\n\n# Your MyHashMap object will be instantiated and called as such:\n# obj = MyHashMap()\n# obj.put(key,value)\n# param_2 = obj.get(key)\n# obj.remove(key)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"number-of-good-pairs",children:"Number of good pairs"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Solution(object):\n    def numIdenticalPairs(self, nums):\n        """\n        :type nums: List[int]\n        :rtype: int\n        """\n        count = 0\n        num_dict = {}\n        for number in nums:\n            if number in num_dict:\n                count += num_dict[number]\n                num_dict[number] += 1\n            else:\n                num_dict[number] = 1\n        return count\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(7294);const o={},l=r.createContext(o);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);