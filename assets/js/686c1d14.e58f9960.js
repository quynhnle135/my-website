"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7056],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=o(t),f=a,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||i;return t?r.createElement(d,p(p({ref:n},s),{},{components:t})):r.createElement(d,p({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[m]="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const i={title:"Apr 28",description:"Coding Journal - Fri, Apr 28",tags:["journal"]},p=void 0,l={unversionedId:"learning-journal/2023/April/apr_28_23",id:"learning-journal/2023/April/apr_28_23",title:"Apr 28",description:"Coding Journal - Fri, Apr 28",source:"@site/docs/learning-journal/2023/April/apr_28_23.md",sourceDirName:"learning-journal/2023/April",slug:"/learning-journal/2023/April/apr_28_23",permalink:"/my-website/docs/learning-journal/2023/April/apr_28_23",draft:!1,tags:[{label:"journal",permalink:"/my-website/docs/tags/journal"}],version:"current",frontMatter:{title:"Apr 28",description:"Coding Journal - Fri, Apr 28",tags:["journal"]},sidebar:"tutorialSidebar",previous:{title:"Nov 8",permalink:"/my-website/docs/learning-journal/2022/November/nov_8_22"},next:{title:"Apr 29",permalink:"/my-website/docs/learning-journal/2023/April/apr_29_23"}},u={},o=[],s={toc:o},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Recursion: Recursion is a process that calls its function directly or indirectly. Recursion is used to break down the problem into smaller sub-problems until they become simple enough to solve directly"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Factorial of positive number:\nExample 1:\nInput: 5\nOutput: 120 (1 x 2 x 3 x4 x5 = 120)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find_factorial(n):\n    # base case\n    if n == 1:\n        return 1\n    return find_factorial(n - 1) * n\n\ndef find_factorial_iterative(n):\n    factorial = 1\n    while n > 0:\n        factorial *= n\n        n -= 1\n    return factorial\n\nprint(find_factorial(5))\nprint(find_factorial_iterative(5))\nprint(find_factorial(10))\nprint(find_factorial_iterative(10))\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sum of nums up to N:\nExample:\nInput: 5\nOutput: 15 (1 + 2 + 3 + 4 + 5 = 15)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find_sum(n):\n# base case\nif n == 0:\n    return 0\nreturn find_sum(n - 1) + n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fibonacci number:\nfib(n) = fib(n - 1) + fib(n - 2) with fib(1) = 1, fib(2) = 1\n-> 1 1 2 3 5 8 13 21\nExample:\nInput: 5\nOutput: 5\nInput: 8\nOutput: 21"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find_fibonacci_number(n):\n    # base case\n    if n == 1 or n == 2:\n        return 1\n    return find_fibonacci_number(n - 1) + find_fibonacci_number(n - 2)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check if a number is a palindrome:\nExample:"),(0,a.kt)("p",{parentName:"li"},"Input: 1221"),(0,a.kt)("p",{parentName:"li"},"Output: True"),(0,a.kt)("p",{parentName:"li"},"Input: 1234"),(0,a.kt)("p",{parentName:"li"},"Output: False"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def reverse_number(n, temp):\n    if n == 0:\n        return temp\n    digit = n % 10\n    temp = temp * 10 + digit\n    return reverse_number(n // 10, temp)\n\ndef check_palindrome(n):\n    # negative number cannot be a palindrome number\n    if n < 0:\n        return False\n    result = reverse_number(n, 0)\n    # true if reversed_number is the same as n\n    return result == n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check if a number is a palindrome but iterative solution:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def check_palindrome_iterative(n):\n    n_duplicated = n\n    reversed_number = 0\n    while n_duplicated > 0:\n        digit = n_duplicated % 10\n        n_duplicated //= 10\n        reversed_number = reversed_number * 10 + digit\n    return n == reversed_number\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the number of digits of a number:\nInput: 123"),(0,a.kt)("p",{parentName:"li"},"Output: 3"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find_number_of_digits(n):\n    # base case when it reaches the last digit\n    if n == 0:\n        return 1\n    return find_number_of_digits_iterative(n // 10) + 1\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find sum of digits of a number:\nInput: 123"),(0,a.kt)("p",{parentName:"li"},"Output: 6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find_sum_of_digits(n):\n    # base case\n    if n == 0:\n        return 0\n    digit = n % 10\n    return find_sum_of_digits(n // 10) + digit\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reverse string:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def reverse_string_helper(s, index, res):\n    # base case: when reach the first character of the string\n    if index < 0:\n        return res\n    res += s[index]\n    return reverse_string_helper(s, index - 1, res)\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'def reverse_string(s):\n    return reverse_string_helper(s, len(s) - 1, "")\n```\n')),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Given the list of numbers, return the sum of all values in the list:"),(0,a.kt)("p",{parentName:"li"},"Input: ","[1, 2, 3, 4, 5]"),(0,a.kt)("p",{parentName:"li"},"Output: 15"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find_sum_of_list(nums):\n    # find sum of the list and start with the first element with index 0\n    return find_sum(nums, 0)\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"def find_sum(nums, index):\n    # base case: when it reaches out the range of given list\n    if index == len(nums):\n        return 0\n    return find_sum(nums, index + 1) + nums[index]\n```\n")),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Given the list of numbers, return the minimum value of the list:"),(0,a.kt)("p",{parentName:"li"},"Input: ","[5, 2, 1, 6, 9, 8]"),(0,a.kt)("p",{parentName:"li"},"Output: 1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find_min_recursive(nums):\n    if nums == []:\n        return None\n    else:\n        return find_min_recursive_helper(nums, nums[0])\n\ndef find_min_recursive_helper(nums, min):\n    if nums == []:\n        return min\n    # set the first value as a temporary minimum value\n    if nums[0] < min:\n        min = nums[0]\n    return find_min_recursive_helper(nums[1:], min)\n")))))}c.isMDXComponent=!0}}]);