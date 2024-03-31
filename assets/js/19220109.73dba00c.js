"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4995],{6857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(5893),o=t(1151);const i={title:"Feb 16, 2024"},d="Coding Journal: Feb 16, 2024",l={id:"learning-journal/2024/February/20240216",title:"Feb 16, 2024",description:"- Continued with Data Structures for Coding Interview in JavaScript (LinkedList + Tree Traversal review):",source:"@site/docs/learning-journal/2024/February/20240216.md",sourceDirName:"learning-journal/2024/February",slug:"/learning-journal/2024/February/20240216",permalink:"/docs/learning-journal/2024/February/20240216",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Feb 16, 2024"},sidebar:"tutorialSidebar",previous:{title:"Feb 15, 2024",permalink:"/docs/learning-journal/2024/February/20240215"},next:{title:"Feb 17, 2024",permalink:"/docs/learning-journal/2024/February/20240217"}},a={},s=[{value:"Tree Traversal",id:"tree-traversal",level:3},{value:"Pre-order traversal",id:"pre-order-traversal",level:4},{value:"In-order traversal",id:"in-order-traversal",level:4},{value:"Post-order traversal",id:"post-order-traversal",level:4},{value:"Linked List",id:"linked-list",level:3},{value:"Union Linked Lists",id:"union-linked-lists",level:4},{value:"Intersect Linked Lists",id:"intersect-linked-lists",level:4},{value:"Remove Nth Node From The End",id:"remove-nth-node-from-the-end",level:4}];function h(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"coding-journal-feb-16-2024",children:"Coding Journal: Feb 16, 2024"}),"\n",(0,r.jsx)(n.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Continued with Data Structures for Coding Interview in JavaScript (LinkedList + Tree Traversal review):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Practice import/export"}),"\n",(0,r.jsx)(n.li,{children:"Union and Intersection in LinkedList"}),"\n",(0,r.jsx)(n.li,{children:"Remove Nth Node from The End"}),"\n",(0,r.jsx)(n.li,{children:"In-order traversal"}),"\n",(0,r.jsx)(n.li,{children:"Pre-order traversal"}),"\n",(0,r.jsx)(n.li,{children:"Post-order traversal"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"2-question-i-had-today",children:"2. Question I Had Today"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"I didn't have any question for today."}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"3-what-i-found-challenging-today",children:"3. What I Found Challenging Today"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"I didn't find anything challenging for today."}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,r.jsx)(n.h3,{id:"tree-traversal",children:"Tree Traversal"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="TreeNode.js"',children:"export class TreeNode {\n    constructor(data) {\n        this.data = data;\n        this.left = null;\n        this.right = null;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"pre-order-traversal",children:"Pre-order traversal"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="pre-order-traversal.js',children:'import { TreeNode } from "./TreeNode.js";\n\nfunction preOrderTraversal(root) {\n    return helper(root, []);\n}\n\nfunction helper(node, traversal) {\n    if (node !== null) {\n        traversal.push(node.data);\n        helper(node.left, traversal);\n        helper(node.right, traversal);\n    }\n    return traversal;\n}\n\nlet root = new TreeNode(10);\nroot.left = new TreeNode(5);\nroot.left.left = new TreeNode(3);\nroot.left.right = new TreeNode(7);\nroot.left.left.left = new TreeNode(1);\nroot.left.left.right = new TreeNode(4);\nroot.right = new TreeNode(15);\nroot.right.left = new TreeNode(12);\nroot.right.right = new TreeNode(17);\n\nconsole.log(preOrderTraversal(root=root));\n'})}),"\n",(0,r.jsx)(n.h4,{id:"in-order-traversal",children:"In-order traversal"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="in-order-traversal.js',children:'import {TreeNode} from "./TreeNode.js";\n\n\nfunction inOrderTraversal(root) {\n    return helper(root, []);\n}\n\nfunction helper(node, traversal) {\n    if (node !== null) {\n        helper(node.left, traversal);\n        traversal.push(node.data);\n        helper(node.right, traversal);\n    }\n    return traversal;\n}\n\n\nlet root = new TreeNode(10);\nroot.left = new TreeNode(5);\nroot.left.left = new TreeNode(3);\nroot.left.right = new TreeNode(7);\nroot.left.left.left = new TreeNode(1);\nroot.left.left.right = new TreeNode(4);\nroot.right = new TreeNode(15);\nroot.right.left = new TreeNode(12);\nroot.right.right = new TreeNode(17);\n\nconsole.log(inOrderTraversal(root=root)); // 1 3 4 5 7 10 12 15 17\n'})}),"\n",(0,r.jsx)(n.h4,{id:"post-order-traversal",children:"Post-order traversal"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="post-order-traversal.js"',children:'import { TreeNode } from "./TreeNode.js";\n\nfunction postOrderTraversal(root) {\n    return helper(root, []);\n}\n\nfunction helper(node, traversal) {\n    if (node !== null) {\n        helper(node.left, traversal);\n        helper(node.right, traversal);\n        traversal.push(node.data);\n    }\n    return traversal;\n}\n\nlet root = new TreeNode(10);\nroot.left = new TreeNode(5);\nroot.left.left = new TreeNode(3);\nroot.left.right = new TreeNode(7);\nroot.left.left.left = new TreeNode(1);\nroot.left.left.right = new TreeNode(4);\nroot.right = new TreeNode(15);\nroot.right.left = new TreeNode(12);\nroot.right.right = new TreeNode(17);\n\nconsole.log(postOrderTraversal(root=root)); // 1 4 3 7 5 12 17 15 10\n'})}),"\n",(0,r.jsx)(n.h3,{id:"linked-list",children:"Linked List"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="Node.js"',children:"export class Node {\n    constructor(data) {\n        this.data = data;\n        this.next = null;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="LinkedList.js',children:'import { Node } from "./Node.js";\n\nexport class LinkedList {\n    constructor() {\n        this.head = null;\n    }\n\n    isEmpty() {\n        if (this.head === null) return true;\n        return false;\n    }\n\n    printList(head) {\n        let cur = head;\n        while (cur !== null) {\n            console.log(cur.data);\n            cur = cur.next;\n        }\n        return this;\n    }\n\n    insertAtTail(data) {\n        if (this.isEmpty()) {\n            this.head = new Node(data=data);\n            return this;\n        }\n        // traverse to tail\n        let cur = this.head;\n        while (cur.next !== null) {\n            cur = cur.next;\n        }\n        cur.next = new Node(data=data);\n        return this;\n    }\n\n    insertAtHead(data) {\n        if (this.isEmpty()) {\n            this.head = new Node(data=data);\n            return this;\n        }\n        let newNode = new Node(data=data);\n        newNode.next = this.head;\n        this.head = newNode;\n        return this;\n    }\n\n    search(data) {\n        if (this.isEmpty()) return false;\n        let cur = this.head;\n        while (cur !== null) {\n            if (cur.data === data) {\n                return true;\n            }\n            cur = cur.next;\n        }\n        return false;\n    }\n\n    deleteAtHead() {\n        if (this.isEmpty()) return this;\n        this.head = this.head.next;\n    }\n\n    delete(data) {\n        if (this.isEmpty()) return;\n        let cur = this.head;\n        while (cur !== null) {\n            if (cur.next.data === data) {\n                cur.next = cur.next.next;\n                return this;\n            }\n            cur = cur.next;\n        }\n        return this;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"union-linked-lists",children:"Union Linked Lists"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="union.js"',children:'import {Node} from "./Node.js";\nimport { LinkedList } from "./LinkedList.js";\n\nfunction union(head1, head2) {\n    let nodes = [];\n    let cur1 = head1;\n    let dummyHead = cur1;\n    // traverse to the end of list 1\n    while (cur1.next !== null) {\n        nodes.push(cur1.data);\n        cur1 = cur1.next;\n    }\n    nodes.push(cur1.data);\n    let cur2 = head2;\n    while (cur2 !== null) {\n        if (nodes.indexOf(cur2.data) === -1) {\n            cur1.next = cur2;\n            nodes.push(cur2.data);\n            cur1 = cur1.next;\n            cur2 = cur2.next;\n        } else {\n            cur2 = cur2.next;\n        }\n    }\n    return dummyHead;\n}\n\nvar list1 = new LinkedList();\nlist1.head = new Node(10);\nlist1.head.next = new Node(20);\nlist1.head.next.next = new Node(80);\nlist1.head.next.next.next = new Node(60);\nconsole.log("List 1")\nlist1.printList(list1.head)\n\nvar list2 = new LinkedList();\nlist2.head = new Node(15);\nlist2.head.next = new Node(20);\nlist2.head.next.next = new Node(30);\nlist2.head.next.next.next = new Node(60);\nlist2.head.next.next.next.next = new Node(45);\nconsole.log("List 2")\nlist2.printList(list2.head);\nconsole.log("UNION");\nlist1.printList(union(list1.head, list2.head));\n\n'})}),"\n",(0,r.jsx)(n.h4,{id:"intersect-linked-lists",children:"Intersect Linked Lists"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="intersect.js"',children:'import { Node } from "./Node.js";\nimport { LinkedList } from "./LinkedList.js";\n\nfunction intersect(list1, list2) {\n    let commonValues = new Set();\n    let cur1 = list1;\n    let dummyHead = new Node(0);\n    let realHead = dummyHead;\n    while (cur1 !== null) {\n        commonValues.add(cur1.data);\n        cur1 = cur1.next;\n    }\n    let cur2 = list2;\n    while (cur2 !== null) {\n        if (commonValues.has(cur2.data)) {\n            dummyHead.next = new Node(cur2.data);\n            dummyHead = dummyHead.next;\n            commonValues.delete(cur2.data);\n        }\n        cur2 = cur2.next;\n    }\n    return realHead.next;\n}\n\nvar list1 = new LinkedList();\nlist1.head = new Node(10);\nlist1.head.next = new Node(20);\nlist1.head.next.next = new Node(80);\nlist1.head.next.next.next = new Node(60);\nconsole.log("List 1")\nlist1.printList(list1.head)\n\nvar list2 = new LinkedList();\nlist2.head = new Node(15);\nlist2.head.next = new Node(20);\nlist2.head.next.next = new Node(30);\nlist2.head.next.next.next = new Node(60);\nlist2.head.next.next.next.next = new Node(45);\nconsole.log("List 2")\nlist2.printList(list2.head);\nconsole.log("INTERSECT");\nlist2.printList(intersect(list1.head, list2.head)); // 20 60 \n'})}),"\n",(0,r.jsx)(n.h4,{id:"remove-nth-node-from-the-end",children:"Remove Nth Node From The End"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="remove-nth-node-from-the-end.js"',children:'import { Node } from "./Node.js";\nimport { LinkedList } from "./LinkedList.js";\n\nfunction findLength(head) {\n    let count = 0;\n    let cur = head;\n    while (cur !== null) {\n        count++;\n        cur = cur.next;\n    }\n    return count;\n}\n\nfunction removeNthNodeFromTheEnd(head, n) {\n    let listLen = findLength(head);\n    let index = listLen - n;\n    let cur = head;\n    let count = 0;\n    while (cur !== null && count < index) {\n        count++;\n        cur = cur.next;\n    }\n    return cur.data;\n}\n\nfunction removeNthNodeFromTheEndTwoPointers(head, n) {\n    let fast = head;\n    let slow = head;\n    let count = 0;\n    while (fast !== null && count < n) {\n        count++;\n        fast = fast.next;\n    }\n\n    while (fast !== null) {\n        slow = slow.next;\n        fast = fast.next;\n    }\n    return slow.data;\n}\n\nlet myLinkedList = new LinkedList();\nmyLinkedList.head = new Node(1);\nmyLinkedList.head.next = new Node(2);\nmyLinkedList.head.next.next = new Node(3);\nmyLinkedList.head.next.next.next = new Node(4);\nmyLinkedList.head.next.next.next.next = new Node(5);\n\nconsole.log(removeNthNodeFromTheEnd(myLinkedList.head, 3)); // 3\nconsole.log(removeNthNodeFromTheEnd(myLinkedList.head, 2)); // 4\nconsole.log(removeNthNodeFromTheEndTwoPointers(myLinkedList.head, 3)); // 3\nconsole.log(removeNthNodeFromTheEndTwoPointers(myLinkedList.head, 2)); // 4\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var r=t(7294);const o={},i=r.createContext(o);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);