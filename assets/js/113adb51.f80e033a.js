"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5235],{7187:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>_,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(5893),r=t(1151);const a={title:"Jan 23, 2024"},s="Coding Journal: Jan 23, 2024",l={id:"learning-journal/2024/January/20240123",title:"Jan 23, 2024",description:"- Continued with the job search (21 applications)",source:"@site/docs/learning-journal/2024/January/20240123.md",sourceDirName:"learning-journal/2024/January",slug:"/learning-journal/2024/January/20240123",permalink:"/docs/learning-journal/2024/January/20240123",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Jan 23, 2024"},sidebar:"tutorialSidebar",previous:{title:"Jan 22, 2024",permalink:"/docs/learning-journal/2024/January/20240122"},next:{title:"Jan 24, 2024",permalink:"/docs/learning-journal/2024/January/20240124"}},o={},d=[];function h(n){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"coding-journal-jan-23-2024",children:"Coding Journal: Jan 23, 2024"}),"\n",(0,i.jsx)(e.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Continued with the job search (21 applications)"}),"\n",(0,i.jsxs)(e.li,{children:["Continued solving Leetcode to prepare for technical interviews:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Trapping Rain Water"}),"\n",(0,i.jsx)(e.li,{children:"Longest Palindrome Substring"}),"\n",(0,i.jsx)(e.li,{children:"Minimum Size Subarray Sum"}),"\n",(0,i.jsx)(e.li,{children:"Valid Parentheses"}),"\n",(0,i.jsx)(e.li,{children:"Count Number of Teams"}),"\n",(0,i.jsx)(e.li,{children:"Reformat Date"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"2-questions-i-have",children:"2. Questions I Have"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"I don't have any question for today."}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"I don't find anything challenging today."}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/trapping-rain-water/description/",children:"Trapping Rain Water"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'from typing import List\n\n\ndef trap_1(height: List[int]) -> int:\n    res = 0\n    for i in range(1, len(height) - 1):\n        cur_height = height[i]\n        left = max(height[:i + 1])\n        right = max(height[i:])\n        res += min(left, right) - cur_height\n    return res\n\n\n# Two-pointer approach\ndef trap_2(height: List[int]) -> int:\n    res = 0\n    left = 0\n    right = len(height) - 1\n    leftMax = height[left]\n    rightMax = height[right]\n    while left < right:\n        if leftMax < rightMax:\n            left += 1\n            leftMax = max(leftMax, height[left])\n            res += leftMax - height[left]\n        else:\n            right -= 1\n            rightMax = max(rightMax, height[right])\n            res += rightMax - height[right]\n    return res\n\n\ndef main():\n    print(trap_1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))\n    print(trap_2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/longest-palindromic-substring/description/",children:"Longest Palindromic Substring"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'def longest_palindrome_substring_i(s: str) -> str:\n    res = ""\n    max_len = 0\n    for i in range(len(s)):\n        for j in range(i, len(s)):\n            cur_str = s[i: j + 1]\n            if check_palindrome_i(cur_str):\n                if len(cur_str) > max_len:\n                    max_len = len(cur_str)\n                    res = cur_str\n    return res\n\n\ndef check_palindrome_i(s: str) -> bool:\n    left = 0\n    right = len(s) - 1\n    while left < right:\n        if s[left] != s[right]:\n            return False\n        left += 1\n        right -= 1\n    return True\n\n\ndef longest_palindrome_substring_ii(s: str) -> str:\n    res = ""\n    max_len = 0\n    # Odd string length\n    for i in range(len(s)):\n        res, max_len = check_palindrome_ii(s=s, left=i, right=i, max_len=max_len, res=res)\n        res, max_len = check_palindrome_ii(s=s, left=i, right=i + 1, max_len=max_len, res=res)\n    return res\n\n\ndef check_palindrome_ii(s: str, left: int, right: int, max_len: int, res:str):\n    while left >= 0 and right < len(s) and s[left] == s[right]:\n        if right - left + 1 > max_len:\n            max_len = right - left + 1\n            res = s[left: right + 1]\n        left -= 1\n        right += 1\n    return res, max_len\n\n\ndef longest_palindrome_substring_iii(s: str) -> str:\n    res = ""\n    max_len = 0\n    for i in range(len(s)):\n        # Odd string length case\n        left = i\n        right = i\n        while left >= 0 and right < len(s) and s[left] == s[right]:\n            if max_len < right - left + 1:\n                max_len = right - left + 1\n                res = s[left: right + 1]\n            left -= 1\n            right += 1\n\n        # Even string length case\n        left = i\n        right = i + 1\n        while left >= 0 and right < len(s) and s[left] == s[right]:\n            if max_len < right - left + 1:\n                max_len = right - left + 1\n                res = s[left: right + 1]\n            left -= 1\n            right += 1\n    return res\n\n\ndef main():\n    print(longest_palindrome_substring_i(s="babad"))\n    print(longest_palindrome_substring_ii(s="babad"))\n    print(longest_palindrome_substring_iii(s="babad"))\n\n    print(longest_palindrome_substring_i(s="cbbd"))\n    print(longest_palindrome_substring_ii(s="cbbd"))\n    print(longest_palindrome_substring_iii(s="cbbd"))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/minimum-size-subarray-sum/description/",children:"Minimum Size Subarray Sum"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'from typing import List\n\n\ndef find_minimum_sub(target: int, nums: List[int]) -> int:\n    min_len = len(nums) + 1\n    start = 0\n    cur_sum = 0\n    for end in range(len(nums)):\n        cur_sum += nums[end]\n        while cur_sum >= target:\n            min_len = min(min_len, end - start + 1)\n            cur_sum -= nums[start]\n            start += 1\n    if min_len == len(nums) + 1:\n        return 0\n    return min_len\n\n\ndef main():\n    print(find_minimum_sub(target=7, nums=[2, 3, 1, 2, 4, 3]))\n    print(find_minimum_sub(target=11, nums=[1, 1, 1, 1, 1, 1]))\n    print(find_minimum_sub(target=4, nums=[1, 4, 4]))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/valid-parentheses/description/",children:"Valid Parentheses"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'def is_valid(s: str) -> bool:\n    openings = []\n    for ch in s:\n        if ch in "([{":\n            openings.append(ch)\n        else:\n            if not openings:\n                return False\n            else:\n                p = openings.pop()\n                if (p == "(" and ch == ")") or (p == "[" and ch == "]") or (p == "{" and ch == "}"):\n                    continue\n                else:\n                    return False\n    return not openings\n\n\ndef main():\n    print(is_valid(s="()"))\n    print(is_valid(s="()[]{}"))\n    print(is_valid(s="(]"))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/count-number-of-teams/description/",children:"Count Number of Teams"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'from typing import List\n\n\ndef count_number_of_teams_brute_force(rating: List[int]) -> int:\n    count = 0\n    for i in range(len(rating) - 2):\n        for j in range(i + 1, len(rating) - 1):\n            for k in range(j + 1, len(rating)):\n                if rating[i] < rating[j] < rating[k] or rating[i] > rating[j] > rating[k]:\n                    count += 1\n    return count\n\n\ndef count_number_of_teams(rating: List[int]) -> int:\n    count = 0\n    for j in range(len(rating)):\n        less_left = greater_left = less_right = greater_right = 0\n        for i in range(j):\n            if rating[i] < rating[j]:\n                less_left += 1\n            elif rating[i] > rating[j]:\n                greater_left += 1\n\n        for k in range(j + 1, len(rating)):\n            if rating[k] > rating[j]:\n                greater_right += 1\n            elif rating[k] < rating[j]:\n                less_right += 1\n\n        count += less_left * greater_right + less_right * greater_left\n\n    return count\n\n\ndef main():\n    print(count_number_of_teams_brute_force(rating=[2, 5, 3, 4, 1]))  # 3\n    print(count_number_of_teams_brute_force(rating=[2, 1, 3]))  # 0\n    print(count_number_of_teams_brute_force(rating=[1, 2, 3, 4]))  # 4\n\n    print(count_number_of_teams(rating=[2, 5, 3, 4, 1]))  # 3\n    print(count_number_of_teams(rating=[2, 1, 3]))  # 0\n    print(count_number_of_teams(rating=[1, 2, 3, 4]))  # 4\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/reformat-date/description/",children:"Reformat Date"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'def reformat_date(date: str) -> str:\n    month_dict = {\n        "Jan": "01",\n        "Feb": "02",\n        "Mar": "03",\n        "Apr": "04",\n        "May": "05",\n        "Jun": "06",\n        "Jul": "07",\n        "Aug": "08",\n        "Sep": "09",\n        "Oct": "10",\n        "Nov": "11",\n        "Dec": "12"\n    }\n    date = date.split()\n    day = date[0]\n    if len(day) == 3:\n        day = "0" + date[0][:1]\n    elif len(day) == 4:\n        day = date[0][:2]\n\n    month = month_dict[date[1]]\n    year = date[2]\n\n    res = year + "-" + month + "-" + day\n    return res\n\n\ndef main():\n    print(reformat_date(date="20th Oct 2052"))\n    print(reformat_date(date="6th Jun 1933"))\n    print(reformat_date(date="26th May 1960"))\n\n\nif __name__ == "__main__":\n    main()\n'})})]})}function _(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>s});var i=t(7294);const r={},a=i.createContext(r);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);