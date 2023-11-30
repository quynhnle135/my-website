"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5815],{3782:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>m});var s=a(5893),i=a(1151);const t={title:"Sliding Window"},r=void 0,o={id:"daily-practice/leetcode75/sliding_window",title:"Sliding Window",description:"Maximum Average Subarray I",source:"@site/docs/daily-practice/leetcode75/sliding_window.md",sourceDirName:"daily-practice/leetcode75",slug:"/daily-practice/leetcode75/sliding_window",permalink:"/my-website/docs/daily-practice/leetcode75/sliding_window",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Sliding Window"},sidebar:"tutorialSidebar",previous:{title:"Queue",permalink:"/my-website/docs/daily-practice/leetcode75/queue"},next:{title:"Stack",permalink:"/my-website/docs/daily-practice/leetcode75/stack"}},l={},m=[{value:"Maximum Average Subarray I",id:"maximum-average-subarray-i",level:3},{value:"Maximum Number of Vowels in a Substring of Given Length",id:"maximum-number-of-vowels-in-a-substring-of-given-length",level:3},{value:"Max Consecutives Ones III",id:"max-consecutives-ones-iii",level:3},{value:"Longest Subarray of 1&#39;s After Deleting One",id:"longest-subarray-of-1s-after-deleting-one",level:3}];function u(n){const e={code:"code",h3:"h3",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"maximum-average-subarray-i",children:"Maximum Average Subarray I"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def max_average_subarray(nums, k):\n    max_sum = float("-inf")\n    start = 0\n    cur_sum = 0\n    for end in range(len(nums)):\n        cur_sum += nums[end]\n        if end - start + 1 == k:\n            max_sum = max(max_sum, cur_sum)\n            cur_sum -= nums[start]\n            start += 1\n    return float(max_sum) / k\n\n\ndef main():\n    nums1 = [1, 12, -5, -6, 50, 3]\n    nums2 = [5]\n    k1 = 4\n    k2 = 1\n    print(max_average_subarray(nums1, k1))\n    print(max_average_subarray(nums2, k2))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"maximum-number-of-vowels-in-a-substring-of-given-length",children:"Maximum Number of Vowels in a Substring of Given Length"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def maxVowels(s, k):\n    vowels = "aeiou"\n    max_vowels = 0\n    start = 0\n    cur_vowels = 0\n    for end in range(len(s)):\n        if s[end] in vowels:\n            cur_vowels += 1\n        if end - start + 1 == k:\n            max_vowels = max(max_vowels, cur_vowels)\n            if s[start] in vowels:\n                cur_vowels -= 1\n            start += 1\n    return max_vowels\n\n\ndef main():\n    print(maxVowels("abciiidef", 3))  # 3\n    print(maxVowels("leetcode", 3))  # 2\n    print(maxVowels("aeiou", 2))  # 2\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"max-consecutives-ones-iii",children:"Max Consecutives Ones III"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def longest_ones(nums, k):\n    max_len = 0\n    start = 0\n    for end in range(len(nums)):\n        if nums[end] == 0:\n            k -= 1\n        while k < 0:\n            if nums[start] == 0:\n                k += 1\n            start += 1\n        cur_len = end - start + 1\n        max_len = max(max_len, cur_len)\n    return max_len\n\n\ndef main():\n    print(longest_ones([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))  # 6\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,s.jsx)(e.h3,{id:"longest-subarray-of-1s-after-deleting-one",children:"Longest Subarray of 1's After Deleting One"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def longest_subarray(nums):\n    k = 1\n    start = 0\n    max_len = 0\n    for end in range(len(nums)):\n        if nums[end] == 0:\n            k -= 1\n        while k < 0:\n            if nums[start] == 0:\n                k += 1\n            start += 1\n        max_len = max(max_len, end - start)\n    return max_len\n\n\ndef main():\n    nums1 = [1, 1, 0, 1]\n    nums2 = [0, 1, 1, 1, 0, 1, 1, 0, 1]\n\n    print(longest_subarray(nums1))\n    print(longest_subarray(nums2))\n\n\nif __name__ == "__main__":\n    main()\n'})})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},1151:(n,e,a)=>{a.d(e,{Z:()=>o,a:()=>r});var s=a(7294);const i={},t=s.createContext(i);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);