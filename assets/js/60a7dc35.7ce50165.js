"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Sep 05",description:"Tue, Sep 05"},l=void 0,o={unversionedId:"learning-journal/2023/September/sep_05_23",id:"learning-journal/2023/September/sep_05_23",title:"Sep 05",description:"Tue, Sep 05",source:"@site/docs/learning-journal/2023/September/sep_05_23.md",sourceDirName:"learning-journal/2023/September",slug:"/learning-journal/2023/September/sep_05_23",permalink:"/my-website/docs/learning-journal/2023/September/sep_05_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Sep 05",description:"Tue, Sep 05"},sidebar:"tutorialSidebar",previous:{title:"Sep 04",permalink:"/my-website/docs/learning-journal/2023/September/sep_04_23"},next:{title:"Sep 12",permalink:"/my-website/docs/learning-journal/2023/September/sep_12_23"}},p={},s=[{value:"Cousera Notes:",id:"cousera-notes",level:4},{value:"Interview with Brandon 7:30PM",id:"interview-with-brandon-730pm",level:4},{value:"Feedback",id:"feedback",level:4}],u={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"cousera-notes"},"Cousera Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go over time and space complexity"),(0,a.kt)("li",{parentName:"ul"},"Go over basic and advanced data structures: string, list, set, dictionary, linked list, hash table, tree, graphs")),(0,a.kt)("h4",{id:"interview-with-brandon-730pm"},"Interview with Brandon 7:30PM"),(0,a.kt)("p",null,"First question: give a string of numbers (for ex: ","[1, 2, 3]",'), return the most frequent number in that string "123232111" -> 1'),(0,a.kt)("p",null,"Clarifying question:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"can have empty string -> return -1"),(0,a.kt)("li",{parentName:"ul"},"only valid digit"),(0,a.kt)("li",{parentName:"ul"},"only positive number"),(0,a.kt)("li",{parentName:"ul"},"not sorted")),(0,a.kt)("p",null,'examples\n"123" -> return the maximum value -> 3'),(0,a.kt)("p",null,'"11112233334" -> 3v'),(0,a.kt)("p",null,"1st approach"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use dict to store the appeance while traverse"),(0,a.kt)("li",{parentName:"ul"},"update the value in the dict if i see again in the string"),(0,a.kt)("li",{parentName:"ul"},"return the key value with the max value"),(0,a.kt)("li",{parentName:"ul"},"if we have the same appearance (same value) -> return the max key")),(0,a.kt)("p",null,"time complexity: O(n)\nspace: O(n) -> Wrong -> should be O(1)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def find_max_appearance(num_str):\n  if num_str == "":\n    return -1\n\n  num_dict = {}\n  # {1: 1, 2: 1, 3: 1}\n  max_val = -1\n  max_key = -1\n  for n in num_str:\n      num = int(n)\n    if int(n) in num_dict:\n      num_dict[int(n)] += 1\n    else:\n      num_dict[int(n)] = 1\n      # if int(n) > max_key:\n      #   max_key = int(n)\n\n  for key in num_dict: # 3\n    val = num_dict[key]  # current value: 1\n    if val >= max_val: # 1 > 2\n      if key > max_key: # 1 > - 1\n        max_key = key # 1\n        max_val = val # 2\n\n  return max_key\n\ndef main():\n  print(find_max_appearance("123"))  # 3\n  print(find_max_appearance("11112233334"))  # 3\n\nif __name__ == "__main__":\n  main()\n\n')),(0,a.kt)("p",null,"Second question: given two list that sorted , return that sorted list with all element of two given lists and sorted"),(0,a.kt)("p",null,"Clarifying question: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"may have empty list"),(0,a.kt)("li",{parentName:"ul"},"ascending sorted"),(0,a.kt)("li",{parentName:"ul"},"duplicated numbers may appear"),(0,a.kt)("li",{parentName:"ul"},"negative number may appear")),(0,a.kt)("p",null,"1st approach"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"if not list1 : -> return list2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"if not list2: -> return list1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"res = ","[0]"," * (len(list1) + len(list2)) -> no need -> res = []")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"two pointer i, j")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"while i < len(list1) and j < len(list2):")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"compare list1","[i]"," and list2","[j]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"smaller -> append it to the res")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"if list1","[i]"," < list2","[j]",":")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"res.append(list1","[i]",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"i += 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"make sure there's no element left in both the array:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"while list1: -> append res")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"while list2: -> append res"))),(0,a.kt)("p",null,"time complexity: O(n + m)\nspace complexity: O(n + m)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def merge_lists(list1, list2):\n  if not list1:\n    return list2\n  if not list2:\n    return list1\n\n  res = []\n  i = j = 0\n  while (i < len(list1)) and (j < len(list2)):\n    if list1[i] < list2[j]:\n      res.append(list1[i])\n      i += 1\n    else:\n      res.append(list2[j])\n      j += 1\n\n  while i < len(list1):\n    res.append(list1[i])\n    i += 1\n\n  while j < len(list2):\n    res.append(list2[j])\n    j += 1\n\n  return res\n\n\nprint(merge_lists([1, 2, 3], [4, 5, 6]))\nprint(merge_lists([2, 4, 6, 7], [1, 1, 2, 3, 5, 8]))\nprint(merge_lists([1, 1, 2, 3, 5, 8], [2, 4, 6, 7]))\nprint(merge_lists([], [1, 2, 3]))\nprint(merge_lists([1, 2, 3], []))\nprint(merge_lists([], []))\nprint(merge_lists(None, None))\n")),(0,a.kt)("h4",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"Weakness:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don\u2019t use variables -> Should assign variables to keep track and not over-repeating in your code"),(0,a.kt)("li",{parentName:"ul"},"Condition for the first problem -> Trip off because not giving the variables to keep track"),(0,a.kt)("li",{parentName:"ul"},"Try not to be panic -> Go over the code to make sure about the time complexity and space complexity "),(0,a.kt)("li",{parentName:"ul"},"If the problem changes -> Going back to the examples -> Working line by line to the code to work on the improved solution -> See if we can reproduce or get rid of some parts ")),(0,a.kt)("p",null,"Suggestions:\nWhat do you suggest to become better at coding/techincal interview? "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Leetcode, books (Cracking the coding interview)"),(0,a.kt)("li",{parentName:"ul"},"OOP, design system -> Review")),(0,a.kt)("p",null,"If I don't have much working experiences, how can I do well in behavioral interview?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make some stuff up  -> They want to see how you work with group projects\nInterviewer may ask like:"),(0,a.kt)("li",{parentName:"ul"},"Work on the project, somebody on the project tells you have the answer of the exam "),(0,a.kt)("li",{parentName:"ul"},"Manager ask you to do something but it was clear "),(0,a.kt)("li",{parentName:"ul"},"Time that missed deadline "),(0,a.kt)("li",{parentName:"ul"},"Internship struggles\n-> Want to see how your mind works under the pressure\n-> May ask different kind of pressure you gotta work under, leadership,...")),(0,a.kt)("p",null,"Do you have any tips or your own strategy when you're in a coding interview?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Managing your time well"),(0,a.kt)("li",{parentName:"ul"},"When struggling, should step back and listen to what interviewer wants to guide -> Try to repeat what they\u2019re saying")))}c.isMDXComponent=!0}}]);