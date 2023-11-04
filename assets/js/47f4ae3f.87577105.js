"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4040],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),p=a,f=c["".concat(l,".").concat(p)]||c[p]||d[p]||i;return t?r.createElement(f,s(s({ref:n},m),{},{components:t})):r.createElement(f,s({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"Day 5"},s=void 0,o={unversionedId:"daily-practice/leetcode-75/day-5",id:"daily-practice/leetcode-75/day-5",title:"Day 5",description:"Sliding Windows",source:"@site/docs/daily-practice/leetcode-75/day-5.md",sourceDirName:"daily-practice/leetcode-75",slug:"/daily-practice/leetcode-75/day-5",permalink:"/my-website/docs/daily-practice/leetcode-75/day-5",draft:!1,tags:[],version:"current",frontMatter:{title:"Day 5"},sidebar:"tutorialSidebar",previous:{title:"Day 4",permalink:"/my-website/docs/daily-practice/leetcode-75/day-4"},next:{title:"Day 6",permalink:"/my-website/docs/daily-practice/leetcode-75/day-6"}},l={},u=[{value:"Sliding Windows",id:"sliding-windows",level:3},{value:"643. Maximum Average Subarray I",id:"643-maximum-average-subarray-i",level:4},{value:"1456. Maximum Number of Vowels in a Substring of Given Length",id:"1456-maximum-number-of-vowels-in-a-substring-of-given-length",level:4},{value:"1004. Max Consecutive Ones III",id:"1004-max-consecutive-ones-iii",level:4},{value:"1493. Longest Subarray of 1&#39;s After Deleting One Element",id:"1493-longest-subarray-of-1s-after-deleting-one-element",level:4}],m={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"sliding-windows"},"Sliding Windows"),(0,a.kt)("h4",{id:"643-maximum-average-subarray-i"},"643. Maximum Average Subarray I"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This problem is quite similar to the Maximum Sum K Subarray but there's one additional step is to divide the maximum sum with k to find the average"),(0,a.kt)("li",{parentName:"ul"},"Time complexity: O(n)"),(0,a.kt)("li",{parentName:"ul"},"Space complexity: O(1)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def max_average_subarray_i(nums, k):\n    max_sum = float("-inf")\n    start = 0\n    cur_sum = 0\n    for end in range(len(nums)):\n        cur_sum += nums[end]\n        if end - start + 1 == k:\n            max_sum = max(max_sum, cur_sum)\n            cur_sum -= nums[start]\n            start += 1\n    return float(max_sum) / k\n\n\ndef main():\n    nums1 = [1, 12, -5, -6, 50, 3]\n    k1 = 4\n\n    print(max_average_subarray_i(nums1, k1))\n\n    nums2 = [5]\n    k2 = 1\n\n    print(max_average_subarray_i(nums2, k2))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,a.kt)("h4",{id:"1456-maximum-number-of-vowels-in-a-substring-of-given-length"},"1456. Maximum Number of Vowels in a Substring of Given Length"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def max_vowels(s, k):\n    vowels = "aeiou"\n    start = 0\n    count = 0\n    res = 0\n    for end in range(len(s)):\n        if s[end] in vowels:\n            count += 1\n        if end - start + 1 == k:\n            res = max(res, count)\n            if s[start] in vowels:\n                count -= 1\n            start += 1\n    return res\n\n\ndef main():\n    print(max_vowels("abciiidef", 3))  # 3\n    print(max_vowels("leetcode", 3))  # 2\n    print(max_vowels("aeiou", 2))  # 2\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,a.kt)("h4",{id:"1004-max-consecutive-ones-iii"},"1004. Max Consecutive Ones III"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def longest_subarray(nums, k):\n    max_len = 0\n    start = 0\n\n    for end in range(len(nums)):\n        if nums[end] == 0:\n            k -= 1\n        while k < 0:\n            if nums[start] == 0:\n                k += 1\n            start += 1\n        cur_len = end - start + 1\n        max_len = max(max_len, cur_len)\n    return max_len\n\n\n\ndef main():\n    nums1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]\n    k1 = 2\n\n    nums2 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]\n    k2 = 3\n\n    print(longest_subarray(nums1, k1))  # 6\n    print(longest_subarray(nums2, k2))  # 10\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h4",{id:"1493-longest-subarray-of-1s-after-deleting-one-element"},"1493. Longest Subarray of 1's After Deleting One Element"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def longest_subarray(nums):\n    k = 1\n    start = 0\n    max_len = 0\n    for end in range(len(nums)):\n        if nums[end] == 0:\n            k -= 1\n        while k < 0:\n            if nums[start] == 0:\n                k += 1\n            start += 1\n        max_len = max(max_len, end - start)\n    return max_len\n\n\ndef main():\n    nums1 = [1, 1, 0, 1]\n    nums2 = [0, 1, 1, 1, 0, 1, 1, 0, 1]\n\n    print(longest_subarray(nums1))\n    print(longest_subarray(nums2))\n\n\nif __name__ == "__main__":\n    main()\n')))}d.isMDXComponent=!0}}]);