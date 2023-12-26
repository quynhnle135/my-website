"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9216],{2110:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(5893),i=t(1151);const r={title:"Dec 25, 2023"},a="Coding Journal: Dec 25, 2023",l={id:"learning-journal/2023/December/20231225",title:"Dec 25, 2023",description:"- Freshened up and reviewed some coding problems:",source:"@site/docs/learning-journal/2023/December/20231225.md",sourceDirName:"learning-journal/2023/December",slug:"/learning-journal/2023/December/20231225",permalink:"/docs/learning-journal/2023/December/20231225",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Dec 25, 2023"},sidebar:"tutorialSidebar",previous:{title:"Dec 18, 2023",permalink:"/docs/learning-journal/2023/December/20231218"},next:{title:"Dive Into Design Patterns",permalink:"/docs/category/dive-into-design-patterns"}},d={},o=[{value:"Linked List",id:"linked-list",level:3},{value:"Two Pointers",id:"two-pointers",level:3},{value:"Sliding Windows",id:"sliding-windows",level:3}];function h(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"coding-journal-dec-25-2023",children:"Coding Journal: Dec 25, 2023"}),"\n",(0,s.jsx)(e.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Freshened up and reviewed some coding problems:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Linked List: Merge Two Sorted lists, Linked List Cycle"}),"\n",(0,s.jsx)(e.li,{children:"Two Pointers: Valid Palindrome, Two Sum II, 3Sum, Is Subsequence, Container With Most Water"}),"\n",(0,s.jsx)(e.li,{children:"Sliding Windows: Minimum Size Subarray Sum, Longest Substring Without Repeating Characters, Minimum Window Substring, Repeated DNA Sequences"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Updated my resume"}),"\n",(0,s.jsxs)(e.li,{children:["Read some articles:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://quinnle.io/docs/tech-blogs/notes/post_44",children:"Keeping a high engineering culture, tips from the field"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://quinnle.io/docs/tech-blogs/notes/post_45",children:"What I Learned from Do Hard Things"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://quinnle.io/docs/tech-blogs/notes/post_45",children:"Hard work doesn't scale"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"2-questions-i-have",children:"2. Questions I Have"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"I don't have any question for today"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"I don't find anything challening for today"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,s.jsx)(e.h3,{id:"linked-list",children:"Linked List"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/merge-two-sorted-lists/",children:"Merge Two Sorted Lists"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="merge_two_sorted_lists.py"',children:"from typing import Optional\nfrom listnode import ListNode\n\n\ndef merge_two_sorted_lists(head1: Optional[ListNode], head2: Optional[ListNode]) -> Optional[ListNode]:\n    node = ListNode(0)\n    res = node\n    while head1 and head2:\n        if head1.val < head2.val:\n            node.next = head1\n            head1 = head1.next\n        else:\n            node.next = head2\n            head2 = head2.next\n        node = node.next\n\n    while head1:\n        node.next = head1\n        head1 = head1.next\n        node = node.next\n\n    while head2:\n        node.next = head2\n        head2 = head2.next\n        node = node.next\n\n    return res.next\n\n\ndef main():\n    pass\n\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/linked-list-cycle/",children:"Linked List Cycle"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="linked_list_cycle.py"',children:'from typing import Optional\nfrom listnode import ListNode\n\n\ndef has_cycle(head: Optional[ListNode]) -> bool:\n    fast = head\n    slow = head\n    while fast and fast.next:\n        fast = fast.next.next\n        slow = slow.next\n        if fast == slow:\n            return True\n    return False\n\n\ndef main():\n    head = ListNode(1)\n    head.next = ListNode(2)\n    head.next.next = ListNode(3)\n    # head.next.next.next = head.next\n    head.next.next.next = ListNode(4)\n    print(has_cycle(head=head))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,s.jsx)(e.h3,{id:"two-pointers",children:"Two Pointers"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/valid-palindrome/",children:"Valid Palindrome"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="valid_palindrome.py"',children:'import re\n\n\ndef is_palindrome(s: str) -> bool:\n    s = re.sub(r\'[\\s|\\W_]\', \'\', s.strip().lower())\n    start = 0\n    end = len(s) - 1\n    while start < end:\n        if s[start] != s[end]:\n            return False\n        start += 1\n        end -= 1\n    return True\n\n\ndef is_palindrome_i(s: str) -> bool:\n    start = 0\n    end = len(s) - 1\n    while start < end:\n        if not s[start].isalnum():\n            start += 1\n        elif not s[end].isalnum():\n            end -= 1\n        elif s[start].lower() == s[end].lower():\n            start += 1\n            end -= 1\n        else:\n            return False\n    return True\n\n\ndef main():\n    s1 = "A man, a plan, a canal: Panama"\n    s2 = "race a car"\n    s3 = ""\n    # print(is_palindrome(s1))  # True\n    # print(is_palindrome(s2))  # False\n    # print(is_palindrome(s3))  # True\n\n    print(is_palindrome_i(s1))\n    print(is_palindrome_i(s2))\n    print(is_palindrome_i(s3))\n\n\n    # print(re.sub(r\'[\\s|\\W_]\', \'\', s1.strip().lower()))\n    # print(s1.replace(" ", ""))\n    # print(" ".isalnum())\n    # print("a".isalnum())\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",children:"Two Sum II"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="two_sum_ii.py"',children:'from typing import List\n\n\ndef two_sum_ii(numbers: List[int], target: int) -> List[int]:\n    start = 0\n    end = len(numbers) - 1\n    while start < end:\n        cur_val = numbers[start] + numbers[end]\n        if cur_val == target:\n            return [start + 1, end + 1]\n        elif cur_val < target:\n            start += 1\n        else:\n            end -= 1\n\n\ndef main():\n    print(two_sum_ii([2, 7, 11, 15], 9))\n    print(two_sum_ii([2, 3, 4], 6))\n    print(two_sum_ii([-1, 0], -1))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/3sum/",children:"3Sum"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="three_sum.py"',children:'from typing import List\n\n\ndef three_sum(nums: List[int]) -> List[List[int]]:\n    nums.sort()\n    res = []\n    for i in range(len(nums) - 2):\n        start = i + 1\n        end = len(nums) - 1\n        while start < end:\n            triplet = [nums[i], nums[start], nums[end]]\n            if sum(triplet) == 0 and triplet not in res:\n                res.append(triplet)\n                start += 1\n                end -= 1\n            elif sum(triplet) < 0:\n                start += 1\n            else:\n                end -= 1\n    return res\n\n\ndef three_sum_i(nums: List[int]) -> List[List[int]]:\n    nums.sort()\n    res = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        start = i + 1\n        end = len(nums) - 1\n        while start < end:\n            triplet = [nums[i], nums[start], nums[end]]\n            if sum(triplet) == 0 and triplet not in res:\n                res.append(triplet)\n                start += 1\n                end -= 1\n                while start < end and nums[start] == nums[start - 1]:\n                    start += 1\n                while start < end and nums[end] == nums[end + 1]:\n                    end -= 1\n            elif sum(triplet) < 0:\n                start += 1\n            else:\n                end -= 1\n    return res\n\n\ndef main():\n    print(three_sum([-1, 0, 1, 2, -1, -4]))\n    print(three_sum([0, 1, 1]))\n    print(three_sum([0, 0, 0]))\n\n    print(three_sum_i([-1, 0, 1, 2, -1, -4]))\n    print(three_sum_i([0, 1, 1]))\n    print(three_sum_i([0, 0, 0]))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/is-subsequence/",children:"Is Subsequence"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="is_subsequence.py"',children:'def is_subsequence(s: str, t: str) -> bool:\n    if not s:\n        return True\n    if not t:\n        return False\n    s_ptr = 0\n    t_ptr = 0\n    while t_ptr < len(t):\n        if t[t_ptr] == s[s_ptr]:\n            s_ptr += 1\n            if s_ptr == len(s):\n                return True\n        t_ptr += 1\n    return s_ptr == len(s)\n\n\ndef main():\n    s = "abc"\n    t = "ahbgdc"\n    print(is_subsequence(s, t))\n    print(is_subsequence("acb", t))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/container-with-most-water/",children:"Container With Most Water"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="container_with_most_water.py"',children:'from typing import List\n\n\ndef max_area(height: List[int]) -> int:\n    res = 0\n    start = 0\n    end = len(height) - 1\n    while start < end:\n        cur_width = end - start\n        cur_height = min(height[start], height[end])\n        cur_area = cur_width * cur_height\n        res = max(res, cur_area)\n        if height[start] < height[end]:\n            start += 1\n        else:\n            end -= 1\n    return res\n\n\ndef main():\n    print(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]))\n    print(max_area([1, 1]))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,s.jsx)(e.h3,{id:"sliding-windows",children:"Sliding Windows"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",children:"Longest Substring Without Repeating Characters"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def length_of_longest_substring(s: str) -> int:\n    start = 0\n    max_len = 0\n    char_dict = {}\n    for end in range(len(s)):\n        if s[end] in char_dict:\n            start = max(start, char_dict[s[end]] + 1)\n        char_dict[s[end]] = end\n        max_len = max(max_len, end - start + 1)\n    return max_len\n\n\ndef length_of_longest_substring_i(s: str) -> int:\n    chars = []\n    max_len = 0\n    for end in range(len(s)):\n        if s[end] not in chars:\n            chars.append(s[end])\n        else:\n            while s[end] in chars:\n                max_len = max(max_len, len(chars))\n                chars = chars[1:]\n            chars.append(s[end])\n    return max(max_len, len(chars))\n\n\ndef main():\n    s1 = "abcabcbb"\n    s2 = "bbbbb"\n    s3 = "pwwkew"\n    s4 = " "\n    print(length_of_longest_substring(s1))\n    print(length_of_longest_substring_i(s1))\n\n    print(length_of_longest_substring(s2))\n    print(length_of_longest_substring_i(s2))\n\n    print(length_of_longest_substring(s3))\n    print(length_of_longest_substring_i(s3))\n\n    print(length_of_longest_substring(s4))\n    print(length_of_longest_substring_i(s4))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/minimum-size-subarray-sum/",children:"Minimum Size Subarray Sum"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'from typing import List\n\n\ndef min_sub_array_len(target: int, nums: List[int]) -> int:\n    start = 0\n    res = float("inf")\n    cur_sum = 0\n    for end in range(len(nums)):\n        cur_sum += nums[end]\n        while cur_sum >= target:\n            res = min(end - start + 1, res)\n            cur_sum -= nums[start]\n            start += 1\n    if res == float("inf"):\n        return 0\n    return res\n\n\ndef main():\n    print(min_sub_array_len(target=7, nums=[2, 3, 1, 2, 4, 3]))\n    print(min_sub_array_len(target=4, nums=[1, 4, 4]))\n    print(min_sub_array_len(target=11, nums=[1, 1, 1, 1, 1, 1, 1]))\n    print(min_sub_array_len(target=11, nums=[1, 2, 3, 4, 5]))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/minimum-window-substring/",children:"Minimum Window Substring"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'from collections import Counter\n\n\ndef minimum_window(s: str, t: str) -> str:\n    if len(t) > len(s):\n        return ""\n\n    need = Counter(t)\n    match = 0\n    l = 0\n    start = 0\n    window_len = len(s) + 1\n    for r, ch in enumerate(s):\n        if ch in need:\n            need[ch] -= 1\n            match += need[ch] == 0\n        while match == len(need):\n            if window_len > r - l + 1:\n                start = l\n                window_len = r - l + 1\n            removeCh = s[l]\n            l += 1\n            if removeCh in need:\n                match -= need[removeCh] == 0\n                need[removeCh] += 1\n    return s[start:start + window_len] if window_len <= len(s) else \'\'\n\n\ndef main():\n    print(minimum_window(s="ADOBECODEBANC", t="ABC"))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/repeated-dna-sequences/",children:"Repeated DNA Sequences"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'from typing import List\n\n\ndef find_repeated_dna_sequences(s: str) -> List[str]:\n    if len(s) < 10:\n        return []\n\n    sub_string = s[:10]\n    start = 0\n    res = []\n    for end in range(10, len(s)):\n        if sub_string in s[start + 1:] and sub_string not in res:\n            res.append(sub_string)\n        start += 1\n        sub_string = s[start: start + 10]\n    return res\n\n\ndef find_repeated_dna_sequences_i(s: str) -> List[int]:\n    if len(s) < 10:\n        return []\n\n    seen = set()\n    repeated = set()\n    for i in range(len(s) - 9):\n        sequence = s[i: i + 10]\n        if sequence in seen:\n            repeated.add(sequence)\n        else:\n            seen.add(sequence)\n    return list(repeated)\n\n\ndef main():\n    print(find_repeated_dna_sequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))\n    print(find_repeated_dna_sequences("AAAAAAAAAAAAA"))\n\n    print(find_repeated_dna_sequences_i("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))\n    print(find_repeated_dna_sequences_i("AAAAAAAAAAAAA"))\n\n\nif __name__ == "__main__":\n    main()\n\n'})})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);