"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5228],{3905:(n,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>l});var t=r(7294);function i(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function u(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function _(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var s=t.createContext({}),d=function(n){var e=t.useContext(s),r=e;return n&&(r="function"==typeof n?n(e):u(u({},e),n)),r},m=function(n){var e=d(n.components);return t.createElement(s.Provider,{value:e},n.children)},c="mdxType",o={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var r=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,m=_(n,["components","mdxType","originalType","parentName"]),c=d(r),f=i,l=c["".concat(s,".").concat(f)]||c[f]||o[f]||a;return r?t.createElement(l,u(u({ref:e},m),{},{components:r})):t.createElement(l,u({ref:e},m))}));function l(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=r.length,u=new Array(a);u[0]=f;var _={};for(var s in e)hasOwnProperty.call(e,s)&&(_[s]=e[s]);_.originalType=n,_[c]="string"==typeof n?n:i,u[1]=_;for(var d=2;d<a;d++)u[d]=r[d];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9228:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>o,frontMatter:()=>a,metadata:()=>_,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const a={title:"Aug 21",description:"Tue, Aug 21"},u=void 0,_={unversionedId:"leetcode-grinding/2023/August/aug_21_23",id:"leetcode-grinding/2023/August/aug_21_23",title:"Aug 21",description:"Tue, Aug 21",source:"@site/docs/leetcode-grinding/2023/August/aug_21_23.md",sourceDirName:"leetcode-grinding/2023/August",slug:"/leetcode-grinding/2023/August/aug_21_23",permalink:"/my-website/docs/leetcode-grinding/2023/August/aug_21_23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode-grinding/2023/August/aug_21_23.md",tags:[],version:"current",frontMatter:{title:"Aug 21",description:"Tue, Aug 21"},sidebar:"tutorialSidebar",previous:{title:"Aug 20",permalink:"/my-website/docs/leetcode-grinding/2023/August/aug_20_23"},next:{title:"Aug 22",permalink:"/my-website/docs/leetcode-grinding/2023/August/aug_22_23"}},s={},d=[{value:"Maximum Subarray",id:"maximum-subarray",level:4},{value:"Maximum Product Array",id:"maximum-product-array",level:4},{value:"Find the index of the first occurrence",id:"find-the-index-of-the-first-occurrence",level:4},{value:"Longest Repeating Character Replacement",id:"longest-repeating-character-replacement",level:4}],m={toc:d},c="wrapper";function o(n){let{components:e,...r}=n;return(0,i.kt)(c,(0,t.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"maximum-subarray"},"Maximum Subarray"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def find_max_sum(nums):\n    max_sum = -10000\n    cur_sum = 0\n    for i in range(len(nums)):\n        cur_sum += nums[i]\n        max_sum = max(max_sum, cur_sum)\n        if cur_sum < 0:\n            cur_sum = 0\n    return max_sum\n\n\ndef find_max_sum_brute_force(nums):\n    max_sum = -10000\n    for i in range(len(nums)):\n        cur_sum = 0\n        for j in range(i, len(nums)):\n            cur_sum += nums[j]\n            max_sum = max(max_sum, cur_sum)\n    return max_sum\n\n\ndef main():\n    nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]\n    print(find_max_sum(nums1))  # 6\n    print(find_max_sum_brute_force(nums1))  # 6\n\n    nums2 = [1]\n    print(find_max_sum(nums2))  # 1\n    print(find_max_sum_brute_force(nums2))  # 1\n\n    nums3 = [5, 4, -1, 7, 8]\n    print(find_max_sum(nums3))  # 23\n    print(find_max_sum_brute_force(nums3))  # 23\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h4",{id:"maximum-product-array"},"Maximum Product Array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def find_max_product(arr):\n    max_end_here = min_end_here = result = arr[0]\n    for i in range(1, len(arr)):\n        if arr[i] < 0:\n            max_end_here, min_end_here = min_end_here, max_end_here\n\n        max_end_here = max(arr[i], max_end_here * arr[i])\n        min_end_here = min(arr[i], min_end_here * arr[i])\n\n        result = max(result, max_end_here)\n    return result\n\n\ndef find_max_product_using_loop(arr):\n    max_product = arr[0]\n    for i in range(len(arr)):\n        cur_product = 1\n        for j in range(i, len(arr)):\n            cur_product *= arr[j]\n            max_product = max(max_product, cur_product)\n    return max_product\n\n\ndef main():\n    nums1 = [2, 3, -2, 4]\n    nums2 = [-2, 0, -1]\n    print(find_max_product_using_loop(nums1))  # 6\n    print(find_max_product(nums1))  # 6\n\n    print(find_max_product_using_loop(nums2))  # 0\n    print(find_max_product(nums2))  # 0\n\n    nums3 = [-3, -1, -1]\n    print(find_max_product_using_loop(nums3))  # 3\n    print(find_max_product(nums3))  # 3\n\n    nums4 = [-1, -5, -2, 5, -4, -7]\n    print(find_max_product_using_loop(nums4))\n    print(find_max_product(nums4))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h4",{id:"find-the-index-of-the-first-occurrence"},"Find the index of the first occurrence"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def find_first_index(haystack, needle):\n    start = 0\n    while start <= (len(haystack) - len(needle)):\n        if haystack[start:start + len(needle)] == needle:\n            return start\n        else:\n            start += 1\n    return -1\n\n\n# Using find() built-in function\ndef find_first_index_cheat(haystack, needle):\n    return haystack.find(needle)\n\ndef main():\n    s1 = "sadbutsad"\n    print(find_first_index(s1, needle="sad"))  # 0\n    print(find_first_index_cheat(s1, needle="sad"))  # 0\n    print(find_first_index(s1, needle="but"))  # 3\n    print(find_first_index_cheat(s1, needle="but"))  # 3\n\n    s2 = "leetcode"\n    print(find_first_index(s2, needle="leet"))  # 0\n    print(find_first_index_cheat(s2, needle="leet"))  # 0\n    print(find_first_index(s2, needle="code"))  # 4\n    print(find_first_index_cheat(s2, needle="code"))  # 4\n    print(find_first_index(s2, needle="leetto"))  # - 1\n    print(find_first_index_cheat(s2, needle="leetto"))  # - 1\n\n    s3 = "a"\n    print(find_first_index(s3, "a"))  # 0\n    print(find_first_index_cheat(s3, "a"))  # 0\n    print(find_first_index(s3, "b"))  # -1\n    print(find_first_index_cheat(s3, "b"))  # -1\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h4",{id:"longest-repeating-character-replacement"},"Longest Repeating Character Replacement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def find_longest_repeating_char(s, k):\n    start = 0\n    char_freq = {}\n    max_length = 0\n    max_char_freq = 0\n\n    for end in range(len(s)):\n        if s[end] in char_freq:\n            char_freq[s[end]] += 1\n        else:\n            char_freq[s[end]] = 1\n\n        max_char_freq = max(max_char_freq, char_freq[s[end]])\n\n        if end - start + 1 - max_char_freq > k:\n            char_freq[s[start]] -= 1\n            start += 1\n\n        max_length = max(max_length, end - start + 1)\n\n    return max_length\n\n\ndef main():\n    print(find_longest_repeating_char(s="ABAB", k=2))\n    print(find_longest_repeating_char(s="AABABBA", k=1))\n\n\nif __name__ == "__main__":\n    main()\n')))}o.isMDXComponent=!0}}]);