"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9773],{4170:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=r(5893),t=r(1151);const s={title:"Feb 05, 2024"},l="Coding Journal: Feb 05, 2024",o={id:"learning-journal/2024/February/20240205",title:"Feb 05, 2024",description:"- Continued with job search (16 applications)",source:"@site/docs/learning-journal/2024/February/20240205.md",sourceDirName:"learning-journal/2024/February",slug:"/learning-journal/2024/February/20240205",permalink:"/docs/learning-journal/2024/February/20240205",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Feb 05, 2024"},sidebar:"tutorialSidebar",previous:{title:"Feb 04, 2024",permalink:"/docs/learning-journal/2024/February/20240204"},next:{title:"20240206",permalink:"/docs/learning-journal/2024/February/20240206"}},a={},c=[];function d(n){const e={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"coding-journal-feb-05-2024",children:"Coding Journal: Feb 05, 2024"}),"\n",(0,i.jsx)(e.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Continued with job search (16 applications)"}),"\n",(0,i.jsxs)(e.li,{children:["Continued solving Leetcode to prepare for technical interviews:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"IBM OA: Longest Common Prefix  + Merge Sorted Array"}),"\n",(0,i.jsxs)(e.li,{children:["Coded in JavaScript to prepare for technical round with BeaconFire:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Classes"}),"\n",(0,i.jsx)(e.li,{children:"Closures"}),"\n",(0,i.jsx)(e.li,{children:"Variables (to review scope in JavaScript)"}),"\n",(0,i.jsx)(e.li,{children:"LinkedList + Tree (to practice with Class)"}),"\n",(0,i.jsx)(e.li,{children:"Valid Palindrome (review basic syntax)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"2-question-i-had",children:"2. Question I Had"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Technical round preparation (mainly focused on Web Development and JavaScript):","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Prorject and work experience"}),"\n",(0,i.jsxs)(e.li,{children:["JavaScript basics:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Variables"}),"\n",(0,i.jsx)(e.li,{children:"Scoping"}),"\n",(0,i.jsx)(e.li,{children:"ES6 Features"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Front-end development:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"DOM"}),"\n",(0,i.jsx)(e.li,{children:"HTML"}),"\n",(0,i.jsx)(e.li,{children:"CSS"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"Framework and library if applied: Angular, React.js, Express.js, etc."}),"\n",(0,i.jsx)(e.li,{children:"Coding round (either use JavaScript or TypeScript)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Closure in JavaScript"}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Longest Common Prefix"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'from typing import List\n\n\ndef longest_common_prefix(strs: List[str]) -> str:\n    if len(strs) == 0:\n        return ""\n\n    prefix = strs[0]\n    for s in strs[1:]:\n        while prefix not in s:\n            prefix = prefix[:-1]\n            if prefix == "":\n                return ""\n    return prefix\n\n\ndef longest_common_prefix_ii(strs: List[str]) -> str:\n    if len(strs) == 0:\n        return ""\n\n    for i in range(len(strs[0])):\n        ch = strs[0][i]\n        for j in range(1, len(strs)):\n            if i == len(strs[j]) or ch != strs[j][i]:\n                return strs[0][:i]\n    return strs[0]\n\n\ndef main():\n    print(longest_common_prefix(strs=["flower", "flight", "flour"]))  # fl\n    print(longest_common_prefix_ii(strs=["flower", "flight", "flour"]))  # fl\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Merge Sorted Array"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'from typing import List\n\n\ndef merge_sorted_arrays(nums1: List[int], m: int, nums2: List[int], n: int):\n    first = m - 1\n    second = n - 1\n    index = len(nums1) - 1\n    while first >= 0 and second >= 0:\n        if nums2[second] > nums1[first]:\n            nums1[index] = nums2[second]\n            second -= 1\n        else:\n            nums1[index] = nums1[first]\n            first -= 1\n        index -= 1\n\n    while second >= 0:\n        nums1[index] = nums2[second]\n        second -= 1\n        index -= 1\n\n    return nums1\n\n\ndef main():\n    print(merge_sorted_arrays(nums1=[1, 2, 3, 0, 0, 0], m=3, nums2=[2, 5, 6], n=3))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Reverse LinkedList (review Class in JavaScript)"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"class Node {\n    constructor(val) {\n        this.val = val;\n        this.next = null;\n    }\n}\n\nfunction printList(root) {\n    let cur = root;\n    while (cur !== null) {\n        console.log(cur.val);\n        cur = cur.next;\n    }\n}\n\nfunction reverseLinkedList(root) {\n    let cur = root;\n    let prev = null;\n    while (cur !== null) {\n        let next_node = cur.next;\n        cur.next = prev;\n        prev = cur;\n        cur = next_node;\n    }\n    return prev;\n}\n\nconst reverseLL  = (root) => {\n    let cur = root;\n    let prev = null;\n    while (cur !== null) {\n        let next_node = cur;\n        cur.next = prev;\n        prev = cur;\n        cur = next_node;\n    }\n    return prev;\n}\n\nroot = new Node(1);\nroot.next = new Node(2);\nroot.next.next = new Node(3);\n\n// printList(root=reverseLL(root));\nprintList(root=reverseLinkedList(root=root));\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"LinkedList Cycle (review Class in JavaScript)"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"class Node {\n    constructor(val) {\n        this.val = val;\n        this.next = null;\n    }\n}\n\nfunction hasCycle(root) {\n    let fast = root;\n    let slow = root;\n    while (fast !== null && fast.next !== null) {\n        fast = fast.next.next;\n        slow = slow.next;\n        if (fast === slow) {\n            return true;\n        }\n    }\n    return false;\n}\n\nroot = new Node(1);\nroot.next = new Node(2);\nroot.next.next = new Node(3);\n\nconsole.log(hasCycle(root=root));\n\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Inorder Traversal Binary Tree (review Class in JavaScript)"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"class TreeNode {\n    constructor(val) {\n        this.val = val;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nfunction inorderTraversal(root) {\n    return helper(node=root, traversal=[]);\n}\n\nfunction helper(node, traversal) {\n    if (node !== null) {\n        helper(node.left, traversal);\n        traversal.push(node.val);\n        helper(node.right, traversal);\n    }\n    return traversal;\n}\n\nroot = new TreeNode(val=1);\nroot.left = new TreeNode(val=5);\nroot.left.left = new TreeNode(val=3);\nroot.left.right = new TreeNode(val=7);\nroot.right = new TreeNode(val=2);\nroot.right.left = new TreeNode(val=4);\nroot.right.right = new TreeNode(val=10);\n\nconsole.log(inorderTraversal(root=root));\n\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Closure in JavaScript"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'function createGreeting(greetingPrefix) {\n    return function(name) {\n        console.log("Hello " + greetingPrefix + " " + name);\n    };\n}\n\nconst greetHello = createGreeting(greetingPrefix="Miss");\ngreetHello("Quinn")\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>o,a:()=>l});var i=r(7294);const t={},s=i.createContext(t);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);