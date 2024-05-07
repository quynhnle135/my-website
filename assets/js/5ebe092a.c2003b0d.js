"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6546],{3735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(5893),o=t(1151);const i={title:"May 01, 2024"},l="Coding Journal: May 01, 2024",a={id:"learning-journal/2024/May/20240501",title:"May 01, 2024",description:"- Continued job search (14 applications)",source:"@site/docs/learning-journal/2024/May/20240501.md",sourceDirName:"learning-journal/2024/May",slug:"/learning-journal/2024/May/20240501",permalink:"/docs/learning-journal/2024/May/20240501",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"May 01, 2024"},sidebar:"tutorialSidebar",previous:{title:"March",permalink:"/docs/category/march-1"},next:{title:"May 06, 2024",permalink:"/docs/learning-journal/2024/May/20240506"}},s={},d=[];function h(e){const n={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"coding-journal-may-01-2024",children:"Coding Journal: May 01, 2024"}),"\n",(0,r.jsx)(n.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Continued job search (14 applications)"}),"\n",(0,r.jsxs)(n.li,{children:["Leetcode practice - Top 150 Interview Questions (Tree):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Path Sum"}),"\n",(0,r.jsx)(n.li,{children:"Symmetric Tree"}),"\n",(0,r.jsx)(n.li,{children:"Maximum Depth of Binary Tree"}),"\n",(0,r.jsx)(n.li,{children:"Same Tree"}),"\n",(0,r.jsx)(n.li,{children:"Count Complete Tree Nodes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"2-questions-i-had-today",children:"2. Questions I Had Today"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"I don't have any question for today"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"3-what-i-found-challenging-today",children:"3. What I Found Challenging Today"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"I don't find anything challenging for today"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Count complete nodes"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef countNodes(root):\n    return helper(root, 0)\n\n\ndef helper(current, count):\n    if current:\n        count += 1\n        count = helper(current.left, count)\n        count = helper(current.right, count)\n    return count\n\n\ndef main():\n    root = TreeNode(5)\n    root.left = TreeNode(4)\n    root.left.left = TreeNode(11)\n    root.left.left.left = TreeNode(7)\n    root.left.left.right = TreeNode(2)\n    root.right = TreeNode(8)\n    root.right.left = TreeNode(13)\n    root.right.right = TreeNode(4)\n    root.right.right.right = TreeNode(1)\n\n    print(countNodes(root=root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Path sum"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef path_sum(root: TreeNode, targetSum: int) -> bool:\n    if not root:\n        return False\n    stack = [[root, targetSum - root.val]]\n    while stack:\n        node, remaining_sum = stack.pop()\n        if remaining_sum == 0:\n            return True\n        if node.left:\n            stack.append([node.left, remaining_sum - node.left.val])\n\n        if node.right:\n            stack.append([node.right, remaining_sum - node.right.val])\n    return False\n\n\ndef main():\n    root = TreeNode(5)\n    root.left = TreeNode(4)\n    root.left.left = TreeNode(11)\n    root.left.left.left = TreeNode(7)\n    root.left.left.right = TreeNode(2)\n    root.right = TreeNode(8)\n    root.right.left = TreeNode(13)\n    root.right.right = TreeNode(4)\n    root.right.right.right = TreeNode(1)\n\n    print(path_sum(root=root, targetSum=22))\n    print(path_sum(root=root, targetSum=17))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Max depth of binary tree"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'\nclass TreeNode:\n     def __init__(self, val=0, left=None, right=None):\n         self.val = val\n         self.left = left\n         self.right = right\n\n\ndef maxDepth(root: TreeNode) -> int:\n    if not root:\n        return 0\n    return 1 + max(maxDepth(root.left), maxDepth(root.right))\n\n\ndef main():\n    root = TreeNode(5)\n    root.left = TreeNode(4)\n    root.left.left = TreeNode(11)\n    root.left.left.left = TreeNode(7)\n    root.left.left.right = TreeNode(2)\n    root.right = TreeNode(8)\n    root.right.left = TreeNode(13)\n    root.right.right = TreeNode(4)\n    root.right.right.right = TreeNode(1)\n\n    print(maxDepth(root=root))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Same Trees"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nclass Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        if p is None and q is None:\n            return True\n        if p is None or q is None:\n            return False\n        if p.val != q.val:\n            return False\n        return self.isSameTree(p.right, q.right) and self.isSameTree(p.left, q.left)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Symmetric Tree"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def isSymmetric(self, root):\n        if not root:\n            return true\n        return isSame(root.left, root.right)\ndef isSame(leftroot, rightroot):\n    if leftroot == None and rightroot == None:\n        return True\n    \n    if leftroot == None or rightroot == None:\n        return False\n    \n    if leftroot.val != rightroot.val:\n        return False\n    \n    return isSame(leftroot.left, rightroot.right) and isSame(leftroot.right, rightroot.left)\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var r=t(7294);const o={},i=r.createContext(o);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);