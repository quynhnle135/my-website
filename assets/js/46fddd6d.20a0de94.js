"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5907],{4159:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=r(5893),t=r(1151);const a={title:"Sep 19",description:"Tue, Sep 19"},o=void 0,s={id:"learning-journal/2023/September/sep_19_23",title:"Sep 19",description:"Tue, Sep 19",source:"@site/docs/learning-journal/2023/September/sep_19_23.md",sourceDirName:"learning-journal/2023/September",slug:"/learning-journal/2023/September/sep_19_23",permalink:"/my-website/docs/learning-journal/2023/September/sep_19_23",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Sep 19",description:"Tue, Sep 19"},sidebar:"tutorialSidebar",previous:{title:"Sep 18",permalink:"/my-website/docs/learning-journal/2023/September/sep_18_23"},next:{title:"Sep 23",permalink:"/my-website/docs/learning-journal/2023/September/sep_23_23"}},l={},d=[{value:"Go over Recursion (To prepare for Tree and Graph)",id:"go-over-recursion-to-prepare-for-tree-and-graph",level:2},{value:"Facotiral",id:"facotiral",level:5},{value:"Fibonacci",id:"fibonacci",level:5},{value:"Greatest common factor",id:"greatest-common-factor",level:5},{value:"Palindrome",id:"palindrome",level:5},{value:"Power of number",id:"power-of-number",level:5},{value:"Reverse a string",id:"reverse-a-string",level:5},{value:"Sum of array",id:"sum-of-array",level:5},{value:"Notes for recursion review:",id:"notes-for-recursion-review",level:3},{value:"Interviewing.io (me being the interviewee)",id:"interviewingio-me-being-the-interviewee",level:2},{value:"Pairs of songs with total durations divisible by 60",id:"pairs-of-songs-with-total-durations-divisible-by-60",level:3},{value:"notes for today&#39;s practice interview session:",id:"notes-for-todays-practice-interview-session",level:3},{value:"Leetcode Daily Challenge: Minimum Operations to reduce X to Zero",id:"leetcode-daily-challenge-minimum-operations-to-reduce-x-to-zero",level:2},{value:"Notes for this challenge:",id:"notes-for-this-challenge",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",h5:"h5",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"go-over-recursion-to-prepare-for-tree-and-graph",children:"Go over Recursion (To prepare for Tree and Graph)"}),"\n",(0,i.jsx)(n.h5,{id:"facotiral",children:"Facotiral"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def find_factorial(n):\n    # Base case\n    if n <= 1:\n        return 1\n    return n * find_factorial(n - 1)\n\n\ndef main():\n    print(find_factorial(5))  # 5! = 1 x 2 x 3 x 4 x 5 = 120\n    print(find_factorial(3))  # 3! = 1 x 2 x 3 = 6\n    print(find_factorial(10))  # 10! = 3628800\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(n.h5,{id:"fibonacci",children:"Fibonacci"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def find_fibonacci(n):\n    if n == 1 or n == 2:\n        return 1\n    return find_fibonacci(n - 1) + find_fibonacci(n - 2)\n\n\ndef main():\n    print(find_fibonacci(n=5))  # 5 = 1, 1, 2, 3, 5\n    print(find_fibonacci(n=8))  # 8 = 1, 1, 2, 3, 5, 8, 13, 21\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,i.jsx)(n.h5,{id:"greatest-common-factor",children:"Greatest common factor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def find_gcd(a, b):\n    if b == 0:\n        return a\n    return find_gcd(b, a % b)\n\n\ndef find_gcd_iterative(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\n\ndef greatest_common_factor_iterative(a, b):\n    a_factors =[]\n    b_factors = []\n    # Find all factors of a\n    for i in range(1, a + 1):\n        if a % i == 0:\n            a_factors.append(i)\n    # Find all factors of b\n    for i in range(1, b + 1):\n        if b % i == 0:\n            b_factors.append(i)\n\n    greatest_factor = float("-inf")\n    for f in a_factors:\n        # Find the common factor\n        if f in b_factors:\n            # Check if the common factor is greatest\n            if f > greatest_factor:\n                greatest_factor = f\n    return greatest_factor\n\n\ndef main():\n    print(greatest_common_factor_iterative(56, 48))\n    print(find_gcd(56, 48))\n    print(find_gcd_iterative(56, 48))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(n.h5,{id:"palindrome",children:"Palindrome"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def check_palindrome(s):\n    return check_palindrome_helper(s, 0, len(s) - 1)\n\n\ndef check_palindrome_helper(s, left, right):\n    # Base case\n    if left >= right:\n        return True\n\n    if s[left] != s[right]:\n        return False\n\n    return check_palindrome_helper(s, left + 1, right - 1)\n\n\ndef main():\n    print(check_palindrome("hannah"))\n    print(check_palindrome("meta"))\n    print(check_palindrome("abba"))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,i.jsx)(n.h5,{id:"power-of-number",children:"Power of number"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def find_power_of_number(x, n):\n    if n == 0:\n        return 1\n    if n == 1:\n        return x\n    return x * find_power_of_number(x, n - 1)\n\n\ndef main():\n    print(find_power_of_number(2, 3))\n    print(find_power_of_number(5, 2))\n    print(find_power_of_number(10, 0))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(n.h5,{id:"reverse-a-string",children:"Reverse a string"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def reverse_a_string(s):\n    if len(s) <= 1:\n        return s\n    return s[-1] + reverse_a_string(s[:-1])\n\n\ndef main():\n    print(reverse_a_string("hello"))\n    print(reverse_a_string("python"))\n    print(reverse_a_string("leetcode"))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(n.h5,{id:"sum-of-array",children:"Sum of array"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def find_sum_of_array(arr):\n    if not arr:\n        return 0\n    return arr[0] + find_sum_of_array(arr[1:])\n\n\ndef main():\n    print(find_sum_of_array([1, 2, 3, 4, 5]))  # 15\n    print(find_sum_of_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))  # 55\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"notes-for-recursion-review",children:"Notes for recursion review:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"I find myself really weak at recursion so that's why I have hard time understanding trees, graphs, DFS, and BFS."}),"\n",(0,i.jsx)(n.li,{children:"When it comes to recursion, try to set the base case and sub problem that will be solved recursively"}),"\n",(0,i.jsx)(n.li,{children:"Recursion doesn't need to solve everything in one function, you can creat a helper function and solve it recursively in that function."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"interviewingio-me-being-the-interviewee",children:"Interviewing.io (me being the interviewee)"}),"\n",(0,i.jsx)(n.h3,{id:"pairs-of-songs-with-total-durations-divisible-by-60",children:"Pairs of songs with total durations divisible by 60"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class Solution(object):\n    def numPairsDivisibleBy60(self, time):\n        """\n        :type time: List[int]\n        :rtype: int\n        """\n        if len(time) <= 1:\n            return 0\n\n        remainder_dict = {}\n        count = 0\n        for i in range(len(time)):\n            remainder = time[i] % 60\n\n            if remainder not in remainder_dict:\n                remainder_dict[remainder] = 0\n\n            if remainder == 0:\n                if remainder in remainder_dict:\n                    count += remainder_dict[remainder]\n\n            if (60 - remainder) in remainder_dict:\n                count += remainder_dict[60 - remainder]\n\n            remainder_dict[remainder] += 1\n\n        return count\n'})}),"\n",(0,i.jsx)(n.h3,{id:"notes-for-todays-practice-interview-session",children:"notes for today's practice interview session:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"I boomed this interview because I couldn't improve my solution based on interviewer's hints"}),"\n",(0,i.jsx)(n.li,{children:"When getting hints, I should have thought more about it and tried to solve it on my own rather than rely on the interviewer"}),"\n",(0,i.jsx)(n.li,{children:"Feedback: Communication is fine, speaking out loud when trying to solve the problem but need to improve technical and problem solving skills. Keeep leetcoding."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"leetcode-daily-challenge-minimum-operations-to-reduce-x-to-zero",children:"Leetcode Daily Challenge: Minimum Operations to reduce X to Zero"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class Solution(object):\n    def minOperations(self, nums, x):\n        """\n        :type nums: List[int]\n        :type x: int\n        :rtype: int\n        """\n        n = len(nums)\n        total = sum(nums)\n        target = total - x\n        if target == 0:\n            return n\n        start = 0\n        cur_sum = 0\n        longest_sub_len = -1\n        for end in range(n):\n            cur_sum += nums[end]\n            while (cur_sum > target) and (start <= end):\n                cur_sum -= nums[start]\n                start += 1\n            if cur_sum == target:\n                longest_sub_len = max(longest_sub_len, end - start + 1)\n                cur_sum -= nums[start]\n                start += 1\n        if longest_sub_len != -1:\n            return n - longest_sub_len\n        return -1\n'})}),"\n",(0,i.jsx)(n.h3,{id:"notes-for-this-challenge",children:"Notes for this challenge:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It may be difficult at first but if you think differently, you can easily solve it"}),"\n",(0,i.jsx)(n.li,{children:"I tried to find the minimum elements of both end of the array but you can find the longest sub array instead"}),"\n",(0,i.jsx)(n.li,{children:"Finding the longest sub array can be solved easily with sliding window approach"}),"\n",(0,i.jsx)(n.li,{children:"When solving the problem, it's not necessary to solve it literally how it's described. Look at the problem differently or the surroundings of the target or the complement can be the solution"}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var i=r(7294);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);