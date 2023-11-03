"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6271],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),d=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=i,m=u["".concat(o,".").concat(f)]||u[f]||p[f]||a;return r?t.createElement(m,s(s({ref:n},c),{},{components:r})):t.createElement(m,s({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=f;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var d=2;d<a;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9817:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const a={title:"Day 2"},s=void 0,l={unversionedId:"leetcode-grinding/leetcode-75/day-2",id:"leetcode-grinding/leetcode-75/day-2",title:"Day 2",description:"Let's finish Array and String today!!!",source:"@site/docs/leetcode-grinding/leetcode-75/day-2.md",sourceDirName:"leetcode-grinding/leetcode-75",slug:"/leetcode-grinding/leetcode-75/day-2",permalink:"/my-website/docs/leetcode-grinding/leetcode-75/day-2",draft:!1,tags:[],version:"current",frontMatter:{title:"Day 2"},sidebar:"tutorialSidebar",previous:{title:"Day 1",permalink:"/my-website/docs/leetcode-grinding/leetcode-75/day-1"},next:{title:"Day3",permalink:"/my-website/docs/leetcode-grinding/leetcode-75/day-3"}},o={},d=[{value:"Let&#39;s finish Array and String today!!!",id:"lets-finish-array-and-string-today",level:2},{value:"1768. Merge Strings Alternately",id:"1768-merge-strings-alternately",level:3},{value:"Kids With the Greatest Number of Candies",id:"kids-with-the-greatest-number-of-candies",level:3},{value:"Can Place Flower",id:"can-place-flower",level:3},{value:"Reverse Vowels of a String",id:"reverse-vowels-of-a-string",level:3},{value:"Reverse Words in a String",id:"reverse-words-in-a-string",level:3},{value:"Product of Array Except Self",id:"product-of-array-except-self",level:3},{value:"Notes:",id:"notes",level:4}],c={toc:d},u="wrapper";function p(e){let{components:n,...r}=e;return(0,i.kt)(u,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lets-finish-array-and-string-today"},"Let's finish Array and String today!!!"),(0,i.kt)("h3",{id:"1768-merge-strings-alternately"},"1768. Merge Strings Alternately"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are three ways I can use to solve this problem"),(0,i.kt)("li",{parentName:"ul"},"The first one is my intuitive thought by connecting the first letters of word1 and word2 to the result string, then  I slice the two words starting from index 1"),(0,i.kt)("li",{parentName:"ul"},"The second one is a little similar but I use two pointers for two words. I will append the rest of the words to the result if there're any letters left"),(0,i.kt)("li",{parentName:"ul"},'The third one is very intersting with the use of zip_longest. With this built-in function, we can connect two words alternately with the fillvalue="" which means there\'s no space connecting. However, the result of the zip_longest is a list of tuples. so I have to use a for loop to connect the values.')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from itertools import zip_longest\n\n\ndef mergeAlternately(word1, word2):\n    result = ""\n    while word1 and word2:\n        result += word1[0] + word2[0]\n        word1 = word1[1:]\n        word2 = word2[1:]\n    while word1:\n        result += word1\n        word1 = ""\n    while word2:\n        result += word2\n        word2 = ""\n    return result\n\n\ndef mergeAlternately_ii(word1, word2):\n    result = []\n    i, j = 0, 0\n    while i < len(word1) and j < len(word2):\n        result.append(word1[i])\n        result.append(word2[j])\n        i += 1\n        j += 1\n    result.extend(word1[i:])\n    result.extend(word2[j:])\n    return "".join(result)\n\n\ndef mergeAlternately_iii(word1, word2):\n    tuples = zip_longest(word1, word2, fillvalue="")\n    res = ""\n    for t in tuples:\n        res += str(t[0]) + str(t[1])\n    return res\n\n\ndef main():\n    print(mergeAlternately("abc", "pqr"))\n    print(mergeAlternately_ii("abc", "pqr"))\n    print(mergeAlternately_iii("abc", "pqr"))\n    print("--")\n    print(mergeAlternately("ab", "pqrs"))\n    print(mergeAlternately_ii("ab", "pqrs"))\n    print(mergeAlternately_iii("ab", "pqrs"))\n    print("--")\n    print(mergeAlternately("abcd", "pq"))\n    print(mergeAlternately_ii("abcd", "pq"))\n    print(mergeAlternately_iii("abcd", "pq"))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h3",{id:"kids-with-the-greatest-number-of-candies"},"Kids With the Greatest Number of Candies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This can be easily solved by finding the maximum candies value in the array then traversing the array, with every value adding the extraCandies, if that current value is equal to bigger than the maximum candies value, it will be True. "),(0,i.kt)("li",{parentName:"ul"},'The second solution is quite similar, we still need to find the maximum value. Instead of checking the "sum" like the first solution, we just check the result after subtract the current candies from the maximum candies value. If the result is smaller or equal to the extraCandies, return True and vice versa.')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def kidsWithCandies(candies, extraCandies):\n    max_candies = 0\n    res = []\n    for c in candies:\n        max_candies = max(max_candies, c)\n\n    for c in candies:\n        if c + extraCandies >= max_candies:\n            res.append(True)\n        else:\n            res.append(False)\n    return res\n\n\ndef kidsWithCandies_ii(candies, extraCandies):\n    max_candies = 0\n    for i in range(len(candies)):\n        max_candies = max(max_candies, candies[i])\n\n    for i in range(len(candies)):\n        if max_candies - candies[i] <= extraCandies:\n            candies[i] = True\n        else:\n            candies[i] = False\n    return candies\n\n\ndef main():\n    print(kidsWithCandies([2, 3, 5, 1, 3], 3))\n    print(kidsWithCandies_ii([2, 3, 5, 1, 3], 3))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,i.kt)("h3",{id:"can-place-flower"},"Can Place Flower"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For the current position in the flowerbed, if the current value is empty, we need to check the left position and the right position to make sure that they are both empty so that we can place a flower. "),(0,i.kt)("li",{parentName:"ul"},"Checking the read ends (i == 0, i == len(flowerbed) - 1) is important as well because if those two spots are empty, we can place our flower as well. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def canPlaceFlowers(flowerbed, n):\n    if n == 0:\n        return True\n    count = 0\n    for i in range(len(flowerbed)):\n        if flowerbed[i] == 0:\n            leftSpot = (i == 0) or (flowerbed[i - 1] == 0)\n            rightSpot = (i == len(flowerbed) - 1) or (flowerbed[i + 1] == 0)\n\n            if leftSpot and rightSpot:\n                count += 1\n                flowerbed[i] = 1\n                if count == n:\n                    return True\n    return False\n\n\ndef main():\n    print(canPlaceFlowers([1, 0, 0, 0, 1], 1))  # True\n    print(canPlaceFlowers([1, 0, 0, 0, 1], 2))  # False\n    print(canPlaceFlowers([1, 0, 0], 1))  # True\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,i.kt)("h3",{id:"reverse-vowels-of-a-string"},"Reverse Vowels of a String"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def reverse_vowels(s):\n    vowels = "aeiouAEIOU"\n    start = 0\n    end = len(s) - 1\n    s = list(s)\n    while start < end:\n        if s[start] in vowels and s[end] in vowels:\n            # Swap\n            s[start], s[end] = s[end], s[start]\n            start += 1\n            end -= 1\n        elif s[start] in vowels:\n            end -= 1\n        else:\n            start += 1\n    return "".join(s)\n\n\ndef main():\n    print(reverse_vowels("hello"))\n    print(reverse_vowels("leetcode"))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h3",{id:"reverse-words-in-a-string"},"Reverse Words in a String"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import re\n\n\ndef reverse_words(s):\n    s = re.sub(" +", " ", s.strip())\n    words = []\n    start = 0\n    res = ""\n    for end in range(len(s)):\n        if s[end] == " ":\n            word = s[start: end]\n            words.append(word)\n            start = end + 1\n\n    # Connect last word\n    words.append(s[start: len(s)])\n\n    # Reverse words\n    for i in range(len(words) - 1, -1, -1):\n        res += words[i] + " "\n\n    return res.strip()\n\n\ndef main():\n    print(reverse_words("the sky is blue"))  # blue is sky the\n    print(reverse_words("    harry    potter"))  # potter harry\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,i.kt)("h3",{id:"product-of-array-except-self"},"Product of Array Except Self"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For this problem, I can learn about the prefix/suffix calculations to solve this problem. However, I still haven't comprehended the prefix/suffix approach, so I'll definitely check out more exercises to practice")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def findProduct_i(nums):\n    res = [0] * len(nums)\n    for i in range(len(nums)):\n        cur_product = 1\n        for j in range(len(nums)):\n            if i == j:\n                continue\n            else:\n                cur_product *= nums[j]\n        res[i] = cur_product\n    return res\n\n\ndef findProduct_ii(nums):\n    n = len(nums)\n    pre = [1] * n\n    post = [1] * n\n    res = [1] * n\n    pre_product = 1\n    post_product = 1\n    for i in range(n):\n        pre[i] = pre_product\n        pre_product *= nums[i]\n\n    for i in range(n - 1, -1, -1):\n        post[i] = post_product\n        post_product *= nums[i]\n\n    for i in range(n):\n        res[i] = pre[i] * post[i]\n    return res\n\n\ndef main():\n    nums1 = [1, 2, 3, 4]\n    nums2 = [-1, 1, 0, -3, 3]\n    print(findProduct_i(nums1))\n    print(findProduct_ii(nums1))\n    print(findProduct_i(nums2))\n    print(findProduct_ii(nums2))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h4",{id:"notes"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haven't able to finish all problems in Array/String. Will finish them all tomorrow"),(0,i.kt)("li",{parentName:"ul"},"Check out and prefix/suffix calculation approach")))}p.isMDXComponent=!0}}]);