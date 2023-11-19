"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5456],{8232:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=r(5893),a=r(1151);const i={title:"Aug 11",description:"Fri, Aug 11"},s=void 0,d={id:"daily-practice/2023/August/aug_11_23",title:"Aug 11",description:"Fri, Aug 11",source:"@site/docs/daily-practice/2023/August/aug_11_23.md",sourceDirName:"daily-practice/2023/August",slug:"/daily-practice/2023/August/aug_11_23",permalink:"/my-website/docs/daily-practice/2023/August/aug_11_23",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Aug 11",description:"Fri, Aug 11"},sidebar:"tutorialSidebar",previous:{title:"Daily Practice",permalink:"/my-website/docs/category/daily-practice"},next:{title:"Aug 15",permalink:"/my-website/docs/daily-practice/2023/August/aug_15_23"}},l={},o=[{value:"Reverse words in a string",id:"reverse-words-in-a-string",level:3},{value:"Add two numbers",id:"add-two-numbers",level:3},{value:"Squares of sorted array",id:"squares-of-sorted-array",level:3},{value:"Search in 2D matrix",id:"search-in-2d-matrix",level:3}];function c(n){const e={code:"code",h3:"h3",pre:"pre",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"reverse-words-in-a-string",children:"Reverse words in a string"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import re\n\n\ndef reverse_word(word, start, end):\n    while start < end:\n        temp = word[end]\n        word[end] = word[start]\n        word[start] = temp\n        start += 1\n        end -= 1\n\n\ndef reverse_words_in_a_string(sentence):\n    sentence = re.sub(" +", " ", sentence.strip())\n    sentence = list(sentence)\n    reverse_word(sentence, 0, len(sentence) - 1)\n    start = end = 0\n    while start < len(sentence):\n        while end < len(sentence) and sentence[end] != " ":\n            end += 1\n        reverse_word(sentence, start, end - 1)\n        start = end = end + 1\n    return "".join(sentence)\n\n\ndef main():\n    s = "the sky is blue"\n    print(reverse_words_in_a_string(s))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(e.h3,{id:"add-two-numbers",children:"Add two numbers"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'class ListNode(object):\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n\ndef print_list(head):\n    cur = head\n    while cur.next:\n        print(cur.val, end=" -> ")\n        cur = cur.next\n    print(cur.val, end=" -> null")\n    print()\n\n\ndef add_two_numbers(l1, l2):\n    carry = 0\n    dummy_head = cur = ListNode(0)\n    while l1 or l2 or carry:\n        v1 = v2 = 0\n        if l1:\n            v1 = l1.val\n            l1 = l1.next\n        if l2:\n            v2 = l2.val\n            l2 = l2.next\n        total = v1 + v2 + carry\n        if total >= 10:\n            carry = 1\n            remainder = total % 10\n            cur.next = ListNode(remainder)\n            cur = cur.next\n        else:\n            carry = 0\n            cur.next = ListNode(total)\n            cur = cur.next\n    return dummy_head.next\n\n\ndef main():\n    l1 = ListNode(2)\n    l1.next = ListNode(4)\n    l1.next.next = ListNode(3)\n\n    l2 = ListNode(5)\n    l2.next = ListNode(6)\n    l2.next.next = ListNode(4)\n\n    # print_list(l1)\n    # print_list(l2)\n\n    new_head = add_two_numbers(l1, l2)\n    print_list(new_head)\n\n    l3 = ListNode(9)\n    l3.next = ListNode(9)\n    l3.next.next = ListNode(9)\n    l3.next.next.next = ListNode(9)\n\n    l4 = ListNode(9)\n    l4.next = ListNode(9)\n    l4.next.next = ListNode(9)\n\n    another_head = add_two_numbers(l3, l4)\n    print_list(another_head)\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(e.h3,{id:"squares-of-sorted-array",children:"Squares of sorted array"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'# Using sort() built-in function\ndef square_sorted_array(arr):\n    for i in range(0, len(arr)):\n       arr[i] = arr[i] ** 2\n    arr.sort()\n    return arr\n\n\n# Using two pointer\ndef sorted_square_array(arr):\n    left = 0\n    right = len(arr) - 1\n    res = [0] * len(arr)\n    index = len(res) - 1\n    while left <= right:\n        sqr_left = arr[left] ** 2\n        sqr_right = arr[right] ** 2\n        if sqr_left > sqr_right:\n            res[index] = sqr_left\n            index -= 1\n            left += 1\n        else:\n            res[index] = sqr_right\n            index -= 1\n            right -= 1\n    return res\n\n\ndef main():\n    arr1 = [1, 2, 3]\n    arr2 = [-3, -2, -1, 0, 1, 2]\n    # print(square_sorted_array(arr1))\n    print(sorted_square_array(arr1))\n    # print(square_sorted_array(arr2))\n    print(sorted_square_array(arr2))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(e.h3,{id:"search-in-2d-matrix",children:"Search in 2D matrix"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'def search_2d_matrix(matrix, value):\n    row = 0\n    col = len(matrix[row]) - 1\n    while row < len(matrix) and col >= 0:\n        if matrix[row][col] == value:\n            return True\n        elif matrix[row][col] > value:\n            col -= 1\n        else:\n            row += 1\n    return False\n\n\ndef main():\n    matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]\n    target = 3\n    print(search_2d_matrix(matrix, target))  # True\n    print(search_2d_matrix(matrix, 100))  # False\n    print(search_2d_matrix(matrix, 13))  # False\n\n\nif __name__ == "__main__":\n    main()\n'})})]})}function u(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>d,a:()=>s});var t=r(7294);const a={},i=t.createContext(a);function s(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);