"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[616],{2008:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(5893),l=r(1151);const i={title:"Mar 04, 2024"},s="Coding Journal: Mar 04, 2024",o={id:"learning-journal/2024/March/20240304",title:"Mar 04, 2024",description:"- Continued with Data Structures for Coding Interview in JavaScript (mostly review JS syntaxes):",source:"@site/docs/learning-journal/2024/March/20240304.md",sourceDirName:"learning-journal/2024/March",slug:"/learning-journal/2024/March/20240304",permalink:"/docs/learning-journal/2024/March/20240304",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Mar 04, 2024"},sidebar:"tutorialSidebar",previous:{title:"March",permalink:"/docs/category/march"},next:{title:"Mar 05, 2024",permalink:"/docs/learning-journal/2024/March/20240305"}},a={},d=[{value:"Array Review",id:"array-review",level:3},{value:"Two Sum",id:"two-sum",level:4},{value:"Merge Two Sorted Arrays",id:"merge-two-sorted-arrays",level:4},{value:"Rotate Array",id:"rotate-array",level:4},{value:"Linked List review:",id:"linked-list-review",level:3},{value:"Reverse Linked List",id:"reverse-linked-list",level:4},{value:"Merge Sorted Lists",id:"merge-sorted-lists",level:4},{value:"Linked List Cycle",id:"linked-list-cycle",level:4},{value:"Graph review:",id:"graph-review",level:3},{value:"BFS",id:"bfs",level:4},{value:"DFS",id:"dfs",level:4},{value:"Number of islands",id:"number-of-islands",level:4},{value:"Number of provinces",id:"number-of-provinces",level:4},{value:"Binary tree/BST review:",id:"binary-treebst-review",level:3},{value:"Maximum depth of a tree (reviewed binary tree)",id:"maximum-depth-of-a-tree-reviewed-binary-tree",level:4},{value:"Tree Traversal",id:"tree-traversal",level:4},{value:"Find BST&#39;s height",id:"find-bsts-height",level:4},{value:"Find Kth Largest Value in BST",id:"find-kth-largest-value-in-bst",level:4},{value:"Find Ancestors of a Given Node",id:"find-ancestors-of-a-given-node",level:4}];function c(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"coding-journal-mar-04-2024",children:"Coding Journal: Mar 04, 2024"}),"\n",(0,t.jsx)(n.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Continued with Data Structures for Coding Interview in JavaScript (mostly review JS syntaxes):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Array review:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Two Sum"}),"\n",(0,t.jsx)(n.li,{children:"Merge Two Sorted Arrays"}),"\n",(0,t.jsx)(n.li,{children:"Rotate Array"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Linked List review:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reverse Linked List"}),"\n",(0,t.jsx)(n.li,{children:"Merge Sorted Lists"}),"\n",(0,t.jsx)(n.li,{children:"Linked List Cycle"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Graph review:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"BFS"}),"\n",(0,t.jsx)(n.li,{children:"DFS"}),"\n",(0,t.jsx)(n.li,{children:"Number of islands"}),"\n",(0,t.jsx)(n.li,{children:"Number of provinces"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Binary tree/BST review:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maximum depth of a tree (reviewed binary tree)"}),"\n",(0,t.jsx)(n.li,{children:"Tree Traversal"}),"\n",(0,t.jsx)(n.li,{children:"Find BST's height"}),"\n",(0,t.jsx)(n.li,{children:"Find Kth Largest Value in BST"}),"\n",(0,t.jsx)(n.li,{children:"Find Ancestors of a Given Node"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"2-questions-i-had-today",children:"2. Questions I Had Today"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"I didn't have any question for today."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"3-what-i-found-challenging-today",children:"3. What I Found Challenging Today"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"I didn't find anything challenging for today."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,t.jsx)(n.h3,{id:"array-review",children:"Array Review"}),"\n",(0,t.jsx)(n.h4,{id:"two-sum",children:"Two Sum"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function twoSum(arr, target) {\n    let dict = {};\n    for (let i = 0; i < arr.length; i++) {\n        if ((target - arr[i]) in dict) {\n            return [dict[target - arr[i]], i];\n        } else {\n            dict[arr[i]] = i;\n        }\n    }\n    return [-1, -1];\n}\n\nfunction twoSumBruteForce(arr, target) {\n    for (let i = 0; i < arr.length; i++) {\n        let curSum = arr[i];\n        for (let j = i + 1; j < arr.length; j++) {\n            curSum += arr[j];\n            if (curSum === target) {\n                return [i, j];\n            }\n            curSum -= arr[j];\n        }\n    }\n    return [-1, -1];\n} \n\nconsole.log(twoSum([1, 2, 3, 4, 5], 7));\nconsole.log(twoSumBruteForce([1, 2, 3, 4, 5], 7));\nconsole.log(twoSum([1, 2, 3, 4, 5], 3));\nconsole.log(twoSumBruteForce([1, 2, 3, 4, 5], 3));\nconsole.log(twoSum([1, 2, 3, 4, 5], 9));\nconsole.log(twoSumBruteForce([1, 2, 3, 4, 5], 9));\n"})}),"\n",(0,t.jsx)(n.h4,{id:"merge-two-sorted-arrays",children:"Merge Two Sorted Arrays"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function mergeTwoSortedArrays(arr1, arr2) {\n    let first = 0;\n    let second = 0;\n    let arr = [];\n    while (first < arr1.length && second < arr2.length) {\n        if (arr1[first] < arr2[second]) {\n            arr.push(arr1[first]);\n            first++;\n        } else {\n            arr.push(arr2[second]);\n            second++;\n        }\n    }\n    while (first < arr1.length) {\n        arr.push(arr1[first]);\n        first++;\n    }\n    while (second < arr2.length) {\n        arr.push(arr2[second]);\n        second++;\n    }\n    return arr;\n} \n\nconsole.log(mergeTwoSortedArrays([2, 4, 6], [1, 3, 5, 7]));\n"})}),"\n",(0,t.jsx)(n.h4,{id:"rotate-array",children:"Rotate Array"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function rotateArray(nums, k) {\n    k = k % nums.length;\n    if (k === 0) {\n        return nums;\n    }\n\n    reverseArray(0, nums.length - 1, nums);\n    console.log(nums);\n    reverseArray(0, k - 1, nums);\n    console.log(nums);\n    reverseArray(k, nums.length - 1, nums);\n    console.log(nums);\n    return nums;\n} \n\nfunction reverseArray(start, end, arr) {\n    while (start < end) {\n        let temp = arr[start];\n        arr[start] = arr[end];\n        arr[end] = temp;\n        start++;\n        end--;\n    }\n    return arr;\n}\nlet arr = [1, 2, 3, 4, 5];\nconsole.log(rotateArray(arr, 3));\n// console.log(reverseArray(0, 4, [1, 2, 3, 4, 5]));\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"linked-list-review",children:"Linked List review:"}),"\n",(0,t.jsx)(n.h4,{id:"reverse-linked-list",children:"Reverse Linked List"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'class Node {\n    constructor(val) {\n        this.val = val;\n        this.next = null;\n    }\n}\n\nfunction reverseLinkedList(head) {\n    let prev = null;\n    let cur = head;\n    while (cur) {\n        let nextNode = cur.next;\n        cur.next = prev;\n        prev = cur;\n        cur = nextNode;\n    }\n    return prev;\n}\n\nfunction printList(head) {\n    let cur = head;\n    while (cur.next) {\n        console.log(cur.val);\n        cur = cur.next;\n    }\n    console.log(cur.val);\n}\n\nlet head = new Node(1);\nhead.next = new Node(2);\nhead.next.next = new Node(3);\nhead.next.next.next = new Node(4);\n\nprintList(head);\nconsole.log("---")\nprintList(reverseLinkedList(head));\n'})}),"\n",(0,t.jsx)(n.h4,{id:"merge-sorted-lists",children:"Merge Sorted Lists"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Node {\n    constructor(val) {\n        this.val = val;\n        this.next = null;\n    }\n}\n\nfunction printList(head) {\n    let cur = head;\n    while (cur) {\n        console.log(cur.val);\n        cur = cur.next;\n    }\n}\n\nfunction mergeSortedLists(head1, head2) {\n    let cur = new Node(0);\n    let dummyHead = cur;\n    while (head1 && head2)  {\n        if (head1.val < head2.val) {\n            cur.next = head1;\n            head1 = head1.next;\n        } else {\n            cur.next = head2;\n            head2 = head2.next;\n        }\n        cur = cur.next;\n    }\n    while (head1) {\n        cur.next = head1;\n        head1 = head1.next;\n        cur = cur.next;\n    }\n    while (head2) {\n        cur.next = head2;\n        head2 = head2.next;\n        cur = cur.next;\n    }\n    return dummyHead.next;\n}\n\nlet head1 = new Node(3);\nhead1.next = new Node(5);\nhead1.next.next = new Node(7);\n\nlet head2 = new Node(1);\nhead2.next = new Node(2);\nhead2.next.next = new Node(4);\nhead2.next.next.next = new Node(6);\n\nprintList(mergeSortedLists(head1, head2));\n"})}),"\n",(0,t.jsx)(n.h4,{id:"linked-list-cycle",children:"Linked List Cycle"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Node {\n    constructor(val) {\n        this.val = val;\n        this.next = null;\n    } \n}\n\nfunction printList(head) {\n    let cur = head;\n    while (cur) {\n        console.log(cur.val);\n        cur = cur.next;\n    }\n}\n\nfunction checkLinkedListCycle(head) {\n    let fast = head;\n    let slow = head;\n    while (fast && fast.next) {\n        fast = fast.next.next;\n        slow = slow.next;\n        if (fast === slow)  {\n            return true;\n        } \n    }\n    return false;\n}\n\nlet head = new Node(1);\nhead.next = new Node(2);\nhead.next.next = new Node(3);\nhead.next.next.next = head.next;\nconsole.log(checkLinkedListCycle(head)); \n"})}),"\n",(0,t.jsx)(n.h3,{id:"graph-review",children:"Graph review:"}),"\n",(0,t.jsx)(n.h4,{id:"bfs",children:"BFS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'function breadthFirstSearch(graph) {\n    let queue = [];\n    let traversal = [];\n    let visited = new Set();\n    let firstNode = Object.keys(graph)[0]\n    queue.push(firstNode);\n    while (queue.length > 0) {\n        let node = queue.shift();\n        visited.add(node);\n        traversal.push(node);\n        for (let neighbor of graph[node]) {\n            if (!visited.has(neighbor)) {\n                queue.push(neighbor);\n            }\n        }\n    }\n    return traversal;\n}\n\nfunction BFS(graph) {\n    let queue = [];\n    let visited = new Set();\n    let traversal = [];\n    let firstNode = Object.keys(graph)[0];\n    queue.push(firstNode);\n    while (queue.length > 0) {\n        let cur = queue.shift();\n        if (!visited.has(cur)) {\n            visited.add(cur);\n            traversal.push(cur);\n            for (let neighbor of graph[cur]) {\n                if (!visited.has(neighbor)) {\n                    queue.push(neighbor);\n                }\n            }\n        }\n    }\n    return traversal;\n}\n\nlet adj_list = {\n    "A": ["B", "C"],\n    "B": ["D", "E", "F"],\n    "C": ["G"],\n    "D": [],\n    "E": [],\n    "F": [],\n    "G": ["H", "I"],\n    "H": [],\n    "I": []\n}\n\nconsole.log(breadthFirstSearch(adj_list));\nconsole.log(BFS(adj_list));\n\n// for (let keys in adj_list) {\n//     for (let neighbor of adj_list[keys]) {\n//         console.log(keys + " CONECTED TO " + neighbor);\n//     }\n// }\n// console.log("---");\n// console.log("BFS TRAVERSAL: " + breadthFirstSearch(adj_list));\n\n// let keys = Object.keys(adj_list);\n// console.log("Adj_List\'s Keys: " + keys);\n// let arr = [1, 2, 3, 4, 5];\n// console.log(arr.shift());\n// console.log(arr);\n'})}),"\n",(0,t.jsx)(n.h4,{id:"dfs",children:"DFS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'function depthFirstSearch(graph) {\n    let stack = [];\n    let traversal = [];\n    let firstNode = Object.keys(graph)[0];\n    stack.push(firstNode);\n    while (stack.length > 0) {\n        let node = stack.pop();\n        traversal.push(node);\n        for (let neighbor of graph[node]) {\n            stack.push(neighbor);\n        }\n    }\n    return traversal;\n}\n\nfunction DFS(graph) {\n    let stack = [];\n    let traversal = [];\n    let firstNode = Object.keys(graph)[0];\n    stack.push(firstNode);\n    let visited = new Set();\n    while (stack.length > 0) {\n        let cur = stack.pop();\n        if (!visited.has(cur)) {\n            visited.add(cur);\n            traversal.push(cur);\n            for (let neighbor of graph[cur]) {\n                if (!visited.has(neighbor)) {\n                    stack.push(neighbor);\n                }\n            }\n        }\n    }\n    return traversal;\n}\n\nlet adj_list = {\n    "A": ["B", "C"],\n    "B": ["D", "E", "F"],\n    "C": ["G"],\n    "D": [],\n    "E": [],\n    "F": [],\n    "G": ["H", "I"],\n    "H": [],\n    "I": []\n}\n\nconsole.log(depthFirstSearch(adj_list));\nconsole.log(DFS(adj_list));\n'})}),"\n",(0,t.jsx)(n.h4,{id:"number-of-islands",children:"Number of islands"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'function numberOfIslands(grid) {\n    let islands = 0;\n    for (let row = 0; row < grid.length; row++) {\n        for (let col = 0; col < grid[0].length; col++) {\n            if (grid[row][col] == "1") {\n                islands++;\n                dfs(row, col, grid);\n            }\n        }\n    }\n    return islands;\n}\n\nfunction dfs(row, col, grid) {\n    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] == "0") {\n        return;\n    }\n    grid[row][col] = "0";\n    dfs(row + 1, col, grid);\n    dfs(row - 1, col, grid);\n    dfs(row, col + 1, grid);\n    dfs(row, col - 1, grid);\n}\n\nconsole.log(numberOfIslands(grid = [\n    ["1","1","1","1","0"],\n    ["1","1","0","1","0"],\n    ["1","1","0","0","0"],\n    ["0","0","0","0","0"]\n  ]))\n\nconsole.log(numberOfIslands(grid = [\n    ["1","1","0","0","0"],\n    ["1","1","0","0","0"],\n    ["0","0","1","0","0"],\n    ["0","0","0","1","1"]\n  ]))\n'})}),"\n",(0,t.jsx)(n.h4,{id:"number-of-provinces",children:"Number of provinces"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function numberOfProvinces(graph) {\n    // Convert graph to adjacency list\n    var adj_list = {};\n    for (let row = 0; row < graph.length; row++) {\n        adj_list[parseInt(row)] = [];\n        for (let col = 0; col < graph[0].length; col++) {\n            if (graph[row][col] === 1) {\n                adj_list[row].push(col);\n            }\n        }\n    }\n    let provinces = 0;\n    let visited = new Set();\n    for (let key in adj_list) {\n        if (!visited.has(parseInt(key))) {\n            depthFirstSearch(key, adj_list, visited);\n            provinces++;\n            \n        }\n    }\n    console.log(visited);\n    return provinces;\n}\n\nfunction depthFirstSearch(node, adj_list, visited) {\n    visited.add(node);\n    for (let neighbor of adj_list[node]) {\n        if (!visited.has(neighbor)) {\n            visited.add(neighbor);\n            depthFirstSearch(neighbor, adj_list, visited);\n        }\n    }\n}\n\nconsole.log(numberOfProvinces([[1,1,0],[1,1,0],[0,0,1]])); // 2\nconsole.log(numberOfProvinces([[1,0,0],[0,1,0],[0,0,1]])); // 3\n"})}),"\n",(0,t.jsx)(n.h3,{id:"binary-treebst-review",children:"Binary tree/BST review:"}),"\n",(0,t.jsx)(n.h4,{id:"maximum-depth-of-a-tree-reviewed-binary-tree",children:"Maximum depth of a tree (reviewed binary tree)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class TreeNode {\n    constructor(val) {\n        this.val = val;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nfunction findMaxDepth(root) {\n    if (!root) {\n        return 0;\n    }\n    return 1 + Math.max(findMaxDepth(root.left), findMaxDepth(root.right));\n}\n\nlet root = new TreeNode(10);\nroot.left = new TreeNode(5);\nroot.left.left = new TreeNode(3);\nroot.left.right = new TreeNode(7);\nroot.left.left.left = new TreeNode(1);\nroot.left.left.right = new TreeNode(4);\nroot.right = new TreeNode(15);\nroot.right.left = new TreeNode(12);\nroot.right.right = new TreeNode(17);\n\nconsole.log(findMaxDepth(root)); // 4\n"})}),"\n",(0,t.jsx)(n.h4,{id:"tree-traversal",children:"Tree Traversal"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class TreeNode {\n    constructor(val) {\n        this.val = val;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nfunction preOrderTraversal(root) {\n    function helper(node, traversal) {\n        if (node) {\n            traversal.push(node.val);\n            helper(node.left, traversal);\n            helper(node.right, traversal);\n        }\n        return traversal;\n    } \n    return helper(root, []);\n}\n\nfunction inOrderTraversal(root) {\n    function helper(node, traversal) {\n        if (node) {\n            helper(node.left, traversal);\n            traversal.push(node.val);\n            helper(node.right, traversal);\n        }\n        return traversal;\n    } \n    return helper(root, []);\n}\n\nfunction postOrderTraversal(root) {\n    function helper(node, traversal) {\n        if (node) {\n            helper(node.left, traversal);\n            helper(node.right, traversal);\n            traversal.push(node.val);\n        }\n        return traversal;\n    } \n    return helper(root, []);\n}\n\nlet root = new TreeNode(10);\nroot.left = new TreeNode(5);\nroot.left.left = new TreeNode(3);\nroot.left.right = new TreeNode(7);\nroot.left.left.left = new TreeNode(1);\nroot.left.left.right = new TreeNode(4);\nroot.right = new TreeNode(15);\nroot.right.left = new TreeNode(12);\nroot.right.right = new TreeNode(17);\n\nconsole.log(preOrderTraversal(root=root)); // 10 5 3 1 4 7 15 12 17\nconsole.log(inOrderTraversal(root=root)); // 1 3 4 5 7 10 12 15 17\nconsole.log(postOrderTraversal(root)); // 1 4 3 7 5 12 17 15 10\n"})}),"\n",(0,t.jsx)(n.h4,{id:"find-bsts-height",children:"Find BST's height"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { BinarySearchTree, Node } from "./BinarySearchTree.js";\n\nfunction findHeight(root) {\n    if (!root) return 0;\n    if (!root.left && !root.right) return 0;\n    let left = findHeight(root.left);\n    let right = findHeight(root.right);\n    return 1 + Math.max(left, right);\n}\n\nlet bst = new BinarySearchTree(10);\nbst.insert(10);\nbst.insert(7);\nbst.insert(15);\nbst.insert(5);\nbst.insert(8);\nbst.insert(12);\nbst.insert(17);\nbst.insert(3);\n\nconsole.log(findHeight(bst.root)); // 3\n'})}),"\n",(0,t.jsx)(n.h4,{id:"find-kth-largest-value-in-bst",children:"Find Kth Largest Value in BST"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { TreeNode, BST } from "./BST.js";\n\nfunction findKthLargestValueBF(root, k) {\n    let traversal = inOrderTraversal(root);\n    return traversal[traversal.length - k];\n}\n\nfunction inOrderTraversal(root) {\n    function helper(node, traversal) {\n        if (node) {\n            helper(node.left, traversal);\n            traversal.push(node.val);\n            helper(node.right, traversal);\n        }\n        return traversal;\n    }\n    return helper(root, []);\n}\n\nfunction findKthLargestValue(root, k) {\n    let stack = [];\n    let cur = root;\n    let count = 0;\n    while (stack.length > 0 || cur) {\n        while (cur) {\n            stack.push(cur);\n            cur = cur.right;\n        }\n        cur = stack.pop();\n        count++;\n        if (count === k) return cur.val;\n        cur = cur.left;\n    }\n    return null;\n}\n\nlet bst = new BST(10);\nbst.insert(7);\nbst.insert(12);\nbst.insert(5);\nbst.insert(15);\nbst.insert(11);\nbst.insert(8);\n\nconsole.log(inOrderTraversal(bst.root));\nconsole.log(findKthLargestValueBF(bst.root, 3)); // 11\nconsole.log(findKthLargestValue(bst.root, 3)); // 11\nconsole.log(findKthLargestValueBF(bst.root, 1)); // 15\nconsole.log(findKthLargestValue(bst.root, 1)); // 15\n'})}),"\n",(0,t.jsx)(n.h4,{id:"find-ancestors-of-a-given-node",children:"Find Ancestors of a Given Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { BinarySearchTree, Node } from "./BinarySearchTree.js";\n\nfunction findAncestor(root, target) {\n    let result = [];\n    if( helper(root, target, result)) return result;\n    return false;\n    \n}\n\nfunction helper(node, target, result) {\n    if (!node) return false;\n    if (node.val === target) return true;\n    if (helper(node.left, target, result) || helper(node.right, target.result)) {\n        result.push(node.val);\n        return true;\n    }\n    return false;\n}\n\nlet bst = new BinarySearchTree(10);\n// bst.insert(10);\nbst.insert(7);\nbst.insert(15);\nbst.insert(5);\nbst.insert(8);\nbst.insert(12);\nbst.insert(17);\nbst.insert(3);\n\nconsole.log(findAncestor(bst.root, 5)); // [7, 10]\nconsole.log(findAncestor(bst.root, 3)); // [5, 7, 10]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(7294);const l={},i=t.createContext(l);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);