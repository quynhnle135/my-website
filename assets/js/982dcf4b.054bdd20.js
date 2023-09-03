"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5125],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>m});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},f="mdxType",_={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=u(n),c=a,m=f["".concat(s,".").concat(c)]||f[c]||_[c]||o;return n?t.createElement(m,l(l({ref:r},d),{},{components:n})):t.createElement(m,l({ref:r},d))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7156:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>_,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(7462),a=(n(7294),n(3905));const o={title:"Aug 30",description:"Wed, Aug 30"},l=void 0,i={unversionedId:"leetcode-grinding/2023/August/aug_30_23",id:"leetcode-grinding/2023/August/aug_30_23",title:"Aug 30",description:"Wed, Aug 30",source:"@site/docs/leetcode-grinding/2023/August/aug_30_23.md",sourceDirName:"leetcode-grinding/2023/August",slug:"/leetcode-grinding/2023/August/aug_30_23",permalink:"/my-website/docs/leetcode-grinding/2023/August/aug_30_23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode-grinding/2023/August/aug_30_23.md",tags:[],version:"current",frontMatter:{title:"Aug 30",description:"Wed, Aug 30"},sidebar:"tutorialSidebar",previous:{title:"Aug 29",permalink:"/my-website/docs/leetcode-grinding/2023/August/aug_29_23"},next:{title:"Tutorial - Basics",permalink:"/my-website/docs/category/tutorial---basics"}},s={},u=[{value:"Valid Anagram",id:"valid-anagram",level:3},{value:"Binary Tree Traversal Review",id:"binary-tree-traversal-review",level:3},{value:"Find The Height of Binary Tree",id:"find-the-height-of-binary-tree",level:3},{value:"Level Order Traversal",id:"level-order-traversal",level:3},{value:"Reverse Level Order Traversal",id:"reverse-level-order-traversal",level:3},{value:"Smallest Substring Having Given Sum",id:"smallest-substring-having-given-sum",level:3},{value:"Maximum Subarray Sum Size K",id:"maximum-subarray-sum-size-k",level:3}],d={toc:u},f="wrapper";function _(e){let{components:r,...n}=e;return(0,a.kt)(f,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"valid-anagram"},"Valid Anagram"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def check_valid_anagram(s, t):\n    char_dict = {}\n    for c in s:\n        if c in char_dict:\n            char_dict[c] += 1\n        else:\n            char_dict[c] = 1\n    for c in t:\n        if c not in char_dict:\n            return False\n        else:\n            if char_dict[c] == 0:\n                return False\n            else:\n                char_dict[c] -= 1\n\n    for key in char_dict:\n        if char_dict[key] != 0:\n            return False\n    return True\n\n\ndef main():\n    print(check_valid_anagram(s="anagram", t="nagaram"))  # True\n    print(check_valid_anagram(s="rat", t="car"))  # False\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"binary-tree-traversal-review"},"Binary Tree Traversal Review"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass BinaryTree:\n    def __init__(self, root=None):\n        self.root = root\n\n    def preorder_traversal(self):\n        return self.preorder_traversal_helper(root=self.root, traversal="")\n\n    def preorder_traversal_helper(self, root, traversal):\n        if root:\n            traversal += str(root.val) + " "\n            traversal = self.preorder_traversal_helper(root.left, traversal)\n            traversal = self.preorder_traversal_helper(root.right, traversal)\n        return traversal\n\n    def inorder_traversal(self):\n        return self.inorder_traversal_helper(root=self.root, traversal="")\n\n    def inorder_traversal_helper(self, root, traversal):\n        if root:\n            traversal = self.inorder_traversal_helper(root.left, traversal)\n            traversal += str(root.val) + " "\n            traversal = self.inorder_traversal_helper(root.right, traversal)\n        return traversal\n\n    def postorder_traversal(self):\n        return self.postorder_traversal_helper(root=self.root, traversal="")\n\n    def postorder_traversal_helper(self, root, traversal):\n        if root:\n            traversal = self.postorder_traversal_helper(root.left, traversal)\n            traversal = self.postorder_traversal_helper(root.right, traversal)\n            traversal += str(root.val) + " "\n        return traversal\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    root.right.left = Node(6)\n    root.right.right = Node(7)\n    tree = BinaryTree(root=root)\n    print(tree.preorder_traversal())\n    print(tree.inorder_traversal())\n    print(tree.postorder_traversal())\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"find-the-height-of-binary-tree"},"Find The Height of Binary Tree"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass BinaryTree:\n    def __init__(self, root=None):\n        self.root = root\n\n    def calculate_height(self, root):\n        if not root:\n            return 0\n        return 1 + max(self.calculate_height(root.left), self.calculate_height(root.right))\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    root.right.left = Node(6)\n    root.right.right = Node(7)\n    root.right.right.right = Node(8)\n    tree = BinaryTree(root=root)\n    print(tree.calculate_height(root=tree.root))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"level-order-traversal"},"Level Order Traversal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from collections import deque\n\n\nclass Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass BinaryTree:\n    def __init__(self, root):\n        self.root = root\n\n    def level_order_traversal(self, root):\n        if not root:\n            return []\n        result = []\n        q = deque()\n        q.append(root)\n        while q:\n            level_size = len(q)\n            current_level = []\n            for i in range(level_size):\n                current_node = q.popleft()\n                current_level.append(current_node.val)\n                if current_node.left:\n                    q.append(current_node.left)\n                if current_node.right:\n                    q.append(current_node.right)\n            result.append(current_level)\n        return result\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    root.right.left = Node(6)\n    root.right.right = Node(7)\n    root.right.right.right = Node(8)\n    tree = BinaryTree(root=root)\n    print(tree.level_order_traversal(root=tree.root))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"reverse-level-order-traversal"},"Reverse Level Order Traversal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from collections import deque\n\n\nclass Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass BinaryTree:\n    def __init__(self, root):\n        self.root = root\n\n    def reverse_order_traversal(self, root):\n        if not root:\n            return []\n        q = deque()\n        s = []\n        result = []\n        q.append(root)\n        while q:\n            current_level = []\n            level_size = len(q)\n            for i in range(level_size):\n                current_node = q.popleft()\n                current_level.append(current_node.val)\n                if current_node.left:\n                    q.append(current_node.left)\n                if current_node.right:\n                    q.append(current_node.right)\n            s.append(current_level)\n\n        while s:\n            result.append(s.pop())\n        return result\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    root.right.left = Node(6)\n    root.right.right = Node(7)\n    root.right.right.right = Node(8)\n    tree = BinaryTree(root=root)\n    print(tree.reverse_order_traversal(root=tree.root))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"smallest-substring-having-given-sum"},"Smallest Substring Having Given Sum"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Given an array of positive integers nums and a positive integer S, find the length of the smallest contiguous\n# subarray whose sum is at least S. Return 0 if no such subarray exists.\n\ndef find_smallest_sub(nums, s):\n    min_len = float("inf")\n    cur_sum = start = 0\n    for end in range(len(nums)):\n        cur_sum += nums[end]\n        while cur_sum >= s and start <= end:\n            min_len = min(min_len, end - start + 1)\n            cur_sum -= nums[start]\n            start += 1\n\n    if min_len == float("inf"):\n        return 0\n    return min_len\n\n\ndef main():\n    print(find_smallest_sub(nums=[2, 1, 2, 4, 3], s=7))  # 2\n    print(find_smallest_sub(nums=[1, 4, 4], s=4))  # 1\n    print(find_smallest_sub(nums=[5, 1, 3, 5, 10, 7, 4, 9, 2, 8], s=15))  # 2\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"maximum-subarray-sum-size-k"},"Maximum Subarray Sum Size K"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Problem Statement:\n# Given an array of integers nums and a positive integer K, find the maximum sum of any contiguous subarray of size K.\n\ndef find_max_sum(nums, k):\n    if not nums:\n        return None  # Handle empty array case\n    start = 0\n    max_sum = float("-inf")\n    cur_sum = 0\n    for end in range(len(nums)):\n        cur_sum += nums[end]\n        if end - start + 1 == k:\n            max_sum = max(max_sum, cur_sum)\n            cur_sum -= nums[start]\n            start += 1\n    return max_sum\n\n\ndef main():\n    print(find_max_sum(nums=[2, 1, 5, 1, 3, 2], k=3))  # 9\n    print(find_max_sum(nums=[2, 3, 4, 1, 5], k=2))  # 7\n    print(find_max_sum(nums=[1, 4, 2, 10, 23, 3, 1, 0, 20], k=4))  # 39\n\n\nif __name__ == "__main__":\n    main()\n')))}_.isMDXComponent=!0}}]);