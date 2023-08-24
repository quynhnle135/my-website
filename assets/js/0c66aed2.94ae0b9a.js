"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3832],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),m=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(t),l=i,f=d["".concat(u,".").concat(l)]||d[l]||c[l]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=l;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var m=2;m<a;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=t(7462),i=(t(7294),t(3905));const a={title:"Aug 23",description:"Wed, Aug 23"},o="Leetcode everyday keeps unemployment away!",s={unversionedId:"leetcode-grinding/2023/August/aug_23_23",id:"leetcode-grinding/2023/August/aug_23_23",title:"Aug 23",description:"Wed, Aug 23",source:"@site/docs/leetcode-grinding/2023/August/aug_23_23.md",sourceDirName:"leetcode-grinding/2023/August",slug:"/leetcode-grinding/2023/August/aug_23_23",permalink:"/my-website/docs/leetcode-grinding/2023/August/aug_23_23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode-grinding/2023/August/aug_23_23.md",tags:[],version:"current",frontMatter:{title:"Aug 23",description:"Wed, Aug 23"},sidebar:"tutorialSidebar",previous:{title:"Aug 22",permalink:"/my-website/docs/leetcode-grinding/2023/August/aug_22_23"},next:{title:"Aug 24",permalink:"/my-website/docs/leetcode-grinding/2023/August/aug_24_23"}},u={},m=[{value:"Best time to buy and sell stocks",id:"best-time-to-buy-and-sell-stocks",level:3},{value:"Sliding Window Maximum",id:"sliding-window-maximum",level:3}],p={toc:m},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"leetcode-everyday-keeps-unemployment-away"},"Leetcode everyday keeps unemployment away!"),(0,i.kt)("h3",{id:"best-time-to-buy-and-sell-stocks"},"Best time to buy and sell stocks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def find_best_time_brute_force(prices):\n    max_profit = 0\n    for i in range(len(prices)):\n        buy = prices[i]\n        for j in range(i + 1, len(prices)):\n            cur_profit = prices[j] - buy\n            max_profit = max(max_profit, cur_profit)\n    return max_profit\n\n\n# Sliding Window approach\ndef find_best_time(prices):\n    start = 0\n    max_profit = 0\n    for end in range(len(prices)):\n        if prices[end] <= prices[start]:\n            start = end\n        else:\n            max_profit = max(max_profit, prices[end] - prices[start])\n    return max_profit\n\n\ndef find_best_time_using_min_max(prices):\n    min_price = 10000\n    max_profit = 0\n    for i in range(len(prices)):\n        if prices[i] < min_price:\n            min_price = prices[i]\n        max_profit = max(max_profit, prices[i] - min_price)\n    return max_profit\n\n\ndef main():\n    print(find_best_time_brute_force([7, 1, 5, 3, 6, 4]))  # 5\n    print(find_best_time([7, 1, 5, 3, 6, 4]))\n    print(find_best_time_using_min_max([7, 1, 5, 3, 6, 4]))\n\n    print(find_best_time_brute_force([7, 6, 4, 3, 1]))  # 0\n    print(find_best_time([7, 6, 4, 3, 1]))\n    print(find_best_time_using_min_max([7, 6, 4, 3, 1]))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h3",{id:"sliding-window-maximum"},"Sliding Window Maximum"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'from collections import deque\n\n\ndef find_max(s, k):\n    start = end = 0\n    result = []\n    while start < len(s) - k + 1:\n        cur_max = s[start]\n        while end - start + 1 <= k:\n            cur_max = max(cur_max, s[end])\n            end += 1\n        result.append(cur_max)\n        end = start = start + 1\n    return result\n\n\ndef find_max_optimal(nums, k):\n    deq = deque()\n    result = []\n    for i, n in enumerate(nums):\n        # Clean up the window\n        while deq and deq[0] < i - k + 1:\n            # Remove the left-most element\n            deq.popleft()\n\n        while deq and nums[deq[-1]] < n:\n            deq.pop()\n\n        deq.append(i)\n        if i >= k - 1:\n            result.append(nums[deq[0]])\n    return result\n\n\ndef main():\n    nums = [1, 3, -1, -3, 5, 3, 6, 7]\n    k = 3\n    print(find_max(nums, k))\n    print(find_max_optimal(nums, k))  # [3, 3, 5, 5, 6, 7]\n    nums2 = [1, 2, 3, 4, 5, 6, 7]\n    k2 = 4\n    print(find_max(nums2, k2))  # [4, 5, 6, 7]\n    print(find_max_optimal(nums2, k2))\n\n\nif __name__ == "__main__":\n    main()\n\n')))}c.isMDXComponent=!0}}]);