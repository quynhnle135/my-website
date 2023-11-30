"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[759],{3122:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(5893),r=i(1151);const s={title:"Sep 05, 2023"},l="Coding Journal: Sep 05, 2023",a={id:"learning-journal/September/20230905",title:"Sep 05, 2023",description:"Cousera Notes:",source:"@site/docs/learning-journal/September/20230905.md",sourceDirName:"learning-journal/September",slug:"/learning-journal/September/20230905",permalink:"/docs/learning-journal/September/20230905",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Sep 05, 2023"},sidebar:"tutorialSidebar",previous:{title:"Sep 04, 2023",permalink:"/docs/learning-journal/September/20230904"},next:{title:"Sep 12, 2023",permalink:"/docs/learning-journal/September/20230912"}},o={},d=[{value:"Cousera Notes:",id:"cousera-notes",level:4},{value:"Interview with Brandon 7:30PM",id:"interview-with-brandon-730pm",level:4},{value:"Feedback",id:"feedback",level:4}];function c(e){const n={code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"coding-journal-sep-05-2023",children:"Coding Journal: Sep 05, 2023"}),"\n",(0,t.jsx)(n.h4,{id:"cousera-notes",children:"Cousera Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Go over time and space complexity"}),"\n",(0,t.jsx)(n.li,{children:"Go over basic and advanced data structures: string, list, set, dictionary, linked list, hash table, tree, graphs"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"interview-with-brandon-730pm",children:"Interview with Brandon 7:30PM"}),"\n",(0,t.jsx)(n.p,{children:'First question: give a string of numbers (for ex: [1, 2, 3]), return the most frequent number in that string "123232111" -> 1'}),"\n",(0,t.jsx)(n.p,{children:"Clarifying question:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"can have empty string -> return -1"}),"\n",(0,t.jsx)(n.li,{children:"only valid digit"}),"\n",(0,t.jsx)(n.li,{children:"only positive number"}),"\n",(0,t.jsx)(n.li,{children:"not sorted"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'examples\n"123" -> return the maximum value -> 3'}),"\n",(0,t.jsx)(n.p,{children:'"11112233334" -> 3v'}),"\n",(0,t.jsx)(n.p,{children:"1st approach"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"use dict to store the appeance while traverse"}),"\n",(0,t.jsx)(n.li,{children:"update the value in the dict if i see again in the string"}),"\n",(0,t.jsx)(n.li,{children:"return the key value with the max value"}),"\n",(0,t.jsx)(n.li,{children:"if we have the same appearance (same value) -> return the max key"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"time complexity: O(n)\nspace: O(n) -> Wrong -> should be O(1)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def find_max_appearance(num_str):\n  if num_str == "":\n    return -1\n\n  num_dict = {}\n  # {1: 1, 2: 1, 3: 1}\n  max_val = -1\n  max_key = -1\n  for n in num_str:\n      num = int(n)\n    if int(n) in num_dict:\n      num_dict[int(n)] += 1\n    else:\n      num_dict[int(n)] = 1\n      # if int(n) > max_key:\n      #   max_key = int(n)\n\n  for key in num_dict: # 3\n    val = num_dict[key]  # current value: 1\n    if val >= max_val: # 1 > 2\n      if key > max_key: # 1 > - 1\n        max_key = key # 1\n        max_val = val # 2\n\n  return max_key\n\ndef main():\n  print(find_max_appearance("123"))  # 3\n  print(find_max_appearance("11112233334"))  # 3\n\nif __name__ == "__main__":\n  main()\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Second question: given two list that sorted , return that sorted list with all element of two given lists and sorted"}),"\n",(0,t.jsx)(n.p,{children:"Clarifying question:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"may have empty list"}),"\n",(0,t.jsx)(n.li,{children:"ascending sorted"}),"\n",(0,t.jsx)(n.li,{children:"duplicated numbers may appear"}),"\n",(0,t.jsx)(n.li,{children:"negative number may appear"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"1st approach"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"if not list1 : -> return list2"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"if not list2: -> return list1"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"res = [0] * (len(list1) + len(list2)) -> no need -> res = []"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"two pointer i, j"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"while i < len(list1) and j < len(list2):"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"compare list1[i] and list2[j]"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"smaller -> append it to the res"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"if list1[i] < list2[j]:"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"res.append(list1[i])"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"i += 1"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"make sure there's no element left in both the array:"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"while list1: -> append res"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"while list2: -> append res"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"time complexity: O(n + m)\nspace complexity: O(n + m)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def merge_lists(list1, list2):\n  if not list1:\n    return list2\n  if not list2:\n    return list1\n\n  res = []\n  i = j = 0\n  while (i < len(list1)) and (j < len(list2)):\n    if list1[i] < list2[j]:\n      res.append(list1[i])\n      i += 1\n    else:\n      res.append(list2[j])\n      j += 1\n\n  while i < len(list1):\n    res.append(list1[i])\n    i += 1\n\n  while j < len(list2):\n    res.append(list2[j])\n    j += 1\n\n  return res\n\n\nprint(merge_lists([1, 2, 3], [4, 5, 6]))\nprint(merge_lists([2, 4, 6, 7], [1, 1, 2, 3, 5, 8]))\nprint(merge_lists([1, 1, 2, 3, 5, 8], [2, 4, 6, 7]))\nprint(merge_lists([], [1, 2, 3]))\nprint(merge_lists([1, 2, 3], []))\nprint(merge_lists([], []))\nprint(merge_lists(None, None))\n"})}),"\n",(0,t.jsx)(n.h4,{id:"feedback",children:"Feedback"}),"\n",(0,t.jsx)(n.p,{children:"Weakness:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Don\u2019t use variables -> Should assign variables to keep track and not over-repeating in your code"}),"\n",(0,t.jsx)(n.li,{children:"Condition for the first problem -> Trip off because not giving the variables to keep track"}),"\n",(0,t.jsx)(n.li,{children:"Try not to be panic -> Go over the code to make sure about the time complexity and space complexity"}),"\n",(0,t.jsx)(n.li,{children:"If the problem changes -> Going back to the examples -> Working line by line to the code to work on the improved solution -> See if we can reproduce or get rid of some parts"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Suggestions:\nWhat do you suggest to become better at coding/techincal interview?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Leetcode, books (Cracking the coding interview)"}),"\n",(0,t.jsx)(n.li,{children:"OOP, design system -> Review"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If I don't have much working experiences, how can I do well in behavioral interview?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make some stuff up  -> They want to see how you work with group projects\nInterviewer may ask like:"}),"\n",(0,t.jsx)(n.li,{children:"Work on the project, somebody on the project tells you have the answer of the exam"}),"\n",(0,t.jsx)(n.li,{children:"Manager ask you to do something but it was clear"}),"\n",(0,t.jsx)(n.li,{children:"Time that missed deadline"}),"\n",(0,t.jsx)(n.li,{children:"Internship struggles\n-> Want to see how your mind works under the pressure\n-> May ask different kind of pressure you gotta work under, leadership,..."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Do you have any tips or your own strategy when you're in a coding interview?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Managing your time well"}),"\n",(0,t.jsx)(n.li,{children:"When struggling, should step back and listen to what interviewer wants to guide -> Try to repeat what they\u2019re saying"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var t=i(7294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);