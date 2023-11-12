"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[493],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),o=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(d.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(t),p=r,m=c["".concat(d,".").concat(p)]||c[p]||f[p]||i;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const i={title:"Aug 28",description:"Mon, Aug 28"},l=void 0,s={unversionedId:"daily-practice/2023/August/aug_28_23",id:"daily-practice/2023/August/aug_28_23",title:"Aug 28",description:"Mon, Aug 28",source:"@site/docs/daily-practice/2023/August/aug_28_23.md",sourceDirName:"daily-practice/2023/August",slug:"/daily-practice/2023/August/aug_28_23",permalink:"/my-website/docs/daily-practice/2023/August/aug_28_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Aug 28",description:"Mon, Aug 28"},sidebar:"tutorialSidebar",previous:{title:"Aug 24",permalink:"/my-website/docs/daily-practice/2023/August/aug_24_23"},next:{title:"Aug 29",permalink:"/my-website/docs/daily-practice/2023/August/aug_29_23"}},d={},o=[{value:"Fast and slow pointers review",id:"fast-and-slow-pointers-review",level:3},{value:"Find middle node of a linked list",id:"find-middle-node-of-a-linked-list",level:4},{value:"Find maximum twin sum of a linked list",id:"find-maximum-twin-sum-of-a-linked-list",level:4},{value:"Palindrome linked list",id:"palindrome-linked-list",level:4}],u={toc:o},c="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"fast-and-slow-pointers-review"},"Fast and slow pointers review"),(0,r.kt)("h4",{id:"find-middle-node-of-a-linked-list"},"Find middle node of a linked list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n\ndef print_list(head):\n    cur = head\n    while cur.next:\n        print(cur.val, end=" -> ")\n        cur = cur.next\n    print(cur.val, end=" -> null")\n    print()\n\n\ndef find_mid_node(head):\n    fast = head\n    slow = head\n    while fast and fast.next:\n        fast = fast.next.next\n        slow = slow.next\n    print(slow.val)\n\n\ndef main():\n    head = ListNode(0)\n    head.next = ListNode(1)\n    head.next.next = ListNode(2)\n    head.next.next.next = ListNode(3)\n    head.next.next.next.next = ListNode(4)\n    head.next.next.next.next.next = ListNode(5)\n    print_list(head)\n    find_mid_node(head)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,r.kt)("h4",{id:"find-maximum-twin-sum-of-a-linked-list"},"Find maximum twin sum of a linked list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n\ndef reverse_linkedlist(head):\n    cur = head\n    prev = None\n    while cur:\n        next_node = cur.next\n        cur.next = prev\n        prev = cur\n        cur = next_node\n    return prev\n\n\ndef find_max_sum(head):\n    max_sum = 0\n    fast = slow = head\n    while fast and fast.next:\n        fast = fast.next.next\n        slow = slow.next\n    fast = head\n    slow = reverse_linkedlist(slow)\n    while fast and slow:\n        cur_sum = fast.val + slow.val\n        max_sum = max(max_sum, cur_sum)\n        fast = fast.next\n        slow = slow.next\n    return max_sum\n\n\ndef main():\n    head = ListNode(1)\n    head.next = ListNode(10000)\n    # head.next.next = ListNode(2)\n    # head.next.next.next = ListNode(3)\n    print(find_max_sum(head))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,r.kt)("h4",{id:"palindrome-linked-list"},"Palindrome linked list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n\ndef print_list(head):\n    cur = head\n    while cur.next:\n        print(cur.val, end=" -> ")\n        cur = cur.next\n    print(cur.val, end=" -> null")\n    print()\n\n\ndef reverse_linkedlist(head):\n    cur = head\n    prev = None\n    while cur:\n        next_node = cur.next\n        cur.next = prev\n        prev = cur\n        cur = next_node\n    return prev\n\n\ndef is_palindrome(head):\n    fast = head\n    slow = head\n    # Traverse the slow node to the middle node of the list\n    while fast and fast.next:\n        fast = fast.next.next\n        slow = slow.next\n    fast = head\n    slow = reverse_linkedlist(slow)\n    while fast and slow:\n        if fast.val != slow.val:\n            return False\n        fast = fast.next\n        slow = slow.next\n    return True\n\n\ndef main():\n    head = ListNode(1)\n    head.next = ListNode(2)\n    head.next.next = ListNode(3)\n    head.next.next.next = ListNode(2)\n    head.next.next.next.next = ListNode(2)\n    print_list(head)\n    print(is_palindrome(head))\n\n\nif __name__ == "__main__":\n    main()\n')))}f.isMDXComponent=!0}}]);