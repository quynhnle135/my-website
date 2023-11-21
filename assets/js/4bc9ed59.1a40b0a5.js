"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[960],{8612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=t(5893),o=t(1151);const i={title:"Day 8"},a=void 0,d={id:"daily-practice/2023/day-8",title:"Day 8",description:"Finish Stack category",source:"@site/docs/daily-practice/2023/day-8.md",sourceDirName:"daily-practice/2023",slug:"/daily-practice/2023/day-8",permalink:"/my-website/docs/daily-practice/2023/day-8",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Day 8"},sidebar:"tutorialSidebar",previous:{title:"Day 7",permalink:"/my-website/docs/daily-practice/2023/day-7"},next:{title:"Tech Blogs",permalink:"/my-website/docs/category/tech-blogs"}},l={},s=[{value:"Finish Stack category",id:"finish-stack-category",level:2},{value:"Decode String",id:"decode-string",level:4},{value:"Maximum Depth of Binary Tree",id:"maximum-depth-of-binary-tree",level:3},{value:"Leaf Similar Tree",id:"leaf-similar-tree",level:3},{value:"Count Good Nodes",id:"count-good-nodes",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"finish-stack-category",children:"Finish Stack category"}),"\n",(0,r.jsx)(n.h4,{id:"decode-string",children:"Decode String"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Solution(object):\n    def decodeString(self, s):\n        nums = []\n        num = 0\n        strs = []\n        curr_str = ""\n        for c in s:\n            if c.isdigit():\n                num = num * 10 + int(c)\n            elif c == "[":\n                nums.append(num)\n                strs.append(curr_str)\n                num = 0\n                curr_str = ""\n            elif c == "]":\n                prev_str = strs.pop()\n                repeat = nums.pop()\n                curr_str = prev_str + repeat * curr_str\n            else:\n                curr_str += c\n        return curr_str\n\n\ndef main():\n    solution = Solution()\n    # print(solution.decodeString("3[a]2[b]"))\n    print(solution.decodeString("3[a2[c]]"))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,r.jsx)(n.h1,{id:"binary-tree-dfs",children:"Binary Tree (DFS)"}),"\n",(0,r.jsx)(n.h3,{id:"maximum-depth-of-binary-tree",children:"Maximum Depth of Binary Tree"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef find_max_depth(root):\n    if not root:\n        return 0\n    left_depth = find_max_depth(root.left)\n    right_depth = find_max_depth(root.right)\n\n    return 1 + max(left_depth, right_depth)\n\n\ndef find_max_depth_iterative(root):\n    stack = [(root, 1)]\n    max_depth = 0\n    while stack:\n        node = stack.pop()\n        depth = node[1]\n        cur_node = node[0]\n        max_depth = max(max_depth, depth)\n        if cur_node.left:\n            stack.append((cur_node.left, depth + 1))\n        if cur_node.right:\n            stack.append((cur_node.right, depth + 1))\n    return max_depth\n\n\ndef main():\n    root = TreeNode(5)\n    root.left = TreeNode(3)\n    root.left.left = TreeNode(1)\n    root.left.left.left = TreeNode(7)\n    root.left.right = TreeNode(4)\n    root.right = TreeNode(6)\n    print(find_max_depth(root))\n    print(find_max_depth_iterative(root))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"leaf-similar-tree",children:"Leaf Similar Tree"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef leaf_similar(root1, root2):\n    leaves1 = dfs(root1, [])\n    leaves2 = dfs(root2, [])\n\n    return leaves1 == leaves2\n\n\ndef leaf_similar_iterative(root1, root2):\n    def get_leaves(node):\n        if not node:\n            return\n        stack = [node]\n        leaves = []\n        while stack:\n            cur_node = stack.pop()\n            if not cur_node.left and not cur_node.right:\n                leaves.append(cur_node.val)\n            if cur_node.left:\n                stack.append(cur_node.left)\n            if cur_node.right:\n                stack.append(cur_node.right)\n        return leaves\n    leaves1 = get_leaves(root1)\n    leaves2 = get_leaves(root2)\n\n    return leaves1 == leaves2\n\n\ndef dfs(node, leaves):\n    if not node:\n        return\n    if not node.left and not node.right:\n        leaves.append(node.val)\n    else:\n        dfs(node.left, leaves)\n        dfs(node.right, leaves)\n    return leaves\n\n\ndef main():\n    root1 = TreeNode(1)\n    root1.left = TreeNode(2)\n    root1.right = TreeNode(3)\n\n    root2 = TreeNode(1)\n    root2.left = TreeNode(3)\n    root2.right = TreeNode(2)\n\n    print(leaf_similar(root1, root2))\n    print(leaf_similar_iterative(root1, root2))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"count-good-nodes",children:"Count Good Nodes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef count_good_nodes(root):\n    def dfs(node, max_val):\n        if not node:\n            return 0\n        count = 0\n        if node.val >= max_val:\n            max_val = node.val\n            count += 1\n        count += dfs(node.left, max_val)\n        count += dfs(node.right, max_val)\n\n        return count\n    return dfs(root, float("-inf"))\n\n\ndef main():\n    root = TreeNode(3)\n    root.left = TreeNode(3)\n    root.left.left = TreeNode(4)\n    root.left.right = TreeNode(2)\n\n    print(count_good_nodes(root))\n\n\nif __name__ == "__main__":\n    main()\n\n'})})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var r=t(7294);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);