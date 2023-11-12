"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2597],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const s={title:"Aug 16",description:"Wed, Aug 16"},o=void 0,a={unversionedId:"daily-practice/2023/August/aug_16_23",id:"daily-practice/2023/August/aug_16_23",title:"Aug 16",description:"Wed, Aug 16",source:"@site/docs/daily-practice/2023/August/aug_16_23.md",sourceDirName:"daily-practice/2023/August",slug:"/daily-practice/2023/August/aug_16_23",permalink:"/my-website/docs/daily-practice/2023/August/aug_16_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Aug 16",description:"Wed, Aug 16"},sidebar:"tutorialSidebar",previous:{title:"Aug 15",permalink:"/my-website/docs/daily-practice/2023/August/aug_15_23"},next:{title:"Aug 17",permalink:"/my-website/docs/daily-practice/2023/August/aug_17_23"}},l={},u=[{value:"Smallest Even Multiple",id:"smallest-even-multiple",level:3},{value:"Maximum Numbers of Words Found in Sentences",id:"maximum-numbers-of-words-found-in-sentences",level:3},{value:"Spiral Matrix",id:"spiral-matrix",level:3},{value:"Reverse vowels in a string",id:"reverse-vowels-in-a-string",level:3}],p={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"smallest-even-multiple"},"Smallest Even Multiple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def smallest_even_multiple(n):\n    if n <= 2:\n        return 2\n    if n % 2 == 0 and n > 2:\n        return n\n    return 2 * n\n\n\ndef main():\n    print(smallest_even_multiple(5))\n    print(smallest_even_multiple(6))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h3",{id:"maximum-numbers-of-words-found-in-sentences"},"Maximum Numbers of Words Found in Sentences"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def count_words(sentences):\n    max_words = 0\n    for s in sentences:\n        count = 0\n        for i in range(len(s)):\n            if s[i] == " " or i == len(sentences) - 1:\n                count += 1\n        max_words = max(max_words, count)\n    return max_words\n\n\ndef most_words_found(sentences):\n    max_words = 0\n    for words in sentences:\n        words = words.split()\n        max_words = max(len(words), max_words)\n    return max_words\n\n\ndef main():\n    sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]\n    print(count_words(sentences))\n    print(most_words_found(sentences))\n    sentences1 = ["please wait", "continue to fight", "continue to win"]\n    print(count_words(sentences1))\n    print(most_words_found(sentences1))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h3",{id:"spiral-matrix"},"Spiral Matrix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def spiral_matrix(matrix):\n    # row pointers\n    left = 0\n    right = len(matrix[0])\n\n    # column pointers\n    top = 0\n    bottom = len(matrix)\n\n    res = []\n\n    while (left < right) and (top < bottom):\n        # Get value from the top outer row\n        for i in range(left, right):\n            res.append(matrix[top][i])\n        top += 1\n\n        # Get value from the right column\n        for i in range(top, bottom):\n            res.append(matrix[i][right - 1])\n        right -= 1\n\n        if not (left < right and top < bottom):\n            break\n\n        # Get value from the bottom row\n        for i in range(right - 1, left - 1, - 1):\n            res.append(matrix[bottom - 1][i])\n        bottom -= 1\n\n        # Get value from the left column\n        for i in range(bottom - 1, top - 1, -1):\n            res.append(matrix[i][left])\n        left += 1\n    return res\n\n\ndef main():\n    matrix1 = [[1, 2, 3],\n               [4, 5, 6],\n               [7, 8, 9]]\n    print(spiral_matrix(matrix1))\n\n    matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]\n    print(spiral_matrix(matrix2))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h3",{id:"reverse-vowels-in-a-string"},"Reverse vowels in a string"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def reverse_vowels(s):\n    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']\n    vowels_found = []\n    result = \"\"\n    for i in range(len(s)):\n        if s[i] in vowels:\n            vowels_found.append(s[i])\n\n    for i in range(len(s)):\n        if s[i] in vowels:\n            result += vowels_found.pop()\n        else:\n            result += s[i]\n    return result\n\n\ndef reverse_vowels_two_pointers(s):\n    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']\n    start = 0\n    end = len(s) - 1\n    s = list(s)\n    while start < end:\n        if (s[start] in vowels) and (s[end] in vowels):\n            s[start], s[end] = s[end], s[start]\n            start += 1\n            end -= 1\n        elif (s[start] in vowels) and (not s[end] in vowels):\n            end -= 1\n        elif (s[end] in vowels) and (not s[start] in vowels):\n            start += 1\n        else:\n            start += 1\n            end -= 1\n    return \"\".join(s)\n\n\ndef main():\n    s1 = \"hello\"\n    print(reverse_vowels(s1))  # holle\n    print(reverse_vowels_two_pointers(s1))\n\n    s2 = \"leetcode\"\n    print(reverse_vowels(s2))  # leotcede\n    print(reverse_vowels_two_pointers(s2))\n\n    s3 = \"aA\"\n    print(reverse_vowels(s3))\n    print(reverse_vowels_two_pointers(s3))\n\n\nif __name__ == \"__main__\":\n    main()\n")))}c.isMDXComponent=!0}}]);