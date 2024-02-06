"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1278],{5587:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>_,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=r(5893),o=r(1151);const l={title:"Jan 30, 2024"},a="Coding Journal: Jan 30, 2024",i={id:"learning-journal/2024/January/20240130",title:"Jan 30, 2024",description:"- Continued with job search (21 applications)",source:"@site/docs/learning-journal/2024/January/20240130.md",sourceDirName:"learning-journal/2024/January",slug:"/learning-journal/2024/January/20240130",permalink:"/docs/learning-journal/2024/January/20240130",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Jan 30, 2024"},sidebar:"tutorialSidebar",previous:{title:"Jan 29, 2024",permalink:"/docs/learning-journal/2024/January/20240129"},next:{title:"Javascript Ramp Up",permalink:"/docs/category/javascript-ramp-up"}},s={},d=[];function f(e){const n={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"coding-journal-jan-30-2024",children:"Coding Journal: Jan 30, 2024"}),"\n",(0,t.jsx)(n.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Continued with job search (21 applications)"}),"\n",(0,t.jsxs)(n.li,{children:["Continued solving Leetcode to prepare for technical interviews:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Tree:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Binary Tree Traversal (pre-order, in-order, post-order)"}),"\n",(0,t.jsx)(n.li,{children:"Binary Tree Level Traversal (I & II)"}),"\n",(0,t.jsx)(n.li,{children:"Leaf Similar Trees"}),"\n",(0,t.jsx)(n.li,{children:"Same Tree"}),"\n",(0,t.jsx)(n.li,{children:"Maximum Depth of Binary Tree"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"2-questions-i-had",children:"2. Questions I Had"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"I don't have any question for today."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"I don't find anything challenging for today."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Binary tree pre-order traversal"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef pre_order_traversal(root: TreeNode):\n    return pre_order_traversal_helper(root, [])\n\n\ndef pre_order_traversal_helper(root: TreeNode, traversal: []):\n    if root:\n        traversal.append(root.val)\n        pre_order_traversal_helper(root.left, traversal)\n        pre_order_traversal_helper(root.right, traversal)\n    return traversal\n\n\ndef main():\n    root = TreeNode(3)\n    root.left = TreeNode(1)\n    root.right = TreeNode(4)\n    root.left.left = TreeNode(0)\n    root.left.right = TreeNode(2)\n    root.right.left = TreeNode(2)\n    root.right.right = TreeNode(5)\n\n    print(pre_order_traversal(root=root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Binary tree in-order traversal"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from typing import List\n\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef in_order_traversal(root: TreeNode):\n    return in_order_traversal_helper(root=root, traversal=[])\n\n\ndef in_order_traversal_helper(root: TreeNode, traversal: List[int]) -> List[int]:\n    if root:\n        in_order_traversal_helper(root.left, traversal)\n        traversal.append(root.val)\n        in_order_traversal_helper(root.right, traversal)\n    return traversal\n\n\ndef main():\n    root = TreeNode(3)\n    root.left = TreeNode(1)\n    root.right = TreeNode(4)\n    root.left.left = TreeNode(0)\n    root.left.right = TreeNode(2)\n    root.right.left = TreeNode(2)\n    root.right.right = TreeNode(5)\n\n    print(in_order_traversal(root=root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Binary tree post-order traversal"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from typing import List\n\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef post_order_traversal(root: TreeNode):\n    return post_order_traversal_helper(root=root, traversal=[])\n\n\ndef post_order_traversal_helper(root: TreeNode, traversal: List[int]) -> List[int]:\n    if root:\n        post_order_traversal_helper(root.left, traversal)\n        post_order_traversal_helper(root.right, traversal)\n        traversal.append(root.val)\n    return traversal\n\n\ndef main():\n    root = TreeNode(3)\n    root.left = TreeNode(1)\n    root.right = TreeNode(4)\n    root.left.left = TreeNode(0)\n    root.left.right = TreeNode(2)\n    root.right.left = TreeNode(2)\n    root.right.right = TreeNode(5)\n\n    print(post_order_traversal(root=root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Binary tree level traversal"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from typing import List, Optional\n\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef level_order_traversal(root: TreeNode):\n    queue = []\n    queue.append(root)\n    traversal = []\n    while queue:\n        node = queue.pop(0)\n        traversal.append(node.val)\n        if node.left:\n            queue.append(node.left)\n        if node.right:\n            queue.append(node.right)\n    return traversal\n\n\ndef levelOrderTraversal(root: Optional[TreeNode]) -> List[List[int]]:\n    traversal = []\n    if not root:\n        return traversal\n\n    queue = [root]\n    while queue:\n        level_size = len(queue)\n        cur_level = []\n        for i in range(level_size):\n            cur_node = queue.pop(0)\n            cur_level.append(cur_node.val)\n            if cur_node.left:\n                queue.append(cur_node.left)\n            if cur_node.right:\n                queue.append(cur_node.right)\n        traversal.append(cur_level)\n    return traversal\n\n\ndef main():\n    root = TreeNode(3)\n    root.left = TreeNode(1)\n    root.right = TreeNode(4)\n    root.left.left = TreeNode(0)\n    root.left.right = TreeNode(2)\n    root.right.left = TreeNode(2)\n    root.right.right = TreeNode(5)\n\n    print(level_order_traversal(root=root))\n    print(levelOrderTraversal(root=root))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Binary tree level traversal II"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from typing import List, Optional\n\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef level_order_traversal_ii(root: Optional[TreeNode]) -> List[List[int]]:\n    if not root:\n        return []\n\n    traversal = []\n    queue = [root]\n    while queue:\n        level_size = len(queue)\n        cur_level = []\n        for i in range(level_size):\n            node = queue.pop(0)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n            cur_level.append(node.val)\n        traversal.append(cur_level)\n    return traversal[::-1]\n\n\ndef levelOrderTraversalII(root: Optional[TreeNode]) -> List[List[int]]:\n    if not root:\n        return []\n\n    traversal = []\n    stack = []\n    queue = [root]\n    while queue:\n        level_size = len(queue)\n        cur_level = []\n        for i in range(level_size):\n            node = queue.pop(0)\n            cur_level.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        stack.append(cur_level)\n\n    while stack:\n        traversal.append(stack.pop())\n    return traversal\n\n\ndef main():\n    arr = [1, 2, 3]\n    print(arr[::-1])\n\n    root = TreeNode(3)\n    root.left = TreeNode(1)\n    root.right = TreeNode(4)\n    root.left.left = TreeNode(0)\n    root.left.right = TreeNode(2)\n    root.right.left = TreeNode(2)\n    root.right.right = TreeNode(5)\n\n    print(level_order_traversal_ii(root=root))\n    print(levelOrderTraversalII(root=root))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Leaf similar tree"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from typing import Optional, List\n\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef leaf_similar_tree(root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:\n    if not root1 and not root2:\n        return True\n    if not root1 or not root2:\n        return False\n\n    sequence1 = get_leaves_sequence(root1, [])\n    sequence2 = get_leaves_sequence(root2, [])\n    return sequence1 == sequence2\n\n\ndef get_leaves_sequence(root: TreeNode, sequence: List[int]) -> List[int]:\n    if not root:\n        return\n\n    if not root.left and not root.right:\n        sequence.append(root.val)\n\n    get_leaves_sequence(root.left, sequence)\n    get_leaves_sequence(root.right, sequence)\n\n    return sequence\n\n\ndef main():\n    root1 = TreeNode(3)\n    root1.left = TreeNode(1)\n    root1.right = TreeNode(4)\n    root1.left.left = TreeNode(0)\n    root1.left.right = TreeNode(2)\n    root1.right.left = TreeNode(2)\n    root1.right.right = TreeNode(5)\n\n    root2 = TreeNode(3)\n    root2.left = TreeNode(1)\n    root2.right = TreeNode(4)\n    root2.left.left = TreeNode(0)\n    root2.left.right = TreeNode(2)\n    root2.right.left = TreeNode(2)\n    root2.right.right = TreeNode(5)\n\n    print(get_leaves_sequence(root1, []))\n    print(get_leaves_sequence(root2, []))\n    print(leaf_similar_tree(root1, root2))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Same tree"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from typing import List\n\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef same_tree(p: TreeNode, q: TreeNode) -> bool:\n    p_traversal = inOrderTraversal(root=p, traversal=[])\n    q_traversal = inOrderTraversal(root=q, traversal=[])\n\n    return p_traversal == q_traversal\n\n\ndef inOrderTraversal(root: TreeNode, traversal: List[str]) -> List[str]:\n    if not root:\n        traversal.append("None")\n\n    if root:\n        traversal.append(str(root.val))\n        inOrderTraversal(root.left, traversal)\n        inOrderTraversal(root.left, traversal)\n\n    return traversal\n\n\ndef main():\n    root1 = TreeNode(1)\n    root1.left = TreeNode(2)\n    root1.right = TreeNode(3)\n\n    root2 = TreeNode(1)\n    root2.right = TreeNode(2)\n    root2.right.right = TreeNode(3)\n\n    print(same_tree(root1, root2))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maximum depth of binary tree"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from typing import Optional\n\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef find_max_depth(root: Optional[TreeNode]) -> int:\n    if not root:\n        return 0\n    return 1 + max(find_max_depth(root.left), find_max_depth(root.right))\n\n\ndef main():\n    root = TreeNode(3)\n    root.left = TreeNode(1)\n    root.right = TreeNode(4)\n    root.left.left = TreeNode(0)\n    root.left.right = TreeNode(2)\n    root.right.left = TreeNode(2)\n    root.right.right = TreeNode(5)\n\n    print(find_max_depth(root))\n\n\nif __name__ == "__main__":\n    main()\n'})})]})}function _(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(7294);const o={},l=t.createContext(o);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);