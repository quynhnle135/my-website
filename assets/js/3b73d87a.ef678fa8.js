"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8784],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=i,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={title:"Oct 19"},a=void 0,s={unversionedId:"learning-journal/2023/October/oct_19_23",id:"learning-journal/2023/October/oct_19_23",title:"Oct 19",description:"What I did today",source:"@site/docs/learning-journal/2023/October/oct_19_23.md",sourceDirName:"learning-journal/2023/October",slug:"/learning-journal/2023/October/oct_19_23",permalink:"/my-website/docs/learning-journal/2023/October/oct_19_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Oct 19"},sidebar:"tutorialSidebar",previous:{title:"Oct 18",permalink:"/my-website/docs/learning-journal/2023/October/oct_18_23"},next:{title:"Oct 20",permalink:"/my-website/docs/learning-journal/2023/October/oct_20_23"}},l={},c=[{value:"What I did today",id:"what-i-did-today",level:3},{value:"2 Questions I asked other interviewees today",id:"2-questions-i-asked-other-interviewees-today",level:3},{value:"Number of Provinces",id:"number-of-provinces",level:4},{value:"Maximum Twin Sum of a Linked List",id:"maximum-twin-sum-of-a-linked-list",level:4}],d={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"what-i-did-today"},"What I did today"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated and added journals that I haven't written/submitted"),(0,i.kt)("li",{parentName:"ul"},"Continued with Leetcode 75 (Array/String):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Product of Array Except Self"),(0,i.kt)("li",{parentName:"ul"},"Kids With the Greatest Number of Candies"),(0,i.kt)("li",{parentName:"ul"},"Merge Strings Alternately"))),(0,i.kt)("li",{parentName:"ul"},"Reviewed some graph problems to prepare coding interview questions for interviewing.io")),(0,i.kt)("h3",{id:"2-questions-i-asked-other-interviewees-today"},"2 Questions I asked other interviewees today"),(0,i.kt)("h4",{id:"number-of-provinces"},"Number of Provinces"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def numberOfProvinces(isConnected):\n    provinces = 0\n    visited = [False] * len(isConnected)\n\n    for vertex in range(len(isConnected)):\n        if not visited[vertex]:\n            provinces += 1\n            check_neighbors(vertex, visited, isConnected)\n    return provinces\n\n\ndef check_neighbors(vertex, visited, isConnected):\n    visited[vertex] = True\n    for i in range(len(isConnected)):\n        if isConnected[vertex][i] == 1 and not visited[i]:\n            check_neighbors(i, visited, isConnected)\n\n\ndef main():\n    isConnected1 = [\n                        [1, 1, 0],\n                        [1, 1, 0],\n                        [0, 0, 1]\n                   ]\n\n    isConnected2 = [\n                        [1, 0, 0],\n                        [0, 1, 0],\n                        [0, 0, 1]\n                   ]\n    print(numberOfProvinces(isConnected1))  # 2\n    print(numberOfProvinces(isConnected2))  # 3\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,i.kt)("h4",{id:"maximum-twin-sum-of-a-linked-list"},"Maximum Twin Sum of a Linked List"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n\ndef pairSum(head):\n    fast = slow = head\n\n    # Traverse slow pointer to the middle node\n    while fast and fast.next:\n        fast = fast.next.next\n        slow = slow.next\n\n    # Reverse the second half\n    prev = None\n    while slow:\n        next_node = slow.next\n        slow.next = prev\n        prev = slow\n        slow = next_node\n    slow = prev\n    fast = head\n    max_sum = float("-inf")\n    while fast and slow:\n        cur_sum = fast.val + slow.val\n        max_sum = max(max_sum, cur_sum)\n        fast = fast.next\n        slow = slow.next\n    return max_sum\n\n\ndef main():\n    h = ListNode(5)\n    h.next = ListNode(4)\n    h.next.next = ListNode(2)\n    h.next.next.next = ListNode(1)\n\n    h1 = ListNode(4)\n    h1.next = ListNode(2)\n    h1.next.next = ListNode(2)\n    h1.next.next.next = ListNode(3)\n\n    print(pairSum(h))  # 6\n    print(pairSum(h1))  # 7\n\n\nif __name__ == "__main__":\n    main()\n\n')))}m.isMDXComponent=!0}}]);