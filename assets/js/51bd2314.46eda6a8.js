"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1245],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(r),p=a,m=c["".concat(l,".").concat(p)]||c[p]||_[p]||i;return r?t.createElement(m,s(s({ref:n},u),{},{components:r})):t.createElement(m,s({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2093:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>_,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(7462),a=(r(7294),r(3905));const i={title:"Aug 11",description:"Fri, Aug 11"},s=void 0,o={unversionedId:"leetcode-grinding/2023/August/aug_11_23",id:"leetcode-grinding/2023/August/aug_11_23",title:"Aug 11",description:"Fri, Aug 11",source:"@site/docs/leetcode-grinding/2023/August/aug_11_23.md",sourceDirName:"leetcode-grinding/2023/August",slug:"/leetcode-grinding/2023/August/aug_11_23",permalink:"/my-website/docs/leetcode-grinding/2023/August/aug_11_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Aug 11",description:"Fri, Aug 11"},sidebar:"tutorialSidebar",previous:{title:"Leetcode Grinding",permalink:"/my-website/docs/category/leetcode-grinding"},next:{title:"Aug 15",permalink:"/my-website/docs/leetcode-grinding/2023/August/aug_15_23"}},l={},d=[{value:"Reverse words in a string",id:"reverse-words-in-a-string",level:3},{value:"Add two numbers",id:"add-two-numbers",level:3},{value:"Squares of sorted array",id:"squares-of-sorted-array",level:3},{value:"Search in 2D matrix",id:"search-in-2d-matrix",level:3}],u={toc:d},c="wrapper";function _(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"reverse-words-in-a-string"},"Reverse words in a string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import re\n\n\ndef reverse_word(word, start, end):\n    while start < end:\n        temp = word[end]\n        word[end] = word[start]\n        word[start] = temp\n        start += 1\n        end -= 1\n\n\ndef reverse_words_in_a_string(sentence):\n    sentence = re.sub(" +", " ", sentence.strip())\n    sentence = list(sentence)\n    reverse_word(sentence, 0, len(sentence) - 1)\n    start = end = 0\n    while start < len(sentence):\n        while end < len(sentence) and sentence[end] != " ":\n            end += 1\n        reverse_word(sentence, start, end - 1)\n        start = end = end + 1\n    return "".join(sentence)\n\n\ndef main():\n    s = "the sky is blue"\n    print(reverse_words_in_a_string(s))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"add-two-numbers"},"Add two numbers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class ListNode(object):\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n\ndef print_list(head):\n    cur = head\n    while cur.next:\n        print(cur.val, end=" -> ")\n        cur = cur.next\n    print(cur.val, end=" -> null")\n    print()\n\n\ndef add_two_numbers(l1, l2):\n    carry = 0\n    dummy_head = cur = ListNode(0)\n    while l1 or l2 or carry:\n        v1 = v2 = 0\n        if l1:\n            v1 = l1.val\n            l1 = l1.next\n        if l2:\n            v2 = l2.val\n            l2 = l2.next\n        total = v1 + v2 + carry\n        if total >= 10:\n            carry = 1\n            remainder = total % 10\n            cur.next = ListNode(remainder)\n            cur = cur.next\n        else:\n            carry = 0\n            cur.next = ListNode(total)\n            cur = cur.next\n    return dummy_head.next\n\n\ndef main():\n    l1 = ListNode(2)\n    l1.next = ListNode(4)\n    l1.next.next = ListNode(3)\n\n    l2 = ListNode(5)\n    l2.next = ListNode(6)\n    l2.next.next = ListNode(4)\n\n    # print_list(l1)\n    # print_list(l2)\n\n    new_head = add_two_numbers(l1, l2)\n    print_list(new_head)\n\n    l3 = ListNode(9)\n    l3.next = ListNode(9)\n    l3.next.next = ListNode(9)\n    l3.next.next.next = ListNode(9)\n\n    l4 = ListNode(9)\n    l4.next = ListNode(9)\n    l4.next.next = ListNode(9)\n\n    another_head = add_two_numbers(l3, l4)\n    print_list(another_head)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"squares-of-sorted-array"},"Squares of sorted array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Using sort() built-in function\ndef square_sorted_array(arr):\n    for i in range(0, len(arr)):\n       arr[i] = arr[i] ** 2\n    arr.sort()\n    return arr\n\n\n# Using two pointer\ndef sorted_square_array(arr):\n    left = 0\n    right = len(arr) - 1\n    res = [0] * len(arr)\n    index = len(res) - 1\n    while left <= right:\n        sqr_left = arr[left] ** 2\n        sqr_right = arr[right] ** 2\n        if sqr_left > sqr_right:\n            res[index] = sqr_left\n            index -= 1\n            left += 1\n        else:\n            res[index] = sqr_right\n            index -= 1\n            right -= 1\n    return res\n\n\ndef main():\n    arr1 = [1, 2, 3]\n    arr2 = [-3, -2, -1, 0, 1, 2]\n    # print(square_sorted_array(arr1))\n    print(sorted_square_array(arr1))\n    # print(square_sorted_array(arr2))\n    print(sorted_square_array(arr2))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"search-in-2d-matrix"},"Search in 2D matrix"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def search_2d_matrix(matrix, value):\n    row = 0\n    col = len(matrix[row]) - 1\n    while row < len(matrix) and col >= 0:\n        if matrix[row][col] == value:\n            return True\n        elif matrix[row][col] > value:\n            col -= 1\n        else:\n            row += 1\n    return False\n\n\ndef main():\n    matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]\n    target = 3\n    print(search_2d_matrix(matrix, target))  # True\n    print(search_2d_matrix(matrix, 100))  # False\n    print(search_2d_matrix(matrix, 13))  # False\n\n\nif __name__ == "__main__":\n    main()\n')))}_.isMDXComponent=!0}}]);