"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4539],{251:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var s=i(5893),r=i(1151);const t={title:"Dec 28, 2023"},l="Coding Journal: Dec 28, 2023",a={id:"learning-journal/2023/December/20231228",title:"Dec 28, 2023",description:"- Read and summarized some articles:",source:"@site/docs/learning-journal/2023/December/20231228.md",sourceDirName:"learning-journal/2023/December",slug:"/learning-journal/2023/December/20231228",permalink:"/docs/learning-journal/2023/December/20231228",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Dec 28, 2023"},sidebar:"tutorialSidebar",previous:{title:"Dec 27, 2023",permalink:"/docs/learning-journal/2023/December/20231227"},next:{title:"Dec 29, 2023",permalink:"/docs/learning-journal/2023/December/20231229"}},c={},o=[];function d(n){const e={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"coding-journal-dec-28-2023",children:"Coding Journal: Dec 28, 2023"}),"\n",(0,s.jsx)(e.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Read and summarized some articles:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://quinnle.io/docs/tech-blogs/swizec/post_12",children:'What does "solve problems" even mean?'})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://quinnle.io/docs/tech-blogs/swizec/post_13",children:"Effective standups"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://quinnle.io/docs/tech-blogs/swizec/post_11",children:"Why a tech meltdown is the best time to invest in your career?"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://quinnle.io/docs/tech-blogs/swizec/post_14",children:"Two types of complexity and their impact"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://quinnle.io/docs/tech-blogs/swizec/post_15",children:"How positioning makes you stand out from the crowd"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://quinnle.io/docs/tech-blogs/swizec/post_16",children:"Your background won't get you the job"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://quinnle.io/docs/tech-blogs/swizec/post_17",children:"Insights for interviews from Kahneman's Noise"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Continued with Leetcode 150:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Ransom Note"}),"\n",(0,s.jsx)(e.li,{children:"Isomorphic Strings"}),"\n",(0,s.jsx)(e.li,{children:"Word Pattern"}),"\n",(0,s.jsx)(e.li,{children:"Valid Anagram"}),"\n",(0,s.jsx)(e.li,{children:"Best Time To Buy and Sell Stock"}),"\n",(0,s.jsx)(e.li,{children:"Merge Sorted Array"}),"\n",(0,s.jsx)(e.li,{children:"Remove Element"}),"\n",(0,s.jsx)(e.li,{children:"Remove Duplicates from Sorted Array"}),"\n",(0,s.jsx)(e.li,{children:"Majority Element"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"2-questions-i-have",children:"2. Questions I Have"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"I don't have questions for today"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"I don't find anything challenging"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Ransom Note:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def can_construct(ransomeNote: str, magazine: str):\n    if len(magazine) < len(ransomeNote):\n        return False\n\n    magazine_dict = {}\n    for ch in magazine:\n        if ch not in magazine_dict:\n            magazine_dict[ch] = 1\n        else:\n            magazine_dict[ch] += 1\n\n    for letter in ransomeNote:\n        if letter not in magazine_dict:\n            return False\n        else:\n            if magazine_dict[letter] <= 0:\n                return False\n            else:\n                magazine_dict[letter] -= 1\n    return True\n\n\nprint(can_construct("a", "b"))  # False\nprint(can_construct("aa", "ab"))  # False\nprint(can_construct("aa", "aabs"))  # True\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Isomorphic Strings"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def is_isomorphic(s: str, t: str) -> bool:\n    mapping_s_t = {}\n    mapping_t_s = {}\n\n    for i in range(len(s)):\n        s_ch, t_ch = s[i], t[i]\n        if s_ch in mapping_s_t:\n            if mapping_s_t[s_ch] != t_ch:\n                return False\n        else:\n            mapping_s_t[s_ch] = t_ch\n\n        if t_ch in mapping_t_s:\n            if mapping_t_s[t_ch] != s_ch:\n                return False\n        else:\n            mapping_t_s[t_ch] = s_ch\n    return True\n\nprint(is_isomorphic("bbbaaaba", "aaabbbba"))\nprint(is_isomorphic("abc", "bca"))\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Word Pattern"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def word_pattern(pattern: str, s: str):\n    s = s.split()\n    pattern_dict = {}\n    word_dict = {}\n    if len(s) != len(pattern):\n        return False\n    for i in range(len(pattern)):\n        p = pattern[i]\n        word = s[i]\n\n        if p in pattern_dict:\n            if pattern_dict[p] != word:\n                return False\n        else:\n            pattern_dict[p] = word\n\n        if word in word_dict:\n            if word_dict[word] != p:\n                return False\n        else:\n            word_dict[word] = p\n    return True\n\n\nprint(word_pattern(pattern="abba", s="dog cat cat dog"))\nprint(word_pattern(pattern="abba", s="dog cat cat fish"))\nprint(word_pattern(pattern="abba", s="dog dog dog dog"))\n\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Valid Anagram"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def valid_anagram(s: str, t: str) -> bool:\n    s_dict = {}\n    for ch in s:\n        if ch in s_dict:\n            s_dict[ch] += 1\n        else:\n            s_dict[ch] = 1\n    for ch in t:\n        if ch not in s_dict:\n            return False\n        else:\n            if s_dict[ch] == 0:\n                return False\n            s_dict[ch] -= 1\n    for value in s_dict.values():\n        if value != 0:\n            return False\n    return True\n\n\nprint(valid_anagram("anagram", "nagaram"))\nprint(valid_anagram("rat", "car"))\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Best Time to Buy and Sell Stock"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'from typing import List\n\n\ndef max_profit(prices: List[int]) -> int:\n    res = 0\n    min_price = float("inf")\n    for p in prices:\n        min_price = min(min_price, p)\n        res = max(p - min_price, res)\n    return res\n\n\nprint(max_profit([7, 1, 5, 3, 6, 4]))\nprint(max_profit([7, 6, 4, 3, 1]))\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Merge Sorted Array"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        """\n        Do not return anything, modify nums1 in-place instead.\n        """\n        idx = len(nums1) - 1\n        first = m - 1\n        second = n - 1\n        while first >= 0 and second >= 0:\n            if nums1[first] > nums2[second]:\n                nums1[idx] = nums1[first]\n                idx -= 1\n                first -= 1\n            else:\n                nums1[idx] = nums2[second]\n                idx -= 1\n                second -= 1\n        while second >= 0:\n            nums1[idx] = nums2[second]\n            idx -= 1\n            second -= 1\n        return nums1\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.ol,{start:"27",children:["\n",(0,s.jsx)(e.li,{children:"Remove element"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def removeElement(self, nums: List[int], val: int) -> int:\n        index = 0 \n        for i in range(len(nums)):\n            if nums[i] != val:\n                nums[index] = nums[i]\n                index += 1\n        return index\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.ol,{start:"26",children:["\n",(0,s.jsx)(e.li,{children:"Remove Duplicates from Sorted Array"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        j = 1\n        for i in range(1, len(nums)):\n            if nums[i] != nums[i - 1]:\n                nums[j] = nums[i]\n                j += 1\n        return j\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Majority Element"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        nums_dict = {}\n        for num in nums:\n            if num not in nums_dict:\n                nums_dict[num] = 1\n            else:\n                nums_dict[num] += 1\n        max_value = 0\n        res = 0\n        for key in nums_dict:\n            if nums_dict[key] > max_value:\n                max_value = nums_dict[key]\n                res = key\n        return res\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>l});var s=i(7294);const r={},t=s.createContext(r);function l(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);