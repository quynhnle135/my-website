"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7351],{4771:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=n(5893),o=n(1151);const l={title:"Sep 23, 2023"},a="Coding Journal: Sep 23, 2023",s={id:"learning-journal/2023/September/20230923",title:"Sep 23, 2023",description:"Binary Search Tree review",source:"@site/docs/learning-journal/2023/September/20230923.md",sourceDirName:"learning-journal/2023/September",slug:"/learning-journal/2023/September/20230923",permalink:"/docs/learning-journal/2023/September/20230923",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Sep 23, 2023"},sidebar:"tutorialSidebar",previous:{title:"Sep 19, 2023",permalink:"/docs/learning-journal/2023/September/20230919"},next:{title:"Sep 24, 2023",permalink:"/docs/learning-journal/2023/September/20230924"}},i={},d=[{value:"Binary Search Tree review",id:"binary-search-tree-review",level:2},{value:"Binary Search New Node Insertion",id:"binary-search-new-node-insertion",level:4},{value:"Binary Tree Node Search",id:"binary-tree-node-search",level:4},{value:"Check Binary Search Tree Property",id:"check-binary-search-tree-property",level:4},{value:"Convert Sorted Array to Binary Search Tree",id:"convert-sorted-array-to-binary-search-tree",level:4},{value:"Convert Sorted Linked List to Binary Search Tree",id:"convert-sorted-linked-list-to-binary-search-tree",level:4},{value:"Note:",id:"note",level:5},{value:"Interviewing.io",id:"interviewingio",level:4},{value:"Randomized Queue",id:"randomized-queue",level:5},{value:"Find the length of the shortest path in a 2D maze from the top left to bottom right with some obstacles",id:"find-the-length-of-the-shortest-path-in-a-2d-maze-from-the-top-left-to-bottom-right-with-some-obstacles",level:5},{value:"Interviewer&#39;s feedback",id:"interviewers-feedback",level:5}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"coding-journal-sep-23-2023",children:"Coding Journal: Sep 23, 2023"}),"\n",(0,t.jsx)(r.h2,{id:"binary-search-tree-review",children:"Binary Search Tree review"}),"\n",(0,t.jsx)(r.h4,{id:"binary-search-new-node-insertion",children:"Binary Search New Node Insertion"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass BinarySearchTree:\n    def __init__(self, root=None):\n        self.root = root\n\n    # Insert a new node to a binary search tree\n    def insert(self, newNode):\n        return self.insert_helper(current=self.root, newNode=newNode)\n\n    def insert_helper(self, current, newNode):\n        # Append to the left if new node's val is smaller than the current node's\n        if current.val > newNode:\n            if current.left:\n                self.insert_helper(current.left, newNode)\n            else:\n                current.left = TreeNode(newNode)\n        # Append to the right if new node's val is bigger than the current node's\n        else:\n            if current.right:\n                self.insert_helper(current.right, newNode)\n            else:\n                current.right = TreeNode(newNode)\n\n    def preorder_traversal(self):\n        return self.preorder_traversal_helper(current=self.root, traversal=[])\n\n    def preorder_traversal_helper(self, current, traversal):\n        if current:\n            traversal.append(current.val)\n            traversal = self.preorder_traversal_helper(current.left, traversal)\n            traversal = self.preorder_traversal_helper(current.right, traversal)\n        return traversal\n\n    def inorder_traversal(self):\n        return self.inorder_traversal_helper(self.root, [])\n\n    def inorder_traversal_helper(self, current, traversal):\n        if current:\n            traversal = self.inorder_traversal_helper(current.left, traversal)\n            traversal.append(current.val)\n            traversal = self.inorder_traversal_helper(current.right, traversal)\n        return traversal\n\n    def postorder_traversal(self):\n        return self.postorder_traversal_helper(current=self.root, traversal=[])\n\n    def postorder_traversal_helper(self, current, traversal):\n        if current:\n            traversal = self.postorder_traversal_helper(current.left, traversal)\n            traversal = self.postorder_traversal_helper(current.right, traversal)\n            traversal.append(current.val)\n        return traversal\n\n\ndef main():\n    # List of unordered values to insert to the binary search tree\n    arr = [10, 5, 18, 2, 7, 115, 22]\n    # Set the first value in the list as the root\n    root = TreeNode(arr[0])\n    bst = BinarySearchTree(root=root)\n    # Traverse through every element of the list and insert them to the tree\n    for i in range(1, len(arr)):\n        bst.insert(newNode=arr[i])\n\n    # Tree traversal\n    print(bst.inorder_traversal())\n    print(bst.preorder_traversal())\n    print(bst.postorder_traversal())\n\n\nif __name__ == \"__main__\":\n    main()\n\n"})}),"\n",(0,t.jsx)(r.h4,{id:"binary-tree-node-search",children:"Binary Tree Node Search"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass BinaryTree:\n    def __init__(self, root=None):\n        self.root = root\n\n    def insert(self, newNode):\n        return self.insert_helper(self.root, newNode)\n\n    def insert_helper(self, current, newNode):\n        if newNode < current.val:\n            if current.left:\n                self.insert_helper(current.left, newNode)\n            else:\n                current.left = Node(newNode)\n        else:\n            if current.right:\n                self.insert_helper(current.right, newNode)\n            else:\n                current.right = Node(newNode)\n\n    def preorderTraversal(self):\n        return self.preorderTraversal_helper(self.root, [])\n\n    def preorderTraversal_helper(self, current, traversal):\n        if current:\n            traversal.append(current.val)\n            traversal = self.preorderTraversal_helper(current.left, traversal)\n            traversal = self.preorderTraversal_helper(current.right, traversal)\n        return traversal\n\n    def search(self, target):\n        return self.search_helper(self.root, target)\n\n    def search_helper(self, current, target):\n        if current:\n            if target == current.val:\n                return True\n            elif target > current.val:\n                return self.search_helper(current.right, target)\n            else:\n                return self.search_helper(current.left, target)\n        return False\n\n\ndef main():\n    arr = [10, 5, 18, 2, 7, 115, 22]\n    root = Node(arr[0])\n    bst = BinaryTree(root)\n    for i in range(1, len(arr)):\n        bst.insert(arr[i])\n\n    print(bst.preorderTraversal())\n    print(bst.search(22))\n    print(bst.search(115))\n    print(bst.search(18))\n    print(bst.search(100))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(r.h4,{id:"check-binary-search-tree-property",children:"Check Binary Search Tree Property"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass BinaryTree:\n    def __init__(self, root=None):\n        self.root = root\n\n    # Check property using inorder traversal approach\n    def check_property_i(self):\n        nodes = self.inorder_traversal(root=self.root)\n        for i in range(len(nodes) - 1):\n            if nodes[i + 1] <= nodes[i]:\n                return False\n        return True\n\n    def inorder_traversal(self, root):\n        return self.inorder_traversal_helper(root, [])\n\n    def inorder_traversal_helper(self, current, result):\n        if current:\n            result = self.inorder_traversal_helper(current.left, result)\n            result.append(current.val)\n            result = self.inorder_traversal_helper(current.right, result)\n        return result\n\n    def check_property_ii(self):\n        return self.check_property_helper(self.root, float("-inf"), float("inf"))\n\n    def check_property_helper(self, current, lower, upper):\n        if not current:\n            return True\n        if not lower < current.val < upper:\n            return False\n\n        return (self.check_property_helper(current=current.left, lower=lower, upper=current.val)) and \\\n            (self.check_property_helper(current=current.right, lower=current.val, upper=upper))\n\n\ndef main():\n    root = TreeNode(10)\n    root.left = TreeNode(5)\n    root.left.left = TreeNode(2)\n    root.left.right = TreeNode(7)\n    root.right = TreeNode(18)\n    root.right.left = TreeNode(15)\n    root.right.right = TreeNode(22)\n\n    bst = BinaryTree(root=root)\n    print(bst.check_property_i())\n    print(bst.check_property_ii())\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,t.jsx)(r.h4,{id:"convert-sorted-array-to-binary-search-tree",children:"Convert Sorted Array to Binary Search Tree"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass BinaryTree:\n    def __init__(self, root=None):\n        self.root = root\n\n    def inorder_traversal(self, root):\n        return self.inorder_traversal_helper(root, [])\n\n    def inorder_traversal_helper(self, current, result):\n        if current:\n            result = self.inorder_traversal_helper(current.left, result)\n            result.append(current.val)\n            result = self.inorder_traversal_helper(current.right, result)\n        return result\n\n\ndef convert_sorted_arr_to_bst(nums):\n    if not nums:\n        return None\n\n    # find the middle node\n    mid = len(nums) // 2\n    root = Node(nums[mid])\n\n    root.left = convert_sorted_arr_to_bst(nums[:mid])\n    root.right = convert_sorted_arr_to_bst(nums[mid + 1:])\n\n    return root\n\n\ndef main():\n    sorted_nums = [-10, -3, 0, 5, 9]\n    root = convert_sorted_arr_to_bst(sorted_nums)\n    bst = BinaryTree(root=root)\n    print(bst.inorder_traversal(bst.root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(r.h4,{id:"convert-sorted-linked-list-to-binary-search-tree",children:"Convert Sorted Linked List to Binary Search Tree"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n\nclass BinaryTree:\n    def __init__(self, root=None):\n        self.root = root\n\n\ndef convert_linkedlist_to_bst_i(head):\n    nodes = []\n    while head:\n        nodes.append(head.val)\n        head = head.next\n    return helper(nodes)\n\n\ndef helper(nums):\n    if not nums:\n        return None\n    mid = len(nums) // 2\n    root = TreeNode(nums[mid])\n    root.left = helper(nums[:mid])\n    root.right = helper(nums[mid+1:])\n    return root\n\n\ndef convert_linkedlist_to_bst_ii(head):\n    if not head:\n        return None\n\n    if not head.next:\n        return TreeNode(head.val)\n\n    # Traverse to the middle node\n    fast = slow = head\n    prev = ListNode(0)\n    while fast and fast.next:\n        fast = fast.next.next\n        prev = slow\n        slow = slow.next\n\n    prev.next = None\n    root = TreeNode(slow.val)\n    root.left = convert_linkedlist_to_bst_ii(head)\n    root.right = convert_linkedlist_to_bst_ii(slow.next)\n    return root\n"})}),"\n",(0,t.jsx)(r.h5,{id:"note",children:"Note:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Convert a sorted array to a BST can apply to more advanced exercises (convert sorted linkedlist to bst)."}),"\n",(0,t.jsx)(r.li,{children:"I can also apply Fast and Slow pointers approach to solve Convert to sorted Linked List to BST directly to the given list"}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"interviewingio",children:"Interviewing.io"}),"\n",(0,t.jsx)(r.h5,{id:"randomized-queue",children:"Randomized Queue"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'\n"""\nProblem: Implement a data structure called "RandomizedQueue" that supports the following operations:\n\nenqueue(item): Add an item to the queue.\ndequeue(): Remove and return a random item from the queue. Each item should have an equal probability of being removed.\nsample(): Return a random item from the queue without removing it.\nisEmpty(): Return true if the queue is empty, false otherwise.\n"""\nimport random\nclass randomizeQueue:\n    def __init__(self, queue=[]) -> None:\n        self.queue = queue\n    \n    def isEmpty(self):\n        if not self.queue:\n            return True\n        return False\n    \n    def enqueue(self, value):\n        self.queue.append(value)\n    \n    def sample(self):\n        if self.isEmpty():\n            print("The queue is empty")\n            return None\n        random_idx = random.randint(0, len(self.queue) - 1)\n        return self.queue[random_idx]\n    \n    def dequeue(self):\n        try:\n            temp_value = self.sample()\n            self.queue.remove(temp_value)\n            return temp_value\n        except ValueError:\n            print("The queue is empty")\n            return None\n            \n        \n\n\ndef main():\n    q = randomizeQueue([1,2,3])\n    print(q.isEmpty())\n    # q.enqueue(1)\n    # q.enqueue(2)\n    # q.enqueue(3)\n    # q.enqueue(4)\n    print(q.sample())\n    print("Delete", q.dequeue())\n    for v in q.queue:\n        print(v)\n\n\nif __name__ == "__main__":\n    main()\n\n# queue -> first in first out -> based on array -> \n\n# dequeue -> can return any random value in the queue\n# store temp_value = queue.sample()\n# remove value in the queue\n# return temp_value\n\n# sample -> random_idx = pick a random index among 0-len(queue)-1\n# return queue[random_idx]\n\n# isEmpty -> check if the current queue is empty or not -> use if statement to check\n\n# enqueue -> append to current queue -> append()\n\n\n# queue = [] -> [2, 3, 1]\n# queue.enqueue(1)\n# queue.enqueue(2)\n# queue.enqueue(3)\n# queue.dequeue() -> 2\n# queue.sample() -> 3\n\n'})}),"\n",(0,t.jsx)(r.h5,{id:"find-the-length-of-the-shortest-path-in-a-2d-maze-from-the-top-left-to-bottom-right-with-some-obstacles",children:"Find the length of the shortest path in a 2D maze from the top left to bottom right with some obstacles"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://www.geeksforgeeks.org/count-number-ways-reach-destination-maze/",children:"https://www.geeksforgeeks.org/count-number-ways-reach-destination-maze/"})}),"\n",(0,t.jsx)(r.p,{children:"-> Cannot solve"}),"\n",(0,t.jsx)(r.h5,{id:"interviewers-feedback",children:"Interviewer's feedback"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Strengths & what went well: Asked questions to clarify the problem, explained thought process and solution before starting to code"}),"\n",(0,t.jsx)(r.li,{children:"Areas for improvement: Could come up with more edge cases, think of possible errors and incorporate error handling"}),"\n",(0,t.jsx)(r.li,{children:"Advice for future interview: Keep practicing more interviewing.io interviews and leetcode problems"}),"\n",(0,t.jsx)(r.li,{children:"Open notes: For the second question you can look up Graphs, Breadth First Search and Dijkstra's Algorithm. Another possible variation of this could ask for the path you took as well"}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>a});var t=n(7294);const o={},l=t.createContext(o);function a(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);