"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3788],{2057:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=r(5893),t=r(1151);const l={title:"Feb 26, 2024"},a="Coding Journal: Feb 26, 2024",i={id:"learning-journal/2024/February/20240226",title:"Feb 26, 2024",description:"- Continued with Job applications (15 applications)",source:"@site/docs/learning-journal/2024/February/20240226.md",sourceDirName:"learning-journal/2024/February",slug:"/learning-journal/2024/February/20240226",permalink:"/docs/learning-journal/2024/February/20240226",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Feb 26, 2024"},sidebar:"tutorialSidebar",previous:{title:"Feb 23, 2024",permalink:"/docs/learning-journal/2024/February/20240223"},next:{title:"Feb 27, 2024",permalink:"/docs/learning-journal/2024/February/20240227"}},d={},s=[];function c(e){const n={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"coding-journal-feb-26-2024",children:"Coding Journal: Feb 26, 2024"}),"\n",(0,o.jsx)(n.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Continued with Job applications (15 applications)"}),"\n",(0,o.jsxs)(n.li,{children:["Review and solved Tree/BST problems in JavaScript:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Find maximum depth of binary tree"}),"\n",(0,o.jsx)(n.li,{children:"Same tree"}),"\n",(0,o.jsx)(n.li,{children:"Level order traversal of binary tree"}),"\n",(0,o.jsx)(n.li,{children:"Count complete nodes"}),"\n",(0,o.jsx)(n.li,{children:"Balanced Binary Tree"}),"\n",(0,o.jsx)(n.li,{children:"Validate Binary Search Tree"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"2-questions-i-had-today",children:"2. Questions I Had Today"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"I didn't have any question for today"}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"I didn't find anything challenging for today but I need to practice more Tree/BST problems because they're difficult to solve for me."}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Find maximum depth of binary tree"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'import { TreeNode } from "./TreeNode.js";\n\nfunction findMaxDepth(root) {\n    if (root === null) {\n        return 0;\n    }\n    return 1 + Math.max(findMaxDepth(root.left), findMaxDepth(root.right));\n}\n\nlet root1 = new TreeNode(1);\nroot1.left = new TreeNode(2);\nroot1.right = new TreeNode(3);\nroot1.left.left = new TreeNode(4);\nroot1.left.right = new TreeNode(5);\nroot1.left.right.left = new TreeNode(6);\n\nconsole.log(findMaxDepth(root1)); // 4\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Same tree"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'import { TreeNode } from "./TreeNode.js";\n\nfunction sameTree(root1, root2) {\n    if (root1 === null && root2 === null) return true;\n    if (root1 === null || root2 === null) return false;\n    if (root1.data !== root2.data) return false;\n    return sameTree(root1.right, root2.right) && sameTree(root1.left, root2.left);\n}\n\nlet root1 = new TreeNode(1);\nroot1.left = new TreeNode(2);\nroot1.right = new TreeNode(3);\n\n\nlet root2 = new TreeNode(1);\nroot2.left = new TreeNode(2);\nroot2.right = new TreeNode(3);\n\nconsole.log(sameTree(root1, root2)); // true\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Level order traversal of binary tree"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"class TreeNode {\n    constructor(val) {\n        this.val = val;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nfunction levelOrderTraversal(root) {\n    if (!root) return [];\n    let traversal = [];\n    let queue = [root];\n    while (queue.length !== 0) {\n        let levelSize = queue.length;\n        let curLevel = [];\n        for (let i = 0; i < levelSize; i++) {\n            let curNode = queue.shift();\n            curLevel.push(curNode.val);\n            if (curNode.left !== null) {\n                queue.push(curNode.left);\n            }\n            if (curNode.right !== null) {\n                queue.push (curNode.right);\n            }\n        }\n        traversal.push(curLevel);\n    }\n    return traversal;\n}\n\n\nlet root = new TreeNode(3);\nroot.left = new TreeNode(9);\nroot.right = new TreeNode(20);\nroot.right.left = new TreeNode(15);\nroot.right.right = new TreeNode(7);\n\nconsole.log(levelOrderTraversal(root)); // [[3], [9, 20], [15, 7]];\n\nlet arr = [1, 2, 3, 4, 5];\nlet element = arr.shift();\nconsole.log(element);\nconsole.log(arr);\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Count complete nodes"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'import { TreeNode } from "./TreeNode.js";\n\nfunction countCompleteNodes(root) {\n    function helper(node, count) {\n        if (node) {\n            count++;\n            count = helper(node.left, count);\n            count = helper(node.right, count);\n        }\n        return count;\n    }\n    return helper(root, 0);\n}\n\nlet root = new TreeNode(1);\nroot.left = new TreeNode(2);\nroot.right = new TreeNode(3);\nroot.left.left = new TreeNode(4);\n\nconsole.log(countCompleteNodes(root));\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Balanced Binary Tree"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'import { TreeNode } from "./TreeNode.js";\n\nfunction isBalancedTree(root) {\n    function dfs(node) {\n        if (node === null) {\n            return [true, 0];\n        }\n\n        let left = dfs(node.left);\n        let right = dfs(node.right);\n\n        let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;\n        return [balanced, 1 + Math.max(left[1], right[1])];\n    }\n    let balanced = dfs(root);\n    return balanced[0];\n}\n\nlet root1 = new TreeNode(3);\nroot1.left = new TreeNode(9);\nroot1.right = new TreeNode(20);\nroot1.right.left = new TreeNode(15);\nroot1.right.right = new TreeNode(17);\n\nlet root2 = new TreeNode(1);\nroot2.left = new TreeNode(2);\nroot2.right = new TreeNode(2);\nroot2.left.left = new TreeNode(3);\nroot2.left.right = new TreeNode(3);\nroot2.left.left.left = new TreeNode(4);\nroot2.left.left.right = new TreeNode(4);\n\nconsole.log(isBalancedTree(root1)); // true\nconsole.log(isBalancedTree(root2)); // false\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Validate Binary Search Tree"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'import { TreeNode } from "./TreeNode.js";\n\nfunction validateBSTValidRange(root) {\n    function validate(node, low, high) {\n        if (!node) return true;\n        if (node.val <= low) return false;\n        if (node.val >= high) return false;\n        return (validate(node.left, low, node.val) && validate(node.right, node.val, high));\n    }\n\n    return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);\n}\n\nfunction validateBSTInOrderTraversal(root) {\n    function inOrderTraversal(node, traversal) {\n        if (node) {\n            inOrderTraversal(node.left, traversal);\n            traversal.push(node.val);\n            inOrderTraversal(node.right, traversal);\n        }\n        return traversal;\n    }\n    let traversal = inOrderTraversal(root, []);\n    for (let i = 1; i < traversal.length; i++) {\n        if (traversal[i] < traversal[i - 1]) return false;\n    }\n    return true;\n}\n\nfunction validateBSTStack(root) {\n    let stack = [];\n    let pre = Number.NEGATIVE_INFINITY;\n    while (stack.length || root) {\n        while (root) {\n            stack.push(root);\n            root = root.left;\n        }\n        root = stack.pop();\n        if (root.val <= pre) {\n            return false;\n        }\n        pre = root.val;\n        root = root.right;\n    }\n    return true;\n}\n\n\n\nlet root = new TreeNode(4);\nroot.left = new TreeNode(1);\nroot.left.right = new TreeNode(3);\nroot.right = new TreeNode(6);\nroot.right.left = new TreeNode(5);\n\n\nlet root1 = new TreeNode(5);\nroot1.left = new TreeNode(1);\nroot1.right = new TreeNode(4);\nroot1.right.left = new TreeNode(3);\nroot1.right.right = new TreeNode(6);\n\nlet root2 = new TreeNode(5);\nroot2.left = new TreeNode(4);\nroot2.right = new TreeNode(6);\nroot2.right.left = new TreeNode(3);\nroot2.right.right = new TreeNode(7);\n\nconsole.log(validateBSTValidRange(root)); // true\nconsole.log(validateBSTInOrderTraversal(root)); // true\nconsole.log(validateBSTStack(root)); // true\n\nconsole.log(validateBSTValidRange(root1)); // false\nconsole.log(validateBSTInOrderTraversal(root1)); // false\nconsole.log(validateBSTStack(root1)); // false\n\nconsole.log(validateBSTValidRange(root2)); // false\nconsole.log(validateBSTInOrderTraversal(root2)); // false\nconsole.log(validateBSTStack(root2)); // false\n\nlet arr = [1, 2, 3];\nconsole.log(arr.pop());\nconsole.log(arr);\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var o=r(7294);const t={},l=o.createContext(t);function a(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);